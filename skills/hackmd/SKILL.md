---
name: hackmd
description: Create and edit HackMD documents with full markdown support, diagrams (Mermaid, Graphviz, PlantUML), and embeds (YouTube, Gist, PDF, Figma). Use when working with HackMD collaborative documentation.
---

# HackMD Flavored Markdown Skill

This skill enables AI agents to create and edit HackMD documents with full support for HackMD Flavored Markdown, diagrams, and external embeds.

## Metadata (YAML Front Matter)

Note settings can be declared in a YAML block at the very top of the note:

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
type: slide
---
```

Supported keys: `title`, `description`, `image`, `tags`, `robots`, `lang`, `dir`, `breaks` (render single line breaks), `GA`, `disqus`, `slideOptions`, and `type: slide` (open in slide mode).

- **Title**: the YAML `title`, otherwise the first H1 (`# Heading`), otherwise "Untitled".
- **Tags**: YAML `tags`, or the inline format below.
- Permissions and the remaining settings live in the editor's Share / Settings menus.

## Tags (Inline Format)

Define tags inline in the document:

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

`{%youtube ID %}`, `{%vimeo ID %}`, `{%gist user/id %}`, `{%slideshare ... %}`, `{%speakerdeck ... %}`, `{%pdf URL %}`, `{%figma URL %}`, `{%hackmd NOTE_ID %}`. See [references/embeds.md](references/embeds.md) for each syntax and caveats.

## Slide Mode

Add `type: slide` to the YAML front matter (or use the Slide Mode button), then separate slides with horizontal (`---`) and vertical (`----`) dividers:

```markdown
# First Slide

Content here

---

# Second Slide (next horizontal slide)

More content

----

# Vertical Slide (below second slide)

Use four dashes for vertical slides

---

<!-- .slide: data-background="#ff0000" -->

# Slide with Red Background

You can add slide-specific attributes
```

> [!NOTE]
> Slide theme and transition settings should be configured in the "Slide mode" section of the "Share" menu.

## Book Mode

Create a book structure with nested links:

```markdown
# Book Title

## Chapter 1
- [Section 1.1](link-to-note-1)
- [Section 1.2](link-to-note-2)

## Chapter 2
- [Section 2.1](link-to-note-3)
  - [Subsection 2.1.1](link-to-note-4)
```

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
