const searchIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const clearIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
)

export default function SearchBox({ value, onChange }) {
  return (
    <div className="flex justify-center px-4 pb-8">
      <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <span className="shrink-0 text-white/60">{searchIcon}</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por imóvel..."
          className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Limpar busca"
            className="shrink-0 text-white/60 transition-colors hover:text-white"
          >
            {clearIcon}
          </button>
        )}
      </div>
    </div>
  )
}
