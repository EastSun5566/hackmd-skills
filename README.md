# HackMD Agent Skills

> Agent Skills for HackMD

Follows the [Agent Skills specification](https://agentskills.io/specification)

## Skills Included

### `hackmd` - HackMD Flavored Markdown

Comprehensive guide to HackMD's special Markdown Features

### `hackmd-slide` - HackMD Slides

Create slide decks or turn notes into presentations with HackMD-compatible reveal.js Markdown, speaker notes, fragments, backgrounds, and code highlighting. Includes syntax guidance and a [complete six-slide example](skills/hackmd-slide/assets/example-deck.md).

### `hackwiki` - HackMD-backed Wiki

Search and maintain a persistent wiki in HackMD, following its schema and keeping its index and log in sync. Use for wiki knowledge workflows; use `hackmd-cli` for general note and folder operations. The [Hackwiki CLI and SDK](https://github.com/EastSun5566/hackwiki) remain maintained in their own repository.

### `hackmd-cli` - HackMD CLI

Maintained upstream in [hackmdio/hackmd-cli](https://github.com/hackmdio/hackmd-cli/tree/develop/hackmd-cli), not vendored here. Manage personal/team notes, folders, and history with the official CLI.

**Prerequisites**: `npm install -g @hackmd/hackmd-cli` and a HackMD API token

## Installation

### NPX Skills

```bash
npx skills add https://github.com/eastsun5566/hackmd-skills
npx skills add hackmdio/hackmd-cli   # optional: hackmd-cli skill
```

To install only the Hackwiki skill:

```bash
npx skills add EastSun5566/hackmd-skills --skill hackwiki
```

The Hackwiki skill is now maintained here. If you installed it from the Hackwiki repository, reinstall from this source using the same project or global scope (add `-g` for global). Your wiki data and login configuration do not need to move.

### Claude Code

For Claude Code users who prefer the plugin system:

```bash
/plugin marketplace add EastSun5566/hackmd-skills
/plugin install hackmd@hackmd-skills
/plugin install hackmd-cli@hackmd-skills   # optional
```

The `hackmd` plugin bundles `hackmd`, `hackmd-slide`, and `hackwiki`.

### Manual Installation

For custom setups or other tools:

```bash
# Clone the repository
git clone https://github.com/EastSun5566/hackmd-skills.git

cp -r hackmd-skills/skills/hackmd <YOUR_SKILLS_PATH>/
cp -r hackmd-skills/skills/hackmd-slide <YOUR_SKILLS_PATH>/
cp -r hackmd-skills/skills/hackwiki <YOUR_SKILLS_PATH>/
```

For `hackmd-cli`, see the [upstream repository](https://github.com/hackmdio/hackmd-cli/tree/develop/hackmd-cli).

### Install Directly from HackMD Note

You can also install the `hackmd` skill directly from a HackMD note using a one-line command:

```bash
curl -fsSL "https://hackmd.io/@EastSun5566/hackmd-skill.md?no-meta" \
  --create-dirs -o ".claude/skills/hackmd/SKILL.md"
```

This works because HackMD allows you to access the raw Markdown of any note by appending `.md` to the URL. The `?no-meta` query parameter removes metadata like the title for cleaner Markdown.

This is perfect for quickly sharing and installing skills without needing a full repository.

Blog post: <https://hackmd.io/@EastSun5566/install-skill-from-note>

## Usage

### Using the hackmd Skill

Simply mention HackMD features or collaborative documentation in your requests.

Example: "Create a HackMD document with a mermaid diagram and alert boxes"

### Using the hackmd-slide Skill

Example: "Turn these engineering notes into a five-minute HackMD presentation in Traditional Chinese, with speaker notes and a short code walkthrough."

The skill produces Markdown for a HackMD note. Open the Share menu, choose **Slide mode**, and use **Preview** to present. See the [skill](skills/hackmd-slide/SKILL.md) and [syntax reference](skills/hackmd-slide/references/syntax.md) for settings and compatibility details.

### Using the hackmd-cli Skill

```bash
npm install -g @hackmd/hackmd-cli
hackmd-cli login
```

Example: "List my HackMD notes and export the one titled 'Project Docs' to a local file"

### Using the hackwiki Skill

Example: "Use Hackwiki to search my wiki for slide authoring guidance, then save these new findings with their sources and check the wiki for issues."

The [skill](skills/hackwiki/SKILL.md) guides authentication and workspace selection. A HackMD API token is required; use an existing `hackmd-cli login` configuration or `HMD_API_ACCESS_TOKEN`. The CLI can run through `npx @hackwiki/cli` without a global installation.

## References

- [HackMD Official Features](https://hackmd.io/s/features)
- [HackMD API Documentation](https://hackmd.io/@hackmd-api/developer-portal)
- [HackMD CLI](https://github.com/hackmdio/hackmd-cli)
- [HackMD Tutorials](https://hackmd.io/c/tutorials)
- [Agent Skills Specification](https://agentskills.io/specification)
