"""Export a read-only, provenance-safe Flying Thoughts knowledge snapshot.

The script reuses the configured local MCP profile but never writes to the API
and never persists its access token in the snapshot.
"""

from __future__ import annotations

import argparse
import hashlib
import importlib
import json
import os
import sys
import tomllib
from datetime import datetime, timezone
from pathlib import Path


DEFAULT_CONFIG = Path.home() / ".codex" / "config.toml"
DEFAULT_PROFILE = "flying_thoughts_remote"


def load_profile(config_path: Path, profile_name: str) -> dict:
    config = tomllib.loads(config_path.read_text(encoding="utf-8"))
    try:
        profile = config["mcp_servers"][profile_name]
    except KeyError as error:
        raise SystemExit(f"MCP profile {profile_name!r} was not found.") from error

    for key, value in profile.get("env", {}).items():
        os.environ[str(key)] = str(value)
    return profile


def import_mcp_module(profile: dict):
    args = profile.get("args") or []
    if not args:
        raise SystemExit("The MCP profile does not contain a server script path.")

    server_script = Path(args[0]).resolve()
    project_root = server_script.parents[1]
    sys.path.insert(0, str(project_root))
    return importlib.import_module("tools.flying_words_mcp")


def canonical_hash(payload: dict) -> str:
    encoded = json.dumps(
        payload,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")
    return hashlib.sha256(encoded).hexdigest()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    parser.add_argument("--profile", default=DEFAULT_PROFILE)
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(__file__).with_name("snapshot.json"),
    )
    args = parser.parse_args()

    profile = load_profile(args.config, args.profile)
    mcp = import_mcp_module(profile)

    raw_thoughts = mcp._all_thoughts()
    thoughts = [mcp._present(thought) for thought in raw_thoughts]
    connections = mcp.connection_edges(raw_thoughts)
    magnets = mcp.magnet_edges(raw_thoughts)

    source = {
        "thoughts": thoughts,
        "connections": connections,
        "magnets": magnets,
    }
    payload = {
        "schema_version": 1,
        "exported_at": datetime.now(timezone.utc).isoformat(),
        "source": {
            "profile": args.profile,
            "thought_count": len(thoughts),
            "connection_count": len(connections),
            "magnet_count": len(magnets),
            "sha256": canonical_hash(source),
        },
        **source,
    }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(
        json.dumps(
            {
                "path": str(args.output.resolve()),
                **payload["source"],
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
