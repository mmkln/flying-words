"""Assign sources to a human-defined taxonomy with multilingual embeddings.

The output keeps raw similarity, margin, confidence, alternatives, and review
status so uncertain classifications are visible instead of being forced.
"""

from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path

import numpy as np
from fastembed import TextEmbedding


MODEL_NAME = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
REVIEW_SCORE = 0.38
SECONDARY_SCORE = 0.40
SECONDARY_MARGIN = 0.045


def confidence_label(score: float, margin: float) -> str:
    if score >= 0.58 and margin >= 0.055:
        return "high"
    if score >= 0.42 and margin >= 0.022:
        return "medium"
    return "low"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--directory", type=Path, default=Path(__file__).parent)
    args = parser.parse_args()
    directory = args.directory

    snapshot = json.loads((directory / "snapshot.json").read_text(encoding="utf-8"))
    taxonomy = json.loads((directory / "semantic-taxonomy.json").read_text(encoding="utf-8"))
    thoughts = snapshot["thoughts"]

    categories = []
    for theme_id, subthemes in taxonomy["themes"].items():
        for subtheme in subthemes:
            categories.append({**subtheme, "theme_id": theme_id})

    model = TextEmbedding(model_name=MODEL_NAME)
    source_cache = directory / "source-embeddings.npy"
    cache_metadata_path = directory / "embedding-metadata.json"
    cache_metadata = (
        json.loads(cache_metadata_path.read_text(encoding="utf-8"))
        if cache_metadata_path.exists()
        else {}
    )
    cache_matches = (
        source_cache.exists()
        and cache_metadata.get("model") == MODEL_NAME
        and cache_metadata.get("snapshot_sha256") == snapshot["source"]["sha256"]
    )
    # Accept the first generated cache from the pre-metadata version once, then
    # immediately attach its snapshot identity below.
    if source_cache.exists() and not cache_metadata:
        cached = np.load(source_cache)
        cache_matches = cached.shape[0] == len(thoughts)
    if cache_matches:
        source_embeddings = np.load(source_cache).astype(np.float32)
    else:
        source_embeddings = np.asarray(
            list(model.embed([item["text"] for item in thoughts], batch_size=64)),
            dtype=np.float32,
        )
    category_embeddings = np.asarray(
        list(
            model.embed(
                [f"{item['title']}. {item['description']}" for item in categories],
                batch_size=64,
            )
        ),
        dtype=np.float32,
    )
    source_embeddings /= np.maximum(np.linalg.norm(source_embeddings, axis=1, keepdims=True), 1e-8)
    category_embeddings /= np.maximum(np.linalg.norm(category_embeddings, axis=1, keepdims=True), 1e-8)
    base_scores = source_embeddings @ category_embeddings.T

    category_index = {item["id"]: index for index, item in enumerate(categories)}
    thought_index = {str(item["id"]): index for index, item in enumerate(thoughts)}
    neighbors: dict[int, list[tuple[int, float]]] = defaultdict(list)
    for edge in snapshot.get("connections", []):
        source = thought_index.get(str(edge["source_id"]))
        target = thought_index.get(str(edge["target_id"]))
        if source is None or target is None:
            continue
        neighbors[source].append((target, 1.0))
        neighbors[target].append((source, 1.0))
    for edge in snapshot.get("magnets", []):
        source = thought_index.get(str(edge["source_id"]))
        target = thought_index.get(str(edge["target_id"]))
        if source is None or target is None:
            continue
        neighbors[source].append((target, 0.15))
        neighbors[target].append((source, 0.15))

    adjusted_scores = base_scores.copy()
    labels = base_scores.argmax(axis=1)
    # User-created connections can resolve a close choice, but cannot overpower
    # the source text. Magnets intentionally have only 15% of that influence.
    for _ in range(2):
        bonus = np.zeros_like(base_scores)
        for source_index, linked in neighbors.items():
            total_weight = sum(weight for _, weight in linked)
            if not total_weight:
                continue
            for target_index, weight in linked:
                bonus[source_index, labels[target_index]] += weight / total_weight
        adjusted_scores = base_scores + bonus * 0.045
        labels = adjusted_scores.argmax(axis=1)

    order = np.argsort(adjusted_scores, axis=1)[:, ::-1]
    assignments = []
    confidence_counts = Counter()
    review_ids = []
    for index, thought in enumerate(thoughts):
        first_index = int(order[index, 0])
        second_index = int(order[index, 1])
        first_score = float(adjusted_scores[index, first_index])
        second_score = float(adjusted_scores[index, second_index])
        margin = first_score - second_score
        confidence = confidence_label(first_score, margin)
        needs_review = first_score < REVIEW_SCORE
        confidence_counts["needs_review" if needs_review else confidence] += 1
        thought_id = str(thought["id"])
        if needs_review:
            review_ids.append(thought_id)

        secondary = None
        if (
            second_score >= SECONDARY_SCORE
            and margin <= SECONDARY_MARGIN
            and categories[second_index]["id"] != categories[first_index]["id"]
        ):
            secondary = {
                "theme_id": categories[second_index]["theme_id"],
                "subtheme_id": categories[second_index]["id"],
                "score": round(second_score, 5),
            }

        assignments.append(
            {
                "thought_id": thought_id,
                "theme_id": None if needs_review else categories[first_index]["theme_id"],
                "subtheme_id": None if needs_review else categories[first_index]["id"],
                "score": round(first_score, 5),
                "margin": round(margin, 5),
                "confidence": "needs_review" if needs_review else confidence,
                "secondary": secondary,
                "alternatives": [
                    {
                        "theme_id": categories[int(candidate)]["theme_id"],
                        "subtheme_id": categories[int(candidate)]["id"],
                        "score": round(float(adjusted_scores[index, int(candidate)]), 5),
                    }
                    for candidate in order[index, 1:4]
                ],
            }
        )

    # Build high-quality semantic-neighbor candidates from the same embeddings.
    pair_scores = source_embeddings @ source_embeddings.T
    np.fill_diagonal(pair_scores, -1.0)
    semantic_edges = {}
    k = 8
    for source_index in range(len(thoughts)):
        candidates = np.argpartition(pair_scores[source_index], -k)[-k:]
        candidates = candidates[np.argsort(pair_scores[source_index, candidates])[::-1]]
        for target_index in candidates:
            score = float(pair_scores[source_index, target_index])
            if score < 0.48:
                continue
            source_id = str(thoughts[source_index]["id"])
            target_id = str(thoughts[int(target_index)]["id"])
            key = tuple(sorted((source_id, target_id)))
            semantic_edges[key] = max(score, semantic_edges.get(key, -1.0))

    category_counts = Counter(
        item["subtheme_id"] for item in assignments if item["subtheme_id"]
    )
    theme_counts = Counter(item["theme_id"] for item in assignments if item["theme_id"])
    output = {
        "schema_version": 1,
        "model": MODEL_NAME,
        "taxonomy_method": taxonomy["method"],
        "thresholds": {
            "review_score": REVIEW_SCORE,
            "secondary_score": SECONDARY_SCORE,
            "secondary_margin": SECONDARY_MARGIN,
        },
        "summary": {
            "thought_count": len(thoughts),
            "assigned_count": len(thoughts) - len(review_ids),
            "needs_review_count": len(review_ids),
            "confidence_counts": dict(confidence_counts),
            "theme_counts": dict(theme_counts),
            "subtheme_counts": dict(category_counts),
            "semantic_edge_count": len(semantic_edges),
        },
        "categories": categories,
        "assignments": assignments,
        "semantic_edges": [
            {"source_id": key[0], "target_id": key[1], "similarity": round(score, 5)}
            for key, score in sorted(semantic_edges.items(), key=lambda item: item[1], reverse=True)
        ],
        "needs_review_ids": review_ids,
    }
    output_path = directory / "semantic-assignments.json"
    output_path.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    np.save(directory / "source-embeddings.npy", source_embeddings)
    (directory / "embedding-metadata.json").write_text(
        json.dumps(
            {
                "model": MODEL_NAME,
                "snapshot_sha256": snapshot["source"]["sha256"],
                "thought_count": len(thoughts),
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(json.dumps({"path": str(output_path.resolve()), **output["summary"]}, ensure_ascii=False))


if __name__ == "__main__":
    main()
