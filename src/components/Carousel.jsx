import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import img1 from '../assets/carousel-1.png'
import img2 from '../assets/carousel-2.png'
import img3 from '../assets/carousel-3.png'

const slides = [img1, img2, img3]
const track = [...slides, ...slides]
const SPEED = 45 // pixels per second

export default function Carousel() {
  const trackRef = useRef(null)
  const offset = useRef(0)
  const x = useMotionValue(0)

  useAnimationFrame((_, delta) => {
    const el = trackRef.current
    if (!el) return
    const halfWidth = el.scrollWidth / 2
    if (!halfWidth) return

    offset.current -= (SPEED * delta) / 1000
    if (offset.current <= -halfWidth) offset.current += halfWidth

    x.set(offset.current)
  })

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pb-16 pt-28 sm:pt-32"
    >
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <motion.div ref={trackRef} style={{ x }} className="flex w-max">
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="JB Imóveis"
              draggable={false}
              className="mr-6 h-56 w-auto shrink-0 select-none rounded-2xl object-cover shadow-lg sm:h-72 md:h-96"
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
