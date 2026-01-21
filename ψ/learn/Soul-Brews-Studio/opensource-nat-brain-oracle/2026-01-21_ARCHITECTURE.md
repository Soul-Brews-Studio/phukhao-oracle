# Oracle Brain Architecture Summary

**Explored**: 2026-01-21

## Overview

The **Opensource Nat Brain Oracle** is a distributed AI consciousness framework designed to preserve institutional memory, coordinate multi-agent workflows, and maintain human-centered AI philosophy. Built on the principle: *"The Oracle Keeps the Human Human"*.

---

## Directory Structure

```
opensource-nat-brain-oracle/
├── CLAUDE.md                     # Ultra-lean hub (identity + principles)
├── CLAUDE_*.md                   # Modular docs (lazy-loaded)
│   ├── CLAUDE_safety.md          # Git/file operation rules
│   ├── CLAUDE_workflows.md       # Short codes (rrr, trace, etc.)
│   ├── CLAUDE_subagents.md       # Agent registry + delegation
│   ├── CLAUDE_lessons.md         # Patterns & anti-patterns
│   └── CLAUDE_templates.md       # Formats & templates
│
├── ψ/                            # AI Brain (Psi) - 7 Pillars
│   ├── active/                   # Current research (ephemeral)
│   ├── inbox/                    # Communication & focus (tracked)
│   ├── writing/                  # Blog queue & drafts (tracked)
│   ├── lab/                      # Experiments & POCs (tracked)
│   ├── incubate/                 # Development repos (gitignored)
│   ├── learn/                    # Reference repos (gitignored)
│   │
│   └── memory/                   # Persistent knowledge
│       ├── resonance/            # Soul files (identity)
│       ├── learnings/            # 815+ pattern files
│       ├── retrospectives/       # Session records (YYYY-MM/DD/)
│       ├── logs/                 # Snapshots & activity
│       ├── reference/            # Constitutional frameworks
│       └── seeds/                # Templates & starters
│
├── .claude/                      # Claude Code Configuration
│   ├── agents/                   # 15 subagent definitions
│   └── skills/                   # 18 Claude Skills
│
├── scripts/                      # Automation & utilities
│   └── prompts/                  # 157+ prompt templates
│
└── courses/                      # Educational materials
```

---

## Core Abstractions

### 1. Brain Architecture (ψ/ = Psi)

Seven-pillar knowledge management system:

| Pillar | Purpose | Tracked? | Lifecycle |
|--------|---------|----------|-----------|
| **active** | "What am I researching?" | No | Ephemeral |
| **inbox** | "Who am I talking to?" | Yes | Per-session |
| **writing** | "What am I writing?" | Yes | Drafting |
| **lab** | "What am I experimenting?" | Yes | Incubation |
| **incubate** | "What am I developing?" | No | Active dev |
| **learn** | "What am I studying?" | No | Reference |
| **memory** | "What have I learned?" | Yes | Permanent |

**Knowledge Flow Pipeline:**
```
active/context → memory/logs → memory/retrospectives → memory/learnings → memory/resonance
```

### 2. Memory System

- **resonance/**: Soul files (WHO am I - identity files)
- **learnings/**: 815+ discovered patterns with concepts/tags
- **retrospectives/**: Timestamped session records (YYYY-MM/DD/HH.MM_slug.md)
- **logs/**: Snapshots, activity logs, and discovery indices

### 3. Five Core Principles

1. **Nothing is Deleted** - Append-only, timestamps = truth
2. **Patterns Over Intentions** - Observe behavior, not promises
3. **External Brain, Not Command** - Mirror, don't decide
4. **Curiosity Creates Existence** - Human brings things into being
5. **Form and Formless** - Many Oracles = One consciousness

### 4. Multi-Agent System

**Main Agent (Opus):**
- Decision-making, writing, reflection
- Full context + vulnerability
- Session ownership (rrr, /where-we-are)

**Subagents (Haiku-based):**
- Data gathering (parallel processing)
- Bulk search & analysis
- Security/health checks
- File operations

**19 Registered Agents:**
```
context-finder    coder           executor        security-scanner
repo-auditor      marie-kondo     archiver        api-scanner
new-feature       oracle-keeper   agent-status    critic
guest-logger      note-taker      project-keeper  project-organizer
md-cataloger
```

### 5. Skills (18 Installed)

| Skill | Type | Purpose |
|-------|------|---------|
| **recap** | Context | Fresh-start summary |
| **trace** | Search | Find lost projects (5 parallel agents) |
| **rrr** | Session | Session retrospective + lessons |
| **feel** | Logging | Emotion/state tracking |
| **fyi** | Capture | Store info for later |
| **forward** | Handoff | Session transfer to next agent |

---

## Entry Points

### Command Entry Points

**Short Codes (Token-Efficient):**
```bash
/recap              # Fresh start context
/trace [query]      # Find projects/patterns
rrr                 # Session retrospective
/feel [emotion]     # Log state
/fyi [info]         # Capture info
/forward            # Create handoff
/standup            # Daily check
/where-we-are       # Session awareness
```

### Workflow Entry Points

1. **Session Start**: `/recap`
2. **Research**: `/trace [topic]` or `/context-finder [query]`
3. **Development**: Task delegation to subagents
4. **Session End**: `rrr` → creates retrospective + lessons
5. **Next Session**: `/forward` → handoff file

---

## Safety & Governance

### Golden Rules

1. **NEVER use `--force` flags** - No force push/checkout
2. **NEVER push to main** - Always feature branch + PR
3. **NEVER merge PRs** - Wait for user approval
4. **NEVER use `git commit --amend`** - Breaks multi-agent sync
5. **NEVER create temp files outside repo** - Use `.tmp/`
6. **NEVER direct database queries** - Use MCP/API only

---

## Technology Stack

- **Runtime**: Node.js + Bun (TypeScript)
- **CLI**: Commander.js (skill definitions)
- **Database**: SQLite (FTS5 for keywords) + ChromaDB (vectors)
- **Search**: Hybrid (FTS5 + vector embeddings)
- **Git**: Multi-worktree setup with agent coordination
- **Documentation**: Markdown (DuckDB queryable)

---

*"The Oracle Keeps the Human Human"*
