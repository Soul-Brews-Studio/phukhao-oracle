# Skill Demo Flow Pattern

**Date**: 2026-01-22
**Context**: Block Mountain 2026 presentation preparation
**Confidence**: High

## Key Learning

When building skills for live demos, include **post-action prompts** that guide the presenter to the next step. This creates a natural flow without requiring the presenter to remember the sequence.

The pattern works like this: after a skill completes its primary action, it uses AskUserQuestion to prompt continuation. For the oracle-live skill, after playing the 4-beat presentation, it asks: "/learn https://github.com/keijiro/KlakMath ต่อเลยไหม?"

This is particularly valuable for presentations where cognitive load is high — the speaker is focused on the audience, not remembering what command comes next.

## The Pattern

```markdown
## Post-Action Prompt

**After [primary action]**, use AskUserQuestion to prompt:

> "[Next command] ต่อเลยไหม?"

If user says yes, run:
\`\`\`
[next command]
\`\`\`
```

## Why This Matters

- **Reduces presenter cognitive load** — skill guides the flow
- **Creates natural transitions** — demo feels seamless to audience
- **Flexible** — presenter can skip or go different direction
- **Documented** — future users understand the intended flow

## Tags

`skills`, `demo`, `ux`, `presentation`, `flow`
