# KlakMath Architecture

**Date**: 2026-01-22
**Repository**: keijiro/KlakMath
**Version**: 2.1.1

## Directory Structure

```
KlakMath/
├── Packages/
│   └── jp.keijiro.klak.math/          # Main package
│       ├── Runtime/                    # Core implementation
│       │   ├── CdsTween.cs            # Critically damped spring tweening
│       │   ├── ExpTween.cs            # Exponential tweening
│       │   ├── Noise.cs               # Gradient noise functions
│       │   ├── XXHash.cs              # Hash-based PRNG
│       │   ├── Rotation.cs            # Rotation helpers
│       │   ├── RandomExtensions.cs    # Random utility extensions
│       │   └── Klak.Math.asmdef       # Assembly definition
│       ├── package.json               # Package manifest
│       ├── README.md                  # Documentation
│       └── CHANGELOG.md               # Version history
├── Assets/                             # Demo/test scenes
│   ├── Tween/                          # Tweening demos
│   ├── Noise/                          # Noise demos
│   ├── XXHash/                         # Hash demos
│   └── Random/                         # Random demos
└── ProjectSettings/                    # Unity config
```

## Entry Points (Core Classes)

| Class | File | Purpose |
|-------|------|---------|
| `CdsTween` | CdsTween.cs | Critically damped spring interpolation |
| `ExpTween` | ExpTween.cs | Exponential interpolation |
| `Noise` | Noise.cs | Gradient noise generation |
| `XXHash` | XXHash.cs | Deterministic hashing and PRNG |
| `Rotation` | Rotation.cs | Rotation operations |
| `RandomExtensions` | RandomExtensions.cs | Extension methods for Unity Random |

## Core Abstractions

### 1. Interpolation / Tweening

**CdsTween** - Critically damped spring model
- Uses tuple-based state: `(float x, float v)`
- Supports: `float`, `float2`, `float3`, `float4`, `quaternion`
- Methods: `Step(state, target, speed, [dt])`
- Use case: Smooth camera movements, object following

**ExpTween** - Exponential decay interpolation
- Stateless - only tracks current and target
- Supports: `float`, `float2`, `float3`, `float4`, `quaternion`
- Methods: `Step(current, target, speed, [dt])`
- Use case: Simple smooth transitions

### 2. Noise Generation

**Noise** - 1D Perlin-like gradient noise
- Static class with seed-based deterministic output
- Methods: `Float()`, `Float2()`, `Float3()`, `Float4()`
- Fractal: `Fractal()`, `Fractal2()`, `Fractal3()`, `Fractal4()`
- Rotation: `Rotation()`, `FractalRotation()`

### 3. Hash-Based PRNG

**XXHash** - Read-only struct for deterministic random
- Constructor takes seed value
- Implements XXHash32 algorithm
- Output types: UInt, Bool, Int, Float
- Geometric: `OnCircle()`, `InCircle()`, `OnSphere()`, `InSphere()`, `Rotation()`

### 4. Rotation Helpers

**Rotation** - Minimal rotation utilities
- `FromTo(v1, v2)` - Quaternion rotating from v1 to v2

## Dependencies

```json
{
  "name": "jp.keijiro.klak.math",
  "version": "2.1.1",
  "unity": "2022.3",
  "dependencies": {
    "com.unity.mathematics": "1.2.6"
  }
}
```

## Design Patterns

1. **Static Utility Classes** - All functionality as static methods
2. **Method Overloading** - Single name, variants for scalar/vector
3. **Struct-based State** - Tuple states for tweening
4. **Seed-based Determinism** - XXHash and Noise use seeds
5. **BURST-Compatible** - All types are blittable
6. **Default Delta Time** - Methods default to `Time.deltaTime`
