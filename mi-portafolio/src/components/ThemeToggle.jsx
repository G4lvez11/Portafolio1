import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle