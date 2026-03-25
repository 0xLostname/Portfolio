import Divider from '../components/Divider.jsx'
import './PageShared.css'
import './TimelinePage.css'

const events = [
  {
    date: 'Jan 2025',
    type: 'start',
    title: 'Started CS at Amrita VV',
    desc: 'Began my Computer Science degree at Amrita Vishwa Vidyapeetham, Chennai. First semester — learning the fundamentals.',
  },
  {
    date: 'Mid 2025',
    type: 'project',
    title: 'Built Aurora Chatbot',
    desc: 'My first real Python project. A self-learning chatbot that stores responses in a CSV file — no libraries, pure Python. Submitted as a college assignment and then made it public on GitHub.',
  },
  {
    date: 'Late 2025',
    type: 'project',
    title: 'Particle Physics Simulator',
    desc: 'Built a Java-based physics simulator to visualise particle motion and collisions. First time writing a larger Java project.',
  },
  {
    date: 'Jan 2026',
    type: 'idea',
    title: 'The ARIA idea',
    desc: 'Started building ARIA — a Windows desktop assistant that understands natural language. The fuzzy command memory system (my own idea) came from noticing how slow it was to call the AI for the same commands repeatedly.',
  },
  {
    date: 'Feb 2026',
    type: 'event',
    title: 'ZENITHON Hackathon',
    desc: 'Competed at ZENITHON, organised by Panimalar Engineering College x IEEE, as part of Team Syntax Error. First hackathon experience.',
  },
  {
    date: 'Feb 2026',
    type: 'event',
    title: 'Lithos 2K26 — Pitch it LIT',
    desc: 'Submitted an idea to the online idea pitching round of Lithos 2K26, organised by Chennai Institute of Technology.',
  },
  {
    date: 'Feb 2026',
    type: 'event',
    title: 'CultRang CTF',
    desc: "Competed in the Capture The Flag event at CultRang '26. First CTF — learned about XSS, web exploitation, and forensics basics.",
  },
  {
    date: 'Mar 2026',
    type: 'project',
    title: 'ARIA v3 — React + Vite migration',
    desc: 'Rewrote the ARIA frontend from 1700 lines of vanilla JS into a clean React + Vite component architecture. Added local voice input via Whisper, wake word detection, and command memory.',
  },
  {
    date: 'Mar 2026',
    type: 'project',
    title: 'This portfolio',
    desc: 'Built this portfolio using React + Vite. Multiple pages, particle canvas, AI chat widget, live GitHub stats, and everything else you see here.',
  },
]

const typeColors = {
  start:   'var(--green)',
  project: 'var(--purple2)',
  event:   'var(--cyan)',
  idea:    '#f59e0b',
}

const typeLabels = {
  start:   'milestone',
  project: 'project',
  event:   'event',
  idea:    'idea',
}

function TimelinePage() {
  return (
    <div className="page reveal">
      <p className="section-tag">// timeline.log</p>
      <h1 className="page-title">My Journey</h1>
      <Divider />

      <div className="timeline-legend">
        {Object.entries(typeLabels).map(([key, label]) => (
          <span key={key} className="legend-item">
            <span className="legend-dot" style={{ background: typeColors[key] }} />
            {label}
          </span>
        ))}
      </div>

      <div className="timeline">
        {events.map((e, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-left">
              <span className="timeline-date">{e.date}</span>
            </div>
            <div className="timeline-center">
              <div className="timeline-dot" style={{ background: typeColors[e.type], boxShadow: `0 0 10px ${typeColors[e.type]}` }} />
              {i < events.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-right">
              <span className="timeline-type" style={{ color: typeColors[e.type] }}>
                {typeLabels[e.type]}
              </span>
              <h2 className="timeline-title">{e.title}</h2>
              <p className="timeline-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelinePage
