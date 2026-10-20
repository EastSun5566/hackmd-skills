---
name: hackmd
description: Create and edit HackMD documents and Book mode navigation with Markdown, diagrams (Mermaid, Graphviz, PlantUML), and embeds (YouTube, Gist, PDF, Figma). Use for collaborative documentation and organizing linked notes into books.
---

# HackMD Flavored Markdown Skill

Create HackMD documents with Markdown, diagrams, and embeds, or organize linked notes into a Book mode reading guide. Use the user's requested language for generated content.

## Metadata (YAML Front Matter)

When YAML metadata is enabled, put the frontmatter at the very top of the note:

```markdown
---
title: My Note
description: Shown in link previews
image: https://example.com/cover.png
tags: feature, documentation, v2.0
robots: noindex
lang: en
dir: ltr
breaks: true
---
```

Common YAML fields: `title`, `description`, `image`, `tags`, `robots`, `lang`, `dir`, `breaks` (render single line breaks), and `slideOptions`. YAML `type: slide` or `type: book` does not switch the note's mode; use the UI or a mode-specific URL as described below.

- **Initial title**: when a creation tool does not supply one, HackMD can derive it from YAML `title`, otherwise the first H1 (`# Heading`), otherwise "Untitled".
- **Initial tags**: when a creation tool does not supply them, HackMD can derive them from YAML `tags` or the legacy inline format below.
- Permissions and the remaining settings live in the editor's Share / Settings menus.

Saved note settings take precedence over matching YAML fields. To update an existing note's title or tags, use the title/tag controls, Note settings, or fields explicitly supported by the chosen tool. Editing YAML, H1, or H6 text alone is not a reliable way to update saved metadata. If a YAML setting seems ineffective, check the saved settings first. See the [metadata changes](https://hackmd.io/blog/2023/06/12/how-to-handle-metadata-change-en) and [current note settings](https://hackmd.io/@docs/how-to-edit-metadata-of-a-note-en) guides.

## Tags (Legacy Inline Format)

Recognize this format in older notes or when deriving initial tags:

```markdown
###### tags: `feature` `documentation` `v2.0`
```

## Table of Contents

Auto-generate ToC with:

```markdown
[TOC]
```

This will be replaced with a hierarchical list of headers.

## Alert Boxes

Create colored alert boxes with:

```markdown
:::success
Success message with :tada: emoji!
:::

:::info
Information message with :mega: emoji!
:::

:::warning
Warning message with :zap: emoji!
:::

:::danger
Danger message with :fire: emoji!
:::

:::spoiler Click to reveal
Hidden content here :stuck_out_tongue_winking_eye:
:::

:::spoiler {state="open"} Expanded by default
This spoiler is open initially
:::
```

### Inline Spoilers

Use `||hidden text||` to conceal a short answer or spoiler within a sentence:

```markdown
The answer is ||42||.
```

The hidden text remains in the Markdown source and can be revealed by readers. Do not use spoilers to store secrets.

### GitHub Alerts

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

## Enhanced Blockquotes

Add author, time, and color to blockquotes:

```markdown
> This is a quote with metadata
> [name=John Doe] [time=2024-01-15 10:30] [color=#3b5998]

> Nested quotes also work
> [name=Jane Smith] [time=2024-01-15 10:35] [color=red]
> > Even deeper nesting!
> > [name=Bob] [time=2024-01-15 10:36] [color=#00ff00]
```

## Code Blocks with Line Numbers

```javascript=
// Line numbers start from 1
var s = "JavaScript";
alert(s);
```

```python=101
# Line numbers start from 101
def greet(name):
    print(f"Hello, {name}!")
```

```javascript=+
// Continue line numbers from previous block
var continuation = true;
```

### Code Wrapping

For long lines without breaks, add exclamation mark after the language (e.g., `javascript!`):

```javascript!
This is a very long line that will wrap instead of creating horizontal scroll, making it easier to read on mobile devices or narrow screens.
```

## CSV Tables

Render CSV data as tables:

```csvpreview {header="true"}
Name,Email,Role
Alice,alice@example.com,Developer
Bob,bob@example.com,Designer
Charlie,charlie@example.com,Manager
```

