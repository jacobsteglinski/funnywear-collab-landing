import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '../data/faq'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
      onClick={() => setOpen(!open)}
      className="bg-white border border-black/5 rounded-md-2 p-5 cursor-pointer mb-3 shadow-soft-sm hover:shadow-soft-md hover:border-brand-orange/15 select-none"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-brand-black text-[15px]">{q}</span>
        <motion.div
          animate={{
            rotate: open ? 45 : 0,
            backgroundColor: open ? '#ff7a00' : '#FFFBF3',
            color: open ? '#ffffff' : '#ff7a00',
          }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg"
        >
          +
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-sm text-gray-500 pt-3 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold text-brand-orange tracking-wider uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">
            Co warto wiedzieć
          </h2>
        </motion.div>

        <div>
          {faq.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
