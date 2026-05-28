import { HeroVisual } from '../hero/HeroVisual'
import { ButtonLink } from '../ui/ButtonLink'

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow">Available for remote roles and freelance products</p>
        <h1>
          <span>Full Stack</span>
          <span>Developer</span>
          <span>crafting</span>
          <span>premium</span>
          <span>digital</span>
          <span>products.</span>
        </h1>
        <p className="hero-lede">
          I turn complex product requirements into elegant, scalable, and visually polished digital systems.
        </p>
        <div className="hero-actions" aria-label="Main actions">
          <ButtonLink href="#work">View selected work</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Let&apos;s build something
          </ButtonLink>
        </div>
        <div className="hero-stack" aria-label="Core stack">
          React / TypeScript / Ionic / Node.js / Django / PostgreSQL
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
