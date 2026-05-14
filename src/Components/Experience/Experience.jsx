import Jio from "../../assets/jioplatforms_logo.jpg"
import SectionLabel from "../ui/SectionLabel"

const witsProjects = [
  {
    name: "National Pension Scheme (NPS)",
    stack: "GoLang · PostgreSQL · REST APIs",
    bullets: [
      "Led backend development of subscriber onboarding flows (Individual, Minor, Corporate, Assisted), driving design decisions and modular SOLID-based architecture.",
      "Contributed to HLD and service decomposition, data flow, and integration patterns across Aadhaar, FATCA, nominee, and banking modules.",
      "Built OTP-based authentication service with rate limiting and failure handling for secure multi-step verification.",
      "Implemented PRAN generation APIs with idempotency and retry mechanisms, achieving 99.9% reliability in external service interactions.",
    ],
  },
  {
    name: "Saleor — ONDC Platform",
    stack: "TypeScript · Node.js · Kafka · Razorpay · Microservices",
    bullets: [
      "Led migration to event-driven architecture, replacing HTTP polling with Kafka-based event streaming, reducing latency by ~20–40%.",
      "Contributed to HLD for inter-service communication using Kafka, defining topics, partitions, and consumer groups to improve scalability and fault tolerance.",
      "Built resilient notification service using Kafka with retry, dead-letter queues, and consumer offset management for reliable async processing.",
      "Integrated Razorpay with complete payment lifecycle (callbacks, fallback, refunds).",
    ],
  },
]

const jioBullets = [
  "Built extensible payment orchestration module using Strategy Pattern, enabling seamless multi-gateway integration.",
  "Implemented Redis-based rate limiting, handling 10K+ RPS bursts while preventing API abuse during peak traffic.",
  "Optimized JWT authentication and RBAC middleware, reducing auth-related latency by ~15–25% and improving security posture.",
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-[#1a1a1a] px-6 py-12 md:px-8 md:py-12">
      <SectionLabel>experience</SectionLabel>

      <div className="flex flex-col">
        {/* Wits */}
        <div className="flex items-start gap-5 border-b border-[#1a1a1a] py-5">
          <div className="w-[100px] shrink-0 whitespace-pre-line pt-0.5 font-mono text-[11px] leading-snug tracking-wide text-[#555555]">
            May 2025 –{"\n"}Present
          </div>
          <div className="flex w-4 shrink-0 flex-col items-center self-stretch pb-1">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CFC9E]" aria-hidden />
            <span className="mt-1 w-px flex-1 bg-[#222222]" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#252525] bg-[#161616] text-xs font-medium text-[#7CFC9E]">
                W
              </div>
              <div className="min-w-0">
                <div className="font-sans text-sm font-medium text-[#e0e0e0]">Software Engineer</div>
                <div className="mt-0.5 font-mono text-xs text-[#7CFC9E]">Wits Innovation Labs</div>
                <div className="mt-6 space-y-8">
                  {witsProjects.map((p) => (
                    <div key={p.name}>
                      <div className="font-sans text-xs font-medium text-[#cccccc]">Project: {p.name}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[#555555]">{p.stack}</div>
                      <ul className="mt-3 list-disc space-y-2 pl-3.5 font-sans text-xs leading-[1.65] text-[#888888] marker:text-[#444444]">
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jio */}
        <div className="flex items-start gap-5 py-5">
          <div className="w-[100px] shrink-0 whitespace-pre-line pt-0.5 font-mono text-[11px] leading-snug tracking-wide text-[#555555]">
            Jan 2024 –{"\n"}May 2025
          </div>
          <div className="flex w-4 shrink-0 flex-col items-center self-stretch pb-1">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#444444]" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <img src={Jio} alt="" className="mt-0.5 h-9 w-9 shrink-0 rounded object-contain opacity-90" />
              <div className="min-w-0">
                <div className="font-sans text-sm font-medium text-[#e0e0e0]">Software Development Engineer</div>
                <div className="mt-0.5 font-mono text-xs text-[#7CFC9E]">Jio Platforms Limited</div>
                <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-[#555555]">
                  TypeScript · Node.js · RESTful APIs · JWT · MongoDB · Redis · Microservices
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-3.5 font-sans text-xs leading-[1.65] text-[#888888] marker:text-[#444444]">
                  {jioBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
