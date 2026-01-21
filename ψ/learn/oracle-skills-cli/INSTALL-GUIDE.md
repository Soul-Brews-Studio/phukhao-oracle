# Oracle Skills - Install & Check Guide

## Install Global Skills

```bash
# All agents (auto-detect)
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y

# Specific agents only
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y -a claude-code -a opencode

# Specific skills only
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y -s trace -s rrr -s learn
```

## Check Global Skills

```bash
# List all global skills
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli list -g

# Check specific agent
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli list -g -a claude-code

# Show supported agents
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli agents
```

## Verify Installation Manually

```bash
# Claude Code
ls ~/.claude/skills/

# OpenCode
ls ~/.config/opencode/skills/

# Check version
cat ~/.claude/skills/VERSION.md
```

## Uninstall Global Skills

```bash
# All agents
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli uninstall -g -y

# Specific agent
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli uninstall -g -y -a claude-code
```

## Flags Reference

| Flag | Short | Purpose |
|------|-------|---------|
| `--global` | `-g` | User-level (all projects) |
| `--yes` | `-y` | Skip prompts |
| `--agent` | `-a` | Target specific agent(s) |
| `--skill` | `-s` | Target specific skill(s) |
| `--list` | `-l` | List available skills |

## Global Paths

| Agent | Global Path |
|-------|-------------|
| Claude Code | `~/.claude/skills/` |
| OpenCode | `~/.config/opencode/skills/` |
| Cursor | `~/.cursor/skills/` |
| Codex | `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/skills/` |

## Quick One-Liner

```bash
# Install + Verify in one go
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y && ls ~/.claude/skills/
```
