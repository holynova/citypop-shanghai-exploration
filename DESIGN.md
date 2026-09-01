# Shanghai Afterglow — Design Notes

## Experience mode

Experience / gallery. The page is an image-led proof wall for comparing City Pop prompt experiments across Shanghai and Beijing.

## Thesis

Make the artwork the protagonist and let each prompt read like a studio hypothesis.

## Visual world

- Deep cobalt night as the paper behind the archive.
- Violet and coral as the atmospheric City Pop signal.
- Warm paper-white for editorial type.
- Pale citrus yellow for actions, active filters, and annotation marks.
- Thin rules, registration-like corners, and small all-caps labels suggest a printed contact sheet without turning the page into a literal retro replica.

## Structure

1. Hero: project name, one selected output, and a short field note establish the experiment in the first viewport.
2. Contact sheet: six rounds create a narrative from controlled baseline → rough mark-making → reference-informed absorption → Shanghai local fragments → Beijing city variation → reusable reference grammar.
3. Work plates: a consistent three-column rhythm and shared 4:5 image frame make visual comparison immediate.
4. Method: three principles explain the usable grammar behind the experiments.
5. Prompt anatomy: five reusable prompt fields turn the archive into a working tool.
6. Prompt template: a copyable recipe keeps the reference-derived visual grammar available for the next experiment.

## Interaction rules

- Image buttons open a focused lightbox.
- “提示词” opens the full prompt alongside its image.
- “复制” copies the complete prompt and confirms with a local toast.
- “复制模板” copies the reusable reference-grammar prompt and confirms with a local toast.
- Round filters and keyword search update the contact sheet in place.
- `/` focuses search on desktop; Escape closes overlays.

## Responsive behavior

The desktop layout uses a three-part hero and 12-column work wall. At tablet widths the note column collapses and the work wall becomes six columns. At phone widths the page becomes a single reading column, the filter row scrolls horizontally, and the prompt drawer stacks image above text.

## Accessibility

Semantic landmarks, skip link, meaningful alt text, visible focus styles, keyboard-closeable overlays, `aria-live` feedback, and reduced-motion overrides are included.

## Content boundary

The archive describes observable visual attributes—tropical symbols, flat color, rough marks, dot-like lights, paper grain, and idealized composition—without asking the page or prompts to reproduce any specific artist’s work.
