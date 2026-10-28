# Local knowledge map

This directory is a read-only analytical layer over Flying Thoughts. None of
the scripts create, update, connect, or delete thoughts on the server.

## Outputs

- `snapshot.json` — sanitized immutable source snapshot.
- `analysis.json` — mechanical semantic candidates, clusters, and review queues.
- `semantic-taxonomy.json` — reviewed, human-readable themes and subthemes with
  explicit descriptions; labels are never generated from keywords.
- `semantic-assignments.json` — embedding-assisted source assignments with
  confidence, alternatives, and a separate review queue.
- `knowledge-map.json` — portable map with sources, assignments, typed theme
  relations, conclusions, provenance, and the full candidate source graph.
- `synthesis.md` — readable synthesis with source UUIDs.
- `knowledge-map.html` — standalone interactive map; no backend is required.
- `cluster-report.md` — mechanical cluster audit used during curation.

## Refresh

Run from the frontend repository root:

```powershell
& 'C:\Users\GOD\Desktop\flying-words-backend\.venv\Scripts\python.exe' `
  'artifacts\knowledge-map\export_snapshot.py'

& 'C:\Users\GOD\.local\bin\uv.exe' run `
  --with scikit-learn --with networkx `
  python 'artifacts\knowledge-map\analyze_snapshot.py'

& 'C:\Users\GOD\.local\bin\uv.exe' run `
  --with fastembed `
  python 'artifacts\knowledge-map\assign_semantic_taxonomy.py'

python 'artifacts\knowledge-map\build_artifacts.py'
```

`curation.json` and `semantic-taxonomy.json` are intentionally separate from
the mechanical analysis. Theme names, semantic subthemes, typed relations, and
conclusions can be reviewed or revised without mutating the source corpus.

## Interpretation rules

- Existing user connections are strong structural evidence.
- Semantic similarity is a candidate relationship, not a fact.
- Low-confidence classification is left in `Needs review`; it is not forced
  into a plausible-looking subtheme.
- Magnets are weak grouping hints and are never treated as meaning.
- Every conclusion must cite original thought UUIDs.
- Conclusions describe the corpus unless independently verified against
  external sources.
