import { motion } from 'framer-motion'
import banner from '../assets/cta-banner.png'
import { buildWhatsappLink } from '../utils/whatsapp'

export default function CtaBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-5xl px-1 pb-6 sm:px-4"
    >
      <a
        href={buildWhatsappLink('Olá! Quero falar com a JB Imóveis.')}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-[1.01]"
      >
        <img src={banner} alt="Tá esperando oque para garantir seu sonho?" className="w-full" draggable={false} />
      </a>
    </motion.section>
  )
}
