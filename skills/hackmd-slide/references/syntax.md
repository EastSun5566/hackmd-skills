# HackMD slide syntax and compatibility

Contents: [settings](#settings), [structure and notes](#structure-and-notes), [attributes and fragments](#attributes-and-fragments), [backgrounds and transitions](#backgrounds-and-transitions), [code](#code-highlighting), [media and links](#images-diagrams-and-links), [presenter features](#presenter-features), [public references](#public-references).

## Settings

Use HackMD's slide syntax below when writing a note. Standalone reveal.js setup instructions are not needed for a HackMD deck.

### Frontmatter

Place one YAML block at the beginning of the note, before the first slide. Its closing `---` ends metadata, not the first slide. Write the title slide immediately after the block, without another divider.

```yaml
---
title: Shipping a smaller change
description: A short engineering presentation
lang: en
breaks: true
slideOptions:
  theme: white
  transition: none
  slideNumber: true
---
```

Write `slideOptions` as a mapping in frontmatter, not a quoted YAML or JSON string. If YAML settings are unavailable on your HackMD instance, use **Customize slides** instead. To select the presentation mode, use Slide mode in the Share menu or an existing named note URL with `?type=slide`, rather than a `type` frontmatter key.

### Choosing settings

1. Use frontmatter for settings that should travel with the Markdown.
2. Settings saved in the UI take precedence over matching frontmatter fields. A saved `slideOptions` mapping replaces that whole mapping. The UI accepts the options alone, e.g. `theme: white`, without an outer `slideOptions:` key or frontmatter fences.
3. Use simple URL options for temporary presentation choices. For example, `?type=slide&transition=fade&controls=false` selects slide rendering, uses a fade transition, and hides navigation controls.

Set important presentation choices explicitly, such as `theme: white`, `transition: none`, and `slideNumber: true`, rather than relying on defaults.

Use top-level `lang` for the content language, `dir: rtl` for right-to-left content, and `breaks: false` if ordinary line breaks should not become visible line breaks.

Use lowercase theme names such as `white`, `black`, `league`, `sky`, `beige`, `simple`, `serif`, `blood`, `night`, `moon`, or `solarized`. Set the theme in `slideOptions` or Customize slides, not with `?theme=white`, and check it in the presentation preview.

Set `width` and `height` only when needed, e.g. `width: 1280` and `height: 720` for a 16:9 deck. URL options are suitable for simple booleans, numbers, and strings; put nested settings in the note instead. Test keyboard navigation in the full presentation view rather than an embedded preview.

## Structure and notes

### Horizontal and vertical slides

```markdown
# Topic A

Overview.

----

## Topic A: supporting detail

Detail below the overview.

---

# Topic B

Next main topic.
```

This creates three content slides in two horizontal groups: Topic A and its vertical detail, then Topic B. Use Space to step through the sequence, including vertical slides and fragments; horizontal arrow navigation can skip vertical detail.

Use exact, unindented `---` and `----` lines with a blank line on each side. Do not substitute `--` for a HackMD vertical divider or attempt to customize the divider syntax through `slideOptions`.

Divider-shaped lines can create slide breaks even inside code fences or speaker notes. Show literal `---` or `----` inline, or rewrite the example so there is no matching divider line. Avoid trailing dividers, which create empty slides.

### Speaker notes

```markdown
## The audience sees this

A short statement.

Note:
Explain the evidence behind the statement.

- Remind the audience of the previous example.
- Allow time for a question.
```

Use exactly `Note:` at column one on its own line. Everything after that marker, up to the next slide divider, becomes speaker notes; text on the marker line is discarded. Do not substitute `Notes:`, indent the marker, or use a bare `Note:` line in visible slide content. Preview code examples containing note markers to check that they remain visible.

Press **S** in the full presentation to open the speaker view; popups must be allowed. Notes are hidden in normal presentation mode but remain in the note source. Do not place confidential information there on the assumption that the audience cannot access it.

## Attributes and fragments

### Slide attributes

Put a `.slide:` comment near the beginning of the slide. Its attributes apply to that slide's generated `<section>`:

```markdown
<!-- .slide: id="decision" data-background-color="#e8f4ff" data-transition="fade" -->

## Make the decision visible
```

### Element attributes

A `.element:` comment targets the preceding rendered element, or its enclosing element when the comment is inside that element. Put it inline after the intended content to make the target unambiguous:

```markdown
- First point <!-- .element: class="fragment fade-up" data-fragment-index="0" -->
- Second point <!-- .element: class="fragment fade-up" data-fragment-index="1" -->

This whole paragraph appears later. <!-- .element: class="fragment" data-fragment-index="2" -->
```

For only part of a sentence, wrap that part in a span:

```html
The result is <span>smaller<!-- .element: class="fragment highlight-blue" --></span>.
```

Use double-quoted, nonempty values in these comments. For boolean attributes, supply a value, e.g. `data-auto-animate="true"`. A comment after a whole list can target the list instead of its last item, so keep item-level comments on the item line.

`class="fragment"` reveals an element. Built-in styles include `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-out`, `grow`, `shrink`, `current-visible`, and `highlight-red`, `highlight-green`, or `highlight-blue`. Use motion sparingly. A `fade-out` fragment starts visible and disappears when stepped.

Fragments without explicit indices follow DOM order. Explicit indices determine order; the same index groups elements into one step. Prefer either all implicit ordering or explicit indices for the entire intended sequence, since unindexed fragments are appended after indexed groups.

## Backgrounds and transitions

Color background:

```html
<!-- .slide: data-background-color="#e8f4ff" -->
```

Image background (replace the example URL with a supplied or verified asset):

```html
<!-- .slide: data-background-image="https://example.com/cover.jpg" data-background-size="cover" data-background-position="center" data-background-opacity="0.25" -->
```

The older `data-background="#e8f4ff"` or `data-background="https://example.com/cover.jpg"` syntax is also supported. For tiling, use `data-background-repeat="repeat"` with an explicit size, e.g. `data-background-size="100px"`. Video backgrounds use `data-background-video="https://example.com/background.mp4"`; playback is subject to browser media policies. Do not make essential information depend on autoplay.

Choose text colors that remain readable against the background. If more control is needed, use a small HTML wrapper with inline styling, preserving blank lines around Markdown inside the wrapper. Custom `<style>` content is filtered; do not rely on external CSS imports or scripts. Avoid introducing a full custom layout when ordinary Markdown fits.

Deck-wide transition values are `none`, `fade`, `slide`, `convex`, `concave`, and `zoom`. Per-slide examples:

```html
<!-- .slide: data-transition="fade-in slide-out" data-transition-speed="fast" -->
```

Transition speed values are `default`, `fast`, and `slow`. Background transitions can be set with `backgroundTransition` or a slide's `data-background-transition`. Changing transition is optional; HackMD's default is `none`.

## Code highlighting

Use a language followed by a space and a line specification. Keep code short enough to read without scrolling:

````markdown
```javascript [1|2-3|4]
const attendees = ['Ada', 'Lin'];
const greeting = attendees
  .map(name => `Hello, ${name}`);
console.log(greeting.join('\n'));
```
````

| Fence info | Behavior |
| --- | --- |
| `javascript []` | Show line numbers without selecting lines |
| `javascript [1,3-4]` | Highlight lines 1, 3, and 4 together |
| `javascript [1|2-3|4]` | Step through three highlight groups |
| `javascript [10: 10-12]` | Start displayed line numbers at 10 and highlight 10–12 |
| `javascript=10` | HackMD line-number shorthand starting at 10 |

Use `|` for successive highlight steps. Line numbers refer to the displayed numbering, including any offset. Leave a space between the language and `[ ... ]`; no HTML scaffolding or extra installation is needed.

Use an explicit offset when continuation numbering matters, rather than `=+`. Long code should be shortened or split rather than relying on normal-note wrapping syntax.

## Images, diagrams, and links

HackMD image sizing works in slide Markdown:

```markdown
![System overview](https://example.com/diagram.png =600x)
![Square detail](https://example.com/detail.png =320x320)
```

These URLs illustrate syntax; replace them with real assets before delivery. Prefer meaningful alt text and a single legible diagram over a dense screenshot. Local filesystem paths will not work for an online audience.

HackMD diagram fences and embeds can be used, e.g. a `mermaid` fence or `{%youtube VIDEO_ID %}`. Consult the installed `hackmd` skill when its broader syntax is needed. Preview diagrams and embeds for fit and loading rather than assuming every Markdown feature behaves identically in notes and slides. The core deck should remain understandable if remote media cannot load.

For internal links, `#/h/v` uses zero-based horizontal and vertical indices by default: `[Details](#/1/1)` targets the second vertical slide in the second horizontal group. Prefer a stable named target when slides may be reordered:

```markdown
<!-- .slide: id="decision" -->

## Decision
```

Link to it with `[Return to the decision](#/decision)`. Keep references within the same rendered deck; embedding and custom URL settings can affect address-bar synchronization.

## Presenter features

Speaker notes, code highlighting, and zoom need no additional installation. Enable spotlight and a five-minute elapsed-time bar in note settings with:

```yaml
slideOptions:
  spotlight:
    enabled: true
  allottedMinutes: 5
```

In the UI's Customize slides field, omit the outer `slideOptions:` mapping. Prefer `allottedMinutes` for a duration in minutes; use `allottedTime` for milliseconds, and avoid specifying both. The timer begins when the presentation loads; it does not advance slides automatically. Enable these features through note settings rather than query parameters.

Press **Esc** for overview and **B** or **.** to pause/blank the presentation when using the full keyboard-enabled view. For a print layout, use the slide page's print control (`?print-pdf`); inspect the print preview before promising a PDF matches interactive fragments or remote media.

Do not add `dependencies`, custom `plugins`, or executable JavaScript to a slide note. Standalone reveal.js installation examples, custom Markdown separators, and third-party plugins are not drop-in HackMD features. Verify unfamiliar features in a HackMD preview before recommending them.

## Public references

These public resources explain HackMD features and general reveal.js syntax. Use the HackMD-specific syntax in this guide when the examples differ.

- [HackMD features](https://hackmd.io/s/features)
- [HackMD tutorials](https://hackmd.io/c/tutorials)
- [reveal.js public repository](https://github.com/hakimel/reveal.js/)
