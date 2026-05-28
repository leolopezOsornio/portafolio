import { ButtonLink } from '../ui/ButtonLink'

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner reveal">
        <span className="section-kicker">Contact</span>
        <h2>Let&apos;s build a product that feels as good as it works.</h2>
        <p>
          Available for remote roles, freelance projects, and product-focused collaborations.
        </p>
        <div className="contact-actions">
          <ButtonLink href="mailto:hello@leolopez.dev">Start a conversation</ButtonLink>
          <ButtonLink href="https://github.com/" variant="secondary" external>
            GitHub
          </ButtonLink>
          <ButtonLink href="https://www.linkedin.com/" variant="secondary" external>
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
