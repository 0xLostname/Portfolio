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

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">0xArun</Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={toggleTheme} title="toggle theme">
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </nav>
  )
}

export default Navbar
