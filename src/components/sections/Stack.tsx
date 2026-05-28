import { stackGroups } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Stack() {
  return (
    <section className="section stack-section" id="stack">
      <SectionHeading
        kicker="Stack"
        title="A modern stack for fast, scalable, maintainable products."
      />
      <div className="stack-grid">
        {stackGroups.map(([group, ...items]) => (
          <article className="stack-group reveal" key={group}>
            <h3>{group}</h3>
            <div>
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
