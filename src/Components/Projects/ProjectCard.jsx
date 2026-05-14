const tagStyles = {
  green: "border-[rgba(124,252,158,0.2)] bg-[rgba(124,252,158,0.06)] text-[#7CFC9E]",
  blue: "border-[rgba(100,180,255,0.2)] bg-[rgba(100,180,255,0.06)] text-[#64B4FF]",
  amber: "border-[rgba(255,180,60,0.2)] bg-[rgba(255,180,60,0.06)] text-[#FFB43C]",
  default: "border-[#252525] bg-[#161616] text-[#666666]",
}

export default function ProjectCard({ featured, title, stackNote, bullets, tags, footer }) {
  return (
    <article
      className={`rounded-lg border p-5 ${
        featured
          ? "border-[rgba(124,252,158,0.2)] bg-[rgba(124,252,158,0.03)]"
          : "border-[#222222] bg-[#141414]"
      }`}
    >
      <div className="mb-2.5 flex items-start justify-between gap-2">
        <h3 className="font-sans text-sm font-medium text-white">{title}</h3>
        <span className={`text-base ${featured ? "text-[#7CFC9E]" : "text-[#444444]"}`} aria-hidden>
          ↗
        </span>
      </div>
      {stackNote ? <p className="mb-3 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-[#555555]">{stackNote}</p> : null}
      {bullets?.length ? (
        <ul className="mb-3.5 list-disc space-y-2 pl-3.5 font-sans text-xs leading-[1.65] text-[#888888] marker:text-[#444444]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      <div className="mb-3.5 flex flex-wrap gap-1.5">
        {tags.map(({ label, variant }) => (
          <span
            key={label}
            className={`rounded border px-2 py-0.5 font-mono text-[11px] tracking-wide ${tagStyles[variant]}`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 border-t border-[#1e1e1e] pt-3 font-mono text-[11px] text-[#555555]">
        <span>{footer.left}</span>
        {footer.link ? (
          <a href={footer.link} target="_blank" rel="noopener noreferrer" className="text-[#7CFC9E] no-underline hover:underline">
            {footer.linkLabel}
          </a>
        ) : null}
        {footer.right ? <span className="ml-auto text-[#7CFC9E]">{footer.right}</span> : null}
      </div>
    </article>
  )
}
