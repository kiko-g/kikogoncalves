import clsx from "clsx"
import "@/styles/prism.css"
import "@/styles/global.css"

import { Inter, Lexend } from "next/font/google"
import { type Metadata } from "next"
import { Providers } from "@/app/providers"
import { Layout } from "@/components/Layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s - Francisco Gonçalves",
    default: "Francisco Gonçalves - Part-Time Fullstack Developer, Full-Time Goofball",
  },
  description:
    "I’m Francisco, a software engineer based in Porto, Portugal. I am currently working at Jumpseller as a full-stack engineer, where we develop a platform for clients to create and deeply customize online stores.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={clsx("h-full antialiased", inter.variable, lexend.variable)}>
      <body className="flex h-full bg-navy-50 dark:bg-navy-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
