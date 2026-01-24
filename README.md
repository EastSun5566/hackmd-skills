# HackMD Agent Skills

> Agent Skills for HackMD

Follows the [Agent Skills specification](https://agentskills.io/specification)

## Skills Included

### `hackmd` - HackMD Flavored Markdown

Comprehensive guide to HackMD's special Markdown Features

### `hackmd-api` - HackMD API Integration

Programmatic note management through HackMD's API

**Prerequisites**: Requires Node.js 18+ and HackMD API token

## Installation

### Claude Code

For Claude Code users who prefer the plugin system:

```bash
/plugin marketplace add EastSun5566/hackmd-skills
/plugin install hackmd@hackmd-skills
```

### Manual Installation

For custom setups or other tools:

```bash
# Clone the repository
git clone https://github.com/EastSun5566/hackmd-skills.git

# Copy both skills
cp -r hackmd-skills/skills/hackmd <YOUR_SKILLS_PATH>/
cp -r hackmd-skills/skills/hackmd-api <YOUR_SKILLS_PATH>/
```

## Usage

### Using the hackmd Skill

Simply mention HackMD features or collaborative documentation in your requests.

Example: "Create a HackMD document with a mermaid diagram and alert boxes"

### Using the hackmd-api Skill

The API skill requires setup before use:

1. **Get API Token**: Visit https://hackmd.io/settings#api to generate a token
2. **Set Environment Variable**:

   ```bash
   export HACKMD_API_TOKEN=your_token_here
   ```
3. **Install Dependencies**:

   ```bash
   cd skills/hackmd-api/scripts
   npm install
   ```
4. **Use the Skill**: AI agents can now manage HackMD notes programmatically

Example: "Create a new HackMD note titled 'Project Docs' with our API documentation"

## References

- [HackMD Official Features](https://hackmd.io/s/features)
- [HackMD API Documentation](https://hackmd.io/@hackmd-api/developer-portal)
- [HackMD Tutorials](https://hackmd.io/c/tutorials)
- [Agent Skills Specification](https://agentskills.io/specification)