import { Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
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
          <ButtonLink href="mailto:leol83377@gmail.com">Start a conversation</ButtonLink>
          <a className="button secondary contact-link" href="mailto:leol83377@gmail.com">
            <Send size={16} strokeWidth={1.8} />
            Email
          </a>
          <a className="button secondary contact-link" href="https://github.com/leolopezOsornio" target="_blank" rel="noreferrer">
            <FaGithub size={16} />
            GitHub
          </a>
          <a className="button secondary contact-link" href="https://www.linkedin.com/in/leonardo-lópez-osornio-84b469354" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={15} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
