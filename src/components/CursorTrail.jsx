import { useEffect, useRef } from 'react'

function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    const trail = []
    let mouse = { x: 0, y: 0 }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      // add a new dot at mouse position
      trail.push({ x: e.clientX, y: e.clientY, size: 4, alpha: 1 })
      if (trail.length > 30) trail.shift()
    })

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < trail.length; i++) {
        const t = trail[i]
        t.alpha -= 0.03
        t.size *= 0.95
        if (t.alpha <= 0) continue
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${t.alpha})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 998
      }}
    />
  )
}

export default CursorTrail
