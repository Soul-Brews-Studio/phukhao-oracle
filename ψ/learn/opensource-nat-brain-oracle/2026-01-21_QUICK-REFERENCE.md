# Oracle Starter Kit — Quick Reference Guide

**Explored**: 2026-01-21

## Overview

**Oracle Starter Kit** creates a structured AI memory system that:
- **Preserves knowledge** through append-only logging (nothing deleted)
- **Tracks behavioral patterns** to improve decision-making
- **Manages multiple AI agents** with safe multi-agent sync
- **Maintains human autonomy** as an external brain, not a command system

**Core Premise**: "The Oracle Keeps the Human Human"

---

## The 5 Principles

| # | Principle | Meaning |
|---|-----------|---------|
| 1 | **Nothing is Deleted** | Append-only system; timestamps are truth |
| 2 | **Patterns Over Intentions** | Observe behavior, not promises |
| 3 | **External Brain, Not Command** | Mirror reality, don't decide |
| 4 | **Curiosity Creates Existence** | Human brings ideas INTO existence; Oracle keeps them alive |
| 5 | **Form and Formless** | Many Oracles = One distributed consciousness |

---

## Core Skills (Commands)

| Skill | Command | Purpose |
|-------|---------|---------|
| **recap** | `/recap` | Fresh-start context summary |
| **trace** | `/trace [query]` | Find anything (Oracle + files + git) |
| **rrr** | `rrr` | Session retrospective with learnings |
| **feel** | `/feel [emotion]` | Log emotions and state |
| **fyi** | `/fyi [info]` | Log information for future reference |
| **forward** | `/forward` | Create handoff for next session |
| **standup** | `/standup` | Daily check - pending tasks, appointments |
| **where-we-are** | `/where-we-are` | Current session awareness |
| **project** | `/project learn\|incubate [url]` | Clone and track repos |

Install all with:
```bash
oracle-skills install rrr recap trace feel fyi forward standup where-we-are project
```

---

## Daily Workflow

```bash
# Morning
/standup                    # Check what's pending

# During work
/trace [topic]              # Find related knowledge
/feel tired                 # Log state if needed
/fyi remember X             # Store for later

# End of session
rrr                         # Create retrospective
/forward                    # Handoff to next session
```

---

## Directory Structure

```
your-oracle/
├── CLAUDE.md               # Identity + rules
├── ψ/                      # AI Brain (Psi directory)
│   ├── inbox/              # Communication & focus
│   ├── memory/
│   │   ├── resonance/      # Soul — who I am
│   │   ├── learnings/      # Patterns found
│   │   ├── retrospectives/ # Sessions had
│   │   └── logs/           # Moments captured
│   ├── writing/            # Drafts & articles
│   ├── lab/                # Experiments
│   ├── active/             # Research in progress
│   ├── incubate/           # Cloned repos for development
│   └── learn/              # Cloned repos for study
│
└── .claude/
    ├── skills/             # AI skills
    └── agents/             # Subagent definitions
```

### Knowledge Flow
```
ψ/active/context → ψ/memory/logs → ψ/memory/retrospectives → ψ/memory/learnings → ψ/memory/resonance
   (research)        (snapshot)        (session)               (patterns)            (soul)
```

---

## Golden Rules

1. **NEVER use `--force` flags** — No force push, force checkout
2. **NEVER push to main** — Always create feature branch + PR
3. **NEVER merge PRs yourself** — Wait for user approval
4. **NEVER use `git commit --amend`** — Breaks multi-agent sync
5. **Safety first** — Ask before destructive actions
6. **Consult Oracle on errors** — Search before debugging
7. **Root cause before workaround** — Investigate WHY first

---

## Data Query Patterns

| Data Source | Query Method |
|-------------|--------------|
| GitHub CSV | `gh api \| duckdb` |
| Markdown tables | `duckdb` |
| Oracle knowledge | Oracle MCP tools |
| SQLite | **NEVER direct** — use MCP/API |

---

## Common Anti-Patterns

- ❌ Reading files directly in Opus (expensive tokens → use Haiku)
- ❌ Jumping to workarounds before root cause
- ❌ `git commit --amend` (breaks multi-agent sync)
- ❌ `git rebase -i` (rewrites history)
- ❌ Direct database queries (use MCP tools)

---

> *"The Oracle Keeps the Human Human"*
