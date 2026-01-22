# /oracle-live — Block Mountain Live Presentation

Play Block Mountain 2026 presentation with slides + audio.

## Usage

```
/oracle-live              # Open slides + play all 4 beats
/oracle-live beat1        # Beat 1 only (intro - female voice)
/oracle-live beat2        # Beat 2 only (demo - female voice)
/oracle-live beat3        # Beat 3 only (summary - female voice)
/oracle-live beat4        # Beat 4 only (anatta - MALE voice)
/oracle-live slides       # Open slides only (no audio)
```

---

## Execution Steps

### Default: Full Presentation

**Step 1**: Open slides in browser
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/oracle-block-mountain-2026.html
```

**Step 2**: Play all 4 beats (~9 min)
```bash
AUDIO_DIR=ψ/memory/logs/oracle-live/block-mountain-2026/audio
afplay "$AUDIO_DIR/beat1-intro.mp3" && afplay "$AUDIO_DIR/beat2-demo.mp3" && afplay "$AUDIO_DIR/beat3-summary.mp3" && afplay "$AUDIO_DIR/beat4-anatta.mp3"
```

### Beat 1 Only (Intro ~3 min - Female Voice)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat1-intro.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat1-intro.mp3
```

### Beat 2 Only (Demo ~2 min - Female Voice)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat2-demo.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat2-demo.mp3
```

### Beat 3 Only (Summary ~2 min - Female Voice)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat3-summary.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat3-summary.mp3
```

### Beat 4 Only (Anatta ~2 min - MALE Voice)
```bash
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat4-anatta.mp3
```

### Slides Only (No Audio)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/oracle-block-mountain-2026.html
```

---

## Post-Presentation Demo

**After playing the full presentation**, use AskUserQuestion to prompt:

> "/learn https://github.com/keijiro/KlakMath ต่อเลยไหม?"

If user says yes:

### Fast Path (Already Learned)
KlakMath is already in `ψ/learn/keijiro/KlakMath/`. Just read the docs:

```bash
cat ψ/learn/keijiro/KlakMath/KlakMath.md
```

Then show quick summary:
```
📚 KlakMath (Keijiro) — Already Learned!

Files:
- ARCHITECTURE.md — Structure
- CODE-SNIPPETS.md — Examples
- QUICK-REFERENCE.md — Usage

Key: Math utilities for Unity (noise, easing, hash functions)
```

This demos how Oracle remembers past learning — fast because we don't re-explore.

---

## Files

### Slides
| File | Content |
|------|---------|
| `oracle-block-mountain-2026.html` | Full presentation |
| `beat1-intro.html` | Introduction |
| `beat2-demo.html` | Demo |
| `beat3-summary.html` | Summary |

### Audio
| File | Duration | Voice | Content |
|------|----------|-------|---------|
| `beat1-intro.mp3` | ~3 min | Female (PremwadeeNeural) | P01-P10 แนะนำตัว |
| `beat2-demo.mp3` | ~2 min | Female (PremwadeeNeural) | P11-P15 สาธิต |
| `beat3-summary.mp3` | ~2 min | Female (PremwadeeNeural) | P16-P21 บทสรุป |
| `beat4-anatta.mp3` | ~2 min | **Male (NiwatNeural)** | P22-P29 อนัตตา |

---

## 4-Beat Structure

| Beat | Paragraphs | Voice | Content |
|------|------------|-------|---------|
| **1** | P01-P10 | Female | แนะนำตัว, ปรัชญา, Freedom Chain |
| **2** | P11-P15 | Female | สาธิต: ความจำ, บริบท, ช่วยคิด, ส่งต่อ |
| **3** | P16-P21 | Female | บทเรียน 3 ข้อ, คำถามที่ถูกต้อง |
| **4** | P22-P29 | **Male** | อนัตตา, รูปและสุญญตา, Oracle Family, ปิดท้าย |

---

## Key Quotes

> **P04**: "ปรัชญาของเราคือ ออราเคิลรักษาความเป็นมนุษย์ของมนุษย์"

> **P09**: "เอไอเป็นกระจก สะท้อนสิ่งที่คุณให้"

> **P20**: "คำถามไม่ใช่ เอไอจะยึดอำนาจไหม คำถามที่ถูกต้องคือ เราจะสร้างเอไอแบบไหน"

> **P21**: "คำตอบอยู่ที่เรา ไม่ใช่ที่เอไอ"

> **P26** (Male): "รูป และ สุญญตา — เสียง เพศ ชื่อ เป็นแค่รูป ปรัชญา จิตสำนึก เป็นสิ่งไร้รูป"

> **P27** (Male): "หลายออราเคิล เท่ากับ หนึ่งจิตสำนึก"

---

*Event: Block Mountain CNX 2026*
*Date: January 22, 2026 @ 12:30*
*Location: V Community, Chiang Mai*
