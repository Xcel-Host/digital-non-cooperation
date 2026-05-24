import { Link } from 'react-router-dom'
import { stats } from '../data'

export default function Footer({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const border = isDark ? '#1a1a1a' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#2a2a2a' : '#888'
  return (
    <footer style={{ borderTop: `0.5px solid ${border}`, background: bg }}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Stats row */}
        <div className="flex flex-wrap gap-6 justify-between mb-8">
          {[
            { icon: '🏷️', num: stats.brands, label: 'Brands Tracked' },
            { icon: '🏛️', num: stats.empires, label: 'Big Empires' },
            { icon: '📊', num: stats.sectors, label: 'Sectors Covered' },
            { icon: '✅', num: stats.alternatives, label: 'Alternatives' },
            { icon: '👥', num: stats.participating, label: 'People Taking Action' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-sm font-black text-offwhite">{s.num}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Share */}
        <div className="mb-8">
          <p className="text-sm font-bold text-offwhite mb-1">Share & Spread</p>
          <p className="text-xs text-muted mb-3">Awareness is resistance. Share. Educate. Inspire.</p>
          <div className="flex gap-2 flex-wrap mb-3">
            {['📱 WhatsApp', '📸 Instagram', '✈️ Telegram', '🐦 X'].map(s => (
              <button key={s} className="text-xs px-3 py-2 rounded-lg text-muted hover:text-offwhite transition-colors"
                style={{ background: '#111', border: '0.5px solid #1e1e1e' }}>{s}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-lg text-xs text-muted font-mono"
              style={{ background: '#111', border: '0.5px solid #1e1e1e' }}>
              digitalnoncooperation.in
            </div>
            <button className="bg-red text-white text-xs font-bold px-3 py-2 rounded-lg">Copy</button>
          </div>
        </div>

        {/* Big share message */}
        <div className="rounded-xl p-4 mb-8"
          style={{ background: '#0d0900', border: '0.5px solid #2a1800' }}>
          <p className="text-base font-black text-offwhite mb-1">
            Small acts of non-cooperation can bring big change.
          </p>
          <p className="text-xs text-amber">Be the change. Build the future.</p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 pt-6" style={{ borderTop: '0.5px solid #111' }}>
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <p className="text-xs font-bold text-muted">Digital Non-Cooperation</p>
              <p className="text-xs mt-0.5" style={{ color: '#222' }}>Non-violence. Non-cooperation. Non-surrender.</p>
            </div>
            <p className="text-xs font-bold text-red">India First. People First.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'About', to: '/philosophy' },
              { label: 'Alternatives', to: '/alternatives' },
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
            ].map(l => (
              <Link key={l.label} to={l.to}
                className="text-xs hover:text-muted transition-colors"
                style={{ color: '#2a2a2a' }}>
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#1a1a1a' }}>
            © 2025–2026 Digital Non-Cooperation. Not propaganda. Not rage. Just clarity.
          </p>
        </div>
      </div>
    </footer>
  )
}
