import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { properties } from '../data/properties'
import PropertyModal from './PropertyModal'
import AuroraGlow from './AuroraGlow'
import { normalize } from '../utils/text'

function PropertyPhoto({ image, city, bairro, title }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
      <span className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        {bairro}, {city}
      </span>
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  )
}

function FeatureIcon({ icon, value, label }) {
  return (
    <span className="flex items-center gap-1">
      {icon}
      {value}
      <span className="hidden sm:inline">{label}</span>
    </span>
  )
}

const bedIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9v9M2 13h20M22 9v9M6 13V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
    <path d="M12 9V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
  </svg>
)
const bathIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.6 1L4 6" />
    <path d="M4 12V6h1a2 2 0 0 1 2 2v4" />
    <path d="M2 12h20v2a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z" />
    <path d="M8 20v2M16 20v2" />
  </svg>
)
const areaIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

const categoryLabels = {
  predio: 'prédios',
  casa: 'casas',
  terreno: 'terrenos',
}

export default function PropertyGrid({ city, bairro, search = '', category = null, onSelectLocation }) {
  const query = normalize(search.trim())
  const isLocationMatch = query && (normalize(bairro).includes(query) || normalize(city).includes(query))
  const filtered = properties.filter((p) => {
    if (p.city !== city || p.bairro !== bairro) return false
    if (category && p.type !== category) return false
    if (!query || isLocationMatch) return true
    return normalize(p.title).includes(query) || normalize(p.description).includes(query)
  })
  const [selected, setSelected] = useState(null)

  const elsewhere =
    category && !query
      ? [
          ...new Map(
            properties
              .filter((p) => p.type === category && (p.city !== city || p.bairro !== bairro))
              .map((p) => [`${p.city}-${p.bairro}`, { city: p.city, bairro: p.bairro }])
          ).values(),
        ]
      : []

  return (
    <section className="mx-auto max-w-6xl px-4 pb-1 sm:pb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${city}-${bairro}-${query}-${category}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-200 px-6 py-12 text-center text-neutral-500">
              <p>
                {query
                  ? `Nenhum imóvel encontrado para "${search}" em ${bairro}.`
                  : category
                  ? `Ainda não temos ${categoryLabels[category]} em ${bairro}, ${city}.`
                  : `Nenhum imóvel encontrado em ${bairro} ainda. Volte em breve!`}
              </p>

              {elsewhere.length > 0 && (
                <div className="mx-auto mt-6 max-w-sm">
                  <p className="text-sm font-semibold text-neutral-700">
                    Temos disponível em:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {elsewhere.map((loc) => (
                      <li
                        key={`${loc.city}-${loc.bairro}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-2.5"
                      >
                        <span className="text-sm text-neutral-800">
                          {loc.bairro}, {loc.city}
                        </span>
                        <button
                          onClick={() => onSelectLocation?.(loc.city, loc.bairro)}
                          className="shrink-0 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-400"
                        >
                          Visite agora
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(p)}
                  className="relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <PropertyPhoto image={p.image} city={p.city} bairro={p.bairro} title={p.title} />
                  <div className="relative overflow-hidden p-4">
                    <AuroraGlow />
                    <div className="relative">
                      <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                      <p className="mt-2 text-lg font-bold text-neutral-900">{p.price}</p>
                      <div className="mt-3 flex items-center gap-4 pt-3 text-xs text-neutral-500">
                        {p.beds > 0 && <FeatureIcon icon={bedIcon} value={p.beds} label="quartos" />}
                        {p.baths > 0 && <FeatureIcon icon={bathIcon} value={p.baths} label="banheiros" />}
                        <FeatureIcon icon={areaIcon} value={`${p.area}m²`} label="" />
                      </div>
                      <div className="mt-3 flex justify-end">
                        <span className="rounded-full border border-white/60 bg-white/40 px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur-md">
                          Clique para ver mais
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selected && <PropertyModal property={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
