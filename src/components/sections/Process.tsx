import { motion } from 'framer-motion'
import { processSteps } from '../../data/portfolio'
import { fadeUp, staggerContainer } from '../ui/motionPresets'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section className="process-section">
      <SectionHeading kicker="Process" title="How I build products that feel complete." />
      <motion.div
        className="process-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {processSteps.map(([number, title, text]) => (
          <motion.article className="process-item" key={number} variants={fadeUp}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
