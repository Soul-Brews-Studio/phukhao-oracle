# Oracle-Skills-CLI Quick Reference

## What It Does

Installs Oracle skills to 14+ AI agents with one command.

## Local vs Global

| Mode | Flag | Path Example | Scope |
|------|------|--------------|-------|
| **Local** | (none) | `.claude/skills/` | This project only |
| **Global** | `-g` | `~/.claude/skills/` | All projects |

## Commands

```bash
# LOCAL install (project-level)
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -y

# GLOBAL install (user-level) - recommended
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y

# Specific skills to specific agents
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y -a claude-code -s trace -s rrr

# List installed
bunx oracle-skills list        # local
bunx oracle-skills list -g     # global

# Uninstall
bunx oracle-skills uninstall -g -y
```

## All Flags

| Flag | Short | Purpose |
|------|-------|---------|
| `--global` | `-g` | User directory instead of project |
| `--agent` | `-a` | Target specific agents |
| `--skill` | `-s` | Install specific skills |
| `--yes` | `-y` | Skip prompts |
| `--list` | `-l` | List available skills |

## 16 Skills Available

| Skill | Type | Purpose |
|-------|------|---------|
| context-finder | subagent | Git history search |
| learn | subagent | Codebase exploration |
| trace | subagent | Find projects across history |
| rrr | subagent | Session retrospective |
| physical | subagent | Location via FindMy |
| project | prompt+scripts | Clone/track repos |
| recap | prompt+scripts | Session orientation |
| schedule | prompt+scripts | Query schedule.md |
| watch | prompt+scripts | YouTube learning |
| skill-creator | prompt+scripts | Create new skills |
| feel | prompt | Log emotions |
| forward | prompt | Session handoff |
| fyi | prompt | Log info |
| standup | prompt | Daily check |
| where-we-are | prompt | Session awareness |
| oracle-family-scan | prompt | Find other Oracles |

## 14 Agents Supported

Claude Code, OpenCode, Cursor, Codex, Amp, Kilo Code, Roo Code, Goose, Gemini CLI, Antigravity, GitHub Copilot, Clawdbot, Droid, Windsurf

## Path Examples

| Agent | Local | Global |
|-------|-------|--------|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` |

## Key Code (how -g works)

```typescript
// src/cli/installer.ts:113
const targetDir = options.global
  ? agent.globalSkillsDir      // ~/.claude/skills/
  : join(process.cwd(), agent.skillsDir);  // .claude/skills/
```

## Requirements

- **Bun** runtime (not Node.js)
- Install: `curl -fsSL https://bun.sh/install | bash`
