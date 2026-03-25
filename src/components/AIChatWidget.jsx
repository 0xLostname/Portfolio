import { useState, useRef, useEffect } from 'react'
import './AIChatWidget.css'

const SYSTEM_PROMPT = `You are a helpful assistant on K Arun Tej's portfolio website. Answer questions about him based on this info:

Name: K Arun Tej (alias: 0xLostname)
College: Amrita Vishwa Vidyapeetham, Chennai
Year: 2nd semester CS student

Projects:
- ARIA: Electron + React + Vite Windows desktop assistant. Local AI via Ollama, offline voice via Whisper, wake word detection, fuzzy command memory (Arun's own idea — bypasses AI for known commands), file management, screenshots.
- Aurora: Python self-learning chatbot that stores responses in CSV. No external libraries.
- Particle Physics Simulator: Java-based physics simulation.
- n8n Workflows: automation workflows.

Achievements: ZENITHON hackathon (Team Syntax Error), Lithos 2K26 idea pitch, CultRang CTF.
Skills: HTML, CSS, JavaScript, Python (comfortable), Git (comfortable), Java (beginner).
Contact: kammilaaruntej@gmail.com, github.com/0xLostname

Keep answers short, friendly, and in the context of the portfolio. If asked something you don't know, say you're not sure but suggest they email Arun directly.`

function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey! Ask me anything about Arun.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  // scroll to bottom when new message comes in
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages
        })
      })

      const data = await response.json()
      const reply = data.content.map((c) => c.text || '').join('')
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Try again.' }])
    }

    setLoading(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span className="chat-title">Ask about Arun</span>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role === 'user' ? 'chat-user' : 'chat-ai'}`}>
                <span className="chat-role">{m.role === 'user' ? '> you' : '> ai'}</span>
                <p>{m.content}</p>
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-ai">
                <span className="chat-role">> ai</span>
                <p className="chat-thinking">thinking...</p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ask something..."
            />
            <button className="chat-send" onClick={sendMessage} disabled={loading}>→</button>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}

export default AIChatWidget
