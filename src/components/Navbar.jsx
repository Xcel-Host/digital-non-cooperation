import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme, closeEmpires }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isDark = theme !== 'light'
  const bg = isDark ? 'rgba(11,11,15,0.97)' : 'rgba(244,244,240,0.97)'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#aaa' : '#666'

  const links = [
    { to: '/', label: 'Home' },
    { to: '/explore/reliance', label: 'A1 Ambani' },
    { to: '/explore/adani', label: 'A2 Adani' },
    { to: '/real-india', label: 'Real India' },
    { to: '/alternatives', label: 'Alternatives' },
    { to: '/participate', label: 'Participate' },
    { to: '/about', label: 'About' },
  ]

  const shareOptions = [
    { label: '📱 WhatsApp', url: 'https://wa.me/?text=Know%20who%20owns%20your%20daily%20life%3A%20https%3A%2F%2Fdigitalnoncooperation.in' },
    { label: '✈️ Telegram', url: 'https://t.me/share/url?url=https%3A%2F%2Fdigitalnoncooperation.in&text=Digital%20Non-Cooperation' },
    { label: '🐦 X (Twitter)', url: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fdigitalnoncooperation.in&text=Know%20who%20owns%20your%20daily%20life.%20%23DigitalNonCooperation' },
    { label: '📸 Instagram', url: 'https://instagram.com' },
  ]

  const copyLink = () => {
    navigator.clipboard.writeText('https://digitalnoncooperation.in').catch(() => {})
    setShareOpen(false)
  }

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: bg, borderBottom: `0.5px solid ${border}`, backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" onClick={closeEmpires} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: 22 }}>✊</span>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.3px', color: textColor }}>Digital Non-Cooperation</span>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={l.to === '/' ? closeEmpires : undefined}
                style={{ padding: '6px 12px', fontSize: 12, fontWeight: 500, textDecoration: 'none', color: location.pathname === l.to ? '#D84B4B' : muted, borderBottom: location.pathname === l.to ? '2px solid #D84B4B' : '2px solid transparent', transition: 'color 0.15s' }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>

          {/* Share button */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setShareOpen(s => !s)}
              aria-label="Share"
              style={{ width: 34, height: 34, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isDark ? '#aaa' : '#555' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            {shareOpen && (
              <>
                <div onClick={() => setShareOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 98 }} />
                <div style={{ position: 'absolute', top: 40, right: 0, background: isDark ? '#1a1a1f' : '#fff', border: `0.5px solid ${border}`, borderRadius: 12, padding: 12, width: 210, zIndex: 99, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 10 }}>Share this platform</p>
                  {shareOptions.map(s => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                      onClick={() => setShareOpen(false)}
                      style={{ display: 'block', padding: '8px 4px', borderBottom: `0.5px solid ${border}`, fontSize: 12, color: muted, textDecoration: 'none' }}>
                      {s.label}
                    </a>
                  ))}
                  <button onClick={copyLink}
                    style={{ marginTop: 10, width: '100%', padding: '8px', borderRadius: 7, background: '#D84B4B', color: '#fff', border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    📋 Copy Link
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Desktop: Take Action button */}
          {!isMobile && (
            <Link to="/participate"
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#D84B4B', color: '#fff', fontSize: 12, fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Take Action ✊
            </Link>
          )}

          {/* Mobile: hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
              style={{ width: 34, height: 34, borderRadius: 8, border: `0.5px solid ${border}`, background: isDark ? '#1a1a1f' : '#e8e8e3', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: textColor }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{ background: isDark ? '#111' : '#eeeeea', borderTop: `0.5px solid ${border}`, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => { setMenuOpen(false); if (l.to === '/') closeEmpires() }}
              style={{ padding: '10px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none', color: location.pathname === l.to ? '#D84B4B' : muted, background: location.pathname === l.to ? 'rgba(216,75,75,0.08)' : 'transparent' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/participate" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8, background: '#D84B4B', color: '#fff', fontSize: 14, fontWeight: 700, padding: '12px', borderRadius: 8, textDecoration: 'none', textAlign: 'center' }}>
            Take Action ✊
          </Link>
        </div>
      )}
    </nav>
  )
}
