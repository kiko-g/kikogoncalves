import type { Media } from "@/types"
import React, { useState } from "react"
import clsx from "clsx"

type Props = {
  media: Media
  additionalClassnames?: string
}

export function VideoComponent({ media, additionalClassnames }: Props) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && (
        <div className="min-w-full flex h-full w-full items-center justify-center lg:min-w-112">
          <div className="h-full w-full animate-pulse rounded-none bg-gray-400 py-36 dark:bg-zinc-50/50"></div>
        </div>
      )}
      <video
        controls
        muted
        preload="true"
        className={clsx("rounded-none shadow", additionalClassnames, loading ? "hidden" : "")}
        onLoadedData={() => setLoading(false)}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
