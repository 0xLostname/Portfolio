import { createContext, useContext, useState, useEffect } from 'react'

// createContext makes a global "box" any component can read from
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // load saved preference from localStorage, default to dark
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  // whenever theme changes, save it and update the data-theme attribute on <html>
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// custom hook so any component can just call useTheme()
export function useTheme() {
  return useContext(ThemeContext)
}
