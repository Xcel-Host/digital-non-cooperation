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
  const muted = isDark ? '#666' : '#888'

  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-8" style={{ background: bg, minHeight: '100vh' }}>
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted hover:text-offwhite mb-6 transition-colors">
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div
            className="inline-block text-xs font-black px-3 py-1 rounded mb-3"
            style={isAdani
              ? { background: '#F59E0B', color: '#000' }
              : { background: '#D84B4B', color: '#fff' }
            }
          >
            {data.badge}
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-2" style={{ color: textColor }}>{data.name}</h1>
          <p className="text-sm mb-1" style={{ color: muted }}>{data.person}</p>
          <p className="text-xs leading-relaxed max-w-xl" style={{ color: muted }}>{data.description}</p>
        </div>

        {/* Toggle between empires */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <Link
            to="/explore/reliance"
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all"
            style={!isAdani
              ? { background: '#D84B4B', color: '#fff' }
              : { background: isDark ? '#1a0505' : '#fff5f5', color: '#D84B4B', border: '0.5px solid #2e0f0f' }
            }
          >
            A1 — Ambani Empire
          </Link>
          <Link
            to="/explore/adani"
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all"
            style={isAdani
              ? { background: '#F59E0B', color: '#000' }
              : { background: isDark ? '#0f0f00' : '#fffde6', color: '#F59E0B', border: '0.5px solid #252200' }
            }
          >
            A2 — Adani Empire
          </Link>
          <Link
            to="/wealth"
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all"
            style={{ background: isDark ? '#111' : '#fff', color: muted, border: `0.5px solid ${border}` }}
          >
            📈 Their Wealth Growth
          </Link>
        </div>

        {/* Sector grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.sectors.map(sector => (
            <Link
              key={sector.id}
              to={`/sector/${group}/${sector.id}`}
              className="relative rounded-xl p-4 transition-all group"
              style={{ background: cardBg, border: `0.5px solid ${border}` }}
            >
              <div className="text-2xl mb-3">{sector.icon}</div>
              <div className="text-sm font-bold mb-1" style={{ color: textColor }}>{sector.name}</div>
              <div className="text-xs" style={{ color: muted }}>{sector.count}</div>
              <span
                className="absolute right-3 bottom-3 text-muted transition-colors"
                style={{ fontSize: 13 }}
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Empire description box */}
        <div
          className="mt-8 p-5 rounded-xl"
          style={isAdani ? { background: isDark ? '#0f0f00' : '#fffde6', border: '0.5px solid #252200' } : { background: isDark ? '#150505' : '#fff5f5', border: '0.5px solid #2e0f0f' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: isAdani ? '#F59E0B' : '#D84B4B' }}>
            Concentration gives control
          </p>
          <p className="text-sm text-offwhite/70 leading-relaxed">{data.tagline}</p>
          <p className="text-xs text-muted mt-2 leading-relaxed">
            Tap any sector above to see the brands, understand the scale, and find practical alternatives.
          </p>
        </div>
      </div>
      {/* Wealth card */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <a href="/wealth" className="flex items-center justify-between gap-4 p-4 rounded-xl block"
          style={{ background: isAdani ? '#0f0f00' : '#150505', border: isAdani ? '0.5px solid #252200' : '0.5px solid #2e0f0f' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: isAdani ? '#F59E0B' : '#D84B4B', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4 }}>Data · Verified</p>
            <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6' }}>See their wealth growth →</p>
            <p style={{ fontSize: 11, color: '#666', marginTop: 4 }}>{isAdani ? 'Adani: +1,535% since 2014' : 'Ambani: +542% since 2014'}. Average Indian wage: +40%.</p>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: isAdani ? '#F59E0B' : '#D84B4B' }}>{isAdani ? '1,535%' : '542%'}</div>
            <div style={{ fontSize: 11, color: '#555' }}>wealth growth</div>
          </div>
        </a>
      </div>
      <Footer />
    </main>
  )
}
