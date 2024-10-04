'use client'

import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

export function CopyToClipboard({ textTsx }: { textTsx: React.ReactNode }) {
  const convertedText = extractTextFromReactNode(textTsx)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(convertedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [convertedText])

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        'flex max-h-8 items-center gap-1 rounded border px-2.5 py-0.5 text-sm transition',
        copied
          ? 'border-green-200 bg-green-100 text-emerald-800 dark:border-green-400/40 dark:bg-green-600/20 dark:text-emerald-50'
          : 'border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-600/20 dark:hover:bg-gray-700/20',
      )}
    >
      <span>{copied ? 'Copied' : 'Copy'}</span>
      {copied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}

function extractTextFromReactNode(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return node.toString()
  else if (Array.isArray(node)) return node.map(extractTextFromReactNode).join('')
  else if (React.isValidElement(node)) return extractTextFromReactNode(node.props.children)
  else return '' // Handle other types like null, undefined, boolean, etc.
}
