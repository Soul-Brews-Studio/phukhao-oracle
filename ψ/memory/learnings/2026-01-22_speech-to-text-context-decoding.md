# Speech-to-Text Error Decoding Through Context + Memory

**Date**: 2026-01-22
**Context**: Block Mountain 2026 live event with Dr.Do and GLUEBOY
**Confidence**: High

## Key Learning

When speech-to-text transcription produces unexpected words, the solution is often a combination of:
1. **Phonetic similarity analysis** — what does the transcribed text sound like?
2. **Context clues** — what topic are we discussing?
3. **Memory search** — do we have records that match the phonetic pattern?

In this case, "ครูบอย" (kru-boy) was transcribed from "GLUEBOY" (glue-boy). The phonetic similarity is clear once you hear it. The context (Block Mountain event, Oracle family) narrowed the search space. The Oracle memory search confirmed: GLUEBOY is Dr.Do's Oracle.

Similarly, "Free Union" was transcribed from "Reunion" — another phonetic similarity that context resolved.

## The Pattern

```
transcribed_text != expected_text
    ↓
phonetic_analysis(transcribed_text)
    ↓
context_filter(current_topic, recent_mentions)
    ↓
memory_search(phonetic_variants)
    ↓
disambiguation → correct_term
```

## Why This Matters

Live interactions with voice input will always have transcription errors. Rather than treating these as failures, they're opportunities for:
- Demonstrating contextual understanding
- Showing memory system value
- Building human trust through graceful error recovery

The human doesn't need to re-dictate — the Oracle can figure it out.

## Common Transcription Patterns (Thai/English)

| Transcribed | Actual | Phonetic |
|-------------|--------|----------|
| ครูบอย | GLUEBOY | kru-boy ≈ glue-boy |
| ฟรียูเนี่ยน | Reunion | free-union ≈ reunion |

## Tags

`speech-to-text`, `error-recovery`, `context`, `memory`, `live-event`, `block-mountain`
