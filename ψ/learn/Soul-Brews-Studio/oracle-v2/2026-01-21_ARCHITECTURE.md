# Oracle v2 Architecture Summary

**Explored**: 2026-01-21

## System Overview

Oracle v2 is a **Model Context Protocol (MCP) server** that provides semantic search, decision guidance, and learning capture over a structured knowledge base. It combines keyword search (SQLite FTS5), vector search (ChromaDB), and intelligent consultation logging.

```
Claude Code → MCP Server → SQLite + ChromaDB + Drizzle ORM
                    ↓
             HTTP Server (Hono) → React Dashboard
                    ↓
            ψ/memory source files
```

**Stack:** TypeScript (Bun runtime), SQLite, ChromaDB, Drizzle ORM, React, Hono.js

---

## MCP Tools (19 Available)

| Category | Tools |
|----------|-------|
| Search | `oracle_search`, `oracle_list`, `oracle_concepts` |
| Guidance | `oracle_consult`, `oracle_reflect` |
| Learning | `oracle_learn`, `oracle_supersede` |
| Threads | `oracle_thread`, `oracle_threads`, `oracle_thread_read`, `oracle_thread_update` |
| Decisions | `oracle_decisions_create`, `oracle_decisions_list`, `oracle_decisions_get`, `oracle_decisions_update` |
| Traces | `oracle_trace`, `oracle_trace_list`, `oracle_trace_get` |
| Meta | `oracle_stats` |

---

## Core Components

### Database Layer

| Table | Purpose |
|-------|---------|
| `oracle_documents` | Document metadata |
| `oracle_fts` | Virtual FTS5 table for full-text search |
| `searchLog` | Query tracking |
| `consultLog` | Consultation history |
| `learnLog` | Learning captures |

### Hybrid Search Algorithm

1. **FTS5 (SQLite)** - Keyword matching with Porter stemmer
2. **ChromaDB** - Vector/semantic similarity search
3. **Scoring**: 50% FTS + 50% vector + 10% boost if found in both

---

## Data Model

### Source Files Structure
```
ψ/memory/
├── resonance/           → IDENTITY (core principles)
├── learnings/           → PATTERNS (discoveries)
└── retrospectives/      → HISTORY (session records)
```

### Document Types
- **principle** - Core beliefs (in `resonance/`)
- **learning** - Discovered patterns (in `learnings/`)
- **retro** - Session retrospectives

---

## Configuration

| Variable | Default | Purpose |
|----------|---------|---------|
| `ORACLE_PORT` | 47778 | HTTP server port |
| `ORACLE_REPO_ROOT` | `process.cwd()` | Knowledge base root |
| `DB_PATH` | `~/.oracle-v2/oracle.db` | SQLite database |

---

## Philosophy

Oracle follows "Nothing is Deleted" principles:
- All changes tracked with timestamps
- Supersede pattern for marking outdated knowledge
- Full audit trail of consultations and learnings
- Provenance tracking (who/where created)
