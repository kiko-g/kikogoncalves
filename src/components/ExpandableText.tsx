"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, EllipsisIcon } from "lucide-react"
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
      // Check if content height exceeds maxHeight
      setNeedsExpansion(contentRef.current.scrollHeight > maxHeight)
    }
  }, [children, maxHeight])

  useEffect(() => {
    if (!isExpanded && contentRef.current) {
      // When collapsing, scroll the content to the top after transition
      const timer = setTimeout(() => {
        if (contentRef.current) contentRef.current.scrollTop = 0
      }, 200) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={cn("space-y-0.5", className)}>
      <div className="relative">
        <div
          ref={contentRef}
          className={cn(
            "duration-50 overflow-hidden text-base transition-all ease-in-out",
            !isExpanded && needsExpansion && "max-h-[var(--max-height)]",
            isExpanded && "max-h-[2000px]", // Use a value larger than content would ever be
          )}
          style={{ "--max-height": `${maxHeight}px` } as React.CSSProperties}
        >
          {children}
        </div>
      </div>

      {needsExpansion && (
        <Button
          variant="link"
          size="2xs"
          onClick={toggleExpand}
          className={cn("p-0", !isExpanded && "text-muted-foreground")}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
          {showIcon && (isExpanded ? <ChevronUp /> : <EllipsisIcon />)}
        </Button>
      )}
    </div>
  )
}
