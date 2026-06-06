import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FormSection() {
  useEffect(() => {
    const w = 'https://tally.so/widgets/embed.js'
    if (document.querySelector(`script[src="${w}"]`)) {
      if (typeof window.Tally !== 'undefined') window.Tally.loadEmbeds()
      return
    }
    const s = document.createElement('script')
    s.src = w
    s.onload = () => window.Tally?.loadEmbeds()
    s.onerror = () => window.Tally?.loadEmbeds()
    document.body.appendChild(s)
  }, [])

  return (
    <section className="py-12 md:py-20 px-6">
      <motion.div
        className="max-w-[680px] mx-auto relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
          <div
            className="w-14 h-14 flex items-center justify-center text-white text-2xl bg-gradient-to-br from-brand-orange to-brand-orange-light"
            style={{
              borderRadius: '18px',
              boxShadow: '0 12px 30px rgba(255,122,0,0.4)',
            }}
          >
            ✦
          </div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl border border-black/5 rounded-xl-2 px-10 pb-10 pt-14 md:px-12 md:pb-12 shadow-soft-xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black text-center mb-2">
            Zgłoś się do współpracy
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Wypełnij formularz, odezwiemy się w ciągu kilku dni.
          </p>

          <div id="form-embed">
            <iframe
              data-tally-src="https://tally.so/embed/ODE0EA?alignLeft=1&hideTitle=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="839"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="BARTER FUNNYWEAR"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
