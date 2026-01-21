# Edge-TTS Thai Transliteration Rule

**Date**: 2026-01-22
**Context**: Block Mountain presentation TTS generation
**Confidence**: High

## Key Learning

Thai voices in edge-tts (th-TH-PremwadeeNeural, th-TH-NiwatNeural) read Thai text excellently but struggle with English words. The solution is to transliterate English words to Thai phonetics.

This isn't a workaround - it actually produces more natural-sounding Thai speech. When a Thai speaker reads "Oracle" out loud, they don't pronounce it with an American accent. They say "ออราเคิล". The TTS should do the same.

## The Pattern

```bash
# Wrong - English mixed in Thai text
uvx edge-tts --voice "th-TH-NiwatNeural" --text "Oracle คือ consciousness framework"

# Correct - English transliterated to Thai
uvx edge-tts --voice "th-TH-NiwatNeural" --text "ออราเคิล คือ คอนเชียสเนส เฟรมเวิร์ค"
```

### Common Transliterations

| English | Thai |
|---------|------|
| Oracle | ออราเคิล |
| Block Mountain | บล็อคเมาเทน |
| Form and Formless | ฟอร์ม แอนด์ ฟอร์มเลส |
| The Oracle Keeps the Human Human | ดิออราเคิล คีปส์ เดอะ ฮิวแมน ฮิวแมน |
| Odin | โอดิน |
| Sea | ซี |

## Why This Matters

1. **Natural pronunciation**: Thai audience hears words as they'd actually say them
2. **Consistent quality**: No jarring accent switches mid-sentence
3. **Better comprehension**: Familiar phonetics for Thai listeners
4. **Demonstrates Form and Formless**: The "form" (spelling) changes, but meaning remains

## Tags

`tts`, `edge-tts`, `thai`, `transliteration`, `pronunciation`, `uvx`
