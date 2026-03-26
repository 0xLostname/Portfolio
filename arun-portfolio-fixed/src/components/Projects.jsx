import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'ARIA — AI Desktop Assistant',
    lang: 'JS · Electron · React',
    desc: 'Full Windows desktop assistant. Local AI, offline voice, wake word, fuzzy command memory.',
    detail: 'My own idea: bypass the AI entirely for known commands using fuzzy matching. Replays in 50ms instead of 3s.',
    url: 'https://github.com/0xLostname/ARIA-AI-Assistant',
    icon: '◈',
    color: 'var(--purple2)',
  },
  {
    title: 'Aurora — Self-Learning Chatbot',
    lang: 'Python',
    desc: 'Chatbot that learns from you in real time. Stores answers in CSV — no AI libraries.',
    detail: 'Pure Python using only the built-in csv module. Runs anywhere — even Google Colab.',
    url: 'https://github.com/0xLostname/Aurora-Chatbot',
    icon: '🌌',
    color: 'var(--cyan)',
  },
  {
    title: 'Particle Physics Simulator',
    lang: 'Java',
    desc: 'Visualises particle motion, collision, and behaviour in a simulated environment.',
    detail: 'Built entirely in Java. Visual rendering of particle interactions in real time.',
    url: 'https://github.com/0xLostname/Particle-Physics-Simulator',
    icon: '⚛️',
    color: 'var(--green)',
  },
  {
    title: 'n8n Automation Workflows',
    lang: 'n8n · No-code',
    desc: 'Automation workflows connecting tools and eliminating repetitive tasks.',
    detail: 'No-code automation pipelines built with n8n for integrating different services.',
    url: 'https://github.com/0xLostname/n8n-workflows',
    icon: '⚙️',
    color: 'var(--pink)',
  },
]

function FlipCard({ p }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div className="flip-front">
          <div className="fc-icon" style={{ color: p.color }}>{p.icon}</div>
          <p className="fc-lang">{p.lang}</p>
          <h3 className="fc-title">
            <a href={p.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              {p.title}
            </a>
          </h3>
          <p className="fc-desc">{p.desc}</p>
          <span className="fc-hint">hover for more ↗</span>
        </div>
        {/* BACK */}
        <div className="flip-back">
          <div className="fc-icon" style={{ color: p.color }}>{p.icon}</div>
          <h3 className="fc-title-back">{p.title}</h3>
          <p className="fc-detail">{p.detail}</p>
          <a href={p.url} target="_blank" rel="noreferrer" className="fc-link" onClick={(e) => e.stopPropagation()}>
            view on github →
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="projects-grid">
        {projects.map((p) => (
          <FlipCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
