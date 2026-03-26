import { useEffect, useRef } from 'react'
import Divider from './Divider.jsx'
import './Skills.css'

const skills = [
  { name: 'HTML5',      category: 'Markup',          level: 'Learning ⚡',    pct: 40 },
  { name: 'CSS3',       category: 'Styling',          level: 'Learning ⚡',    pct: 40 },
  { name: 'JavaScript', category: 'Scripting',        level: 'Beginner 🌱',   pct: 25 },
  { name: 'Python',     category: 'Programming',      level: 'Comfortable 🔥', pct: 65 },
  { name: 'Git',        category: 'Version Control',  level: 'Comfortable 🔥', pct: 65 },
  { name: 'Java',       category: 'Programming',      level: 'Beginner 🌱',   pct: 25 },
]

function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.querySelectorAll('.level-fill').forEach((bar) => {
          bar.style.width = bar.dataset.pct + '%'
        })
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="reveal" ref={sectionRef}>
      <p className="section-tag">// 01 — skills.exe</p>
      <h2 className="section-title">Technical Stack</h2>
      <Divider />
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Category</th>
            <th>Level</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((s) => (
            <tr key={s.name}>
              <td>{s.name}</td>
              <td>{s.category}</td>
              <td>{s.level}</td>
              <td>
                <span className="level-bar">
                  <span className="level-fill" data-pct={s.pct} style={{ width: '0%' }} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Skills
