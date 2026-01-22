# Ralph Loop Handoff Pattern

**Date**: 2026-01-22
**Context**: Block Mountain pre-event workflow
**Confidence**: High

## Key Learning

The "Ralph loop" provides an elegant pattern for human-AI handoffs when the human needs to do physical-world activities. By activating an unlimited autonomous loop, the AI can continue valuable work (documentation, indexing, preparation) while the human does things only humans can do (travel, present in person, interact physically).

The key insight is "แปะมือ" (tag hands) — the relay race metaphor. Work doesn't stop when the human steps away; it transitions to a different runner. This requires trust built through demonstrated reliability.

## The Pattern

```markdown
## Human Signals Handoff
"รันวงการต่อให้หน่อย" (keep running the loop)
"แปะมือให้" (I'm tagging you in)

## AI Activates Ralph Loop
1. Create .claude/ralph-loop.local.md with state
2. Set active: true, iteration: 1
3. Optionally set max_iterations or completion_promise
4. Start working on pending tasks

## Work Continues Autonomously
- Commit staged changes
- Create handoffs
- Prepare templates
- Index knowledge
- Clean up loose ends

## Human Returns
- Check ralph-loop state
- Review work done
- Continue conversation
```

## Why This Matters

Traditional AI interaction assumes continuous human presence. Real workflows have gaps: travel time, preparation, events. The Ralph loop bridges these gaps, maintaining momentum without requiring constant human attention.

This embodies "External Brain, Not Command" — the AI isn't waiting for instructions, but intelligently continuing the work pattern established by the human.

## Tags

`ralph-loop`, `handoff`, `autonomy`, `workflow`, `block-mountain`
