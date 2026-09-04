import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PrivacyModal from './PrivacyModal'

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <footer className="relative mx-auto max-w-5xl px-4 pb-10 pt-4 text-center">
      <p className="text-xs text-white/50">
        © {new Date().getFullYear()} JB Imóveis — CRECI J28595
      </p>
      <button
        onClick={() => setPrivacyOpen(true)}
        className="mt-1 text-xs text-white/50 underline underline-offset-2 transition-colors hover:text-white/80"
      >
        Política de Privacidade
      </button>

      <AnimatePresence>
        {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
      </AnimatePresence>
    </footer>
  )
}
