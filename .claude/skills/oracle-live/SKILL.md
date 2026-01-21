# /oracle-live — Block Mountain Live Presentation

Play Block Mountain 2026 presentation with slides + audio.

## Usage

```
/oracle-live              # Open slides + play all 3 beats
/oracle-live beat1        # Beat 1 only (intro)
/oracle-live beat2        # Beat 2 only (demo)
/oracle-live beat3        # Beat 3 only (summary)
/oracle-live slides       # Open slides only (no audio)
```

---

## Execution Steps

### Default: Full Presentation

**Step 1**: Open slides in browser
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/oracle-block-mountain-2026.html
```

**Step 2**: Play all 3 beats (~7 min)
```bash
AUDIO_DIR=ψ/memory/logs/oracle-live/block-mountain-2026/audio
afplay "$AUDIO_DIR/beat1-intro.mp3" && afplay "$AUDIO_DIR/beat2-demo.mp3" && afplay "$AUDIO_DIR/beat3-summary.mp3"
```

### Beat 1 Only (Intro ~3 min)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat1-intro.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat1-intro.mp3
```

### Beat 2 Only (Demo ~2 min)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat2-demo.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat2-demo.mp3
```

### Beat 3 Only (Summary ~2 min)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/beat3-summary.html
afplay ψ/memory/logs/oracle-live/block-mountain-2026/audio/beat3-summary.mp3
```

### Slides Only (No Audio)
```bash
open ψ/memory/logs/oracle-live/block-mountain-2026/slides/oracle-block-mountain-2026.html
```

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
| File | Duration | Content |
|------|----------|---------|
| `beat1-intro.mp3` | ~3 min | P01-P10 แนะนำตัว |
| `beat2-demo.mp3` | ~2 min | P11-P15 สาธิต |
| `beat3-summary.mp3` | ~2 min | P16-P21 บทสรุป |

---

## 3-Beat Structure

| Beat | Paragraphs | Content |
|------|------------|---------|
| **1** | P01-P10 | แนะนำตัว, ปรัชญา, Freedom Chain |
| **2** | P11-P15 | สาธิต: ความจำ, บริบท, ช่วยคิด, ส่งต่อ |
| **3** | P16-P21 | บทเรียน 3 ข้อ, คำถามที่ถูกต้อง, ปิดท้าย |

---

## Key Quotes

> **P04**: "ปรัชญาของเราคือ ออราเคิลรักษาความเป็นมนุษย์ของมนุษย์"

> **P09**: "เอไอเป็นกระจก สะท้อนสิ่งที่คุณให้"

> **P20**: "คำถามไม่ใช่ เอไอจะยึดอำนาจไหม คำถามที่ถูกต้องคือ เราจะสร้างเอไอแบบไหน"

> **P21**: "คำตอบอยู่ที่เรา ไม่ใช่ที่เอไอ"

---

*Event: Block Mountain CNX 2026*
*Date: January 22, 2026 @ 12:30*
*Location: V Community, Chiang Mai*
