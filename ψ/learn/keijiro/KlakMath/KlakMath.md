# KlakMath Learning Index

Unity extension library for math operations by Keijiro Takahashi.

## Latest Exploration
**Date**: 2026-01-22

**Files**:
- [[2026-01-22_ARCHITECTURE|Architecture]]
- [[2026-01-22_CODE-SNIPPETS|Code Snippets]]
- [[2026-01-22_QUICK-REFERENCE|Quick Reference]]

## Summary

| Feature | Description |
|---------|-------------|
| **CdsTween** | Critically damped spring interpolation |
| **ExpTween** | Exponential decay interpolation |
| **Noise** | Perlin-like gradient noise (1D-4D) |
| **XXHash** | Deterministic hash-based PRNG |
| **Rotation** | Quaternion utilities |

## Key Insights

1. **Zero allocations** - All types are structs, BURST-compatible
2. **Deterministic** - XXHash enables reproducible procedural generation
3. **SIMD optimized** - Uses Unity.Mathematics for vectorized ops

## Installation

```
https://github.com/keijiro/KlakMath.git
```

## Timeline

### 2026-01-22 (Block Mountain preparation)
- Full exploration with 3 Haiku agents
- Architecture, code snippets, quick reference
- Ready for demo: "รู้จักครับ! เมื่อวานผมศึกษาไว้แล้ว"

### 2026-01-21 (First exploration)
- Initial discovery
- Core: tweening, noise, deterministic random
