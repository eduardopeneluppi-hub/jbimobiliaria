import banner from '../assets/cta-banner.png'
import { buildWhatsappLink } from '../utils/whatsapp'

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-5xl px-1 pb-6 sm:px-4">
      <a
        href={buildWhatsappLink('Olá! Quero falar com a JB Imóveis.')}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-[1.01]"
      >
        <img src={banner} alt="Tá esperando oque para garantir seu sonho?" className="w-full" draggable={false} />
      </a>
    </section>
  )
}
