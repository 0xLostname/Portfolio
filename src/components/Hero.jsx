import { useState, useEffect } from 'react'
import './Hero.css'

const FULL_NAME = 'K Arun Tej'

function Hero() {
  const [typed, setTyped] = useState('')
  const [greeting, setGreeting] = useState('')

  // typing animation using useEffect + setTimeout
  useEffect(() => {
    let index = 0
    function typeNext() {
      if (index < FULL_NAME.length) {
        setTyped(FULL_NAME.slice(0, index + 1))
        index++
        setTimeout(typeNext, 100)
      }
    }
    const timer = setTimeout(typeNext, 400)
    return () => clearTimeout(timer)
  }, [])

  function sayHello() {
    setGreeting('> hello, thanks for visiting! 😊')
  }

  return (
    <div className="hero">
      <p className="hero-label">// initializing portfolio</p>
      <h1 className="hero-title">
        {typed}<span className="cursor">_</span>
      </h1>
      <p className="hero-sub">CS Student &nbsp;/&nbsp; Builder &nbsp;/&nbsp; Hacker</p>
      <p className="hero-desc">
        Amrita Vishwa Vidyapeetham. Building AI assistants, physics simulators,
        and automation tools. Competing in hackathons and CTFs.
      </p>
      <div className="hero-buttons">
        <button className="btn" onClick={sayHello}>$ say_hello</button>
        <a className="btn btn-ghost" href="#projects">view_projects</a>
      </div>
      {greeting && <p className="greeting">{greeting}</p>}
    </div>
  )
}

export default Hero
