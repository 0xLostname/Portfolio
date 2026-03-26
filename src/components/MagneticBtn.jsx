import { useRef } from 'react'
import './MagneticBtn.css'

function MagneticBtn({ children, onClick, className = '', href }) {
  const btnRef = useRef(null)

  function onMouseMove(e) {
    const btn  = btnRef.current
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width  / 2
    const y = e.clientY - rect.top  - rect.height / 2
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  function onMouseLeave() {
    btnRef.current.style.transform = 'translate(0, 0)'
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef}
      className={`mag-btn ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      href={href}
    >
      <span className="mag-btn-inner">{children}</span>
      <span className="mag-btn-ripple" />
    </Tag>
  )
}

export default MagneticBtn
