import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 px-6 flex flex-col items-center text-center">
      <div className="max-w-[760px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-black/[0.08] px-4 py-1.5 rounded-full text-xs font-semibold shadow-soft-sm mb-6 text-brand-black"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange" />
          </span>
          Zgłoszenia otwarte · Współpraca barterowa
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-extrabold leading-[1.05] tracking-[-0.02em] text-brand-black mb-6"
          style={{ fontSize: 'clamp(40px, 7vw, 68px)' }}
        >
          Nosisz nasze ciuchy,
          <br />
          kręcimy razem{' '}
          <span className="bg-gradient-to-br from-brand-orange to-brand-yellow bg-clip-text text-transparent">
            kontent
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto"
        >
          Szukamy ludzi z dobrym vibem do barteru. Dostajesz koszulki, my dostajemy zasięg. Bez spinki, bez umów na 10 stron.
        </motion.p>
      </div>
    </section>
  )
}
