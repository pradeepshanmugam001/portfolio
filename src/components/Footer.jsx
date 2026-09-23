const socials = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourprofile', icon: 'in' },
  { label: 'Email', href: 'mailto:pradeep.cloudengineer@example.com', icon: '✉' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© 2026 Pradeep | Cloud Engineer</p>
        <div className="footer-socials">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
