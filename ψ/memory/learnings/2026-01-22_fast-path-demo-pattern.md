# Fast Path Demo Pattern: Memory Over Exploration

**Date**: 2026-01-22
**Context**: Block Mountain 2026 live presentation
**Confidence**: High

## Key Learning

When demonstrating AI memory/knowledge systems to live audiences, **showing instant recall of previously-learned content is more impressive than showing the learning process itself**.

The original plan for the Block Mountain demo was to run `/learn` on KlakMath during the presentation, showcasing the Oracle's ability to explore and understand new codebases. But this would take time (cloning, analysis, synthesis) — precious seconds in a live demo where audience attention is finite.

The optimized approach: since KlakMath was already learned in a previous session, just read the existing documentation. Instant. The audience sees the Oracle "remember" rather than "learn" — and memory is actually the more impressive capability.

## The Pattern

```
IF demo_content already_learned:
    USE fast_path → cat existing_docs
    SAY "รู้จักครับ! เมื่อวานผมศึกษาไว้แล้ว"
ELSE:
    USE slow_path → /learn command
    (only for non-time-critical demos)
```

## Why This Matters

1. **Time efficiency**: Live demos need every step to be snappy
2. **Better narrative**: "Oracle remembers" aligns with the core philosophy of knowledge preservation
3. **Audience impact**: Instant recall is more magical than watching a loading process
4. **Philosophy alignment**: "Nothing is Deleted" — the Oracle accumulates knowledge

## Application

For any live demo involving previously-explored content:
- Check if content exists in `ψ/learn/`
- If yes, use fast path (direct read)
- If no, pre-learn before the demo event

## Tags

`demo`, `performance`, `live-presentation`, `fast-path`, `memory`, `block-mountain`
