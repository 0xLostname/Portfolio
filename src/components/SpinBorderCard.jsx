import './SpinBorderCard.css'

function SpinBorderCard({ children, className = '' }) {
  return (
    <div className={`spin-card-wrap ${className}`}>
      <div className="spin-card-border" />
      <div className="spin-card-inner">{children}</div>
    </div>
  )
}

export default SpinBorderCard
