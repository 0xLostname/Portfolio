import { Link } from 'react-router-dom'
import Divider from '../components/Divider.jsx'
import GitHubStats from '../components/GitHubStats.jsx'
import './PageShared.css'
import './ProjectsPage.css'

const projects = [
  {
    id: 'aria',
    title: 'ARIA — AI Desktop Assistant',
    lang: 'JavaScript · Electron · React · Vite',
    year: '2026',
    url: 'https://github.com/0xLostname/ARIA-AI-Assistant',
    desc: 'A full Windows desktop assistant controlled by natural language. Built with Electron + React + Vite.',
    highlights: [
      'Local AI via Ollama — runs 100% offline, no API key needed',
      'Voice input using Whisper — fully offline speech-to-text',
      'Wake word detection — say "Hey ARIA" to open and activate the mic',
      'Fuzzy command memory — my own idea. Once the AI processes a command, it saves it. Next time, it skips the AI entirely and replays instantly.',
      'File management, screenshots, clipboard, system info, web search',
      'React + Vite frontend, Electron main process, IPC bridge for OS access',
    ],
    tag: 'Flagship'
  },
  {
    id: 'aurora',
    title: 'Aurora — Self-Learning Chatbot',
    lang: 'Python',
    year: '2025',
    url: 'https://github.com/0xLostname/Aurora-Chatbot',
    desc: 'A chatbot that learns directly from the user and stores responses in a CSV file.',
    highlights: [
      'No external AI libraries — pure Python using only the built-in csv module',
      'When Aurora does not know an answer, she asks the user to teach her',
      'Stores all learned responses permanently across sessions',
      'Runs in Google Colab or any Python environment',
    ],
    tag: 'Python'
  },
  {
    id: 'physics',
    title: 'Particle Physics Simulator',
    lang: 'Java',
    year: '2025',
    url: 'https://github.com/0xLostname/Particle-Physics-Simulator',
    desc: 'Java-based simulator that models and visualises particle physics interactions.',
    highlights: [
      'Models particle motion, collision, and behaviour in a simulated environment',
      'Built entirely in Java',
      'Visual rendering of particle interactions',
    ],
    tag: 'Java'
  },
  {
    id: 'n8n',
    title: 'n8n Automation Workflows',
    lang: 'n8n · No-code',
    year: '2026',
    url: 'https://github.com/0xLostname/n8n-workflows',
    desc: 'A collection of automation workflows for connecting tools and eliminating repetitive tasks.',
    highlights: [
      'Built with n8n — a no-code/low-code workflow automation tool',
      'Connects different services and APIs together',
      'Automates repetitive tasks without writing boilerplate code',
    ],
    tag: 'Automation'
  },
]

function ProjectsPage() {
  return (
    <div className="page reveal">
      <p className="section-tag">// projects.log</p>
      <h1 className="page-title">Things I've Built</h1>
      <Divider />
      <div className="projects-full">
        {projects.map((p) => (
          <div className="project-full-card" key={p.id}>
            <div className="pfc-header">
              <div>
                <p className="pfc-lang">{p.lang} &nbsp;·&nbsp; {p.year}</p>
                <h2 className="pfc-title">
                  <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                </h2>
                <p className="pfc-desc">{p.desc}</p>
              </div>
              <span className="pfc-tag">{p.tag}</span>
            </div>
            <ul className="pfc-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}><span className="pfc-bullet">▸</span> {h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px' }} className="reveal">
        <p className="section-tag">// github.live</p>
        <h2 className="page-title" style={{ fontSize: '1.6rem' }}>Live GitHub Stats</h2>
        <Divider />
        <GitHubStats />
      </div>
    </div>
  )
}

export default ProjectsPage
