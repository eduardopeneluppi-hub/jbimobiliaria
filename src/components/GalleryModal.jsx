import { motion } from 'framer-motion'
import img1 from '../assets/gallery/casa-gallery-1.jpg'

const closeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
)

export default function GalleryModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="relative mx-auto mt-6 max-w-sm overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
        >
          {closeIcon}
        </button>
        <img
          src={img1}
          alt="Casa à venda"
          className="w-full select-none object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  )
}
