import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: theme === 'light' ? 'rgba(244,244,240,0.97)' : 'rgba(11,11,15,0.97)', borderColor: theme === 'light' ? '#ddd' : '#222' }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between" style={{ height: 52 }}>
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl">✊</span>
          <span className="text-sm font-extrabold tracking-tight" style={{ color: theme === 'light' ? '#111' : '#F3F4F6' }}>
            Digital Non-Cooperation
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
              style={{
                color: location.pathname === l.to ? '#F3F4F6' : '#666',
                borderBottom: location.pathname === l.to ? '1.5px solid #D84B4B' : 'none',
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: theme === 'light' ? '#e0e0db' : '#1a1a1f', border: `0.5px solid ${theme === 'light' ? '#ddd' : '#222'}`, color: '#666' }}
            aria-label="Toggle theme">
            <i className={`ti ${theme === 'light' ? 'ti-moon' : 'ti-sun'}`} aria-hidden="true" style={{ fontSize: 14 }} />
          </button>

          {/* CTA */}
          <Link to="/participate"
            className="hidden md:flex items-center gap-1 text-white text-xs font-bold px-3 py-1.5 rounded-md"
            style={{ background: '#D84B4B' }}>
            Take Action ✊
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#666' }} aria-label="Toggle menu">
            <i className="ti ti-menu-2" aria-hidden="true" style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{ background: theme === 'light' ? '#eeeeea' : '#111', borderColor: theme === 'light' ? '#ddd' : '#222' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded text-sm font-medium transition-colors"
              style={{ color: location.pathname === l.to ? '#D84B4B' : '#666', background: location.pathname === l.to ? 'rgba(216,75,75,0.08)' : 'transparent' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/participate" onClick={() => setMenuOpen(false)}
            className="mt-2 text-white text-sm font-bold px-3 py-2 rounded-md text-center"
            style={{ background: '#D84B4B' }}>
            Take Action ✊
          </Link>
        </div>
      )}
    </nav>
  )
}
