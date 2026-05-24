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
  const muted = isDark ? '#666' : '#999'

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/about', label: 'About' },
  ]

  const copyLink = () => {
    navigator.clipboard.writeText('https://digitalnoncooperation.in').catch(() => {})
    setShareOpen(false)
  }

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: bg, borderBottom: `0.5px solid ${border}`, backdropFilter: 'blur(12px)' }}>
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
                padding: '6px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500,
                textDecoration: 'none',
                color: location.pathname === l.to ? '#D84B4B' : muted,
                borderBottom: location.pathname === l.to ? '1.5px solid #D84B4B' : 'none',
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>

          {/* Share button */}
          <button onClick={() => setShareOpen(s => !s)}
            aria-label="Share this platform"
            style={{ width: 32, height: 32, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: muted }}>
            <i className="ti ti-share" aria-hidden="true" style={{ fontSize: 15 }} />
          </button>

          {/* Share dropdown */}
          {shareOpen && (
            <div style={{ position: 'absolute', top: 38, right: 80, background: isDark ? '#1a1a1f' : '#fff', border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, width: 220, zIndex: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 10 }}>Share this platform</p>
              {['📱 WhatsApp', '📸 Instagram', '✈️ Telegram', '🐦 X (Twitter)'].map(s => (
                <div key={s} style={{ padding: '7px 0', borderBottom: `0.5px solid ${border}`, fontSize: 12, color: muted, cursor: 'pointer' }}>{s}</div>
              ))}
              <button onClick={copyLink}
                style={{ marginTop: 10, width: '100%', padding: '8px', borderRadius: 7, background: '#D84B4B', color: '#fff', border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                Copy Link
              </button>
            </div>
          )}

          {/* Theme toggle — bulb */}
          <button onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            style={{ width: 32, height: 32, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: isDark ? '#F59E0B' : '#555' }}>
            {isDark ? '💡' : '🌙'}
          </button>

          {/* CTA */}
          <Link to="/participate"
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 5, background: '#D84B4B', color: '#fff', fontSize: 11, fontWeight: 700, padding: '6px 12px', borderRadius: 7, textDecoration: 'none' }}>
            Take Action ✊
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ padding: 4, color: muted, background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="ti ti-menu-2" aria-hidden="true" style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: isDark ? '#111' : '#eeeeea', borderTop: `0.5px solid ${border}`, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
              style={{ padding: '8px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none', color: location.pathname === l.to ? '#D84B4B' : muted, background: location.pathname === l.to ? 'rgba(216,75,75,0.08)' : 'transparent' }}>
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
