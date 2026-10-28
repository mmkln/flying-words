"""Build a reproducible local semantic map from a Flying Thoughts snapshot.

This is a derived analytical layer. It never calls the Flying Thoughts API and
never modifies source thoughts.
"""

from __future__ import annotations

import argparse
import json
import math
import re
from collections import Counter, defaultdict
from pathlib import Path

import networkx as nx
import numpy as np
from scipy.sparse import hstack
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import normalize


WORD_RE = re.compile(r"[^\W_]+", re.UNICODE)
QUESTION_MARKERS = (
    "?", "що ", "як ", "чому ", "навіщо ", "для чого ", "який ",
    "яка ", "які ", "чи ", "де ", "коли ", "скільки ", "куди ",
    "what ", "how ", "why ", "which ", "where ", "when ", "can ",
    "почему ", "зачем ", "какой ", "какие ", "где ", "когда ",
)
NEGATION_MARKERS = {
    "не", "немає", "нема", "без", "ніколи", "ні", "not", "no", "never",
    "cannot", "can't", "нет", "никогда", "без",
}
STOPWORDS = {
    # Ukrainian
    "і", "й", "та", "або", "але", "а", "у", "в", "на", "до", "з", "із",
    "зі", "за", "для", "про", "що", "це", "як", "який", "яка", "які", "чи",
    "не", "по", "від", "при", "то", "так", "ще", "вже", "бути", "є", "має",
    "може", "мені", "мої", "моя", "моє", "я", "ми", "ти", "вони", "його",
    "її", "їх", "себе", "цей", "ця", "ці", "того", "щоб", "коли", "де",
    "чому", "треба", "потрібно", "можна", "дуже", "всі", "усі", "лише",
    # Russian
    "и", "или", "но", "а", "в", "во", "на", "до", "из", "за", "для", "про",
    "что", "это", "как", "какой", "какая", "какие", "ли", "не", "по", "от",
    "при", "то", "так", "еще", "уже", "быть", "есть", "может", "мне", "мой",
    "моя", "мы", "они", "его", "ее", "их", "чтобы", "когда", "где", "почему",
    "надо", "нужно", "можно", "очень", "все", "только",
    # English
    "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "from",
    "for", "of", "with", "without", "about", "this", "that", "these", "those",
    "what", "how", "why", "which", "where", "when", "is", "are", "be", "been",
    "can", "could", "should", "would", "will", "may", "might", "must", "have",
    "has", "had", "i", "me", "my", "we", "our", "you", "your", "they", "their",
    "it", "its", "not", "no", "more", "very", "all", "only", "into",
}


def tokenize(text: str) -> list[str]:
    return [
        token
        for token in WORD_RE.findall(text.casefold())
        if len(token) > 1 and token not in STOPWORDS and not token.isdigit()
    ]


def is_question(thought: dict) -> bool:
    text = thought["text"].strip().casefold()
    return thought.get("kind") == "question" or any(
        text.startswith(marker) or marker == "?" and marker in text
        for marker in QUESTION_MARKERS
    )


def has_negation(text: str) -> bool:
    return bool(set(tokenize(text)) & NEGATION_MARKERS) or "не " in text.casefold()


def community_partition(graph: nx.Graph, resolution: float, seed: int) -> list[set[str]]:
    if graph.number_of_edges() == 0:
        return [{node} for node in graph.nodes]
    return list(
        nx.community.louvain_communities(
            graph,
            weight="weight",
            resolution=resolution,
            seed=seed,
        )
    )


def top_terms_for(indices: list[int], word_matrix, feature_names, limit=10) -> list[str]:
    mean_weights = np.asarray(word_matrix[indices].mean(axis=0)).ravel()
    candidates = mean_weights.argsort()[::-1]
    terms = []
    for index in candidates:
        if mean_weights[index] <= 0:
            break
        term = str(feature_names[index])
        if any(term in existing or existing in term for existing in terms):
            continue
        terms.append(term)
        if len(terms) == limit:
            break
    return terms


