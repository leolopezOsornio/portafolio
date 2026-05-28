import { expertise } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Expertise() {
  return (
    <section className="section split-section" id="expertise">
      <SectionHeading
        kicker="Expertise"
        title="I work where design quality meets engineering depth."
      />
      <div className="expertise-grid">
        {expertise.map((item) => (
          <article className="expertise-card reveal" key={item.title}>
            <span></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
