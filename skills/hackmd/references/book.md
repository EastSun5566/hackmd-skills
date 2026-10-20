# Book mode

Use this reference when arranging notes into a HackMD book or updating an existing book's navigation. Produce Markdown in the user's requested language.

## Choose the right structure

| Need | Use |
| --- | --- |
| Jump between headings in one document | `[TOC]` in that note |
| Guide readers through several notes in a chosen order | Book mode |
| Store and organize notes together | A folder; add a book when readers also need a reading path |

A book links to notes; adding a link does not move that note into a folder. Creating or updating online notes requires a user request and an available HackMD tool or CLI. Drafting a book's Markdown alone does not create its linked notes or change their permissions.

## Navigation syntax

- Use `#`, `##`, and `###` headings for sections, with blank lines around them. Keep the hierarchy shallow for compatibility across book experiences.
- Use unordered lists (`- [Title](URL)`) for pages. Arrange bullets in reading order; numbered lists are not book navigation.
- Indent child bullets by two spaces. A parent bullet without a link can group child links; a plain bullet without a link or children is not a navigation entry.
- Give each page item one direct link with a clear title. Keep explanations, tables, diagrams, and other body content in the linked notes.
- For an external resource that should open in a new tab, put `[target=_blank]` after its link:

```markdown
- [External reference](https://example.com/replace-with-reference-url) [target=_blank]
```

That example URL is illustrative; replace it with the intended resource. Do not assume every external site can be displayed inside a book.

### Choose links carefully

Use supplied or verified HTTPS note URLs, or root-relative HackMD paths such as `/@workspace/note`. Preserve existing query parameters and anchors. Avoid `./page` links, which depend on the book viewer's current path.

If note links are missing, ask for them or label draft URLs as placeholders. Never present invented paths as notes that already exist. When updating an existing book, preserve its links and structure unless the requested change requires editing them.

## Arrange a reading path

1. Identify the audience and what they should be able to do after reading.
2. Put orientation and prerequisites before setup, then the first useful task. Group optional references and troubleshooting separately.
3. Use descriptive page titles and only the nesting needed to show relationships.
4. Deliver the navigation Markdown. Create or update online content only when requested; use the chosen tool's supported operations and check linked-note access separately before sharing.

## Complete onboarding example

Every `/@your-team/replace-with-...` path and the `example.com` URL below is an illustrative placeholder, not a verified or newly created note. Replace them with the intended URLs before using the book. The labels and chapter order are a starting point, not a required outline.

```markdown
# Project onboarding

## Understand the project

- [Project overview](/@your-team/replace-with-overview-note)
- [Architecture](/@your-team/replace-with-architecture-note)

## Get running

- [Environment setup](/@your-team/replace-with-setup-note)
- [Run the application](/@your-team/replace-with-run-note)
- Troubleshooting
  - [Installation issues](/@your-team/replace-with-installation-help-note)
  - [Access and credentials](/@your-team/replace-with-access-help-note)

## Make your first contribution

- [First task](/@your-team/replace-with-first-task-note)
- [Review checklist](/@your-team/replace-with-review-note)
- [Repository](https://example.com/replace-with-repository-url) [target=_blank]
```

## Open and edit the book

Choose **Book mode** in the note's sharing controls and open **Preview**. For an existing named note URL, `?type=book` selects the book view, for example `https://hackmd.io/@owner/note?type=book`. When there are other query parameters, add or replace `type` with a URL-aware tool and keep the query before any `#` fragment.

The URL selects a view; it does not save a default mode or grant access. YAML `type: book` does not enable Book mode. Do not assume that a note creation or update tool supports saving the mode; check the tool's interface and use the UI when needed.

The newer book experience supports editing navigation from the sidebar. Its supported structure uses headings through level three and bulleted links. Editing there can discard paragraphs, tables, blockquotes, or custom HTML/CSS from a mixed-content book note. Review such content before editing and keep navigation separate from chapter text. Older books may use Classic; avoid relying on experience-specific styling or folding behavior for a portable book. See the [official Book mode update](https://hackmd.io/blog/2026/09/16/improved-book-mode-2026) for the compatibility details.

## Before delivery

- Check reading order, heading hierarchy, nested groups, and link labels.
- Verify supplied URLs where access is available; clearly identify unresolved links. Confirm the intended readers can access linked notes without silently broadening permissions.
- Preserve existing chapter content when changing navigation, and flag mixed-content sidebar editing risks.
- If a book preview is available, check navigation, nesting, and external links. Otherwise report Markdown checks separately from browser verification.

## Public references

- [HackMD book example](https://hackmd.io/book-example): headings, linked lists, external links, and opening Book mode.
- [Book mode update](https://hackmd.io/blog/2026/09/16/improved-book-mode-2026): sidebar editing and compatibility with existing books.
