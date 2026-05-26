import { Link, useParams } from 'react-router-dom'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import Footer from '../components/Footer'

export default function Explore({ theme }) {
  const { group } = useParams()
  const data = group === 'adani' ? adani : reliance
  const isAdani = group === 'adani'
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#aaa' : '#888'
  const accentColor = isAdani ? '#F59E0B' : '#D84B4B'

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Back */}
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: muted, textDecoration: 'none', marginBottom: 24 }}>
          ← Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 5, marginBottom: 12, background: isAdani ? '#F59E0B' : '#D84B4B', color: isAdani ? '#000' : '#fff' }}>
            {data.badge}
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', color: textColor, marginBottom: 6 }}>{data.name}</h1>
          <p style={{ fontSize: 12, color: muted, marginBottom: 4 }}>{data.person}</p>
          <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, maxWidth: 600 }}>{data.description}</p>
        </div>

        {/* Toggle + wealth pill */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
          <Link to="/explore/reliance"
            style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none', background: !isAdani ? '#D84B4B' : isDark ? '#1a0505' : '#fff5f5', color: !isAdani ? '#fff' : '#D84B4B', border: `0.5px solid ${!isAdani ? '#D84B4B' : '#2e0f0f'}` }}>
            A1 — Ambani Empire
          </Link>
          <Link to="/explore/adani"
            style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none', background: isAdani ? '#F59E0B' : isDark ? '#0f0f00' : '#fffde6', color: isAdani ? '#000' : '#F59E0B', border: `0.5px solid ${isAdani ? '#F59E0B' : '#252200'}` }}>
            A2 — Adani Empire
          </Link>
          <Link to="/wealth"
            style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: 'none', background: cardBg, color: muted, border: `0.5px solid ${border}` }}>
            📈 Their Wealth Growth
          </Link>
        </div>

        {/* Sector grid — cards with impact stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
          {data.sectors.map(sector => (
            <Link key={sector.id} to={`/sector/${group}/${sector.id}`}
              style={{ display: 'block', textDecoration: 'none', background: cardBg, border: `0.5px solid ${border}`, borderRadius: 14, padding: 18, position: 'relative', transition: 'transform 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = accentColor }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = border }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{sector.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: textColor, marginBottom: 6 }}>{sector.name}</div>
              {/* Impact stat — punchy, visible */}
              <div style={{ fontSize: 11, fontWeight: 600, color: accentColor, marginBottom: 4, lineHeight: 1.4 }}>{sector.count}</div>
              {/* Short description preview */}
              {sector.description && (
                <div style={{ fontSize: 11, color: muted, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {sector.description}
                </div>
              )}
              <div style={{ position: 'absolute', right: 14, bottom: 14, fontSize: 14, color: accentColor, opacity: 0.5 }}>→</div>
            </Link>
          ))}
        </div>

        {/* Empire description */}
        <div style={{ marginTop: 28, padding: 20, borderRadius: 14, background: isAdani ? (isDark ? '#0f0f00' : '#fffde6') : (isDark ? '#150505' : '#fff5f5'), border: `0.5px solid ${isAdani ? '#252200' : '#2e0f0f'}` }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: accentColor, marginBottom: 8 }}>Concentration gives control</p>
          <p style={{ fontSize: 13, color: isDark ? 'rgba(243,244,246,0.85)' : '#555', lineHeight: 1.7 }}>{data.tagline}</p>
          <p style={{ fontSize: 11, color: muted, marginTop: 8 }}>Tap any sector above to see brands and find practical alternatives.</p>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
