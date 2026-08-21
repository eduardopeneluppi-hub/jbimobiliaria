import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cities, cityNames } from '../data/locations'

export default function LocationFilter({ city, bairro, onChangeCity, onChangeBairro }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="flex justify-center px-4 pb-4">
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {bairro ? `${bairro} · ${city}` : 'Bairro / Cidade'}
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-full z-30 mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
            >
              <div className="flex gap-1 border-b border-neutral-100 p-2">
                {cityNames.map((c) => (
                  <button
                    key={c}
                    onClick={() => onChangeCity(c)}
                    className={`flex-1 rounded-xl px-2 py-2 text-xs font-semibold transition-colors ${
                      city === c
                        ? 'bg-orange-500 text-white'
                        : 'text-neutral-500 hover:bg-neutral-100'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <ul className="p-2">
                {cities[city].map((b) => (
                  <li key={b}>
                    <button
                      onClick={() => {
                        onChangeBairro(b)
                        setOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-orange-50 ${
                        bairro === b ? 'text-orange-600' : 'text-neutral-700'
                      }`}
                    >
                      {b}
                      {bairro === b && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
