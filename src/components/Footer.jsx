import { Link } from 'react-router-dom'
import { stats } from '../data'

export default function Footer({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0d0d10' : '#f0f0eb'
  const border = isDark ? '#2a2a2a' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#888' : '#666'

  return (
    <footer style={{ background: bg, borderTop: `0.5px solid ${border}` }}>
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* 5-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr', gap: 32, marginBottom: 40 }} className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: '#D84B4B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✊</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: textColor }}>Digital Non-Cooperation</div>
                <div style={{ fontSize: 9, color: muted }}>India First. People First.</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: muted, lineHeight: 1.7, marginBottom: 16 }}>Non-violence. Non-cooperation. Non-surrender.</p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['WhatsApp', 'Instagram', 'X', 'Telegram'].map(s => (
                <button key={s} style={{ width: 32, height: 32, borderRadius: 8, background: isDark ? '#1a1a1f' : '#fff', border: `0.5px solid ${border}`, cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', color: muted }}>
                  {s === 'WhatsApp' ? '📱' : s === 'Instagram' ? '📸' : s === 'X' ? '🐦' : '✈️'}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 14, letterSpacing: '0.5px' }}>Quick Links</p>
            {[{ label: 'About', to: '/about' }, { label: 'Alternatives', to: '/alternatives' }, { label: 'Philosophy', to: '/philosophy' }, { label: 'Participate', to: '/participate' }].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: 12, color: muted, textDecoration: 'none', marginBottom: 8, transition: 'color 0.15s' }}>{l.label}</Link>
            ))}
          </div>

          {/* Col 3 — Resources */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 14, letterSpacing: '0.5px' }}>Resources</p>
            {[{ label: 'Privacy', to: '/privacy' }, { label: 'Terms', to: '/terms' }, { label: 'Wealth Data', to: '/wealth' }, { label: 'What Else?', to: '/what-else' }].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: 12, color: muted, textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>

          {/* Col 4 — Connect */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 14, letterSpacing: '0.5px' }}>Connect</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['🐦', '📸', '▶️', '✈️'].map((icon, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: 8, background: isDark ? '#1a1a1f' : '#fff', border: `0.5px solid ${border}`, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</button>
              ))}
            </div>
          </div>

          {/* Col 5 — Newsletter */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: textColor, marginBottom: 6, letterSpacing: '0.5px' }}>Newsletter</p>
            <p style={{ fontSize: 12, color: muted, marginBottom: 12, lineHeight: 1.5 }}>Get updates & new alternatives</p>
            <div style={{ display: 'flex', gap: 6 }}>
              <input type="email" placeholder="Enter your email"
                style={{ flex: 1, padding: '9px 12px', borderRadius: 8, background: isDark ? '#111' : '#fff', border: `0.5px solid ${border}`, color: textColor, fontSize: 12, outline: 'none', fontFamily: 'inherit' }} />
              <button style={{ width: 36, height: 36, borderRadius: 8, background: '#D84B4B', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14 }}>→</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `0.5px solid ${border}`, paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 11, color: isDark ? '#444' : '#aaa' }}>© 2025–2026 Digital Non-Cooperation. Not propaganda. Not rage. Just clarity.</p>
          <p style={{ fontSize: 11, color: muted }}>Built for India. By Indians. ❤️</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
