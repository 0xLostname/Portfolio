import { useEffect, useRef } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot  = dotRef.current
    const ringEl = ringRef.current

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    // ring follows with lerp (smooth lag)
    let animId
    function follow() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top  = ring.current.y + 'px'
      animId = requestAnimationFrame(follow)
    }
    follow()

    // grow ring on hoverable elements
    const onEnter = () => ringEl.classList.add('ring-hover')
    const onLeave = () => ringEl.classList.remove('ring-hover')
    const hoverEls = document.querySelectorAll('a, button, .project-card, .cert-header, .blog-card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

export default CustomCursor
