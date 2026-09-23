const certifications = [
  'AWS Certification',
  'DevOps Certification',
  'Other Cloud Certifications',
]

function Certifications() {
  return (
    <section id="certifications" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Certifications</p>
          <h2>Professional certifications and future learning goals</h2>
        </div>

        <div className="cert-list">
          {certifications.map((cert) => (
            <div key={cert} className="cert-card">
              <span className="cert-icon">✓</span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
