import { motion } from 'framer-motion'
import { expertise, skills } from '../../data/portfolio'
import { IconTile } from '../ui/IconTile'
import { fadeUp, staggerContainer } from '../ui/motionPresets'
import { SectionHeading } from '../ui/SectionHeading'

export function Expertise() {
  return (
    <section className="section split-section" id="expertise">
      <SectionHeading
        kicker="Expertise"
        title="I work where design quality meets engineering depth."
      />
      <motion.div
        className="expertise-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        {expertise.map((item) => (
          <motion.article className="expertise-card" key={item.title} variants={fadeUp}>
            <IconTile src={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </motion.div>
      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={staggerContainer}
      >
        {skills.map(([label, icon]) => (
          <motion.article className="skill-chip" key={label} variants={fadeUp}>
            <IconTile src={icon} />
            <span>{label}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
