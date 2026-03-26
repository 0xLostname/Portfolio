function Divider({ fancy = false }) {
  if (fancy) {
    return (
      <svg className="divider-fancy reveal" viewBox="0 0 860 16" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', marginBottom: '10px', overflow: 'visible' }}>
        <line x1="0" y1="8" x2="340" y2="8" stroke="#2d1660" strokeWidth="1"/>
        <polygon points="345,3 355,8 345,13" fill="#8b5cf6"/>
        <line x1="360" y1="8" x2="500" y2="8" stroke="#8b5cf6" strokeWidth="1"/>
        <circle cx="430" cy="8" r="3" fill="#6d28d9"/>
        <line x1="505" y1="8" x2="515" y2="8" stroke="#8b5cf6" strokeWidth="1"/>
        <polygon points="520,3 510,8 520,13" fill="#8b5cf6"/>
        <line x1="520" y1="8" x2="860" y2="8" stroke="#2d1660" strokeWidth="1"/>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 860 4" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', marginBottom: '24px' }}>
      <line x1="0" y1="2" x2="860" y2="2" stroke="#2d1660" strokeWidth="1"/>
      <line x1="0" y1="2" x2="120" y2="2" stroke="#8b5cf6" strokeWidth="1"/>
    </svg>
  )
}

export default Divider
