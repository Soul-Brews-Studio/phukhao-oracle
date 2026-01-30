# Controlling Reveal.js in iframe via postMessage

**Date**: 2026-01-30
**Context**: Phukhao Oracle self-playing presentation
**Confidence**: High

## Key Learning

When embedding Reveal.js slides in an iframe and controlling them from a parent page, you cannot directly access `iframe.contentWindow.Reveal` due to browser security restrictions. Even for same-origin content, this approach is fragile and fails in many development scenarios.

The correct pattern is to use the postMessage API:

1. **Parent page** sends JSON commands via `postMessage`
2. **Iframe** listens for messages and dispatches to Reveal.js
3. **Critical**: Disable Reveal.js built-in keyboard/touch handling to prevent double-advancement

## The Pattern

### Parent Page (Controller)
```javascript
// Advance to next slide
function advanceSlide() {
  const iframe = document.getElementById('slides-frame')
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(JSON.stringify({ method: 'next' }), '*')
  }
}

// Go to specific slide by index
function goToSlide(index) {
  const iframe = document.getElementById('slides-frame')
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(JSON.stringify({ method: 'slide', args: [index] }), '*')
  }
}

// Keyboard handler - MUST preventDefault to avoid duplicate handling
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    e.stopPropagation()
    advanceSlide()
  }
})
```

### Iframe (Reveal.js Slides)
```javascript
// Initialize with controls DISABLED
Reveal.initialize({
  hash: true,
  transition: 'none',
  keyboard: false,    // CRITICAL: Disable built-in keyboard
  touch: false,       // CRITICAL: Disable built-in touch
  controls: false,    // CRITICAL: Disable UI controls
  postMessage: true,
  postMessageEvents: true
});

// Listen for parent commands
window.addEventListener('message', function(event) {
  try {
    var data = JSON.parse(event.data);
    if (data.method === 'next') {
      Reveal.next();
    } else if (data.method === 'prev') {
      Reveal.prev();
    } else if (data.method === 'slide') {
      Reveal.slide(data.args[0]);
    }
  } catch (e) {
    // Ignore non-JSON messages
  }
});
```

## Why This Matters

Without disabling Reveal.js built-in handlers, you get the "double-advance" bug where pressing arrow keys causes slides to jump 2 at a time (1→3→5→7). This happens because:

1. Parent keyboard handler catches arrow key → calls `advanceSlide()` → sends postMessage → Reveal.next()
2. Meanwhile, Reveal.js keyboard handler in iframe ALSO catches the arrow key → Reveal.next()

Both fire, causing two advances per keypress.

The solution is explicit coordination: parent owns all input handling, iframe is a passive receiver of commands.

## Tags

`reveal.js`, `iframe`, `postMessage`, `keyboard-events`, `presentation`, `web-api`
