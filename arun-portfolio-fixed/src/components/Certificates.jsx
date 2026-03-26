import { useState } from 'react'
import Divider from './Divider.jsx'
import './Certificates.css'

const certs = [
  { id: 'cert1', title: '🏆 ZENITHON — Hackathon', sub: 'Panimalar Engineering College x IEEE', src: '/cert_zenithon.jpg' },
  { id: 'cert2', title: '💡 Lithos 2K26 — Pitch it LIT', sub: 'Chennai Institute of Technology', src: '/cert_lithos.jpg' },
  { id: 'cert3', title: "🚩 CultRang '26 — Capture The Flag", sub: '', src: '/cert_cultrang.jpg' },
]

function CertBlock({ cert }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="cert-block">
      <div className="cert-header" onClick={() => setOpen(!open)}>
        <span className="cert-title">
          {cert.title}
          {cert.sub && <span className="cert-sub">&nbsp;&nbsp;{cert.sub}</span>}
        </span>
        <button className="cert-toggle">{open ? '[ hide ]' : '[ view ]'}</button>
      </div>
      {open && <img className="cert-img" src={cert.src} alt={cert.title} />}
    </div>
  )
}

function Certificates() {
  return (
    <section id="certs" className="reveal">
      <p className="section-tag">// 03 — certificates.dat</p>
      <h2 className="section-title">Achievements</h2>
      <Divider />
      {certs.map((c) => (
        <CertBlock key={c.id} cert={c} />
      ))}
    </section>
  )
}

export default Certificates
