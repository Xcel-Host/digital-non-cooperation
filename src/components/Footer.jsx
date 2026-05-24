import { Link } from 'react-router-dom'
import { stats } from '../data'

export default function Footer({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0d0d10' : '#f0f0eb'
  const border = isDark ? '#2a2a2a' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#888' : '#666'

  const copyLink = () => {
    navigator.clipboard.writeText('https://digitalnoncooperation.in').catch(() => {})
  }

  return (
    <footer style={{ borderTop: `0.5px solid ${border}`, background: bg }}>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Share & Spread */}
        <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: `0.5px solid ${border}` }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: textColor, marginBottom: 4 }}>Share & Spread</p>
          <p style={{ fontSize: 12, color: muted, marginBottom: 14 }}>Awareness is resistance. Share. Educate. Inspire.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
            {['📱 WhatsApp', '📸 Instagram', '✈️ Telegram', '🐦 X (Twitter)'].map(s => (
              <button key={s}
                style={{ fontSize: 12, padding: '7px 14px', borderRadius: 8, background: isDark ? '#1a1a1f' : '#fff', border: `0.5px solid ${border}`, color: muted, cursor: 'pointer' }}>
                {s}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '9px 12px', borderRadius: 8, background: isDark ? '#111' : '#fff', border: `0.5px solid ${border}`, fontSize: 12, color: muted, fontFamily: 'monospace' }}>
              digitalnoncooperation.in
            </div>
            <button onClick={copyLink}
              style={{ background: '#D84B4B', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
              Copy
            </button>
          </div>
          <div style={{ marginTop: 14, padding: 16, borderRadius: 12, background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}` }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: textColor, marginBottom: 4 }}>Small acts of non-cooperation can bring big change.</p>
            <p style={{ fontSize: 12, color: '#F59E0B' }}>Be the change. Build the future.</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', marginBottom: 28, paddingBottom: 28, borderBottom: `0.5px solid ${border}` }}>
          {[
            { icon: '🏷️', num: stats.brands, label: 'Brands Tracked' },
            { icon: '🏛️', num: stats.empires, label: 'Big Empires' },
            { icon: '📊', num: stats.sectors, label: 'Sectors Covered' },
            { icon: '✅', num: stats.alternatives, label: 'Alternatives Listed' },
            { icon: '👥', num: stats.participating, label: 'People Taking Action' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: textColor }}>{s.num}</div>
              <div style={{ fontSize: 10, color: muted, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: textColor, marginBottom: 3 }}>Digital Non-Cooperation</p>
              <p style={{ fontSize: 11, color: muted }}>Non-violence. Non-cooperation. Non-surrender.</p>
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#D84B4B' }}>India First. People First.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {[
              { label: 'About', to: '/about' },
              { label: 'Alternatives', to: '/alternatives' },
              { label: 'Philosophy', to: '/philosophy' },
              { label: 'Participate', to: '/participate' },
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
            ].map(l => (
              <Link key={l.label} to={l.to}
                style={{ fontSize: 11, color: muted, textDecoration: 'none', transition: 'color 0.15s' }}>
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 10, color: isDark ? '#444' : '#aaa' }}>
            © 2025–2026 Digital Non-Cooperation. Not propaganda. Not rage. Just clarity.
          </p>
        </div>
      </div>
    </footer>
  )
}
