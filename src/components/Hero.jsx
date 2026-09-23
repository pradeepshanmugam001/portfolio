import profilePic from '../assets/Pradeep.png'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourprofile', icon: 'in' },
  { label: 'Email', href: 'mailto:pradeep.cloudengineer@example.com', icon: '✉' },
]

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Cloud Engineer</p>
          <h1>PRADEEP</h1>
          <p className="hero-intro">
            Cloud Engineer with hands-on project experience in AWS Cloud, DevOps,
            CI/CD, containerization, infrastructure as code and automation.
            Experienced in building, deploying and managing cloud-based
            applications using AWS and DevOps technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="" className="btn btn-secondary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="social-pill"
                aria-label={link.label}
              >
                <span>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile image section">
          <div className="profile-card">
            <img
              src={profilePic}
              alt="PRADEEP professional portrait"
            />
          </div>
          <div className="floating-badge badge-one">AWS</div>
          <div className="floating-badge badge-two">DevOps</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
