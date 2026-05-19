import { motion } from 'framer-motion'
import { benefits } from '../data/benefits'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Benefits() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
              }}
              className="bg-white border border-black/5 rounded-lg-2 p-7 shadow-soft-sm cursor-default transition-shadow duration-500 hover:shadow-soft-lg hover:border-brand-orange/20"
            >
              <div
                className={`w-12 h-12 rounded-sm-2 bg-gradient-to-br ${b.iconGradient} flex items-center justify-center text-2xl mb-5 ${
                  i === 1 ? 'shadow-glow-orange' : 'shadow-glow-yellow'
                }`}
              >
                {b.icon}
              </div>
              <h3 className="font-bold text-[17px] mb-1 text-brand-black">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
