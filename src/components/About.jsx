import Divider from './Divider.jsx'
import './About.css'

function About() {
  return (
    <section id="about" className="reveal">
      <p className="section-tag">// 04 — whoami</p>
      <h2 className="section-title">About Me</h2>
      <Divider />
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm <strong>K Arun Tej</strong>, a CS student at{' '}
            <em>Amrita Vishwa Vidyapeetham</em>. I build things that go beyond
            assignments — AI assistants, simulators, automation pipelines.
          </p>
          <p>
            My biggest idea so far was the <em>fuzzy command memory</em> in
            ARIA — realising that if the AI already processed a command once,
            there's no reason to call it again. Just replay it instantly.
          </p>
          <p>
            I compete in <strong>hackathons</strong> and <strong>CTFs</strong>{' '}
            because I learn more in one event than in a month of classes.
          </p>
        </div>

        <div className="terminal-box">
          <div className="terminal-bar">
            <div className="dot dot-red" />
            <div className="dot dot-yellow" />
            <div className="dot dot-green" />
          </div>
          <div className="terminal-line"><span className="prompt">~$ </span><span className="cmd">cat info.txt</span></div>
          <div className="terminal-line"><span className="out">name: K Arun Tej</span></div>
          <div className="terminal-line"><span className="out">alias: 0xLostname</span></div>
          <div className="terminal-line"><span className="out">college: Amrita VV</span></div>
          <div className="terminal-line"><span className="out">sem: 2nd</span></div>
          <div className="terminal-line"><span className="out">interests: AI, CTF, automation</span></div>
          <br />
          <div className="terminal-line"><span className="prompt">~$ </span><span className="cmd">status</span></div>
          <div className="terminal-line">
            <span className="out open">open to collabs &amp; projects ✓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
