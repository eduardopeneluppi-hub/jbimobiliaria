import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

const closeIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
)

export default function PrivacyModal({ onClose }) {
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
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
        >
          {closeIcon}
        </button>

        <h2
          className="text-2xl uppercase leading-tight tracking-tight text-neutral-900"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          Política de Privacidade
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600">
          <p>
            Este site é da JB Imóveis (CRECI J28595) e foi feito para apresentar nossos serviços e
            facilitar o contato com você. Levamos a sua privacidade a sério e este texto explica, de
            forma simples, como tratamos as informações por aqui, em conformidade com a Lei Geral de
            Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>

          <div>
            <h3 className="font-semibold text-neutral-900">Este site não coleta nem armazena seus dados</h3>
            <p className="mt-1">
              Não usamos cookies, não temos formulários que enviam dados para nossos servidores e não
              utilizamos ferramentas de rastreamento ou análise (como Google Analytics ou pixels de
              redes sociais). Nenhuma informação digitada aqui fica salva neste site.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900">Contato via WhatsApp</h3>
            <p className="mt-1">
              Quando você clica em um botão de contato, seu navegador abre o WhatsApp com uma mensagem
              já escrita. A partir desse momento, a conversa acontece diretamente no WhatsApp — um
              serviço da Meta, com sua própria política de privacidade — e não passa pelos nossos
              servidores.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900">Links para Google Maps e Google</h3>
            <p className="mt-1">
              O endereço e o botão de avaliação levam você para o Google Maps e para a página de
              avaliações do Google. Esses são serviços de terceiros, com políticas de privacidade
              próprias, fora do nosso controle.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900">Dúvidas</h3>
            <p className="mt-1">
              Se tiver qualquer dúvida sobre este texto, é só chamar a gente pelo WhatsApp que aparece
              no site.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
