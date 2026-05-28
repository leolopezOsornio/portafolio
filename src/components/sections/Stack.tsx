import { motion } from 'framer-motion'
import { stackGroups, technologies } from '../../data/portfolio'
import { fadeUp, staggerContainer } from '../ui/motionPresets'
import { SectionHeading } from '../ui/SectionHeading'
import { TechnologyLogo } from '../ui/TechnologyLogo'

export function Stack() {
  return (
    <section className="section stack-section" id="stack">
      <SectionHeading
        kicker="Stack"
        title="A modern stack for fast, scalable, maintainable products."
      />
      <motion.div
        className="technology-marquee"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        {technologies.map(([name, icon]) => (
          <motion.div key={name} variants={fadeUp}>
            <TechnologyLogo icon={icon} name={name} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="stack-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        {stackGroups.map(([group, ...items]) => (
          <motion.article className="stack-group" key={group} variants={fadeUp}>
            <h3>{group}</h3>
            <div>
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
