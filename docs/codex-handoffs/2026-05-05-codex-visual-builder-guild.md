# Codex Visual Builder Guild Handoff

Reactivation prompt:

```text
We are continuing work on codex-visual-builder-guild from this handoff. Read this document first, inspect the current repo state, verify what still applies, and continue from the next steps without relying on the old chat context.
```

## Repo

- Local path: `C:\Users\USER\Documents\Codex\2026-05-05\can-you-give-me-10-skills\codex-visual-builder-guild`
- GitHub: `https://github.com/vibeforge1111/codex-visual-builder-guild`
- Branch: `main`
- Latest pushed commit at handoff time: `91f1131 Add usage audit coverage`
- Latest release at handoff time: `v1.1.1 - Usage Audit Coverage`

## Goal

Make `codex-visual-builder-guild` a free public drop that is easy for builders from X to understand, install, invoke, and trust. The package should work as:

- a native Codex Desktop wrapper skill
- standalone H70-C+ YAML skills
- a Spark Skill Graphs bundle/dashboard system

Optimize for: understand in 30 seconds, install in 2 minutes, get value in 5 minutes.

## Completed

- Created 16 H70-C+ Spark Skill Graph design skills in `design/`.
- Created bundle `bundles/codex-visual-builder-loop.yaml`.
- Published public GitHub repo `vibeforge1111/codex-visual-builder-guild`.
- Rebranded from `spark-codex-design-team` to `codex-visual-builder-guild`.
- Added fantasy guild README visual system:
  - `assets/hero-guild-banner.png`
  - `assets/what-you-get.png`
  - `assets/how-it-works.png`
  - `assets/delegation-map.png`
  - `assets/specialist-wing.png`
  - `assets/use-it-two-ways.png`
  - `assets/tested-before-ship.png`
- Added native Codex wrapper skill:
  - `codex/codex-visual-builder-guild/SKILL.md`
  - `codex/codex-visual-builder-guild/agents/openai.yaml`
- Added one-command Codex installer:
  - `npm run install:codex`
  - implementation: `tools/install-codex-skill.cjs`
- Installed the wrapper locally at `C:\Users\USER\.codex\skills\codex-visual-builder-guild`.
- Added prompt spellbook `PROMPTS.md`.
- Added usage audit `tools/usage-audit.cjs`.
- Folded usage audit into `npm test`.
- Created releases:
  - `v1.1.0 - Codex Install Bridge`
  - `v1.1.1 - Usage Audit Coverage`

## Validation Already Run

- `npm test`
  - 16 valid H70-C+ skills
  - 0 invalid
  - 0 warnings
  - smoke test passed
  - usage audit passed
- H70-C+ convention auditor:
  - 16 PASS
  - 0 errors
  - 0 warnings
- `keep-codex-fast` report mode:
  - read-only run completed
  - no old active session candidates
  - no worktree candidates
  - logs about 103 MB
  - repo working tree clean at report time

## Important Files

- `README.md`: public story, install path, visual explainers, specialist invocation table.
- `PROMPTS.md`: copy-paste prompts for full guild and individual specialist lenses.
- `codex/codex-visual-builder-guild/SKILL.md`: native Codex wrapper.
- `tools/install-codex-skill.cjs`: installs wrapper into `$CODEX_HOME/skills` or `~/.codex/skills`.
- `tools/smoke-test.cjs`: validates H70 bundle, delegates, wrapper install smoke.
- `tools/usage-audit.cjs`: validates user-facing install/invocation coverage.
- `design/*.yaml`: 16 H70-C+ design skill nodes.

## Constraints

- Preserve H70-C+ skill IDs and bundle compatibility unless there is a strong reason.
- Keep README nontechnical-friendly and story-driven.
- Keep `PROMPTS.md` copy-paste friendly.
- Do not delete generated source images from `C:\Users\USER\.codex\generated_images`; repo assets are copied and saved under `assets/`.
- Do not run mutating `keep-codex-fast --apply` while Codex is active.
- Preserve public/free-drop framing.

## Open Improvement Ideas

- Add a tiny dogfood demo app or `examples/visual-command-center/`.
- Add a short GIF/video or screenshot sequence showing the guild in action.
- Add CI workflow for `npm test`.
- Add a `QUICKSTART.md` only if README starts to feel too long.
- Add release assets or social-card image attachment for easier X sharing.
- Improve docs after dogfood answers from the separate implementation thread are available.

## Next Steps

1. In the other thread, read the dogfood/evaluation answers.
2. Extract the top friction points.
3. Implement the highest-impact fixes.
4. Run `npm test`.
5. Run H70-C+ convention auditor if available.
6. Bump version and create a release if changes are user-facing.
7. Keep this handoff updated if the project continues across more threads.
