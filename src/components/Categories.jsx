import { useState } from 'react'
import { motion } from 'framer-motion'
import iconPredio from '../assets/categories/icon-predio.png'
import iconCasa from '../assets/categories/icon-casa.png'
import iconTerreno from '../assets/categories/icon-terreno.png'

const categories = [
  { id: 'predio', label: 'Prédio', image: iconPredio },
  { id: 'casa', label: 'Casa', image: iconCasa },
  { id: 'terreno', label: 'Terreno', image: iconTerreno },
]

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function Categories() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="mx-auto max-w-3xl px-4 pb-4 pt-2">
      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {categories.map((c) => {
          const isSelected = selected === c.id
          return (
            <button
              key={c.id}
              onClick={() => setSelected(isSelected ? null : c.id)}
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
                  isSelected ? 'text-orange-600' : 'text-neutral-800'
                }`}
              >
                {c.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
