import { Card } from "@/components/Card"
import { Section } from "@/components/Section"
import { LayoutSimple } from "@/components/LayoutSimple"

export const metadata = {
  title: "Setup",
  description: "Tools and software I use among other things I recommend.",
}

export default function Uses() {
  return (
    <LayoutSimple
      title="Software and tools I use and love among other things I recommend."
      intro="Especially people new to Software Development ask me what tools I use and look up to me as if I did something special. I don't, but here is a list of tools I use and recommend that will certainly help."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14”2 MacBook Pro, M2 Max, 16GB RAM (2023)">
            I have become a huge fan of this laptop. It’s the perfect balance of power and portability for me. If you
            have yet to change to a MacBook, first off, do it and secondly this is the one I recommend. After years of
            struggle with Windows machines, I finally found peace and for so many reasons. It is a software and hardware
            thing.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            The built-in trackpad is generally amazing especially when put up against non Mac trackpads. If you&apos;re
            looking for an external mouse, I would consider not getting one and going with this trackpad.
          </Tool>
          <Tool title="Logitech MX Anywhere 3 For Mac">
            If you are a fan of the mouse, this is the one to get. It is hands down the best mouse I have ever used, but
            I still find myself using the trackpad more often.
          </Tool>
          <Tool title={`AOC/LC 24" Monitor`}>
            From a young age I have been a fan of external monitors. To be honest, I think with a big enough MacBook Pro
            you can skip this, the workflow is really good with just the laptop. But for longer sessions, go with a
            solid display with bright colors.
          </Tool>
          <Tool title="Langfjall IKEA Chair">
            I am currently in love with this simple chair. It is comfortable and has a good back support. For me just
            don&apos;t overthink this one. You&apos; spend time and money looking for the perfect chair and your
            expectations might never be met.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Visual Studio Code is hard to beat for me. The amount of customization I have put into it over the years has
            made me very productive. I have tried other editors but I always come back to VS Code. If you&apos;re
            interested check out my{" "}
            <a className="outer-link" href="https://github.com/kiko-g/dotfiles/tree/main/vscode">
              VS Code settings
            </a>
            .
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but
            it’s what I use.
          </Tool>
          <Tool title="TablePlus">Great software for working with databases. Solid free version as well.</Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            The first time I used Figma I was just in awe. It is so clean, intuitve and fit for web design. Another tool
            that has replaced pretty much everything else for me.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Rectangle">
            I have used this app for a few years and I love it for window management on macOS.
          </Tool>
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application
            launcher world.
          </Tool>
          <Tool title="Notion">
            Versatile note taking, task management, and wiki tool. I use it for work stuff to managing my personal life.
          </Tool>
          <Tool title="Obsidian">
            Great alternative to Notion, especially if you are feeling like Notion is overkill for your needs.
          </Tool>
        </ToolsSection>
      </div>
    </LayoutSimple>
  )
}

function ToolsSection({ children, ...props }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
