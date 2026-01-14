# HackMD Agent Skills

Agent Skill for HackMD collaborative markdown editor.

Follows the [Agent Skills specification](https://agentskills.io/specification) for cross-platform compatibility with Claude Code, GitHub Copilot, Codex CLI, and other skills-compatible agents.

## Installation

### Claude Code

Install via plugin marketplace:

```bash
/plugin marketplace add EastSun5566/hackmd-skills
/plugin install hackmd@hackmd-skills
```

### Manual Installation

For other AI tools or global installation:

```bash
# Clone the repository
git clone https://github.com/EastSun5566/hackmd-skills.git

# Copy the skill to your preferred location
# Example paths (check your tool's documentation):
# - Claude Code: ~/.claude/skills/
# - Codex CLI: ~/.codex/skills/
# - Project-specific: .claude/skills/

cp -r hackmd-skills/skills/hackmd <YOUR_SKILLS_PATH>/
```

> [!TIP]
> Most agent tools auto-discover skills in project `.claude/skills/` directories.

## Usage

Once installed, AI agents can automatically use this skill when working with HackMD documents. Simply mention HackMD features or collaborative documentation in your requests.

## References

- [HackMD Official Features](https://hackmd.io/s/features)
- [HackMD Tutorials](https://hackmd.io/c/tutorials)
- [Agent Skills Specification](https://agentskills.io/specification)
