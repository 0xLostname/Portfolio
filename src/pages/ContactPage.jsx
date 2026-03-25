import { useState } from 'react'
import Divider from '../components/Divider.jsx'
import './PageShared.css'
import './ContactPage.css'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // update form state when user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    // clear error for that field as they type
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // validate all fields
  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message too short'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="page reveal">
      <p className="section-tag">// contact.sh</p>
      <h1 className="page-title">Get In Touch</h1>
      <Divider />

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">Open to collabs, feedback, and interesting projects. Fill out the form or reach out directly.</p>
          <div className="contact-direct">
            <a href="mailto:kammilaaruntej@gmail.com" className="contact-direct-link">
              <span className="cdl-label">email</span>
              <span className="cdl-value">kammilaaruntej@gmail.com</span>
            </a>
            <a href="https://github.com/0xLostname" target="_blank" rel="noreferrer" className="contact-direct-link">
              <span className="cdl-label">github</span>
              <span className="cdl-value">0xLostname</span>
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="form-success">
            <p className="success-icon">✓</p>
            <p className="success-msg">Message received. I'll get back to you.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label">name</label>
              <input
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your name"
                autoComplete="off"
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">email</label>
              <input
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                autoComplete="off"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">message</label>
              <textarea
                className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="what's up?"
                rows={5}
              />
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button type="submit" className="form-submit">$ send_message</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactPage
