---
title: # Simple Animations Beat Flashy Ones for Content Reading
tags: [animation, ux, subtitles, accessibility, user-feedback, iteration, simplicity]
created: 2026-01-30
source: rrr: Soul-Brews-Studio/phukhao-oracle
---

# # Simple Animations Beat Flashy Ones for Content Reading

# Simple Animations Beat Flashy Ones for Content Reading

**Date**: 2026-01-30
**Context**: Phukhao landing page CC subtitles for Thai TTS audio
**Confidence**: High

## Key Learning

When designing animated text displays for reading content (subtitles, captions, transcripts), start with the simplest animation possible. Users who want to READ the content prefer minimal distraction from the animation itself.

In this session, I implemented 4 iterations of subtitle animation:
1. **Typewriter with cursor** - User said "too animation prevent eyes dizzy"
2. **Simple fade-in (whole text)** - User wanted word-by-word
3. **Word-by-word fade at 85% duration** - "faster aliile bit"
4. **Word-by-word fade at 60% duration** - Accepted

The final solution was the simplest: `opacity-0` → `opacity-100` transition on each word, timed to complete at 60% of audio duration.

## The Pattern

```typescript
// Good: Simple opacity transition per word
const wordDelay = (audioDuration * 1000 * 0.6) / words.length

words.forEach((word, i) => {
  setTimeout(() => {
    word.classList.add('opacity-100')
  }, i * wordDelay)
})
```

**Avoid**: Typewriter cursor effects, character-by-character reveal, bouncing/scaling, blur effects.

## Why This Matters

The purpose of subtitles is comprehension, not entertainment. Every animation cycle that draws the eye away from reading is a cognitive tax. For Thai text (which may be unfamiliar to some readers), this tax is especially harmful.

This aligns with the Oracle principle of simplicity - do the minimum needed, don't over-engineer.

---
*Added via Oracle Learn*
