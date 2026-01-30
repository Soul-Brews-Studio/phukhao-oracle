# Reveal.js PostMessage Double-Fire & Slide Counting

**Date**: 2026-01-30
**Context**: Debugging presentation auto-play where slides skipped 2+ at a time
**Confidence**: High

## Key Learning

When controlling Reveal.js in an iframe via postMessage, **disable Reveal.js's built-in postMessage handling** if you're using a custom handler. The library has built-in support (`postMessage: true`) that will ALSO process your messages, causing double-execution.

Additionally, **always count actual DOM elements** rather than trusting config comments. Logical section names (P01-P10) may not match physical slide counts (P08a, P08b, P08c, P08d = 4 slides, not 1).

## The Pattern

### Double-Fire Fix

```javascript
// In Reveal.js initialization (inside iframe):
Reveal.initialize({
  // WRONG - causes double-fire with custom handler
  postMessage: true,
  postMessageEvents: true,

  // CORRECT - let custom handler do all the work
  postMessage: false,
  postMessageEvents: false,

  keyboard: false,  // disable if controlling externally
  touch: false,
  controls: false
});

// Custom handler (the only one that should fire)
window.addEventListener('message', function(event) {
  var data = JSON.parse(event.data);
  if (data.method === 'next') Reveal.next();
  if (data.method === 'prev') Reveal.prev();
  if (data.method === 'slide') Reveal.slide(data.args[0]);
});
```

### Slide Counting

```javascript
// WRONG - trusting comments
slides: 10,  // P01-P10

// CORRECT - count actual <section> elements
// P01, P02, P03, P04, P05, P06, P07, P08a, P08b, P08c, P08d, P09, P10 = 13
slides: 13,
startSlide: 0,   // Beat 1 starts at index 0
startSlide: 13,  // Beat 2 starts at index 13 (not 10!)
```

## Why This Matters

1. **Double-fire is silent**: No error, just slides advance twice
2. **Timing calculations break**: If you calculate `delay = duration / (slides - 1)` with wrong slide count, timing drifts
3. **Hard to debug visually**: Slides moving fast look like "skipping" not "double-advancing"

## Debugging Approach

1. **Use Playwright** to capture screenshots at regular intervals
2. **Check frame-by-frame** to see if slides advance 1 or 2 at a time
3. **Look at library configs** for built-in message handling
4. **Count actual DOM elements** with `document.querySelectorAll('section').length`

## Tags

`reveal.js`, `postMessage`, `iframe`, `debugging`, `presentation`, `double-fire`, `slide-counting`
