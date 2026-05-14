import { FaGithub, FaPhone } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { SiLinkedin } from "react-icons/si"

import SectionLabel from "../ui/SectionLabel"

const cards = [
  {
    label: "email",
    value: "sikka.rishab@gmail.com",
    href: "mailto:sikka.rishab@gmail.com",
    Icon: MdOutlineEmail,
  },
  {
    label: "phone",
    value: "+91 7021828796",
    href: "tel:+917021828796",
    Icon: FaPhone,
  },
  {
    label: "github",
    value: "github.com/RISHAB-SIKKA",
    href: "https://github.com/RISHAB-SIKKA",
    Icon: FaGithub,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/rishab-sikka",
    href: "https://www.linkedin.com/in/rishab-sikka-namaste-404279198/",
    Icon: SiLinkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-12 md:px-8 md:py-12">
      <SectionLabel>get in touch</SectionLabel>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cards.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
            rel={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3.5 rounded-lg border border-[#222222] bg-[#141414] p-[18px] no-underline transition hover:border-[#333333]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[rgba(124,252,158,0.2)] bg-[rgba(124,252,158,0.08)] text-lg text-[#7CFC9E]">
              <Icon className="h-[18px] w-[18px]" aria-hidden />
            </div>
            <div className="min-w-0 text-left">
              <div className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[#555555]">{label}</div>
              <div className="truncate font-sans text-[13px] text-[#cccccc]">{value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-stretch justify-between gap-4 border-t border-[#1a1a1a] px-1 py-5 sm:flex-row sm:items-center">
        <span className="font-mono text-[11px] tracking-wide text-[#444444]">
          © {new Date().getFullYear()} rishab.dev — built with React
        </span>
        <div className="flex flex-wrap gap-4 font-mono text-[11px]">
          <a href="/Rishab_Sikka_Resume_15May.pdf" target="_blank" rel="noopener noreferrer" className="text-[#444444] no-underline hover:text-[#7CFC9E]">
            resume
          </a>
          <a href="https://github.com/RISHAB-SIKKA" target="_blank" rel="noopener noreferrer" className="text-[#444444] no-underline hover:text-[#7CFC9E]">
            source
          </a>
          <a href="https://leetcode.com/u/RIshabSikka/" target="_blank" rel="noopener noreferrer" className="text-[#444444] no-underline hover:text-[#7CFC9E]">
            leetcode
          </a>
        </div>
      </div>
    </section>
  )
}
