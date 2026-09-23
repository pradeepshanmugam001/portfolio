function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build reliable cloud solutions together</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> pradeep.cloudengineer@example.com</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
            <p><strong>GitHub:</strong> github.com/yourusername</p>
            <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Your email" />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Project / Hiring / Inquiry" />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about your opportunity..." />
          </label>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
