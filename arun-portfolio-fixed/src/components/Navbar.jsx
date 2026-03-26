import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import './Navbar.css'

const links = [
  { label: 'home',      path: '/' },
  { label: 'projects',  path: '/projects' },
  { label: 'certs',     path: '/certificates' },
  { label: 'about',     path: '/about' },
  { label: 'timeline',  path: '/timeline' },
  { label: 'blog',      path: '/blog' },
  { label: 'contact',   path: '/contact' },
]

function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">0xArun</Link>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} title="toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <button className={"hamburger" + (menuOpen ? " ham-open" : "")} onClick={() => setMenuOpen(!menuOpen)} aria-label="toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={"mobile-drawer" + (menuOpen ? " drawer-open" : "")}>
        <ul className="mobile-links">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={location.pathname === link.path ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                <span className="mob-arrow">&gt; </span>{link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}

export default Navbar
