const steps = [
  'Developer',
  'GitHub',
  'Jenkins CI/CD',
  'Docker',
  'AWS EC2',
  'Application Load Balancer',
  'Auto Scaling',
  'Users',
]

function Architecture() {
  return (
    <section id="architecture" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Cloud Architecture</p>
          <h2>Continuous delivery flow for scalable application deployment</h2>
        </div>

        <div className="architecture-diagram" aria-label="Cloud deployment architecture">
          {steps.map((step, index) => (
            <div key={step} className="flow-item">
              <div className="flow-node">{step}</div>
              {index < steps.length - 1 && <span className="flow-arrow">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Architecture
