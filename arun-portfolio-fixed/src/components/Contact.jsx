import Divider from './Divider.jsx'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="reveal">
      <p className="section-tag">// 05 — contact.sh</p>
      <h2 className="section-title">Get In Touch</h2>
      <Divider />
      <p className="contact-desc">Open to collabs, feedback, and interesting projects.</p>
      <div className="contact-links">
        <a className="contact-link" href="mailto:kammilaaruntej@gmail.com">
          📧 kammilaaruntej@gmail.com
        </a>
        <a className="contact-link" href="https://github.com/0xLostname" target="_blank" rel="noreferrer">
          🐙 github.com/0xLostname
        </a>
      </div>
    </section>
  )
}

export default Contact
