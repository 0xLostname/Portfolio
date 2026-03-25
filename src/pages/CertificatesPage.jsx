import { useState } from 'react'
import Divider from '../components/Divider.jsx'
import './PageShared.css'
import './CertificatesPage.css'

const certs = [
  {
    id: 'cert1',
    title: 'ZENITHON — Hackathon',
    org: 'Panimalar Engineering College x IEEE',
    type: 'Hackathon',
    year: '2026',
    team: 'Team Syntax Error',
    src: '/cert_zenithon.jpg',
    desc: 'Participated in ZENITHON, a hackathon organised by the Department of IT at Panimalar Engineering College in association with the IEEE Student Branch.'
  },
  {
    id: 'cert2',
    title: 'Lithos 2K26 — Pitch it LIT',
    org: 'Chennai Institute of Technology',
    type: 'Idea Submission',
    year: '2026',
    team: '',
    src: '/cert_lithos.jpg',
    desc: 'Participated in the Online Idea Submission Round of Lithos 2K26, organised by Chennai Institute of Technology.'
  },
  {
    id: 'cert3',
    title: "CultRang '26 — Capture The Flag",
    org: 'CultRang',
    type: 'CTF',
    year: '2026',
    team: '',
    src: '/cert_cultrang.jpg',
    desc: "Participated in the Capture The Flag event held at CultRang '26."
  },
]

function CertCard({ cert }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="cert-card">
      <div className="cert-card-top">
        <div className="cert-meta">
          <span className="cert-type">{cert.type} &nbsp;·&nbsp; {cert.year}</span>
          <h2 className="cert-card-title">{cert.title}</h2>
          <p className="cert-org">{cert.org}</p>
          {cert.team && <p className="cert-team">Team: {cert.team}</p>}
          <p className="cert-card-desc">{cert.desc}</p>
        </div>
        <button className="cert-view-btn" onClick={() => setOpen(!open)}>
          {open ? '[ hide certificate ]' : '[ view certificate ]'}
        </button>
      </div>
      {open && (
        <div className="cert-image-wrap">
          <img src={cert.src} alt={cert.title} className="cert-full-img" />
        </div>
      )}
    </div>
  )
}

function CertificatesPage() {
  return (
    <div className="page reveal">
      <p className="section-tag">// certificates.dat</p>
      <h1 className="page-title">Achievements</h1>
      <Divider />
      <div className="certs-list">
        {certs.map((c) => <CertCard key={c.id} cert={c} />)}
      </div>
    </div>
  )
}

export default CertificatesPage
