"""Build human-readable and interactive artifacts from the local analysis."""

from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path


def compact_text(value: str, limit: int = 220) -> str:
    normalized = " ".join(value.split())
    return normalized if len(normalized) <= limit else f"{normalized[: limit - 1]}…"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--directory", type=Path, default=Path(__file__).parent)
    args = parser.parse_args()
    directory = args.directory

    snapshot = json.loads((directory / "snapshot.json").read_text(encoding="utf-8"))
    analysis = json.loads((directory / "analysis.json").read_text(encoding="utf-8"))
    curation = json.loads((directory / "curation.json").read_text(encoding="utf-8"))
    taxonomy = json.loads(
        (directory / "semantic-taxonomy.json").read_text(encoding="utf-8")
    )
    semantic = json.loads(
        (directory / "semantic-assignments.json").read_text(encoding="utf-8")
    )
    thoughts = snapshot["thoughts"]
    thought_by_id = {str(item["id"]): item for item in thoughts}

    assignment_by_id = {
        item["thought_id"]: item for item in semantic["assignments"]
    }
    assigned_by_subtheme = defaultdict(list)
    assigned_by_theme = defaultdict(list)
    for item in semantic["assignments"]:
        if not item["theme_id"] or not item["subtheme_id"]:
            continue
        assigned_by_theme[item["theme_id"]].append(item)
        assigned_by_subtheme[item["subtheme_id"]].append(item)

    themes = []
    for theme_id, taxonomy_subthemes in taxonomy["themes"].items():
        curated = curation["themes"][theme_id]
        subthemes = []
        for taxonomy_subtheme in taxonomy_subthemes:
            assigned = sorted(
                assigned_by_subtheme[taxonomy_subtheme["id"]],
                key=lambda item: (-item["score"], item["thought_id"]),
            )
            confidence_counts = Counter(item["confidence"] for item in assigned)
            representatives = [
                {
                    **thought_by_id[item["thought_id"]],
                    "text_preview": compact_text(
                        thought_by_id[item["thought_id"]]["text"]
                    ),
                    "semantic_score": item["score"],
                    "semantic_confidence": item["confidence"],
                }
                for item in assigned[:6]
            ]
            subthemes.append(
                {
                    "id": taxonomy_subtheme["id"],
                    "title": taxonomy_subtheme["title"],
                    "description": taxonomy_subtheme["description"],
                    "size": len(assigned),
                    "confidence_counts": dict(confidence_counts),
                    "representatives": representatives,
                    "source_ids": [item["thought_id"] for item in assigned],
                }
            )

        theme_assigned = sorted(
            assigned_by_theme[theme_id],
            key=lambda item: (-item["score"], item["thought_id"]),
        )

        themes.append(
            {
                "id": theme_id,
                "title": curated["title"],
                "summary": curated["summary"],
                "size": len(theme_assigned),
                "representatives": [
                    {
                        **thought_by_id[item["thought_id"]],
                        "text_preview": compact_text(
                            thought_by_id[item["thought_id"]]["text"]
                        ),
                        "semantic_score": item["score"],
                        "semantic_confidence": item["confidence"],
                    }
                    for item in theme_assigned[:8]
                ],
                "source_ids": [item["thought_id"] for item in theme_assigned],
                "subthemes": subthemes,
            }
        )

    source_nodes = []
    for thought in thoughts:
        thought_id = str(thought["id"])
        assignment = assignment_by_id.get(thought_id, {})
        source_nodes.append(
            {
                **thought,
                "theme_id": assignment.get("theme_id"),
                "subtheme_id": assignment.get("subtheme_id"),
                "semantic_score": assignment.get("score"),
                "semantic_margin": assignment.get("margin"),
                "semantic_confidence": assignment.get(
                    "confidence", "needs_review"
                ),
                "secondary": assignment.get("secondary"),
                "semantic_alternatives": assignment.get("alternatives", []),
            }
        )

    semantic_coverage = {
        **analysis["coverage"],
        "subtheme_count": len(semantic["categories"]),
        "semantic_assigned_count": semantic["summary"]["assigned_count"],
        "semantic_needs_review_count": semantic["summary"]["needs_review_count"],
        "semantic_confidence_counts": semantic["summary"]["confidence_counts"],
    }
    semantic_method = {
        **analysis["method"],
        "taxonomy": taxonomy["method"],
        "assignment_model": semantic["model"],
        "assignment_thresholds": semantic["thresholds"],
        "mechanical_cluster_labels_used_in_ui": False,
    }
    source_graph = {
        "connections": snapshot["connections"],
        "magnets": snapshot["magnets"],
        "semantic_edges": semantic["semantic_edges"],
    }

    knowledge_map = {
        "schema_version": 1,
        "title": curation["title"],
        "scope": curation["scope"],
        "snapshot": analysis["snapshot"],
        "method": semantic_method,
        "coverage": semantic_coverage,
        "themes": themes,
        "relations": curation["relations"],
        "conclusions": curation["conclusions"],
        "review": analysis["review"],
        "needs_review_ids": semantic["needs_review_ids"],
        "source_graph": source_graph,
        "sources": source_nodes,
    }
    (directory / "knowledge-map.json").write_text(
        json.dumps(knowledge_map, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    markdown = [
        "# Карта розуміння",
        "",
        curation["scope"],
        "",
        "## Покриття",
        "",
        f"- Джерел: **{analysis['coverage']['thought_count']}**",
        f"- Верхньорівневих тем: **{analysis['coverage']['theme_count']}**",
        f"- Осмислених підтем: **{semantic_coverage['subtheme_count']}**",
        f"- Питань: **{analysis['coverage']['question_count']}**",
        f"- Питань без створених користувачем зв'язків: **{analysis['coverage']['questions_without_user_connections']}**",
        f"- Семантично класифіковано: **{semantic_coverage['semantic_assigned_count']}**",
        f"- Залишено на ручний перегляд: **{semantic_coverage['semantic_needs_review_count']}**",
        "",
        "## Головний синтез",
        "",
    ]
    for conclusion in curation["conclusions"]:
        markdown.extend(
            [
                f"### {conclusion['title']}",
                "",
                conclusion["statement"],
                "",
                f"Статус: `{conclusion['status']}` · confidence: `{conclusion['confidence']:.0%}`",
                "",
                "Джерела:",
                "",
            ]
        )
        for thought_id in conclusion["source_ids"]:
            thought = thought_by_id.get(thought_id)
            if thought:
                markdown.append(
                    f"- `{thought_id}` — {compact_text(thought['text'], 320)}"
                )
        markdown.append("")

    markdown.extend(["## Теми", ""])
    for theme in themes:
        markdown.extend(
            [
                f"### {theme['title']} ({theme['size']})",
                "",
                theme["summary"],
                "",
                f"Підтем: {len(theme['subthemes'])}.",
                "",
            ]
        )
        for subtheme in theme["subthemes"]:
            markdown.extend(
                [
                    f"#### {subtheme['title']} ({subtheme['size']})",
                    "",
                    subtheme["description"],
                    "",
                ]
            )
    markdown.extend(
        [
            "## Методологічне обмеження",
            "",
            "Підтеми задані як осмислена таксономія, а джерела призначені до неї за допомогою multilingual embeddings. Семантична близькість не доводить причинність, підтримку або суперечність. Невпевнені призначення не приховуються: вони винесені в «Потребує перегляду».",
            "",
        ]
    )
    (directory / "synthesis.md").write_text("\n".join(markdown), encoding="utf-8")

    template = (directory / "knowledge-map-template.html").read_text(encoding="utf-8")
    ui_data = {
        key: value
        for key, value in knowledge_map.items()
        if key != "source_graph"
    }
    inline_data = json.dumps(ui_data, ensure_ascii=False, separators=(",", ":"))
    inline_data = inline_data.replace("</", "<\\/")
    rendered = template.replace("__KNOWLEDGE_MAP_DATA__", inline_data)
    (directory / "knowledge-map.html").write_text(rendered, encoding="utf-8")

    print(
        json.dumps(
            {
                "map": str((directory / "knowledge-map.html").resolve()),
                "synthesis": str((directory / "synthesis.md").resolve()),
                "data": str((directory / "knowledge-map.json").resolve()),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
