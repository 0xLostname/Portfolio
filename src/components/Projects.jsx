import Divider from './Divider.jsx'
import './Projects.css'

const projects = [
  {
    title: 'ARIA — AI Desktop Assistant',
    lang: 'JavaScript · Electron · React',
    desc: 'Full Windows desktop assistant controlled by natural language. Local AI via Ollama, offline voice input via Whisper, wake word detection, and fuzzy command memory that bypasses the AI entirely for instant replay — my own idea.',
    url: 'https://github.com/0xLostname/ARIA-AI-Assistant'
  },
  {
    title: 'Aurora — Self-Learning Chatbot',
    lang: 'Python',
    desc: "A chatbot that learns from the user in real time. When it doesn't know an answer it asks you to teach it, then stores the response permanently in CSV. No external AI libraries — pure Python.",
    url: 'https://github.com/0xLostname/Aurora-Chatbot'
  },
  {
    title: 'Particle Physics Simulator',
    lang: 'Java',
    desc: 'Java-based simulator that models and visualises particle physics interactions — motion, collision, and behaviour in a simulated environment.',
    url: 'https://github.com/0xLostname/Particle-Physics-Simulator'
  },
  {
    title: 'n8n Automation Workflows',
    lang: 'n8n · No-code',
    desc: 'A collection of automation workflows built with n8n for connecting tools and services and eliminating repetitive tasks.',
    url: 'https://github.com/0xLostname/n8n-workflows'
  },
]

function Projects() {
  return (
    <section id="projects" className="reveal">
      <p className="section-tag">// 02 — projects.log</p>
      <h2 className="section-title">Things I've Built</h2>
      <Divider />
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <p className="project-lang">{p.lang}</p>
            <h3>
              <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
            </h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
