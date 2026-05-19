import { motion } from 'framer-motion'

export default function FormSection() {
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

          {/* ============================================ */}
          {/* TUTAJ WKLEJ EMBED FORMULARZA (Tally/GHL/etc) */}
          {/* ============================================ */}
          <div
            id="form-embed"
            className="min-h-[360px] bg-brand-cream/50 border-[1.5px] border-dashed border-black/10 rounded-md-2 flex items-center justify-center text-gray-500 text-sm p-6 text-center"
          >
            [ Miejsce na embed formularza ]
          </div>
        </div>
      </motion.div>
    </section>
  )
}
