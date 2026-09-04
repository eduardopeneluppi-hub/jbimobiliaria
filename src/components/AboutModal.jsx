import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo-icon.png'

const closeIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
)

export default function AboutModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
        >
          {closeIcon}
        </button>

        <img src={logo} alt="JB Imóveis" className="h-14 w-14 object-contain" draggable={false} />

        <h2
          className="mt-4 text-2xl uppercase leading-tight tracking-tight text-neutral-900"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          Sobre a JB Imóveis
        </h2>

        <span className="mt-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          CRECI J28595
        </span>

        <p className="mt-4 leading-relaxed text-neutral-600">
          A JB Imóveis é uma imobiliária dedicada a conectar pessoas ao lar dos seus sonhos. Trabalhamos
          com compra, venda, locação e administração de imóveis, sempre com atendimento próximo e
          transparente em cada etapa do processo.
        </p>

        <p className="mt-3 leading-relaxed text-neutral-600">
          Nosso compromisso é simples: entender o que você procura e encontrar o imóvel certo, com
          segurança e agilidade — seja para morar, investir ou vender.
        </p>
      </motion.div>
    </motion.div>,
    document.body
  )
}
