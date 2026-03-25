import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PageTransition.css'

function PageTransition({ children }) {
  const location = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    const t = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className={`page-transition ${show ? 'page-in' : 'page-out'}`}>
      {children}
    </div>
  )
}

export default PageTransition
