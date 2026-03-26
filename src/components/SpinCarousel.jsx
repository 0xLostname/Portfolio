import './SpinCarousel.css'

const cards = [
  { index: 0, color: '142, 249, 252', label: 'Python' },
  { index: 1, color: '142, 252, 204', label: 'React' },
  { index: 2, color: '142, 252, 157', label: 'Git' },
  { index: 3, color: '215, 252, 142', label: 'Java' },
  { index: 4, color: '252, 252, 142', label: 'Vite' },
  { index: 5, color: '252, 208, 142', label: 'Electron' },
  { index: 6, color: '252, 142, 142', label: 'n8n' },
  { index: 7, color: '252, 142, 239', label: 'Ollama' },
  { index: 8, color: '204, 142, 252', label: 'JS' },
  { index: 9, color: '142, 202, 252', label: 'CSS' },
]

function SpinCarousel() {
  return (
    <div className="carousel-outer">
      <div className="carousel-wrapper">
        <div className="carousel-inner" style={{ '--quantity': cards.length }}>
          {cards.map((c) => (
            <div
              key={c.index}
              className="carousel-card"
              style={{ '--index': c.index, '--color-card': c.color }}
            >
              <div className="carousel-img">
                <span className="carousel-label">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="carousel-caption">// tech stack in orbit</p>
    </div>
  )
}

export default SpinCarousel
