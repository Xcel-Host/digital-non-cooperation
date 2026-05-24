import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const isDark = theme !== 'light'
  const bg = isDark ? 'rgba(11,11,15,0.97)' : 'rgba(244,244,240,0.97)'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#777' : '#999'

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: bg, borderBottom: `0.5px solid ${border}`, backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo — fist + title + subtext */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#D84B4B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>✊</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.3px', color: textColor, lineHeight: 1.1 }}>Digital Non-Cooperation</div>
            <div style={{ fontSize: 9, color: muted, letterSpacing: '0.3px' }}>India First. People First.</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 0 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ padding: '6px 12px', fontSize: 12, fontWeight: 500, textDecoration: 'none', color: location.pathname === l.to ? '#D84B4B' : muted, borderBottom: location.pathname === l.to ? '2px solid #D84B4B' : '2px solid transparent', transition: 'color 0.15s' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>
          {/* Search icon */}
          <button aria-label="Search" style={{ width: 34, height: 34, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: muted }}>
            <i className="ti ti-search" aria-hidden="true" style={{ fontSize: 15 }} />
          </button>

          {/* Bulb theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{ width: 34, height: 34, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
            {isDark ? '💡' : '🌙'}
          </button>

          {/* Take Action CTA */}
          <Link to="/participate" className="hidden md:flex" style={{ alignItems: 'center', gap: 6, background: '#D84B4B', color: '#fff', fontSize: 12, fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none' }}>
            Take Action ✊
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ padding: 4, color: muted, background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="ti ti-menu-2" aria-hidden="true" style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: isDark ? '#111' : '#eeeeea', borderTop: `0.5px solid ${border}`, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} style={{ padding: '8px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: location.pathname === l.to ? '#D84B4B' : muted, background: location.pathname === l.to ? 'rgba(216,75,75,0.08)' : 'transparent' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/participate" onClick={() => setMenuOpen(false)} style={{ marginTop: 8, background: '#D84B4B', color: '#fff', fontSize: 13, fontWeight: 700, padding: '10px 12px', borderRadius: 8, textDecoration: 'none', textAlign: 'center' }}>
            Take Action ✊
          </Link>
        </div>
      )}
    </nav>
  )
}
