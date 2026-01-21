# Oracle-v2 MCP Server - Quick Reference

**Explored**: 2026-01-21

## Overview

Oracle v2 is a TypeScript-based MCP server providing semantic knowledge management for Claude. Combines full-text search (SQLite FTS5) with vector search (ChromaDB).

> "The Oracle Keeps the Human Human" - now queryable via MCP

---

## Installation

```bash
# One-liner
curl -sSL https://raw.githubusercontent.com/Soul-Brews-Studio/oracle-v2/main/scripts/install.sh | bash

# Add to ~/.claude.json
{
  "mcpServers": {
    "oracle-v2": {
      "command": "bun",
      "args": ["run", "~/.local/share/oracle-v2/src/index.ts"]
    }
  }
}
```

---

## Key MCP Tools

### Search & Discovery
```
oracle_search(query, type?, limit?)  # Hybrid search
oracle_list(type?, limit?)           # Browse documents
oracle_concepts()                    # List tags
```

### Guidance
```
oracle_consult(decision, context?)   # Get decision guidance
oracle_reflect()                     # Random wisdom
```

### Learning
```
oracle_learn(pattern, source?, concepts?)  # Add pattern
oracle_supersede(oldId, newId, reason?)    # Mark outdated
```

### Threads
```
oracle_thread(message, threadId?)    # Multi-turn discussion
oracle_threads(status?)              # List threads
oracle_thread_read(threadId)         # Read history
```

### Decisions
```
oracle_decisions_create(title, context?, options?)
oracle_decisions_list(status?, project?)
oracle_decisions_update(id, status?, decision?, rationale?)
```

### Traces
```
oracle_trace(query, foundFiles?, foundCommits?)
oracle_trace_list()
oracle_trace_get(traceId)
```

---

## HTTP API (port 47778)

| Endpoint | Description |
|----------|-------------|
| `/api/search?q=...` | Search |
| `/api/consult?q=...` | Guidance |
| `/api/list` | Browse |
| `/api/stats` | Statistics |

---

## Commands

```bash
bun run server        # HTTP server (port 47778)
bun run dev           # MCP server (stdio)
bun run index         # Reindex knowledge base
bun db:studio         # Database GUI
```
