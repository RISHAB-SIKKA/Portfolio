import SectionLabel from "../ui/SectionLabel"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    featured: true,
    title: "National Pension Scheme (NPS)",
    stackNote: "Wits Innovation Labs — GoLang · PostgreSQL · REST APIs",
    bullets: [
      "Led backend development of subscriber onboarding flows (Individual, Minor, Corporate, Assisted), driving design decisions and modular SOLID-based architecture.",
      "Contributed to HLD and service decomposition, data flow, and integration patterns across Aadhaar, FATCA, nominee, and banking modules.",
      "Built OTP-based authentication service with rate limiting and failure handling for secure multi-step verification.",
      "Implemented PRAN generation APIs with idempotency and retry mechanisms, achieving 99.9% reliability in external service interactions.",
    ],
    tags: [
      { label: "GoLang", variant: "green" },
      { label: "PostgreSQL", variant: "blue" },
      { label: "REST APIs", variant: "green" },
    ],
    footer: { left: "Professional work", right: "" },
  },
  {
    featured: false,
    title: "Saleor — ONDC Platform",
    stackNote: "Wits Innovation Labs — TypeScript · Node.js · Kafka · Razorpay · Microservices",
    bullets: [
      "Led migration to event-driven architecture, replacing HTTP polling with Kafka-based event streaming, reducing latency by ~20–40%.",
      "Contributed to HLD for inter-service communication using Kafka, defining topics, partitions, and consumer groups to improve scalability and fault tolerance.",
      "Built resilient notification service using Kafka with retry, dead-letter queues, and consumer offset management for reliable async processing.",
      "Integrated Razorpay with complete payment lifecycle (callbacks, fallback, refunds).",
    ],
    tags: [
      { label: "TypeScript", variant: "green" },
      { label: "Kafka", variant: "blue" },
      { label: "Node.js", variant: "green" },
      { label: "Razorpay", variant: "amber" },
    ],
    footer: { left: "Professional work", right: "" },
  },
  {
    featured: false,
    title: "@rishabsikka/rate-limitter",
    stackNote: "Published NPM package — TypeScript · Node.js · Redis · In-Memory Storage",
    bullets: [
      "Supports multiple rate limiting strategies: Fixed Window, Token Bucket, and Leaky Bucket.",
      "Works with both in-memory storage for local development and Redis for distributed/multi-instance deployments.",
      "Simple factory-based API for creating reusable rate limiter instances with configurable policies.",
      "Framework-agnostic design compatible with Express, Fastify, NestJS, and custom Node.js servers.",
      "Provides retry timing and limiter state utilities for handling HTTP 429 responses and debugging.",
    ],
    tags: [
      { label: "TypeScript", variant: "green" },
      { label: "Redis", variant: "blue" },
      { label: "npm", variant: "amber" },
    ],
    footer: {
      left: "Open source",
      link: "https://www.npmjs.com/package/@rishabsikka/rate-limitter",
      linkLabel: "npm package",
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-[#1a1a1a] px-6 py-12 md:px-8 md:py-12">
      <SectionLabel>projects</SectionLabel>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
