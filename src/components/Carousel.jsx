import img1 from '../assets/carousel-1.png'
import img2 from '../assets/carousel-2.png'
import img3 from '../assets/carousel-3.png'

const slides = [img1, img2, img3]
const track = [...slides, ...slides]

export default function Carousel() {
  return (
    <section className="w-full bg-neutral-50 pb-16 pt-28 sm:pt-32">
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-6 hover:[animation-play-state:paused]">
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="JB Imóveis"
              draggable={false}
              className="h-56 w-auto shrink-0 select-none rounded-2xl object-cover shadow-lg sm:h-72 md:h-96"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
