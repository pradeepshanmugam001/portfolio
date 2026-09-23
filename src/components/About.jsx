const expertise = [
  'AWS Cloud',
  'Cloud Infrastructure',
  'DevOps',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'Infrastructure as Code',
  'Configuration Management',
  'Automation',
  'Linux',
]

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>Cloud-focused engineer building reliable, automated solutions</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am a Cloud Engineer with a strong focus on AWS and DevOps. I enjoy
              designing, deploying and automating cloud infrastructure to improve
              scalability, security and operational efficiency.
            </p>
            <p>
              My hands-on project experience includes working with AWS services,
              containerization, continuous integration and delivery pipelines,
              infrastructure automation, and Linux-based environments. I focus on
              practical, scalable solutions that reduce manual effort and support
              reliable application delivery.
            </p>
          </div>

          <div className="about-tags" aria-label="Core cloud technology areas">
            {expertise.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
