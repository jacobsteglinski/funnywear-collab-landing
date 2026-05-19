import { motion } from 'framer-motion'

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: '#ffbf00', filter: 'blur(120px)', opacity: 0.5 }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: '#ff9933', filter: 'blur(120px)', opacity: 0.35 }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
