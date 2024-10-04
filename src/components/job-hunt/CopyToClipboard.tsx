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
          ? 'border-green-200 bg-green-100 text-emerald-800'
          : 'border-slate-300 bg-slate-100 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-600/20',
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
