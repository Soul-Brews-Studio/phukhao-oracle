# KlakMath Code Snippets

**Date**: 2026-01-22
**Repository**: keijiro/KlakMath

## 1. Noise Generation

### Core 1D Gradient Noise

```csharp
public static float Float(float p, uint seed)
{
    var hash = new XXHash(seed);

    var i = (uint)((int)p + 0x10000000);
    var x = math.frac(p);

    // Hermite smoothing: k = 1 - t^2, then k = k^3
    var k = math.float2(x, 1 - x);
    k = 1 - k * k;
    k = k * k * k;

    // Random gradients at grid points
    var g = math.float2(hash.Float(-1, 1, i    ),
                        hash.Float(-1, 1, i + 1));

    var n = math.dot(k * g, math.float2(x, x - 1));
    return n * 2 * 32 / 27;
}
```

### Fractal Noise (Multi-octave)

```csharp
public static float Fractal(float p, int octave, uint seed)
{
    var f = 0.0f;
    var w = 1.0f;
    for (var i = 0; i < octave; i++)
    {
        f += w * Float(p, seed);
        p *= 2.0f;    // Frequency doubles
        w *= 0.5f;    // Amplitude halves
    }
    return f;
}
```

## 2. XXHash (Deterministic Random)

### Core Hash Calculation

```csharp
static uint CalculateHash(uint data, uint seed)
{
    var h32 = seed + PRIME32_5;
    h32 += 4U;
    h32 += data * PRIME32_3;
    h32 = rotl32(h32, 17) * PRIME32_4;
    h32 ^= h32 >> 15;
    h32 *= PRIME32_2;
    h32 ^= h32 >> 13;
    h32 *= PRIME32_3;
    h32 ^= h32 >> 16;
    return h32;
}
```

### Geometric Distribution

```csharp
// On unit circle
public float2 OnCircle(uint data)
{
    var phi = Float(math.PI * 2, data);
    return math.float2(math.cos(phi), math.sin(phi));
}

// Inside unit circle (uniform)
public float2 InCircle(uint data)
  => OnCircle(data) * math.sqrt(Float(data + 0x10000000));

// On unit sphere
public float3 OnSphere(uint data)
{
    var phi = Float(math.PI * 2, data);
    var z = Float(-1, 1, data + 0x10000000);
    var w = math.sqrt(1 - z * z);
    return math.float3(math.cos(phi) * w, math.sin(phi) * w, z);
}

// Inside unit sphere (uniform)
public float3 InSphere(uint data)
  => OnSphere(data) * math.pow(Float(data + 0x20000000), 1.0f / 3);
```

### Random Rotation

```csharp
public quaternion Rotation(uint data)
{
    var u1 = Float(data);
    var r1 = Float(math.PI * 2, data + 0x10000000);
    var r2 = Float(math.PI * 2, data + 0x20000000);
    var s1 = math.sqrt(1 - u1);
    var s2 = math.sqrt(    u1);
    var v = math.float4(s1 * math.sin(r1), s1 * math.cos(r1),
                        s2 * math.sin(r2), s2 * math.cos(r2));
    return math.quaternion(math.select(v, -v, v.w < 0));
}
```

## 3. Tweening

### Exponential Tween

```csharp
public static float Step(float x, float target, float speed, float dt)
  => math.lerp(target, x, math.exp(-speed * dt));
```

### Critically Damped Spring

```csharp
public static (float x, float v) Step((float x, float v) state, float target, float speed, float dt)
{
    var n1 = state.v - (state.x - target) * (speed * speed * dt);
    var n2 = 1 + speed * dt;
    var nv = n1 / (n2 * n2);
    return (state.x + nv * dt, nv);
}
```

### Quaternion with Closest Path

```csharp
public static (quaternion x, float4 v) Step((quaternion x, float4 v) state, quaternion target, float speed, float dt)
{
    if (math.dot(state.x, target) < 0) target.value *= -1;
    var n = Step((state.x.value, state.v), target.value, speed, dt);
    return (math.normalize(math.quaternion(n.x)), n.v);
}
```

## 4. Rotation Utilities

### FromTo Rotation

```csharp
public static quaternion FromTo(float3 v1, float3 v2)
{
    var a = math.cross(v1, v2);
    var v1v2 = math.dot(v1, v1) * math.dot(v2, v2);
    var w = math.sqrt(v1v2) + math.dot(v1, v2);
    return math.normalizesafe(math.quaternion(math.float4(a, w)));
}
```

## 5. Usage Examples

### Noise Visualization

```csharp
[BurstCompile]
static void UpdateVertices(in RawSpan<Vector3> buffer, float freq, int oct, float time, uint seed)
{
    var span = buffer.Span;
    for (var i = 0; i < span.Length; i++)
    {
        var x = math.remap(0, span.Length - 1, -1, 1, i);
        var y = Noise.Fractal((x + time) * freq, oct, seed);
        span[i] = math.float3(x, y, 0);
    }
}
```

### Tween Demo

```csharp
void Update()
{
    var p = transform.localPosition;
    var r = transform.localRotation;

    if (_type == TweenType.Exp)
    {
        p = ExpTween.Step(p, _target.p, _speed);
        r = ExpTween.Step(r, _target.r, _speed);
    }
    else
    {
        (p, _velocity.p) = CdsTween.Step((p, _velocity.p), _target.p, _speed);
        (r, _velocity.r) = CdsTween.Step((r, _velocity.r), _target.r, _speed);
    }

    transform.localPosition = p;
    transform.localRotation = r;
}
```
