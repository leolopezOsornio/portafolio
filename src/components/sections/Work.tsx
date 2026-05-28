import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import folderIcon from '../../assets/icons/folder.svg'
import { IconTile } from '../ui/IconTile'
import { fadeUp, staggerContainer } from '../ui/motionPresets'
import { SectionHeading } from '../ui/SectionHeading'

export function Work() {
  return (
    <section className="section" id="work">
      <SectionHeading kicker="Selected Work" title="Products built for real-world use.">
        A focused collection of platforms, dashboards, and digital systems designed with production requirements, scalability, and visual polish in mind.
      </SectionHeading>

      <motion.div
        className="projects-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
      >
        {projects.map((project, projectIndex) => (
          <motion.article
            className={`project-card ${projectIndex === 0 ? 'featured' : ''}`}
            key={project.name}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="project-info">
              <span className="project-index">
                <IconTile src={folderIcon} />
                {project.index}
              </span>
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
                  {'url' in project ? (
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
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
