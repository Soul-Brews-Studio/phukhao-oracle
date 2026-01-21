---
title: # Phukhao Learned: keijiro/KlakMath
tags: [klakmath, unity, keijiro, learn, block-mountain, demo]
created: 2026-01-21
source: Phukhao Oracle - /learn keijiro/KlakMath
---

# # Phukhao Learned: keijiro/KlakMath

# Phukhao Learned: keijiro/KlakMath

**Date**: 2026-01-21
**For**: Block Mountain 2026 Demo

## What It Is

Unity Mathematics extension library by keijiro:
- **CdsTween** — Critically damped spring tweening
- **ExpTween** — Exponential decay tweening
- **Noise** — Perlin-like gradient noise + fractal
- **XXHash** — Deterministic PRNG with geometric utils
- **Rotation** — Vector-to-vector rotation

## Quick Usage

```csharp
using Klak.Math;

// Tweening
var state = CdsTween.Step((pos, vel), target, speed: 5f);

// Random
var hash = new XXHash(seed);
var point = hash.InSphere(data);

// Noise
var n = Noise.Fractal(x, octave: 4, seed);
```

## Key Insights

1. Hermite Smoothing — `k * k * k` = smooth interpolation
2. Offset Seeding — `+0x10000000` = uncorrelated values
3. 147 stars, Unlicense

## Location

`ψ/learn/keijiro/KlakMath/` — 4 documentation files created

## Demo Response

"รู้จักครับ! เมื่อวานผมศึกษาไว้แล้ว — เป็น Unity extension library สำหรับ tweening, noise, และ deterministic random พร้อมทำงานได้เลย!"

---
*Added via Oracle Learn*
