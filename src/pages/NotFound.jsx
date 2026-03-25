import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound reveal">
      <p className="nf-code">404</p>
      <h1 className="nf-title">Page not found.</h1>
      <p className="nf-desc">Looks like this route doesn't exist.</p>
      <Link to="/" className="nf-btn">$ cd ~</Link>
    </div>
  )
}

export default NotFound
