export default function SectionLabel({ children, dense = false }) {
  return (
    <div
      className={`flex items-center gap-2.5 text-[11px] uppercase tracking-[0.1em] text-[#555555] ${dense ? "mb-3" : "mb-6"}`}
    >
      <span className="shrink-0">{children}</span>
      <span className="h-px min-w-[40px] flex-1 bg-[#222222]" aria-hidden />
    </div>
  )
}
