import { Link } from 'react-router-dom'

export default function Footer({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0d0d10' : '#f0f0eb'
  const border = isDark ? '#2a2a2a' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#999'

  const links = [
    { label: 'About', to: '/about' },
    { label: 'Alternatives', to: '/alternatives' },
    { label: 'Philosophy', to: '/philosophy' },
    { label: 'Participate', to: '/participate' },
    { label: 'Wealth Data', to: '/wealth' },
    { label: 'What Else?', to: '/what-else' },
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
  ]

  return (
    <footer style={{ background: bg, borderTop: `0.5px solid ${border}`, padding: '14px 0' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px 12px' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: 14 }}>✊</span>
          <span style={{ fontSize: 11, fontWeight: 800, color: textColor }}>Digital Non-Cooperation</span>
        </Link>

        <span style={{ color: border }}>·</span>

        {/* Nav links */}
        {links.map((l, i) => (
          <span key={l.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <Link to={l.to} style={{ fontSize: 11, color: muted, textDecoration: 'none' }}>{l.label}</Link>
            {i < links.length - 1 && <span style={{ color: border }}>·</span>}
          </span>
        ))}

        <span style={{ color: border }}>·</span>
        <span style={{ fontSize: 10, color: isDark ? '#444' : '#bbb', whiteSpace: 'nowrap' }}>© 2025–2026</span>
        <span style={{ color: border }}>·</span>
        <span style={{ fontSize: 10, color: muted, whiteSpace: 'nowrap' }}>Built for India. By Indians. ❤️</span>
      </div>
    </footer>
  )
}
