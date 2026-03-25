import Divider from '../components/Divider.jsx'
import './PageShared.css'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="page reveal">
      <p className="section-tag">// whoami</p>
      <h1 className="page-title">About Me</h1>
      <Divider />

      <div className="about-full">

        <div className="about-section">
          <h2 className="about-sub">The basics</h2>
          <p>I'm <strong>K Arun Tej</strong>, a Computer Science student at <em>Amrita Vishwa Vidyapeetham</em>, Chennai. I'm in my second semester and already building things way outside the curriculum — AI desktop assistants, physics simulators, automation pipelines.</p>
          <p>My GitHub handle is <em>0xLostname</em>. The <em>0x</em> prefix is from hex notation — a nod to low-level computing and security culture.</p>
        </div>

        <div className="about-section">
          <h2 className="about-sub">How I think</h2>
          <p>I don't wait for assignments to start building. If something is slow, I ask why and try to fix it. That's how the fuzzy command memory in ARIA happened — I was watching the AI process the same command again and thought <em>"why call the AI at all if we already know the answer?"</em> So I built a cache with fuzzy matching that bypasses the AI entirely for known commands.</p>
          <p>That kind of thinking — noticing inefficiency and removing it — is what I enjoy most about building software.</p>
        </div>

        <div className="about-section">
          <h2 className="about-sub">Events & competitions</h2>
          <p>I compete in <strong>hackathons</strong> and <strong>CTFs</strong> whenever I can. I learn more in one event than in weeks of classes. I've participated in ZENITHON (IEEE hackathon), Lithos 2K26 (idea pitch), and CultRang CTF so far — and looking for more.</p>
        </div>

        <div className="about-terminal">
          <div className="terminal-bar">
            <div className="dot dot-red" />
            <div className="dot dot-yellow" />
            <div className="dot dot-green" />
          </div>
          <div className="tl"><span className="tp">~$ </span><span className="tc">cat stack.txt</span></div>
          <div className="tl"><span className="to">languages:  Python, JavaScript, Java, HTML, CSS</span></div>
          <div className="tl"><span className="to">tools:      Git, Electron, React, Vite, n8n, Ollama</span></div>
          <div className="tl"><span className="to">interests:  AI, CTF, automation, systems</span></div>
          <div className="tl"><span className="to">college:    Amrita Vishwa Vidyapeetham</span></div>
          <div className="tl"><span className="to">sem:        2nd</span></div>
          <br/>
          <div className="tl"><span className="tp">~$ </span><span className="tc">cat goals.txt</span></div>
          <div className="tl"><span className="to">→ get better at systems programming</span></div>
          <div className="tl"><span className="to">→ compete in more CTFs</span></div>
          <div className="tl"><span className="to">→ build something people actually use</span></div>
          <br/>
          <div className="tl"><span className="tp">~$ </span><span className="tg">▊</span></div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage
