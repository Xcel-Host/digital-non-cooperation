import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/philosophy', label: 'Philosophy' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-bg/95 border-b border-border backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-13 flex items-center justify-between" style={{ height: 52 }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl">✊</span>
          <span className="text-sm font-extrabold tracking-tight text-offwhite">
            Digital Non-Cooperation
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                location.pathname === l.to
                  ? 'text-offwhite border-b border-red'
                  : 'text-muted hover:text-offwhite'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/participate"
          className="hidden md:flex items-center gap-1.5 bg-red text-white text-xs font-bold px-3 py-1.5 rounded-md hover:bg-red/90 transition-colors"
        >
          Take Action ✊
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-offwhite p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg2 border-t border-border px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? 'text-red bg-red/10'
                  : 'text-muted hover:text-offwhite'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/participate"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-red text-white text-sm font-bold px-3 py-2 rounded-md text-center"
          >
            Take Action ✊
          </Link>
        </div>
      )}
    </nav>
  )
}
