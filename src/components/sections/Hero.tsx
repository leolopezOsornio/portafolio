import { motion } from 'framer-motion'
import { HeroVisual } from '../hero/HeroVisual'
import { ButtonLink } from '../ui/ButtonLink'
import { staggerContainer } from '../ui/motionPresets'

const heroItem = {
  hidden: { y: 26 },
  visible: { y: 0 },
}

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p className="eyebrow" variants={heroItem}>
          Available for remote roles and freelance products
        </motion.p>
        <motion.h1 variants={heroItem}>
          <span>Full Stack</span>
          <span>Developer</span>
          <span>crafting</span>
          <span>premium</span>
          <span>digital</span>
          <span>products.</span>
        </motion.h1>
        <motion.p className="hero-lede" variants={heroItem}>
          I turn complex product requirements into elegant, scalable, and visually polished digital systems.
        </motion.p>
        <motion.div className="hero-actions" aria-label="Main actions" variants={heroItem}>
          <ButtonLink href="#work">View selected work</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Let&apos;s build something
          </ButtonLink>
        </motion.div>
        <motion.div className="hero-stack" aria-label="Core stack" variants={heroItem}>
          React / TypeScript / Ionic / Node.js / Django / PostgreSQL
        </motion.div>
      </motion.div>

      <HeroVisual />
    </section>
  )
}
