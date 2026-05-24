import { Link } from 'react-router-dom'

export default function HomeParticipate({ theme }) {
  const isDark = theme !== 'light'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'

  return (
    <section className="max-w-6xl mx-auto px-4 pb-8">
      <div className="rounded-2xl p-5" style={{ background: cardBg, border: `0.5px solid ${border}` }}>
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-base font-black tracking-tight" style={{ color: textColor }}>Join the movement</h2>
            <p className="text-xs mt-1" style={{ color: muted }}>Silent. Non-violent. Consistent.</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black tracking-tight" style={{ color: '#F59E0B' }}>24,382</div>
            <div className="text-xs" style={{ color: muted }}>participating</div>
          </div>
        </div>
        <Link
          to="/participate"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-black text-white"
          style={{ background: '#D84B4B' }}>
          I'll Take Action ✊
        </Link>
      </div>
    </section>
  )
}
