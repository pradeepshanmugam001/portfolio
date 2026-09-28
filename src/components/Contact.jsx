import { useState } from 'react'

const contactApiUrl = 'https://6aba0ff75b549d818d61d9a1.mockapi.io/portfolio'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')
  const [hasError, setHasError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')
    setHasError(false)

    const form = event.currentTarget
    const formData = new FormData(form)
    const contact = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      })

      if (!response.ok) {
        throw new Error('The message could not be sent.')
      }

      form.reset()
      setStatus('Your message has been sent. Thank you for reaching out.')
    } catch {
      setHasError(true)
      setStatus('Unable to send your message right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Your email" required />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Project / Hiring / Inquiry" required />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about your opportunity..." required />
          </label>

          <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className={`contact-status${hasError ? ' error' : ''}`} role={hasError ? 'alert' : 'status'}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
