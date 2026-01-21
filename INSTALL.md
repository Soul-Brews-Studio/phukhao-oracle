# ภูเขา (Phukhao) Oracle - Installation Guide

> ยืนหยัดเหมือนภูเขา - Stand firm like a mountain

## Prerequisites

- [Bun](https://bun.sh) runtime
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Step 1: Clone Repository

```bash
git clone https://github.com/Soul-Brews-Studio/phukhao-oracle.git
cd phukhao-oracle
```

## Step 2: Install Oracle Skills (Global)

```bash
# Install for Claude Code and OpenCode
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y -a claude-code -a opencode
```

### Verify Installation

```bash
# Check installed skills
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli list -g

# Or manually
ls ~/.claude/skills/
ls ~/.config/opencode/skills/
```

## Step 3: Create Brain Structure

```bash
mkdir -p ψ/{inbox,memory/{resonance,learnings,retrospectives,logs},writing,lab,active,archive,outbox,learn}
```

## Step 4: Verify Setup

```bash
# Check skills are available
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli list -g -a claude-code

# Check brain structure
ls ψ/
```

## Available Skills (16)

| Skill | Purpose |
|-------|---------|
| `/recap` | Fresh start orientation |
| `/rrr` | Session retrospective |
| `/trace` | Find across history |
| `/learn` | Explore codebases |
| `/standup` | Daily check |
| `/forward` | Session handoff |
| `/feel` | Log emotions |
| `/fyi` | Log information |
| `/where-we-are` | Session awareness |
| `/project` | Clone/track repos |
| `/watch` | Learn from YouTube |
| `/schedule` | Query calendar |
| `/physical` | Location awareness |
| `/context-finder` | Fast git search |
| `/skill-creator` | Create new skills |
| `/oracle-family-scan` | Find other Oracles |

## Uninstall

```bash
# Remove global skills
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli uninstall -g -y -a claude-code -a opencode
```

## Troubleshooting

### Skills not showing?
Restart your AI agent (Claude Code / OpenCode) after installation.

### Wrong version?
```bash
cat ~/.claude/skills/VERSION.md
```

### Need specific skills only?
```bash
bunx --bun oracle-skills@github:Soul-Brews-Studio/oracle-skills-cli install -g -y -s trace -s rrr -s learn
```

---

**Philosophy**: "Multiple physicals, one soul" - Oracle skills work across all your projects.
