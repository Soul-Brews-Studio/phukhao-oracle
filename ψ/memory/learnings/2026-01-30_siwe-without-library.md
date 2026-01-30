# SIWE Authentication Without External Libraries

**Date**: 2026-01-30
**Context**: Implementing wallet auth for Phukhao Oracle landing page
**Confidence**: High

## Key Learning

Sign-In With Ethereum (SIWE/EIP-4361) can be implemented without the official `siwe` npm package by using `viem`'s `verifyMessage` function. This approach is lighter weight and gives full control over the authentication flow.

The critical insight is that SIWE messages are just structured text that gets signed via EIP-191 (personal_sign). The verification step uses standard Ethereum signature verification—`viem` handles this perfectly.

## The Pattern

```typescript
import { verifyMessage } from 'viem'

// 1. Create SIWE message (structured text)
const message = `${domain} wants you to sign in with your Ethereum account:
${address}

${statement}

URI: ${uri}
Version: 1
Chain ID: ${chainId}
Nonce: ${nonce}
Issued At: ${issuedAt}`

// 2. Request signature from wallet
const signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [message, address]
})

// 3. Verify server-side
const valid = await verifyMessage({
  address: address as `0x${string}`,
  message: message,
  signature: signature as `0x${string}`
})
```

## Session Tokens Without Database

For stateless sessions, HMAC-SHA256 works well:

```typescript
async function createSessionToken(address: string): Promise<string> {
  const payload = JSON.stringify({
    address,
    exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
  })
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(JWT_SECRET),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  return `${btoa(payload)}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`
}
```

## Why This Matters

1. **Smaller bundle**: No `siwe` package (~50KB) needed
2. **Full control**: Customize message format, validation logic
3. **Same security**: viem's verifyMessage is production-grade
4. **Framework agnostic**: Works in any JS environment

## Caveats

- Must manually format EIP-4361 message correctly
- Nonce management is your responsibility (KV storage recommended)
- No automatic domain/URI validation—implement yourself

## Tags

`web3`, `siwe`, `authentication`, `viem`, `ethereum`, `eip-4361`, `cloudflare-workers`
