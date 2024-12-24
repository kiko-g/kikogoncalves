import Link from "next/link"
import { type Metadata } from "next"
import { LayoutSimple } from "@/components/LayoutSimple"
import { JobHuntEntry } from "@/components/job-hunt/JobHuntEntry"

export const metadata: Metadata = {
  title: "Job Hunt",
  description:
    "This is a playground for me to test out different job hunt strategies and tactics. I'll be sharing my progress and learnings here",
}

export default function JobHunt() {
  const jobHuntEntries = [
    {
      company: "Decipad",
      position: "Frontend Developer",
      jobPost: (
        <>
          <h2 className="mb-2 text-xl font-bold">Who you are</h2>
          <ul className="list-disc pl-4">
            <li>Experience in building productivity tools</li>
            <li>Experience developing React and React Native applications</li>
            <li>Knowledge in SaaS billing, management, and APIs</li>
            <li>Understanding of modern JS application packaging</li>
            <li>Worked in open source software before (nice to have)</li>
          </ul>
          <h2 className="mb-2 mt-4 text-xl font-bold">What the job involves</h2>
          <ul className="list-disc pl-4">
            <li>Develop open-source libraries</li>
            <li>Implement rich no-code and low-code interactions alongside our designers</li>
            <li>Work with the product team to make the process of manipulating data super simple for our users</li>
            <li>Craft well-documented, reusable, testable code</li>
            <li>Be responsible for creating a product that is fast, responsive, and accessible</li>
            <li>Be responsive for our Slate.js Notebook Implementation</li>
          </ul>
          <h2 className="mb-2 mt-4 text-xl font-bold">Application process</h2>
          <p>
            Send us your portfolio showcasing your work on complex web applications, along with a few lines explaining
            why you&apos;re excited to join Decipad. Bonus points if you have explored our product (app.decipad.com)
          </p>
        </>
      ),
      application: (
        <p>
          I’m excited about the opportunity at Decipad because your innovative approach to digital storytelling and data
          visualization aligns perfectly with my interests. The focus on creativity and innovation resonates with me, as
          I love exploring new ways to create user-friendly digital tools. I believe my skills and passion for frontend
          development match the job description well, and I’m confident I can contribute significantly to Decipad&apos;s
          product. You can check out my technical profile and experience in my CV (
          <Link href="kikogoncalves.com/cv.pdf" className="outer-link">
            kikogoncalves.com/cv.pdf
          </Link>
          ) and portfolio (
          <Link href="kikogoncalves.com/projects" className="outer-link">
            kikogoncalves.com/projects
          </Link>
          ), which showcase projects that align well with this opportunity.
        </p>
      ),
      link: "kikogoncalves.com/cv.pdf",
    },
    {
      company: "Augusta Labs",
      position: "Full Stack Developer",
      jobPost: (
        <>
          <h2 className="mb-2 text-xl font-bold">About Augusta Labs</h2>
          <p className="mb-2">
            Augusta Labs exists to transform forward-thinking businesses using cutting-edge AI solutions while creating
            the best hub of young talent in Portugal. We’re building a market-leading AI consulting practice, known for
            deeply understanding our clients’ problems and delivering custom solutions. Along the way, we’re creating
            and spinning out AI-powered products that change industries.
          </p>
          <p className="mb-2">
            We are fast-moving, highly ambitious, and love shipping. We are on a rocket trajectory, working with
            multi-billion-dollar companies to bring them to the AI age, building spin-off products, and are having a
            blast doing it.
          </p>

          <h2 className="mb-2 mt-4 text-xl font-bold">Why Join Augusta Labs?</h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Ownership</strong>: You&apos;ll be directly involved in building MVPs, leading projects, and even
              owning spin-out products that come from your work.
            </li>
            <li>
              <strong>Growth Opportunities</strong>: Expect to grow alongside us, taking on more responsibilities as we
              scale. The more you give, the more you&apos;ll get.
            </li>
            <li>
              <strong>Ambitious Culture</strong>: We thrive on moving fast, iterating often, and shipping constantly.
              Work with top-tier clients and deliver AI solutions that reshape industries.
            </li>
            <li>
              <strong>Real Impact</strong>: Be part of a company that is transforming how businesses leverage AI. And be
              at the cutting edge of a sector that&apos;s redefining industries.
            </li>
          </ul>

          <h2 className="mb-2 mt-4 text-xl font-bold">About the Role</h2>
          <p className="mb-2">
            As a Full Stack Engineer at Augusta Labs, you will play a critical role in building and deploying innovative
            applications that power AI-driven solutions for our clients. You&apos;ll work across the stack,
            collaborating with multiple teams to bring prototypes to life and scale them into fully-fledged products.
          </p>

          <h2 className="mb-2 mt-4 text-xl font-bold">Key Responsibilities</h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Full Stack Development</strong>: Build and maintain scalable web applications from front-end to
              backend.
            </li>
            <li>
              <strong>API & Model Integration</strong>: Design APIs and integrate AI/ML models into applications for
              seamless functionality.
            </li>
            <li>
              <strong>Frontend & Backend</strong>: Develop intuitive UIs using modern frameworks (Next.js, Nuxt.js) and
              scalable backend services (Node.js, Django).
            </li>
            <li>
              <strong>Database Management</strong>: Design and optimize SQL/NoSQL databases for performance and
              scalability.
            </li>
            <li>
              <strong>Cloud Deployment</strong>: Deploy and manage applications on cloud platforms (AWS, GCP, Azure).
            </li>
            <li>
              <strong>Collaboration</strong>: Work closely with AI engineers, project managers, and clients to deliver
              solutions that meet business needs.
            </li>
          </ul>

          <h2 className="mb-2 mt-4 text-xl font-bold">Qualifications</h2>
          <ul className="list-disc pl-4">
            <li>
              Experience as a Full Stack Engineer, with a strong understanding of both frontend and backend
              technologies.
            </li>
            <li>
              Proficiency in modern frontend frameworks (Next.js, Nuxt.js) and backend technologies (Node.js, Django, or
              similar).
            </li>
            <li>
              Experience working with cloud platforms such as AWS, Azure, or GCP, particularly for deploying scalable
              applications.
            </li>
            <li>Strong understanding of API development, microservices architecture, and database management.</li>
            <li>
              Ability to work in a fast-paced environment, taking ownership of projects and seeing them through from
              start to finish.
            </li>
            <li>Knowledge of integrating AI/ML models into full stack systems is a plus.</li>
          </ul>

          <h2 className="mb-2 mt-4 text-xl font-bold">What you won’t Get</h2>
          <p className="mb-2">
            You won’t get a safety net. You won’t get endless rounds of “feedback.” You’ll be given trust, ownership,
            and the freedom to experiment—and we expect you to deliver.
          </p>
          <p className="mb-2">
            We’re not building a company that fits into some neat corporate mold. We’re breaking the mold and creating
            something entirely different. If that sounds terrifying, then this isn’t the place for you. But if that
            sounds exciting, we’re interested in what you have to say.
          </p>

          <h2 className="mb-2 mt-4 text-xl font-bold">What you will get at Augusta Labs</h2>
          <p className="mb-2">
            If you&apos;re ready to grind and get your hands dirty, you&apos;ll have endless opportunities to lead and
            grow with us.
          </p>
          <ul className="list-disc pl-4">
            <li>
              <strong>A front row seat to the AI Revolution</strong>We’re not just reacting to changes in AI—we’re
              driving them. Your work will be at the cutting edge of a sector that’s redefining industries.
            </li>
            <li>
              <strong>Want to lead?</strong> Tell us what&apos;s holding you back, and we&apos;ll fix it. We don&apos;t
              deal with corporate BS. The more you take on, the more you&apos;ll earn.
            </li>
            <li>
              <strong>Be obsessed</strong>: We want people who are all in, obsessed with what they do, and make
              themselves so valuable that Augusta Labs can&apos;t function without them.
            </li>
            <li>
              <strong>Get rewarded</strong>: We’re building something massive. If you’re fully committed, you’ll get
              killer experiences, a great place to work, and more money than you’ve ever dreamed of, as we become a
              major player in this new tech age.
            </li>
          </ul>
        </>
      ),
      application: (
        <p>
          Above the line the markdown for a job role at August Labs. The owners are portuguese like me its a new thing
          and I want to get him and make a case to prove that I am cracked at Full stack development. I have worked with
          web technologies for a long time and have spent the last years refining my qualities with React, Nextjs,
          tailwind, typescript and other tools to make me a self sufficient developer on any sort of task, regardless of
          area of expertise. I am eager to join a culture of creating very ambitious, modern looking, problem solving
          services that solve interesting problems. I have an interesting portfolio, I am 25 and very eager to work with
          ambitious people and create new and exciting products.
        </p>
      ),
    },
  ]

  return (
    <LayoutSimple
      title="Job Hunt playground"
      intro="This is a playground for me to test out different job hunt strategies and tactics. I'll be sharing my progress and learnings here."
    >
      <ul className="flex flex-col gap-8">
        {jobHuntEntries.map((jobHuntEntry, jobHuntEntryIdx) => (
          <li key={jobHuntEntryIdx}>
            <JobHuntEntry {...jobHuntEntry} />
          </li>
        ))}
      </ul>
    </LayoutSimple>
  )
}
