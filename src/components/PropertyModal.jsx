import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { buildPropertyWhatsappLink } from '../utils/whatsapp'

const whatsappIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.05 2Zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.4-.71-2.88-1.15-4.7-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.05.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
  </svg>
)

const bedIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9v9M2 13h20M22 9v9M6 13V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <path d="M12 9V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
  </svg>
)
const bathIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.6 1L4 6" />
    <path d="M4 12V6h1a2 2 0 0 1 2 2v4" />
    <path d="M2 12h20v2a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z" />
    <path d="M8 20v2M16 20v2" />
  </svg>
)
const areaIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

export default function PropertyModal({ property, onClose }) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
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
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div className="relative">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {property.bairro}, {property.city}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <img
            src={property.image}
            alt={property.title}
            className="max-h-[50vh] w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">{property.title}</h2>
          <p className="mt-2 text-2xl font-bold text-orange-600">{property.price}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-neutral-100 py-4 text-sm text-neutral-600">
            {property.beds > 0 && (
              <span className="flex items-center gap-2">
                {bedIcon} {property.beds} quartos
              </span>
            )}
            {property.baths > 0 && (
              <span className="flex items-center gap-2">
                {bathIcon} {property.baths} banheiros
              </span>
            )}
            <span className="flex items-center gap-2">
              {areaIcon} {property.area}m²
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-neutral-600">{property.description}</p>

          <a
            href={buildPropertyWhatsappLink(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400 sm:w-auto"
          >
            {whatsappIcon}
            Quero visitar esse imóvel
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
