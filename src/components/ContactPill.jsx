import { useState } from 'react'
import logo from '../assets/logo-icon.png'
import { buildWhatsappLink, WHATSAPP_NUMBER } from '../utils/whatsapp'

const MAPS_URL = 'https://maps.app.goo.gl/PPqjcvJAhvp8Eq899'
const PHONE_DISPLAY = `(${WHATSAPP_NUMBER.slice(2, 4)}) ${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`

const phoneIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)
const pinIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const sendIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.05 2Zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.4-.71-2.88-1.15-4.7-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.05.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
  </svg>
)

export default function ContactPill() {
  const [message, setMessage] = useState('')

  const whatsappHref = buildWhatsappLink(
    message.trim() || 'Olá! Tenho uma dúvida sobre um imóvel.'
  )

  return (
    <section id="contato" className="relative mx-auto max-w-sm px-4 pb-24 mt-2 sm:mt-12">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-white p-8 shadow-xl">
        <img
          src={logo}
          alt=""
          className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rotate-[-8deg] object-contain opacity-20"
          draggable={false}
        />

        <div className="relative">
          <h2 className="pt-1 text-3xl font-black leading-normal tracking-tight text-neutral-900">DÚVIDAS?</h2>

          <div className="mt-6 space-y-4">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-3 text-sm text-neutral-700 transition-colors hover:text-orange-600"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                {phoneIcon}
              </span>
              {PHONE_DISPLAY}
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-neutral-700 transition-colors hover:text-orange-600"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                {pinIcon}
              </span>
              <span>Rua Argentina, 190, Cidade Vista Verde, São José dos Campos - SP, 12223-000</span>
            </a>
          </div>

          <div className="mt-6">
            <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-neutral-500">
              Sua mensagem
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua dúvida aqui..."
              rows={4}
              className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800 outline-none transition-colors focus:border-orange-400 focus:bg-white"
            />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
          >
            {sendIcon}
            Enviar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
