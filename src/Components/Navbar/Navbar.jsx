import { useState } from "react"
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[#222222] bg-[#0f0f0f] px-6 py-3.5 md:px-8">
      <a href="#" className="text-sm font-medium tracking-[0.04em] text-[#7CFC9E]">
        &lt;rishab.dev /&gt;
      </a>

      <button
        type="button"
        className="p-1 text-[#888888] md:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <RiCloseLine size={22} /> : <RiMenu2Line size={22} />}
      </button>

      <div
        className={`${
          open ? "flex" : "hidden"
        } w-full basis-full flex-col gap-1 border-t border-[#1a1a1a] pt-3 md:flex md:w-auto md:basis-auto md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0`}
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-xs uppercase tracking-[0.06em] text-[#888888] no-underline transition hover:text-[#7CFC9E]"
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="/Rishab_Sikka_Resume_15May.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 border border-[#7CFC9E] px-3 py-2 text-center text-xs text-[#7CFC9E] no-underline md:hidden"
          onClick={() => setOpen(false)}
        >
          resume.pdf
        </a>
      </div>

      <a
        href="/Rishab_Sikka_Resume_15May.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded border border-[#7CFC9E] bg-transparent px-4 py-1.5 text-xs tracking-[0.04em] text-[#7CFC9E] no-underline transition hover:bg-[rgba(124,252,158,0.08)] md:inline-block"
      >
        resume.pdf
      </a>
    </nav>
  )
}
