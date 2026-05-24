import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = theme !== 'light'

  const bg = isDark ? 'rgba(11,11,15,0.97)' : 'rgba(244,244,240,0.97)'
  const borderColor = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const mutedColor = isDark ? '#666' : '#999'

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: bg, borderBottom: `0.5px solid ${borderColor}`, backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: 18 }}>✊</span>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.3px', color: textColor }}>
            Digital Non-Cooperation
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              style={{
                padding: '6px 10px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 500,
                textDecoration: 'none',
                color: location.pathname === l.to ? '#D84B4B' : mutedColor,
                borderBottom: location.pathname === l.to ? '1.5px solid #D84B4B' : 'none',
                transition: 'color 0.15s',
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Theme toggle — bulb icon, always visible */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            style={{
              width: 32, height: 32,
              borderRadius: 8,
              border: `0.5px solid ${borderColor}`,
              background: isDark ? '#1a1a1f' : '#e8e8e3',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
              color: isDark ? '#F59E0B' : '#555',
              transition: 'all 0.15s',
            }}>
            {isDark ? '💡' : '🌙'}
          </button>

          {/* CTA */}
          <Link to="/participate"
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 5, background: '#D84B4B', color: '#fff', fontSize: 11, fontWeight: 700, padding: '6px 12px', borderRadius: 7, textDecoration: 'none' }}>
            Take Action ✊
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ padding: 4, color: mutedColor, background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="ti ti-menu-2" aria-hidden="true" style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: isDark ? '#111' : '#eeeeea', borderTop: `0.5px solid ${borderColor}`, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '8px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
                color: location.pathname === l.to ? '#D84B4B' : mutedColor,
                background: location.pathname === l.to ? 'rgba(216,75,75,0.08)' : 'transparent',
              }}>
              {l.label}
            </Link>
          ))}
          <Link to="/participate" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8, background: '#D84B4B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '10px 12px', borderRadius: 8, textDecoration: 'none', textAlign: 'center' }}>
            Take Action ✊
          </Link>
        </div>
      )}
    </nav>
  )
}
