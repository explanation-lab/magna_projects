# Magna projects

Research materials for studying judgments about compensatory and punitive damages across intentional harm, negligence, strict liability, and control cases.

## Pilot 1

The current review study is in [code/experiments/pilot 1/](code/experiments/pilot%201/). Open its `index.html` directly in a browser. The same folder contains `Magna_Pilot_Review.zip`, which packages that single HTML file for review.

The bank contains 48 versions: four contexts × four case categories × three outcomes (death, brain injury, and neck/back injury). A session presents three cases with distinct contexts and categories, one case for each outcome. The 576 possible assignments give all 48 versions equal representation across the full set.

The flow is consent, instructions, two yes/no comprehension checks, three cases with compensatory and punitive ratings, optional age/sex/ethnicity demographics, and feedback. Both comprehension checks require Yes; an incorrect answer returns to the instructions and restarts both checks. Each case appears before its questions, with no question-preview screen or case counter. Ratings use a seven-point scale.

This is an offline review build. It does not submit responses; the reviewer panel can export review JSON and CSV. Server allocation, recruitment, and participant-data collection are not implemented.

## Repository structure

- `code/R/`: analysis and figure scripts.
- `code/experiments/`: study implementations and materials.
- `data/`: appropriately de-identified analysis data.
- `docs/`: browser-renderable experiments or generated web output.
- `figures/`: research figures and diagrams.

No participant data are included. See [PROJECT_STATUS.md](PROJECT_STATUS.md) for current work and handoff details.
