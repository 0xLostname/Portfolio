import Hero from '../components/Hero.jsx'
import SpinCarousel from '../components/SpinCarousel.jsx'
import Skills from '../components/Skills.jsx'
import Divider from '../components/Divider.jsx'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <Divider fancy />
      <div className="reveal">
        <SpinCarousel />
      </div>
      <Skills />
      <div className="home-links reveal">
        <p className="section-tag">// explore more</p>
        <div className="quick-links">
          <Link to="/projects" className="quick-link">
            <span className="ql-num">02</span>
            <span className="ql-label">Projects</span>
            <span className="ql-arrow">→</span>
          </Link>
          <Link to="/certificates" className="quick-link">
            <span className="ql-num">03</span>
            <span className="ql-label">Certificates</span>
            <span className="ql-arrow">→</span>
          </Link>
          <Link to="/about" className="quick-link">
            <span className="ql-num">04</span>
            <span className="ql-label">About Me</span>
            <span className="ql-arrow">→</span>
          </Link>
          <Link to="/timeline" className="quick-link">
            <span className="ql-num">05</span>
            <span className="ql-label">Timeline</span>
            <span className="ql-arrow">→</span>
          </Link>
          <Link to="/blog" className="quick-link">
            <span className="ql-num">06</span>
            <span className="ql-label">Blog</span>
            <span className="ql-arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
