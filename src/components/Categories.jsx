import iconPredio from '../assets/categories/icon-predio.png'
import iconCasa from '../assets/categories/icon-casa.png'
import iconTerreno from '../assets/categories/icon-terreno.png'

const categories = [
  { label: 'Prédio', image: iconPredio },
  { label: 'Casa', image: iconCasa },
  { label: 'Terreno', image: iconTerreno },
]

export default function Categories() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-4 pt-2">
      <div className="grid grid-cols-3 gap-4 sm:gap-8">
        {categories.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-2">
            <img
              src={c.image}
              alt={c.label}
              draggable={false}
              className="h-20 w-20 select-none object-contain sm:h-28 sm:w-28"
            />
            <span className="text-sm font-semibold text-neutral-800 sm:text-base">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
