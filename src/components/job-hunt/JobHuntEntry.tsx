"use client"

import { useState } from "react"
import { CopyToClipboard } from "@/components/job-hunt/CopyToClipboard"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"

export function JobHuntEntry({
  company,
  position,
  application,
  jobPost,
}: {
  company: string
  position: string
  application: React.ReactNode
  jobPost: React.ReactNode
}) {
  const tabs = ["Job Post", "Application"]
  const panels = [jobPost, application]
  const [selectedTab, setSelectedTab] = useState<(typeof tabs)[number]>("Job Post")

  return (
    <section className="border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-600/20">
      <TabGroup selectedIndex={tabs.indexOf(selectedTab)} onChange={(index) => setSelectedTab(tabs[index])}>
        <TabList className="mb-4 flex gap-4">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className="rounded bg-zinc-950 px-3 py-1 text-sm/6 font-semibold text-white opacity-50 transition-all data-[hover]:opacity-80 data-[selected]:data-[hover]:opacity-100 data-[selected]:opacity-100 dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-zinc-50 dark:data-[selected]:text-zinc-950 dark:data-[selected]:data-[hover]:opacity-80"
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <div className="mb-4 flex items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-700">
            <div className="mb-1 flex flex-col">
              <h3 className="flex-1 text-xl font-bold leading-7">{company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{position}</p>
            </div>
          </div>

          <div className="flex gap-3">
            {panels.map((content, index) => (
              <TabPanel key={`${company}-${position}-${index}`} className="w-100 flex flex-1 gap-3">
                <div className="w-100 flex-1">
                  <article className="max-w-2xl">{content}</article>
                </div>
                <CopyToClipboard textTsx={content} />
              </TabPanel>
            ))}
          </div>
        </TabPanels>
      </TabGroup>
    </section>
  )
}
