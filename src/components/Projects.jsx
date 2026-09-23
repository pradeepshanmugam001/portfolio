const projects = [
  {
    title: 'AWS Cloud Web Application',
    description:
      'Deployed a scalable web application on AWS using EC2, VPC, Security Groups, Application Load Balancer and Auto Scaling. Configured networking, load balancing and monitoring for a reliable cloud environment.',
    technologies: ['AWS EC2', 'VPC', 'ALB', 'Auto Scaling', 'Security Groups', 'CloudWatch'],
    primaryLink: '#',
    githubLink: 'https://github.com/yourusername/aws-webapp',
  },
  {
    title: 'CI/CD Pipeline with Jenkins and Docker',
    description:
      'Implemented a CI/CD pipeline using GitHub, Jenkins and Docker to automate application build, testing and deployment. The pipeline builds a Docker image and deploys the application to an AWS EC2 environment.',
    technologies: ['Git', 'GitHub', 'Jenkins', 'Docker', 'AWS EC2', 'CI/CD'],
    primaryLink: '#',
    githubLink: 'https://github.com/yourusername/jenkins-docker-pipeline',
  },
  {
    title: 'Infrastructure Automation with Terraform and Ansible',
    description:
      'Automated AWS infrastructure provisioning and server configuration using Terraform and Ansible. Terraform provisions AWS resources while Ansible performs server configuration and application setup.',
    technologies: ['Terraform', 'Ansible', 'AWS EC2', 'VPC', 'IAM', 'Linux'],
    primaryLink: '#',
    githubLink: 'https://github.com/yourusername/terraform-ansible',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Hands-on cloud and DevOps implementations</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-topline">Cloud Project</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.primaryLink} className="btn btn-primary small-btn">
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  className="btn btn-secondary small-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
