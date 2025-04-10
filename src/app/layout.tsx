import { cn } from "@/lib/utils"
import "@/styles/prism.css"
import "@/styles/global.css"

import { GeistSans } from "geist/font/sans"
import { type Metadata } from "next"
import { Providers } from "@/app/providers"
import { Layout } from "@/components/Layout"

export const metadata: Metadata = {
  title: {
    template: "Francisco Gonçalves - %s",
    default: "Francisco Gonçalves",
  },
  description:
    "I’m Francisco, a software engineer based in Porto, Portugal. I am currently working at Jumpseller as a full-stack engineer, where we develop an e-commerce store platform for customers to create and deeply customize online stores.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full antialiased", GeistSans.className)}>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