def representative_indices(indices: list[int], vectors: np.ndarray, limit=8) -> list[int]:
    centroid = vectors[indices].mean(axis=0)
    norm = np.linalg.norm(centroid)
    if norm:
        centroid = centroid / norm
    scores = vectors[indices] @ centroid
    return [indices[position] for position in np.argsort(scores)[::-1][:limit]]


def edge_key(source: str, target: str) -> tuple[str, str]:
    return (source, target) if source < target else (target, source)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--snapshot",
        type=Path,
        default=Path(__file__).with_name("snapshot.json"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(__file__).with_name("analysis.json"),
    )
    parser.add_argument(
        "--report",
        type=Path,
        default=Path(__file__).with_name("cluster-report.md"),
    )
    args = parser.parse_args()

    snapshot = json.loads(args.snapshot.read_text(encoding="utf-8"))
    thoughts = snapshot["thoughts"]
    thought_by_id = {str(item["id"]): item for item in thoughts}
    ids = list(thought_by_id)
    texts = [thought_by_id[thought_id]["text"] for thought_id in ids]
    id_to_index = {thought_id: index for index, thought_id in enumerate(ids)}

    word_vectorizer = TfidfVectorizer(
        tokenizer=tokenize,
        token_pattern=None,
        lowercase=False,
        ngram_range=(1, 2),
        min_df=2,
        max_df=0.55,
        sublinear_tf=True,
        max_features=32_000,
    )
    char_vectorizer = TfidfVectorizer(
        analyzer="char_wb",
        ngram_range=(3, 5),
        min_df=2,
        max_df=0.72,
        sublinear_tf=True,
        max_features=36_000,
    )
    word_matrix = word_vectorizer.fit_transform(texts)
    char_matrix = char_vectorizer.fit_transform(texts)
    combined = normalize(hstack((word_matrix * 0.82, char_matrix * 0.36), format="csr"))

    components = min(144, combined.shape[0] - 1, combined.shape[1] - 1)
    semantic = TruncatedSVD(n_components=components, random_state=42).fit_transform(combined)
    semantic = normalize(semantic)

    neighbors = NearestNeighbors(
        n_neighbors=min(13, len(thoughts)),
        metric="cosine",
        algorithm="brute",
    ).fit(semantic)
    distances, neighbor_indices = neighbors.kneighbors(semantic)

    graph = nx.Graph()
    graph.add_nodes_from(ids)
    edge_signals: dict[tuple[str, str], dict] = {}

    def add_signal(source: str, target: str, signal: str, weight: float, **details) -> None:
        if source == target or source not in thought_by_id or target not in thought_by_id:
            return
        key = edge_key(source, target)
        record = edge_signals.setdefault(
            key,
            {"source_id": key[0], "target_id": key[1], "signals": {}, "weight": 0.0},
        )
        current = record["signals"].get(signal)
        if current is None or weight > current["weight"]:
            record["weight"] += weight - (current["weight"] if current else 0.0)
            record["signals"][signal] = {"weight": round(weight, 5), **details}

    for index, thought_id in enumerate(ids):
        kept = 0
        for distance, neighbor_index in zip(distances[index][1:], neighbor_indices[index][1:]):
            similarity = float(1.0 - distance)
            if similarity < 0.26 and kept >= 2:
                continue
            if similarity < 0.16:
                continue
            add_signal(
                thought_id,
                ids[int(neighbor_index)],
                "semantic_similarity",
                max(0.0, similarity - 0.10),
                similarity=round(similarity, 5),
            )
            kept += 1
            if kept >= 8:
                break

    directed_connections = []
    for edge in snapshot.get("connections", []):
        source = str(edge["source_id"])
        target = str(edge["target_id"])
        if source not in thought_by_id or target not in thought_by_id:
            continue
        directed_connections.append({"source_id": source, "target_id": target})
        add_signal(source, target, "user_connection", 1.25)

    magnet_edges = []
    for edge in snapshot.get("magnets", []):
        source = str(edge["source_id"])
        target = str(edge["target_id"])
        if source not in thought_by_id or target not in thought_by_id:
            continue
        magnet_edges.append({"source_id": source, "target_id": target})
        add_signal(source, target, "magnet_group", 0.10)

    for record in edge_signals.values():
        graph.add_edge(
            record["source_id"],
            record["target_id"],
            weight=record["weight"],
        )

    top_communities = community_partition(graph, resolution=0.58, seed=42)
    top_communities.sort(key=len, reverse=True)
    node_theme = {}
    themes = []
    feature_names = word_vectorizer.get_feature_names_out()

    for theme_index, members in enumerate(top_communities, start=1):
        member_ids = sorted(members)
        indices = [id_to_index[thought_id] for thought_id in member_ids]
        representatives = representative_indices(indices, semantic, limit=10)
        induced = graph.subgraph(member_ids).copy()
        if len(member_ids) >= 14 and induced.number_of_edges():
            subcommunities = community_partition(induced, resolution=1.22, seed=theme_index)
        else:
            subcommunities = [set(member_ids)]
        subcommunities.sort(key=len, reverse=True)

        subthemes = []
        for sub_index, submembers in enumerate(subcommunities, start=1):
            sub_ids = sorted(submembers)
            sub_indices = [id_to_index[thought_id] for thought_id in sub_ids]
            sub_representatives = representative_indices(sub_indices, semantic, limit=6)
            subthemes.append(
                {
                    "id": f"theme-{theme_index:02d}.sub-{sub_index:02d}",
                    "size": len(sub_ids),
                    "terms": top_terms_for(sub_indices, word_matrix, feature_names, limit=8),
                    "representative_source_ids": [ids[i] for i in sub_representatives],
                    "source_ids": sub_ids,
                }
            )

        theme_id = f"theme-{theme_index:02d}"
        for thought_id in member_ids:
            node_theme[thought_id] = theme_id
        themes.append(
            {
                "id": theme_id,
                "size": len(member_ids),
                "terms": top_terms_for(indices, word_matrix, feature_names, limit=12),
                "representative_source_ids": [ids[i] for i in representatives],
                "source_ids": member_ids,
                "subthemes": subthemes,
            }
        )

    # Aggregate cross-theme evidence. These are structural bridges, not claims.
    theme_links = defaultdict(lambda: {"weight": 0.0, "edge_count": 0, "signals": Counter()})
    for record in edge_signals.values():
        source_theme = node_theme[record["source_id"]]
        target_theme = node_theme[record["target_id"]]
        if source_theme == target_theme:
            continue
        key = edge_key(source_theme, target_theme)
        item = theme_links[key]
        item["weight"] += record["weight"]
        item["edge_count"] += 1
        item["signals"].update(record["signals"].keys())

    question_ids = [str(item["id"]) for item in thoughts if is_question(item)]
    linked_ids = {
        value
        for edge in directed_connections
        for value in (edge["source_id"], edge["target_id"])
    }
    isolated_question_ids = [thought_id for thought_id in question_ids if thought_id not in linked_ids]

    # Near-duplicates use the same semantic neighborhood but a deliberately high threshold.
    duplicate_pairs = []
    seen_duplicates = set()
    for index, thought_id in enumerate(ids):
        for distance, neighbor_index in zip(distances[index][1:5], neighbor_indices[index][1:5]):
            similarity = float(1.0 - distance)
            if similarity < 0.91:
                continue
            other_id = ids[int(neighbor_index)]
            key = edge_key(thought_id, other_id)
            if key in seen_duplicates:
                continue
            seen_duplicates.add(key)
            duplicate_pairs.append(
                {"source_id": key[0], "target_id": key[1], "similarity": round(similarity, 5)}
            )

    # Negation mismatch is only a review candidate; it is never asserted as contradiction.
    contradiction_candidates = []
    for record in edge_signals.values():
        semantic_signal = record["signals"].get("semantic_similarity")
        if not semantic_signal or semantic_signal.get("similarity", 0) < 0.56:
            continue
        left = thought_by_id[record["source_id"]]["text"]
        right = thought_by_id[record["target_id"]]["text"]
        if has_negation(left) == has_negation(right):
            continue
        contradiction_candidates.append(
            {
                "source_id": record["source_id"],
                "target_id": record["target_id"],
                "similarity": semantic_signal["similarity"],
                "status": "needs_review",
            }
        )

    kinds = Counter(item.get("kind", "thought") for item in thoughts)
    origins = Counter(
        (item.get("provenance") or {}).get("origin", "unknown")
        for item in thoughts
    )
    connected_nodes = {node for edge in directed_connections for node in edge.values()}
    output = {
        "schema_version": 1,
        "snapshot": snapshot["source"],
        "method": {
            "semantic_model": "local multilingual lexical TF-IDF + character n-grams + 144D LSA",
            "clustering": "weighted Louvain over semantic, user-connection, and weak magnet signals",
            "semantic_similarity_is_not_a_fact": True,
            "magnet_is_grouping_not_meaning": True,
        },
        "coverage": {
            "thought_count": len(thoughts),
            "mapped_count": sum(theme["size"] for theme in themes),
            "theme_count": len(themes),
            "subtheme_count": sum(len(theme["subthemes"]) for theme in themes),
            "question_count": len(question_ids),
            "questions_without_user_connections": len(isolated_question_ids),
            "thoughts_with_user_connections": len(connected_nodes),
            "kind_counts": dict(kinds),
            "origin_counts": dict(origins),
        },
        "themes": themes,
        "theme_links": [
            {
                "source": key[0],
                "target": key[1],
                "weight": round(value["weight"], 5),
                "edge_count": value["edge_count"],
                "signals": dict(value["signals"]),
            }
            for key, value in sorted(
                theme_links.items(),
                key=lambda item: item[1]["weight"],
                reverse=True,
            )
        ],
        "source_graph": {
            "connections": directed_connections,
            "magnets": magnet_edges,
            "semantic_edges": [
                {
                    **record,
                    "weight": round(record["weight"], 5),
                }
                for record in edge_signals.values()
                if "semantic_similarity" in record["signals"]
            ],
        },
        "review": {
            "questions_without_user_connections": isolated_question_ids,
            "near_duplicate_pairs": sorted(
                duplicate_pairs,
                key=lambda item: item["similarity"],
                reverse=True,
            ),
            "contradiction_candidates": sorted(
                contradiction_candidates,
                key=lambda item: item["similarity"],
                reverse=True,
            ),
        },
    }

    args.output.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")

    report = [
        "# Mechanical cluster report",
        "",
        f"Snapshot: {len(thoughts)} thoughts, {len(directed_connections)} connections, {len(magnet_edges)} magnets.",
        f"Generated {len(themes)} top-level communities and {output['coverage']['subtheme_count']} subcommunities.",
        "",
        "> Labels below are deliberately mechanical. They are inputs for human/LLM synthesis, not final conclusions.",
        "",
    ]
    for theme in themes:
        report.extend(
            [
                f"## {theme['id']} · {theme['size']} thoughts",
                "",
                f"Terms: {', '.join(theme['terms'])}",
                "",
                "Representative sources:",
                "",
            ]
        )
        for thought_id in theme["representative_source_ids"]:
            thought = thought_by_id[thought_id]
            report.append(f"- `{thought_id}` [{thought.get('kind', 'thought')}] {thought['text']}")
        report.append("")
        report.append("Subcommunities:")
        report.append("")
        for subtheme in theme["subthemes"]:
            representative_texts = [
                thought_by_id[thought_id]["text"].replace("\n", " ")[:160]
                for thought_id in subtheme["representative_source_ids"][:3]
            ]
            report.append(
                f"- **{subtheme['id']}** · {subtheme['size']} · "
                f"{', '.join(subtheme['terms'][:6])} — "
                + " / ".join(representative_texts)
            )
        report.append("")

    args.report.write_text("\n".join(report), encoding="utf-8")
    print(
        json.dumps(
            {
                "analysis": str(args.output.resolve()),
                "report": str(args.report.resolve()),
                **output["coverage"],
                "semantic_edge_count": len(output["source_graph"]["semantic_edges"]),
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
