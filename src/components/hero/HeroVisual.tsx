import { motion, useScroll, useTransform } from 'framer-motion'

const pipelineItems = ['UX/UI', 'APIs', 'Database', 'Deploy']
const barHeights = ['42%', '68%', '54%', '86%', '72%', '94%']

export function HeroVisual() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -34])

  return (
    <motion.div
      className="hero-visual"
      aria-label="Product interface preview"
      initial={{ y: 34, scale: 0.98 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{ y }}
    >
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
            {barHeights.map((height) => (
              <i key={height} style={{ height }}></i>
            ))}
          </div>
          <div>
            <p>Frontend precision</p>
            <strong>Backend structure</strong>
          </div>
        </div>
        <div className="pipeline">
          {pipelineItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
