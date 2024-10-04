'use client'

import { CopyToClipboard } from '@/components/job-hunt/CopyToClipboard'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react'
import clsx from 'clsx'

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
  const tabs = ['Job Post', 'Application']
  const panels = [jobPost, application]
  const [selectedTab, setSelectedTab] = useState<(typeof tabs)[number]>('Job Post')

  return (
    <section className="border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-600/20">
      <TabGroup selectedIndex={tabs.indexOf(selectedTab)} onChange={(index) => setSelectedTab(tabs[index])}>
        <TabList className="mb-4 flex gap-4">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className="rounded bg-black/20 px-3 py-1 text-sm/6 font-semibold text-white transition-all focus:outline-none data-[selected]:bg-black/70 data-[hover]:opacity-80 data-[selected]:data-[hover]:opacity-100 data-[focus]:outline-1 data-[focus]:outline-black/60 dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-white/10 dark:data-[selected]:data-[hover]:bg-white/10 dark:data-[focus]:outline-white/80"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <div className="mb-4 flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700">
            <div className="mb-1 flex flex-col">
              <h3 className="flex-1 text-xl font-bold leading-7">{company}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300">{position}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-100 flex-1">
              {panels.map((content, index) => (
                <TabPanel key={index} className="max-w-2xl">
                  {content}
                </TabPanel>
              ))}
            </div>
            <CopyToClipboard textTsx={application} />
          </div>
        </TabPanels>
      </TabGroup>
    </section>
  )
}
