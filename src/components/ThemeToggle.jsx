import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
        dark ? 'bg-brand-600' : 'bg-gray-200'
      } ${className}`}
    >
      {/* Track icons */}
      <Sun  size={12} className="absolute left-1.5 text-yellow-400 opacity-0 dark:opacity-0 transition-opacity" />
      <Moon size={12} className="absolute right-1.5 text-brand-200 opacity-0 dark:opacity-100 transition-opacity" />

      {/* Thumb */}
      <span
        className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-sm flex items-center justify-center
          transition-transform duration-300 ease-spring
          ${dark ? 'translate-x-7 bg-white' : 'translate-x-0 bg-white'}`}
      >
        {dark
          ? <Moon size={11} className="text-brand-600" />
          : <Sun  size={11} className="text-yellow-500" />
        }
      </span>
    </button>
  )
}
