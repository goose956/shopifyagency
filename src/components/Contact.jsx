import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <div className="badge">Get In Touch</div>
            <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
              Start improving your Shopify store today
            </h2>
            <p className="contact__desc">
              Whether you want to explore our apps, need a custom solution, or just have a question
              — we'd love to hear from you.
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact__success">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Thanks! We'll be in touch soon.
              </div>
            )}
            {error && (
              <div className="contact__error">
                {error}
              </div>
            )}
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your store and what you're looking for..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg contact__submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
              {!sending && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
