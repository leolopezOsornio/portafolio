import { processSteps } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section className="process-section">
      <SectionHeading kicker="Process" title="How I build products that feel complete." />
      <div className="process-list">
        {processSteps.map(([number, title, text]) => (
          <article className="process-item reveal" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
