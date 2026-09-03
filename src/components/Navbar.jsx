import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo-icon.png'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Imóveis', href: '#imoveis' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function scrollToId(id) {
  return (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 sm:max-w-xl"
    >
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        className="overflow-hidden rounded-[28px] border border-white/15 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
      >
        <motion.div layout className="flex items-center justify-between gap-4 px-3 py-2 sm:px-5 sm:py-2.5">
          <a href="#inicio" className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="JB Imóveis" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
              JB Imóveis
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={scrollToId(l.href.slice(1))}
                  className="transition-colors hover:text-orange-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            onClick={scrollToId('contato')}
            className="hidden shrink-0 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400 sm:inline-block"
          >
            Fale conosco
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="sm:hidden"
            >
              <ul className="flex flex-col gap-1 px-5 pb-4 pt-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        setOpen(false)
                        scrollToId(l.href.slice(1))(e)
                      }}
                      className="block rounded-xl px-3 py-2 text-white/90 transition-colors hover:bg-white/10"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contato"
                    onClick={(e) => {
                      setOpen(false)
                      scrollToId('contato')(e)
                    }}
                    className="mt-2 block rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white"
                  >
                    Fale conosco
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  )
}
