# External Embeds

## YouTube

```markdown
{%youtube VIDEO_ID %}
{%youtube 1G4isv_Fylg %}
```

## Vimeo

```markdown
{%vimeo VIDEO_ID %}
{%vimeo 124148255 %}
```

## GitHub Gist

```markdown
{%gist username/gist_id %}
{%gist schacon/4277 %}
```

## SlideShare

```markdown
{%slideshare username/presentation-id %}
{%slideshare briansolis/26-disruptive-technology-trends-2016-2018-56796196 %}
```

## Speaker Deck

```markdown
{%speakerdeck username/presentation-slug %}
{%speakerdeck sugarenia/xxlcss-how-to-scale-css-and-keep-your-sanity %}
```

## PDF

```markdown
{%pdf https://example.com/document.pdf %}
```

> [!WARNING]
> PDFs require HTTPS URLs and may be blocked by browsers with mixed content protection.

## Figma

Use a verified HTTPS Figma `/file/` or `/proto/` URL with its complete file key. Arbitrary Figma URLs, including `/design/` URLs, are not recognized by this embed syntax. Do not automatically rewrite `/design/` to `/file/`; use a verified supported URL or keep an ordinary Markdown link.

The file key below is synthetic. Replace each full URL with the intended accessible Figma URL; these are syntax examples, not existing designs:

```markdown
{%figma https://www.figma.com/file/ABCDEFGHIJKLMNOPQRSTUV/Design?node-id=1:2 %}
{%figma https://www.figma.com/proto/ABCDEFGHIJKLMNOPQRSTUV/Prototype?node-id=1:2 %}
```

## HackMD Notes

Embed another HackMD note's content with the directive on its own line, with a blank line before and after it. Do not append it to a sentence. Replace `NOTE_ID` or `@user/note-title` with the intended note's identifier:

```markdown
{%hackmd NOTE_ID %}

{%hackmd @user/note-title %}
```

Readers must be able to access the source note; embedding does not grant access. Use an ordinary link for navigation rather than including its content.

## Link Preview

Use a full HTTPS URL to request a preview card:

```markdown
{%preview https://example.com/article %}
```

Replace the illustrative URL with a supplied or verified link. A preview card shows metadata from the source; its availability depends on the destination and access permissions. If a card is unavailable, keep an ordinary Markdown link. See the [official Link Preview guide](https://hackmd.io/@docs/link_preview_en).
