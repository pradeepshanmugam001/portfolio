const skillGroups = [
  {
    title: 'AWS Cloud',
    skills: [
      'Amazon EC2',
      'Amazon S3',
      'Amazon VPC',
      'Amazon CloudFront',
      'AWS CloudFormation',
      'Amazon EFS',
      'Elastic Load Balancing',
      'Application Load Balancer (ALB)',
      'Classic Load Balancer (CLB)',
      'Amazon EBS',
    ],
  },
  {
    title: 'DevOps',
    skills: [
      'Git',
      'GitHub',
      'Jenkins',
      'CI/CD Integration',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Maven',
      'Nginx',
      'Linux',
      'Shell Scripting',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section alt-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Core AWS and DevOps capabilities</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-card">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
