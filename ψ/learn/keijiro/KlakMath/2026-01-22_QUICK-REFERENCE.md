# KlakMath Quick Reference

**Date**: 2026-01-22
**Repository**: keijiro/KlakMath
**Version**: 2.1.1

## What It Does

KlakMath is a professional-grade extension library for Unity's Mathematics package that adds spring-based tweening, procedural noise generation, deterministic hashing, and rotation utilities. Zero allocations, BURST-compatible, SIMD-optimized.

## Installation

### Option 1: Package Manager UI
1. Open Package Manager
2. Click "+" → "Add from git URL"
3. Enter: `https://github.com/keijiro/KlakMath.git`

### Option 2: Manifest
```json
{
  "scopedRegistries": [{
    "name": "Keijiro",
    "url": "https://registry.npmjs.org",
    "scopes": ["jp.keijiro"]
  }],
  "dependencies": {
    "jp.keijiro.klak.math": "2.1.1"
  }
}
```

**Requirements**: Unity 2022.3+, com.unity.mathematics 1.2.6+

## Key Features

| Feature | Purpose | Best For |
|---------|---------|----------|
| **CdsTween** | Spring interpolation | Camera follows |
| **ExpTween** | Exponential decay | UI animations |
| **Noise** | Gradient noise (1D-4D) | Procedural terrain |
| **Noise.Fractal** | Multi-octave noise | Complex procedural |
| **XXHash** | Deterministic PRNG | Procedural spawning |
| **Rotation.FromTo** | Quaternion between vectors | Look-at |

## Usage Patterns

### 1. Camera Follow (CdsTween)
```csharp
using Klak.Math;

(float3 pos, float3 vel) state;

void Update() {
    state = CdsTween.Step(state, target.position, speed: 4f);
    transform.position = state.pos;
}
```

### 2. UI Animation (ExpTween)
```csharp
using Klak.Math;

void Update() {
    opacity = ExpTween.Step(opacity, target: 1f, speed: 3f);
}
```

### 3. Deterministic Spawn (XXHash)
```csharp
using Klak.Math;

void Spawn(uint seed) {
    var rng = new XXHash(seed);
    for (int i = 0; i < 10; i++) {
        var pos = rng.InSphere((uint)i) * 50f;
        var rot = rng.Rotation((uint)(i + 100));
        Instantiate(prefab, pos, rot);
    }
}
```

### 4. Procedural Noise
```csharp
using Klak.Math;

float height = Noise.Fractal(worldPos.x, worldPos.y, octave: 4, seed: 42);
```

### 5. Rotation Between Vectors
```csharp
using Klak.Math;

quaternion rot = Rotation.FromTo(currentDir, targetDir);
```

## Performance

- Zero allocations (all structs)
- Burst-compatible
- SIMD optimized
- Supports: `float`, `float2`, `float3`, `float4`, `quaternion`

## Namespace

```csharp
using Klak.Math;
```

## Links

- GitHub: https://github.com/keijiro/KlakMath
- License: Unlicense (public domain)
- Author: Keijiro Takahashi
