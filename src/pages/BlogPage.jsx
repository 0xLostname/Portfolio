import { useState } from 'react'
import Divider from '../components/Divider.jsx'
import './PageShared.css'
import './BlogPage.css'

const posts = [
  {
    id: 1,
    type: 'learning',
    tag: 'Learning',
    date: 'Mar 2026',
    title: 'How I finally understood the CSS Box Model',
    body: `Every element on a webpage is a box. That sounds obvious but it took me a while to really get it. The box model has four layers: content (the actual text/image), padding (space inside the border), border (the line around it), and margin (space outside the border). The thing that confused me most was box-sizing. By default, if you set width: 200px and then add padding: 20px, the element ends up being 240px wide — because the padding gets added on top of the width. That feels wrong. So I now put box-sizing: border-box on everything, which makes padding count inside the width instead of adding to it.`,
  },
  {
    id: 2,
    type: 'event',
    tag: 'CTF',
    date: 'Feb 2026',
    title: 'CultRang CTF — what I learned',
    body: `My first CTF. I didn't solve much but I learned a ton just from trying. CTF stands for Capture The Flag — you're given challenges (web, crypto, forensics, reverse engineering) and you find hidden strings called flags. The web challenges were the most approachable for me since I know some HTML and JS. I learned about basic XSS (cross-site scripting) and how developer tools are your best friend. The forensics ones were completely over my head but I'm going to learn steganography before the next one.`,
  },
  {
    id: 3,
    type: 'devlog',
    tag: 'Devlog',
    date: 'Jan 2026',
    title: 'The idea behind ARIA\'s command memory',
    body: `I was sitting there watching Claude write the ARIA code and the responses were slow — sometimes 3-4 seconds before the AI figured out what to do. And I just thought: why is it going to the AI at all if we've seen this command before? Like if I say "open Chrome" 10 times, the AI shouldn't need to process it 10 times. So I thought about caching — but not just exact caching, because people say things differently. "open chrome" and "launch chrome" should map to the same action. That's where fuzzy matching came in. I asked Claude about it, it gave me some options, but the core idea of bypassing the AI entirely for known commands was mine. It ended up being one of the best features in ARIA — commands that have been seen before execute in about 50ms instead of 3 seconds.`,
  },
  {
    id: 4,
    type: 'learning',
    tag: 'Learning',
    date: 'Mar 2026',
    title: 'JavaScript DOM manipulation — what it actually means',
    body: `DOM stands for Document Object Model. When the browser loads your HTML, it turns it into a tree of objects that JavaScript can interact with. Every tag becomes a node in that tree. document.getElementById("myId") finds the node with that ID. .innerHTML lets you change what's inside it. .style.display lets you show or hide it. I used this for the certificate show/hide feature on my portfolio — clicking the button runs toggleCert() which finds the image element and flips its display between "none" and "block". Simple but satisfying when it works.`,
  },
  {
    id: 5,
    type: 'event',
    tag: 'Hackathon',
    date: 'Feb 2026',
    title: 'ZENITHON — my first hackathon',
    body: `Went in with Team Syntax Error. The energy at these things is different — everyone's building something, there's a deadline, and you have to make decisions fast. We didn't win but we shipped something working which felt like a win to me. The biggest thing I learned is that done is better than perfect in a hackathon. We spent too long on one feature early on and had to rush at the end. Next time I'd get a working demo first and then improve it.`,
  },
]

const filters = ['All', 'Learning', 'CTF', 'Hackathon', 'Devlog']

function BlogPage() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = active === 'All' ? posts : posts.filter(p => p.tag === active)

  return (
    <div className="page reveal">
      <p className="section-tag">// blog.md</p>
      <h1 className="page-title">Notes & Writeups</h1>
      <Divider />

      <div className="blog-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'filter-active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filtered.map((post) => (
          <div className="blog-card" key={post.id} onClick={() => setExpanded(expanded === post.id ? null : post.id)}>
            <div className="blog-card-top">
              <div className="blog-meta">
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
            </div>
            {expanded === post.id && (
              <p className="blog-body">{post.body}</p>
            )}
            <span className="blog-toggle">{expanded === post.id ? '▲ collapse' : '▼ read'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
