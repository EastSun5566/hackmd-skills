# HackMD skills

Skills that help coding agents write HackMD documents, create slides, and maintain a wiki.

## Choose a skill

| Skill | Use it to |
| --- | --- |
| [hackmd](skills/hackmd/SKILL.md) | Write documents with diagrams and embeds, or organize notes into Book mode reading guides. |
| [hackmd-slide](skills/hackmd-slide/SKILL.md) | Turn notes into slides with speaker notes and code highlighting. |
| [hackwiki](skills/hackwiki/SKILL.md) | Search, read, and update a wiki stored in HackMD. |
| [hackmd-cli](https://github.com/hackmdio/hackmd-cli/tree/develop/hackmd-cli) | Manage notes, folders, and teams with the official CLI. |

The first three skills live here. The official HackMD CLI repository maintains `hackmd-cli`.

## Install

```sh
npx skills add EastSun5566/hackmd-skills
npx skills add hackmdio/hackmd-cli   # optional
```

Add `-g` to install globally. To install only Hackwiki:

```sh
npx skills add EastSun5566/hackmd-skills --skill hackwiki
```

If you installed Hackwiki from its old repository, reinstall from this source using the same project or global scope. Your wiki data and login settings stay where they are.

## Try it

- `hackmd`: "Turn these notes into a document with a Mermaid diagram and a warning box."
- `hackmd` (Book mode): "Arrange these five notes into an onboarding book, from project overview to the first task. Keep the original note links."
- `hackmd-slide`: "Make a five-minute presentation from this document, with speaker notes."
- `hackwiki`: "Search my wiki for slide authoring guidance, then save these findings with their sources."
- `hackmd-cli`: "List my notes and export the one titled Project Docs."

Note and wiki operations need a HackMD API token. Use `hackmd-cli login` or `HMD_API_ACCESS_TOKEN`. See the [CLI setup guide](https://github.com/hackmdio/hackmd-cli/tree/develop/hackmd-cli) for installation and authentication. Hackwiki can run through `npx @hackwiki/cli` without a global CLI installation.

For a complete slide example, see [example-deck.md](skills/hackmd-slide/assets/example-deck.md). In HackMD's Share menu, choose **Slide mode**, then **Preview**.

## Other installation options

<details>
<summary>Claude Code plugin</summary>

```text
/plugin marketplace add EastSun5566/hackmd-skills
/plugin install hackmd@hackmd-skills
/plugin install hackmd-cli@hackmd-skills   # optional
```

The `hackmd` plugin includes `hackmd`, `hackmd-slide`, and `hackwiki`.

</details>

<details>
<summary>Copy the skill folders</summary>

```sh
git clone https://github.com/EastSun5566/hackmd-skills.git
cp -r hackmd-skills/skills/hackmd <YOUR_SKILLS_PATH>/
cp -r hackmd-skills/skills/hackmd-slide <YOUR_SKILLS_PATH>/
cp -r hackmd-skills/skills/hackwiki <YOUR_SKILLS_PATH>/
```

</details>

## Links

- [HackMD features](https://hackmd.io/s/features) and [tutorials](https://hackmd.io/c/tutorials)
- [HackMD API](https://hackmd.io/@hackmd-api/developer-portal)
- [Hackwiki CLI and SDK](https://github.com/EastSun5566/hackwiki)
- [Agent Skills specification](https://agentskills.io/specification)
