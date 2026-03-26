import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const lines = [
  '> initializing portfolio...',
  '> loading components...',
  '> mounting react tree...',
  '> ready.',
]

function LoadingScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
        if (i === lines.length - 1) {
          setTimeout(() => { setDone(true); setTimeout(onDone, 600) }, 400)
        }
      }, i * 380)
    })
  }, [])

  return (
    <div className={`loading-screen ${done ? 'loading-fade' : ''}`}>
      <div className="loading-content">
        {/* uiverse-style spinner */}
        <div className="loader-ring">
          <div className="loader-ring-inner" />
          <div className="loader-ring-inner2" />
        </div>
        <div className="loading-logo">0xArun</div>
        <div className="loading-lines">
          {visibleLines.map((line, i) => (
            <p key={i} className={`loading-line ${i === visibleLines.length - 1 ? 'line-active' : ''}`}>
              {line}
            </p>
          ))}
          <span className="loading-cursor">▊</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