Options:
- `header="true"` - First row as header
- `delimiter=","` - Custom delimiter
- See [Papa Parse docs](https://www.papaparse.com/docs#config) for more

## Typography Enhancements

| Syntax | Output | Description |
|--------|--------|-------------|
| `==marked==` | ==marked== | Highlighted text |
| `++inserted++` | ++inserted++ | Inserted text |
| `19^th^` | 19^th^ | Superscript |
| `H~2~O` | H~2~O | Subscript |
| `~~deleted~~` | ~~deleted~~ | Strikethrough |

## Ruby Annotations

For CJK text pronunciation, `{base|annotation}`:

```markdown
{漢字|かんじ}
{汉字|hànzì}
```

## Emojis

Use emoji shortcodes:

```markdown
:smile: :heart: :thumbsup: :tada: :rocket:
```

## MathJax

Render mathematical expressions with LaTeX syntax.

**Inline math**:

```markdown
Inline math: $E = mc^2$
```

**Block math**:

```markdown
$$
\frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}
$$
```

## Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

Multiple footnotes:

```markdown
First reference[^first], second reference[^second].

[^first]: First footnote content.
[^second]: Second footnote content.
```

Inline footnote: `Some text^[Text of the inline footnote].`

## Abbreviations

```markdown
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```

## Definition Lists

```markdown
Term 1
: Definition 1a
: Definition 1b

Term 2
: Definition 2
```

Compact style:

```markdown
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

## Task Lists

```markdown
- [ ] Incomplete task
- [x] Completed task
  - [ ] Nested subtask
  - [x] Completed subtask
```

## Diagrams

Sequence, flow chart, Mermaid, Graphviz, PlantUML, ABC music notation, Vega-Lite and fretboard are fenced code blocks tagged with the diagram language (e.g. ` ```mermaid `). See [references/diagrams.md](references/diagrams.md) for the syntax and examples of each.

## External Embeds

`{%youtube ID %}`, `{%vimeo ID %}`, `{%gist user/id %}`, `{%slideshare ... %}`, `{%speakerdeck ... %}`, `{%pdf URL %}`, `{%figma URL %}`, `{%hackmd NOTE_ID %}`, `{%preview URL %}`. See [references/embeds.md](references/embeds.md) for URL compatibility, placement rules, and examples.

## Slide Mode

For presentations or converting notes into a deck, use the `hackmd-slide` skill for authoring, syntax, settings, and a complete example. Its source is [../hackmd-slide/SKILL.md](../hackmd-slide/SKILL.md); install it separately if only `hackmd` was installed.

To present, choose **Slide mode** and **Preview** in the Share menu, or add `?type=slide` to an existing named note URL such as `https://hackmd.io/@owner/note`. The URL selects a view without changing saved mode settings or access permissions.

## Book Mode

Use Book mode to arrange multiple notes into a reading guide. Keep the book note focused on navigation, with the full text in the linked notes. Replace the illustrative paths below with supplied or verified note URLs:

```markdown
# Getting started

## Read first

- [Welcome](/@your-team/replace-with-welcome-note)
- [Setup](/@your-team/replace-with-setup-note)
```

For book structure, nested groups, link handling, opening the book, and a complete onboarding example, read [references/book.md](references/book.md).

## Image Upload

Images can be embedded with size control:

```markdown
![Alt text](https://example.com/image.png)
![Alt text](https://example.com/image.png =200x200)
![Alt text](https://example.com/image.png =400x)
```

## Permissions & Sharing

While editing, permissions can be set via UI:
- **Read**: Owners, Signed-in users, Everyone
- **Write**: Owners, Signed-in users, Everyone
- **Comment**: Forbidden, Owners, Signed-in users, Everyone

## Managing Notes from the Command Line

To create, update or export notes programmatically, use the `hackmd-cli` skill; write the content with the syntax above and publish it with `hackmd-cli notes create` / `update`.

## References

- [HackMD Features](https://hackmd.io/s/features)
- [HackMD Tutorial](https://hackmd.io/c/tutorials)
