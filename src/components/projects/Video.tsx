import type { Media } from "@/types"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  media: Media
  additionalClassnames?: string
}

export function VideoComponent({ media, additionalClassnames }: Props) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && (
        <div className="min-w-full flex h-full w-full items-center justify-center rounded-md lg:min-w-112">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-gray-500 dark:bg-gray-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="size-12 animate-spin text-gray-100 dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r"></div>
          </div>
        </div>
      )}
      <video
        controls
        muted
        preload="true"
        className={cn("rounded-md shadow", additionalClassnames, loading ? "hidden" : "")}
        onLoadedData={() => setLoading(false)}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
