import './GlitchText.css'

function GlitchText({ text, className = '' }) {
  return (
    <span className={`glitch-wrap ${className}`} data-text={text}>
      {text}
    </span>
  )
}

export default GlitchText
