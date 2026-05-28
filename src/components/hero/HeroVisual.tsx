const pipelineItems = ['UX/UI', 'APIs', 'Database', 'Deploy']
const barHeights = ['42%', '68%', '54%', '86%', '72%', '94%']

export function HeroVisual() {
  return (
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
    </div>
  )
}
