import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import iconPredio from '../assets/categories/icon-predio.png'
import iconCasa from '../assets/categories/icon-casa.png'
import iconTerreno from '../assets/categories/icon-terreno.png'
import photoPredio from '../assets/gallery/predio-gallery-1.jpg'
import photoCasa from '../assets/gallery/casa-gallery-1.jpg'
import photoTerreno from '../assets/gallery/terreno-gallery-1.jpg'
import { buildWhatsappLink } from '../utils/whatsapp'

const categories = [
  { id: 'predio', label: 'Apartamento', plural: 'apartamentos', image: iconPredio, photo: photoPredio },
  { id: 'casa', label: 'Casa', plural: 'casas', image: iconCasa, photo: photoCasa },
  { id: 'terreno', label: 'Terreno', plural: 'terrenos', image: iconTerreno, photo: photoTerreno },
]

const whatsappIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.05 2Zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.4-.71-2.88-1.15-4.7-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.05.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
  </svg>
)

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function Categories() {
  const [selected, setSelected] = useState('casa')
  const [direction, setDirection] = useState(1)
  const active = categories.find((c) => c.id === selected)

  function handleSelect(id) {
    if (id === selected) return
    const from = categories.findIndex((c) => c.id === selected)
    const to = categories.findIndex((c) => c.id === id)
    setDirection(to > from ? 1 : -1)
    setSelected(id)
  }

  return (
    <section className="mx-auto max-w-3xl px-4 pb-4 pt-2">
      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {categories.map((c) => {
          const isSelected = selected === c.id
          return (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                className="relative flex items-center justify-center rounded-full"
                animate={{ scale: isSelected ? 1.08 : 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span
                  className={`absolute inset-0 rounded-full ring-4 transition-all duration-300 ${
                    isSelected ? 'ring-orange-400 ring-offset-2' : 'ring-transparent ring-offset-0'
                  }`}
                />
                <img
                  src={c.image}
                  alt={c.label}
                  draggable={false}
                  className="h-20 w-20 select-none object-contain sm:h-28 sm:w-28"
                />
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white shadow-md sm:h-8 sm:w-8"
                  >
                    {checkIcon}
                  </motion.span>
                )}
              </motion.div>
              <span
                className={`text-sm font-semibold transition-colors sm:text-base ${
                  isSelected ? 'text-orange-400' : 'text-white'
                }`}
              >
                {c.label}
              </span>
            </button>
          )
        })}
      </div>

      {active?.photo && (
        <div className="mx-auto max-w-xs">
          <div className="relative mt-6 aspect-[640/823] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={active.id}
                src={active.photo}
                alt={active.label}
                custom={direction}
                initial={{ x: direction > 0 ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? '-100%' : '100%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <a
            href={buildWhatsappLink(`Olá! Quero mais informações sobre ${active.plural}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
          >
            {whatsappIcon}
            Ver {active.plural}
          </a>
        </div>
      )}
    </section>
  )
}
