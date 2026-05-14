import { FaNpm } from "react-icons/fa"
import SectionLabel from "../ui/SectionLabel"

const NPM_PKG = "@rishabsikka/rate-limitter"
const NPM_URL = "https://www.npmjs.com/package/@rishabsikka/rate-limitter"
const GITHUB_PKG = "https://github.com/RISHAB-SIKKA/rate-limitter"

const skillMatrix = [
  {
    title: "Languages",
    kicker: "Types & queries",
    items: ["TypeScript", "JavaScript", "GoLang", "C++", "SQL"],
    wide: false,
  },
  {
    title: "Backend & frameworks",
    kicker: "Services & APIs",
    items: ["Node.js", "Express.js", "Fiber", "REST APIs", "Microservices", "Event-Driven Architecture"],
    wide: true,
  },
  {
    title: "Messaging",
    kicker: "Async & pipes",
    items: ["Apache Kafka", "GCP Pub/Sub"],
    wide: false,
  },
  {
    title: "Data layer",
    kicker: "Persistence & speed",
    items: ["PostgreSQL", "MongoDB", "Redis"],
    wide: false,
  },
  {
    title: "DevOps & tools",
    kicker: "Ship & run",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Linux/Unix"],
    wide: false,
  },
  {
    title: "Engineering craft",
    kicker: "How I think about systems",
    items: ["LLD/HLD", "OOP", "SOLID", "Agile/SDLC", "Networking", "OS fundamentals"],
    wide: true,
  },
]

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded border border-[#2a2a2a] bg-[#0f0f0f] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#b0b0b0] transition hover:border-[#7CFC9E]/35 hover:text-[#c8ffd8]">
      {children}
    </span>
  )
}

export default function About() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-[#1a1a1a] px-6 py-12 md:px-8 md:py-12">
      {/* npm spotlight */}
      <div id="npm" className="scroll-mt-20">
        <SectionLabel>published package</SectionLabel>
        <div className="relative overflow-hidden rounded-lg border border-[rgba(124,252,158,0.22)] bg-gradient-to-br from-[rgba(124,252,158,0.06)] to-[#141414] p-5 md:flex md:items-center md:justify-between md:gap-8 md:p-6">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#7CFC9E]/5 blur-3xl" aria-hidden />
          <div className="relative flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#cb3837]/40 bg-[#1a0a0a]">
              <FaNpm className="h-8 w-8 text-[#cb3837]" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7CFC9E]/70">npm · rate limiting</p>
              <p className="mt-1 font-mono text-base font-medium text-white md:text-lg">{NPM_PKG}</p>
              <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-[#888888]">
                Fixed window, token bucket, and leaky bucket strategies—in-memory for dev or Redis when you need
                distributed limits. Works with Express, Fastify, NestJS, or a plain Node HTTP server.
              </p>
              <code className="mt-3 inline-block max-w-full overflow-x-auto rounded border border-[#2a2a2a] bg-black/50 px-3 py-2 font-mono text-[11px] text-[#7CFC9E]/90">
                npm install {NPM_PKG}
              </code>
            </div>
          </div>
          <div className="relative mt-5 flex flex-wrap gap-2 md:mt-0 md:flex-col md:items-stretch">
            <a
              href={NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#7CFC9E] px-4 py-2.5 text-center font-mono text-xs font-medium text-[#0a1a0d] no-underline transition hover:brightness-110"
            >
              View on npm
            </a>
            <a
              href={GITHUB_PKG}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#333333] px-4 py-2.5 text-center font-mono text-xs text-[#aaaaaa] no-underline transition hover:border-[#7CFC9E]/40 hover:text-[#7CFC9E]"
            >
              Source
            </a>
          </div>
        </div>
      </div>

      {/* capability matrix */}
      <div className="mt-14">
        <SectionLabel>capability map</SectionLabel>
        <p className="mb-6 max-w-xl font-sans text-sm leading-relaxed text-[#666666]">
          Same stack as my CV—just laid out the way I think about it: lanes of responsibility instead of one long
          comma-separated line.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {skillMatrix.map((block) => (
            <div
              key={block.title}
              className={`flex flex-col rounded-lg border border-[#222222] bg-[#141414] p-4 md:p-5 ${
                block.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-2 border-b border-[#1e1e1e] pb-3">
                <h3 className="font-sans text-sm font-medium text-white">{block.title}</h3>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-[#555555]">{block.kicker}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
