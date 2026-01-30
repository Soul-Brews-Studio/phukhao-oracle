/**
 * ConnectWallet Component
 *
 * React component for SIWE wallet connection.
 * Shows connect button when not authenticated, address when authenticated.
 * Styled for Phukhao Oracle's cyber theme.
 */

import { useStore } from '@nanostores/react'
import { useEffect } from 'react'
import {
  $userAddress,
  $isConnecting,
  $authError,
  $shortAddress,
  checkSession,
  connectWallet,
  disconnectWallet
} from '../stores/auth'

export default function ConnectWallet() {
  const address = useStore($userAddress)
  const isConnecting = useStore($isConnecting)
  const error = useStore($authError)
  const shortAddress = useStore($shortAddress)

  // Check session on mount
  useEffect(() => {
    checkSession()
  }, [])

  // Connected state - show address and disconnect button
  if (address) {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-mono text-cyan-400 ring-1 ring-cyan-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {shortAddress}
        </span>
        <button
          onClick={disconnectWallet}
          className="rounded-lg px-3 py-1.5 text-xs font-mono text-gray-400 ring-1 ring-gray-700 transition hover:bg-gray-800 hover:text-gray-200 cursor-pointer"
        >
          EXIT
        </button>
      </div>
    )
  }

  // Not connected - show connect button
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={connectWallet}
        disabled={isConnecting}
        className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-1.5 text-xs font-mono text-black font-bold transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isConnecting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            CONNECTING
          </span>
        ) : (
          'CONNECT'
        )}
      </button>
      {error && (
        <p className="text-xs text-red-400 max-w-[150px] truncate" title={error}>{error}</p>
      )}
    </div>
  )
}
