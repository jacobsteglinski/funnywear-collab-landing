import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1100px] flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-black/5 rounded-full shadow-soft-md"
      >
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="FunnyWear"
            className="h-9 w-auto"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <span className="hidden sm:block text-sm text-gray-500">Współpraca</span>
      </motion.header>
    </div>
  )
}
