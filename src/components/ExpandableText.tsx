"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ExpandableTextProps {
  children: React.ReactNode
  maxHeight?: number
  className?: string
  expandButtonText?: string
  collapseButtonText?: string
  showIcon?: boolean
}

export function ExpandableText({
  children,
  maxHeight = 70,
  className,
  expandButtonText = "Read more",
  collapseButtonText = "Show less",
  showIcon = true,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsExpansion, setNeedsExpansion] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setNeedsExpansion(contentRef.current.scrollHeight > maxHeight)
    }
  }, [children, maxHeight])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={cn("space-y-0.5", className)}>
      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden text-base transition-all duration-300",
          !isExpanded && needsExpansion && "max-h-[var(--max-height)]",
        )}
        style={{ "--max-height": `${maxHeight}px` } as React.CSSProperties}
      >
        {children}
      </div>

      {needsExpansion && (
        <Button variant="link" size="sm" onClick={toggleExpand} className="p-0">
          {isExpanded ? collapseButtonText : expandButtonText}
          {showIcon && (isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
        </Button>
      )}
    </div>
  )
}
