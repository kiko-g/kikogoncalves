import { ExternalLinkIcon } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    { name: "Git", years: "5y" },
    { name: "HTML/CSS/JS", years: "4y" },
    { name: "ReactJS", years: "4y" },
    { name: "NodeJS", years: "4y" },
    { name: "TypeScript", years: "3y" },
    { name: "TailwindCSS", years: "3y" },
    { name: "SQL", years: "3y" },
    { name: "Redux", years: "1y" },
    { name: "Next.js", years: "3y" },
    { name: "Ruby/Rails", years: "1.5y" },
    { name: "Gatsby.js", years: "1y" },
    { name: "Vue.js", years: "1y" },
    { name: "PHP", years: "1y" },
    { name: "Python", years: "3y" },
    { name: "Java", years: "2y" },
    { name: "C/C++", years: "2y" },
    { name: "Docker", years: "2y" },
    { name: "Scala, Rust, C#, Angular, GraphQL", years: "0.5y" },
  ]

  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Proficient | CAE C1 Level, 2016" },
    { name: "Spanish", level: "Intermediate understanding" },
    { name: "French", level: "Basic understanding" },
  ]

  return (
    <div id="skills">
      <h2 className="mb-1 mt-2 border-b pb-0.5 text-2xl font-bold leading-none">Skills</h2>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <a className="flex w-[100px] flex-shrink-0 items-center gap-1 hover:opacity-70" href="/about#skills">
            <h2 className="text-base font-semibold">Technical</h2>
            <ExternalLinkIcon className="size-4" />
          </a>
          <div className="flex flex-wrap gap-x-2">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium">{skill.name}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-300">{skill.years}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            className="flex w-[100px] flex-shrink-0 items-center gap-1 hover:opacity-70"
            href="https://linkedin.com/kikogoncalves_"
          >
            <h2 className="text-base font-semibold">Languages</h2>
          </a>

          <div className="flex flex-wrap gap-x-4">
            {languages.map((language, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium">{language.name}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-300">{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
