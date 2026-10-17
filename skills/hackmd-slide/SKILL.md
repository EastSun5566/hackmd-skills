---
name: hackmd-slide
description: Create and edit HackMD slide decks, or turn notes into presentations, using HackMD-compatible reveal.js Markdown, speaker notes, fragments, backgrounds, and code highlighting. Use for HackMD slide mode; not for PowerPoint files or standalone reveal.js applications.
---

# HackMD Slide Authoring

Produce Markdown that can be pasted into a HackMD note and presented in Slide mode. HackMD supplies the presentation shell and plugins; do not generate an HTML document, install reveal.js, or call `Reveal.initialize()`.

## Authoring workflow

1. Use the requested topic, audience, language, duration, and source material. Ask only for missing information that materially changes the deck; otherwise state a reasonable assumption. Preserve facts and citations when converting an existing note.
2. Build a narrative around the audience's takeaway: context, a few main ideas, supporting evidence or a demonstration, and a conclusion. Use one main idea per slide. Move detailed explanations into speaker notes or optional vertical slides rather than shrinking text.
3. Prefer short headings, brief bullets, small tables, and focused code examples. Use Markdown first. Add images, backgrounds, and fragments only when they help explain the content. Keep contrast readable and avoid animation on every element.
4. Read [syntax and compatibility](references/syntax.md) for settings, backgrounds, code highlighting, media, or advanced behavior. Adapt the [six-slide example](assets/example-deck.md) when a complete starting point helps; its length and outline are examples, not requirements.
5. Deliver the deck as Markdown. If a file location is requested, write a `.md` file with no enclosing code fence. In chat, use an outer fence longer than any code fences inside the deck so the user can copy the source intact. Keep usage instructions outside the deck.

Creating or editing a local deck does not require an online note. Create or update a HackMD note only when requested, using an available HackMD tool or CLI; keep account operations separate from content authoring.

## Core syntax

- Use `---` for the next horizontal slide and `----` for a vertical slide beneath the preceding slide. Put each divider on its own line, with a blank line before and after it. Do not add an opening or trailing divider to the body.
- The splitter scans raw Markdown, including code fences and notes. A divider-shaped line with surrounding blank lines can split a slide even inside a code example. Show literal separators as inline code, such as `---`, instead.
- Put slide attributes near the start of the slide: `<!-- .slide: data-background-color="#e8f4ff" -->`.
- Put element attributes directly after the intended element: `- First point <!-- .element: class="fragment" -->`. Use double-quoted, nonempty attribute values. See the reference for placement and reveal order.
- Start speaker notes with an unindented, standalone `Note:` line. Write the notes on subsequent lines, at the end of that slide. `Notes:` is not recognized, and text on the `Note:` marker line is discarded.

```markdown
# A clear takeaway

One supporting statement.

Note:
Explain the context aloud rather than adding a paragraph to the slide.

---

## Two steps

- Understand the problem <!-- .element: class="fragment" data-fragment-index="0" -->
- Choose the next action <!-- .element: class="fragment" data-fragment-index="1" -->

----

## Optional detail

A concrete example supporting the two steps.
```

## Settings and opening the deck

When YAML metadata is enabled, put note metadata and a `slideOptions` mapping at the very beginning of the note:

```yaml
---
title: A clear takeaway
lang: en
slideOptions:
  theme: white
  transition: none
---
```

Use the user's language for `lang`. Do not use YAML `type: slide` to switch presentation modes; use the controls or URL below.

To present, use the Share menu's **Slide mode** and **Preview** controls. On an existing named note URL, `?type=slide` selects slide rendering, for example `https://hackmd.io/@owner/note?type=slide`; preserve other query parameters and put the query before any `#` fragment. This URL does not change the note's saved default mode or access permissions.

Settings saved in the UI take precedence over corresponding frontmatter settings, including the entire `slideOptions` mapping. Simple URL options can override presentation settings. If YAML settings appear ineffective, check **Customize slides** (the Slide mode settings in older interfaces). Set the theme in note settings, not with `?theme=...`. See the reference for examples and limitations.

## Before delivery

- Check the intended slide count and horizontal/vertical grouping; avoid accidental blank slides or divider lines inside examples.
- Check that notes are after visible content, use `Note:`, and are scoped to the intended slide. Speaker notes are part of the shared Markdown, not private storage.
- Check that fragments target the intended list item, paragraph, or span, and that code-highlight line numbers exist in the code sample.
- Use supplied or verified image URLs. Avoid invented assets, local filesystem paths in online decks, and unreadably dense content.
- Keep YAML valid and distinguish required settings from presentation preferences. Do not use `plugins`, `dependencies`, JavaScript callbacks, or upstream-only Markdown configuration to load or configure features that HackMD does not expose.
- If a HackMD preview is available, inspect navigation, fragments, notes, code, and media for overflow or rendering failures. Otherwise state which Markdown checks were performed; do not claim a browser preview was verified.
