import './App.css'

const projects = [
  {
    index: '01',
    name: 'WOAW',
    type: 'Automotive Product Platform',
    role: 'Frontend Experience / Visual UI',
    stack: ['Ionic', 'Angular', 'Node.js', 'MongoDB'],
    summary:
      'Automotive application shaped into a premium product interface with dashboards, authentication, document workflows, multimedia uploads, and administration tools.',
    highlights: [
      'Authentication flows',
      'Dashboard experience',
      'Document management',
      'Media upload',
    ],
  },
  {
    index: '02',
    name: 'JOLIWEB',
    type: 'Corporate Web Platform',
    role: 'Frontend Development / Responsive UI',
    stack: ['React-ready UI', 'Responsive Design', 'Production'],
    summary:
      'Corporate experience built for a real company, focused on clean structure, polished presentation, responsive behavior, and production delivery.',
    highlights: [
      'Live production site',
      'Corporate visual system',
      'Optimized layouts',
      'Professional UX',
    ],
    url: 'https://joli.com.mx/',
  },
  {
    index: '03',
    name: 'CSTI',
    type: 'Scalable E-commerce System',
    role: 'Full Stack Development',
    stack: ['Django', 'PostgreSQL', 'REST APIs'],
    summary:
      'Commerce platform with catalog, cart, wishlist, admin tooling, backend logic, API integration, and a scalable data foundation.',
    highlights: [
      'Catalog logic',
      'Shopping cart',
      'Wishlist',
      'Admin panel',
    ],
  },
]

const expertise = [
  {
    title: 'Frontend Systems',
    text: 'Modern interfaces, responsive layouts, dashboards, PWAs, and visual systems built with product-level polish.',
  },
  {
    title: 'Backend Architecture',
    text: 'APIs, authentication, database models, admin logic, and server-side foundations designed to support real workflows.',
  },
  {
    title: 'Product Execution',
    text: 'From visual direction to implementation, optimization, deployment, and iteration with a clear premium standard.',
  },
]

const stackGroups = [
  ['Frontend', 'React', 'TypeScript', 'Ionic', 'Angular', 'SCSS', 'Tailwind'],
  ['Backend', 'Node.js', 'Django', 'REST APIs', 'Authentication', 'Business Logic'],
  ['Data', 'MongoDB', 'PostgreSQL', 'Firebase', 'Scalable Models'],
  ['Delivery', 'GitHub', 'Azure DevOps', 'CI/CD', 'Netlify', 'Production'],
]

function App() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Leo Lopez home">
          <span>Leo Lopez</span>
          <small>Full Stack Product Developer</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

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
            <a className="button primary" href="#work">View selected work</a>
            <a className="button secondary" href="#contact">Let&apos;s build something</a>
          </div>
          <div className="hero-stack" aria-label="Core stack">
            React / TypeScript / Ionic / Node.js / Django / PostgreSQL
          </div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="Product interface preview">
          <div className="dashboard-frame">
            <div className="frame-topbar">
              <span></span>
              <span></span>
              <span></span>
              <strong>Production Overview</strong>
            </div>
            <div className="metric-grid">
              <article>
                <span>Real systems</span>
                <strong>03</strong>
              </article>
              <article>
                <span>Product stack</span>
                <strong>Full</strong>
              </article>
              <article>
                <span>Delivery</span>
                <strong>CI/CD</strong>
              </article>
            </div>
            <div className="chart-panel">
              <div className="chart-bars">
                <i style={{ height: '42%' }}></i>
                <i style={{ height: '68%' }}></i>
                <i style={{ height: '54%' }}></i>
                <i style={{ height: '86%' }}></i>
                <i style={{ height: '72%' }}></i>
                <i style={{ height: '94%' }}></i>
              </div>
              <div>
                <p>Frontend precision</p>
                <strong>Backend structure</strong>
              </div>
            </div>
            <div className="pipeline">
              {['UX/UI', 'APIs', 'Database', 'Deploy'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <p>
          Premium interfaces. Scalable systems. Real product execution.
        </p>
      </section>

      <section className="section" id="work">
        <div className="section-heading reveal">
          <span className="section-kicker">Selected Work</span>
          <h2>Products built for real-world use.</h2>
          <p>
            A focused collection of platforms, dashboards, and digital systems designed with production requirements, scalability, and visual polish in mind.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, projectIndex) => (
            <article
              className={`project-card reveal ${projectIndex === 0 ? 'featured' : ''}`}
              key={project.name}
            >
              <div className="project-info">
                <span className="project-index">{project.index}</span>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="project-preview">
                <div className="preview-shell">
                  <div className="preview-header">
                    <span>{project.role}</span>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Live site
                      </a>
                    ) : (
                      <em>Case study</em>
                    )}
                  </div>
                  <div className="preview-body">
                    {project.highlights.map((highlight) => (
                      <div key={highlight}>
                        <small>{highlight}</small>
                        <strong></strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="expertise">
        <div className="section-heading reveal">
          <span className="section-kicker">Expertise</span>
          <h2>I work where design quality meets engineering depth.</h2>
        </div>
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

      <section className="process-section">
        <div className="section-heading reveal">
          <span className="section-kicker">Process</span>
          <h2>How I build products that feel complete.</h2>
        </div>
        <div className="process-list">
          {[
            ['01', 'Understand the product', 'Translate business needs into clear flows, priorities, and technical decisions.'],
            ['02', 'Design the experience', 'Shape hierarchy, responsive behavior, and interactions with a premium visual standard.'],
            ['03', 'Build the system', 'Implement modular frontend and backend structures that stay maintainable.'],
            ['04', 'Polish the details', 'Refine motion, performance, responsiveness, and visual consistency before delivery.'],
          ].map(([number, title, text]) => (
            <article className="process-item reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading reveal">
          <span className="section-kicker">Stack</span>
          <h2>A modern stack for fast, scalable, maintainable products.</h2>
        </div>
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

      <section className="contact-section" id="contact">
        <div className="contact-inner reveal">
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s build a product that feels as good as it works.</h2>
          <p>
            Available for remote roles, freelance projects, and product-focused collaborations.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:hello@leolopez.dev">Start a conversation</a>
            <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
