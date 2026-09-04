import { motion } from 'framer-motion'

const REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJi-lwgIlLzJQRZehsEMbIxpU'

const googleLogo = (
  <svg viewBox="0 0 48 48" width="36" height="36">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
      l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
)

const starIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
  </svg>
)

const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export default function GoogleReviewCard() {
  return (
    <div className="-translate-y-[4%] sm:translate-y-0">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-sm px-4 pt-2 sm:pt-6 lg:max-w-4xl"
      >
        <div className="flex flex-col items-center gap-3 rounded-[2.5rem] border border-neutral-200 bg-white p-8 text-center shadow-xl lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-10 lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:gap-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-neutral-100">
              {googleLogo}
            </span>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i}>{starIcon}</span>
                ))}
              </div>

              <h2
                className="uppercase leading-tight tracking-tight text-neutral-900"
                style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.75rem' }}
              >
                Nos avalie!
              </h2>

              <p className="text-sm text-neutral-500">
                Deixe sua avaliação no Google e ajude a JB Imóveis a crescer
              </p>
            </div>
          </div>

          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex shrink-0 items-center gap-2 rounded-full bg-[#4285F4] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#3367d6] lg:mt-0"
          >
            Avaliar agora
            {arrowIcon}
          </a>
        </div>
      </motion.section>
    </div>
  )
}
