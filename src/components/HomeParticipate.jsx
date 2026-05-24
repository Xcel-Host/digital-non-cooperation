import { useState } from 'react'
import { Link } from 'react-router-dom'

const checks = [
  'Switched one service to an alternative',
  'Chose local kirana over JioMart',
  'Searched a brand before buying',
  'Diversified my news sources',
  'Shared this platform',
]

export default function HomeParticipate({ theme }) {
  const [checked, setChecked] = useState({ 0: true, 1: true })
  const isDark = theme !== 'light'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'

  return (
    <section className="max-w-6xl mx-auto px-4 pb-8">
      <div className="rounded-2xl p-5" style={{ background: cardBg, border: `0.5px solid ${border}` }}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-base font-black tracking-tight" style={{ color: textColor }}>Join the movement</h2>
            <p className="text-xs mt-1" style={{ color: muted }}>Silent. Non-violent. Consistent.</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black tracking-tight" style={{ color: '#F59E0B' }}>24,382</div>
            <div className="text-xs" style={{ color: muted }}>participating</div>
          </div>
        </div>

        {checks.map((label, i) => (
          <div key={label}
            className="flex items-center gap-3 py-2.5 cursor-pointer"
            style={{ borderBottom: i < checks.length - 1 ? `0.5px solid ${isDark ? '#111' : '#f0f0f0'}` : 'none' }}
            onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all"
              style={checked[i]
                ? { background: isDark ? '#081008' : '#e8f5e8', border: '0.5px solid #1a4a1a' }
                : { border: `0.5px solid ${border}` }}>
              {checked[i] && <i className="ti ti-check" aria-hidden="true" style={{ fontSize: 11, color: '#4a8a4a' }} />}
            </div>
            <span className="text-xs" style={{ color: checked[i] ? textColor : muted }}>{label}</span>
          </div>
        ))}

        <Link to="/participate"
          className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-xl text-sm font-black text-white"
          style={{ background: '#D84B4B' }}>
          I'll Take Action ✊
        </Link>
      </div>
    </section>
  )
}
