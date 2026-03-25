import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import ParticleCanvas from './components/ParticleCanvas.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import CursorTrail from './components/CursorTrail.jsx'
import PageTransition from './components/PageTransition.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import AIChatWidget from './components/AIChatWidget.jsx'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import CertificatesPage from './pages/CertificatesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import TimelinePage from './pages/TimelinePage.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function RevealObserver() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    }, 100)

    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [location.pathname])

  return null
}

function AppInner() {
  const location = useLocation()

  return (
    <>
      <RevealObserver />
      <ScrollProgress />
      <ParticleCanvas />
      <CursorTrail />
      <Navbar />
      <div className="content">
        <PageTransition>
          <Routes location={location}>
            <Route path="/"             element={<Home />} />
            <Route path="/projects"     element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/about"        element={<AboutPage />} />
            <Route path="/timeline"     element={<TimelinePage />} />
            <Route path="/blog"         element={<BlogPage />} />
            <Route path="/contact"      element={<ContactPage />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </PageTransition>
        <footer className="footer">
          © 2026 K Arun Tej &nbsp;/&nbsp; 0xLostname &nbsp;—&nbsp; built with React + Vite
        </footer>
      </div>
      <AIChatWidget />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      {!loading && (
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      )}
    </ThemeProvider>
  )
}

export default App
