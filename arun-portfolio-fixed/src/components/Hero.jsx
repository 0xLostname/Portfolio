import { useState, useEffect } from 'react'
import MagneticBtn from './MagneticBtn.jsx'
import GlitchText from './GlitchText.jsx'
import './Hero.css'

const FULL_NAME = 'K Arun Tej'
const ROLES = ['CS Student', 'Builder', 'Hacker', 'CTF Player', 'AI Enthusiast']

function Hero() {
  const [typed,    setTyped]    = useState('')
  const [greeting, setGreeting] = useState('')
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [roleFade, setRoleFade] = useState(true)

  // typing animation
  useEffect(() => {
    let i = 0
    const t = setTimeout(function tick() {
      setTyped(FULL_NAME.slice(0, i + 1))
      i++
      if (i < FULL_NAME.length) setTimeout(tick, 100)
    }, 500)
    return () => clearTimeout(t)
  }, [])

  // cycling role text
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false)
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % ROLES.length)
        setRoleFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  function sayHello() {
    setGreeting('> hello, thanks for visiting! 😊')
    setTimeout(() => setGreeting(''), 4000)
  }

  return (
    <div className="hero">
      {/* aura glow behind title */}
      <div className="hero-aura" />

      <p className="hero-label">// initializing portfolio.exe</p>

      <h1 className="hero-title">
        <GlitchText text={typed || '\u00A0'} />
        <span className="cursor">_</span>
      </h1>

      <p className="hero-sub">
        <span className={`role-text ${roleFade ? 'role-in' : 'role-out'}`}>
          {ROLES[roleIdx]}
        </span>
        &nbsp;/&nbsp; Amrita Vishwa Vidyapeetham
      </p>

      <p className="hero-desc">
        Building AI assistants, physics simulators, and automation tools.
        Competing in hackathons and CTFs.
      </p>

      {/* wave letters */}
      <div className="hero-wave">
        {'OPEN TO COLLABS'.split('').map((ch, i) => (
          <span
            key={i}
            className="wave-char"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>

      <div className="hero-buttons">
        <MagneticBtn onClick={sayHello}>$ say_hello</MagneticBtn>
        <MagneticBtn onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>view_projects</MagneticBtn>
      </div>

      {greeting && <p className="greeting">{greeting}</p>}
    </div>
  )
}

export default Hero
