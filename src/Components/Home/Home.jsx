export default function Home() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-[#1a1a1a] px-6 pb-14 pt-16 md:px-8 md:pb-16 md:pt-[72px]">
      <h1 className="font-sans text-[2rem] font-medium leading-[1.15] text-white md:text-[40px]">Rishab Sikka</h1>
      <p className="mt-3 font-mono text-xs uppercase leading-relaxed tracking-[0.06em] text-[#888888] md:text-sm">
        Backend Developer · Go · Node.js · Microservices
      </p>

      <p className="mt-6 max-w-[560px] font-sans text-[15px] leading-[1.75] text-[#888888]">
        Software Engineer at Wits Innovation Labs (May 2025 – present): NPS subscriber onboarding in Go and PostgreSQL;
        Saleor / ONDC work with Kafka and Razorpay. Previously Software Development Engineer at Jio Platforms Limited (Jan
        2024 – May 2025): payment orchestration, Redis rate limiting, JWT and RBAC.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-md border-0 bg-[#7CFC9E] px-[22px] py-2.5 font-mono text-[13px] font-medium text-[#0a1a0d] no-underline transition hover:brightness-110"
        >
          view projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-[#333333] bg-transparent px-[22px] py-2.5 font-mono text-[13px] text-[#888888] no-underline transition hover:border-[#444444] hover:text-[#aaaaaa]"
        >
          get in touch
        </a>
        <a
          href="#npm"
          className="rounded-md border border-[#333333] bg-transparent px-[22px] py-2.5 font-mono text-[13px] text-[#888888] no-underline transition hover:border-[#cb3837]/40 hover:text-[#ff7a7a]"
        >
          npm package
        </a>
        <a
          href="/Rishab_Sikka_Resume_15May.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#333333] bg-transparent px-[22px] py-2.5 font-mono text-[13px] text-[#888888] no-underline md:hidden"
        >
          resume.pdf
        </a>
      </div>

      <div className="mt-12">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#555555]">Outside the sprint board</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border border-dashed border-[#2a2a2a] bg-[#121212] p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#7CFC9E]/60" aria-hidden />
            <p className="pl-3 font-mono text-[10px] uppercase tracking-widest text-[#7CFC9E]/80">LeetCode</p>
            <p className="mt-2 pl-3 font-sans text-3xl font-medium tabular-nums text-white">
              500<span className="text-[#7CFC9E]">+</span>
            </p>
            <p className="mt-2 pl-3 font-sans text-xs leading-relaxed text-[#666666]">
              DSA reps on hard problems—keeps graph and DP patterns fresh for interviews and for debugging prod edge cases.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-dashed border-[#2a2a2a] bg-[#121212] p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#64B4FF]/50" aria-hidden />
            <p className="pl-3 font-mono text-[10px] uppercase tracking-widest text-[#64B4FF]/80">GeeksforGeeks</p>
            <p className="mt-2 pl-3 font-sans text-3xl font-medium tabular-nums text-white">
              300<span className="text-[#64B4FF]">+</span>
            </p>
            <p className="mt-2 pl-3 font-sans text-xs leading-relaxed text-[#666666]">
              A second practice lane—different problem sets, same discipline: break the problem, code, iterate.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-dashed border-[#2a2a2a] bg-[#121212] p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#FFB43C]/50" aria-hidden />
            <p className="pl-3 font-mono text-[10px] uppercase tracking-widest text-[#FFB43C]/90">HackerRank</p>
            <p className="mt-2 pl-3 font-sans text-2xl font-medium text-white">
              SQL <span className="text-[#FFB43C]">· Gold</span>
            </p>
            <p className="mt-2 pl-3 font-sans text-xs leading-relaxed text-[#666666]">
              Gold badge in SQL—pairs with day-to-day Postgres work on NPS and relational modeling elsewhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
