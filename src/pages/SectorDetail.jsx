import { Link, useParams } from 'react-router-dom'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import Footer from '../components/Footer'

const tagColors = {
  'Open source': { bg: '#081a08', color: '#4a9a4a', border: '#1a3a1a' },
  'Independent': { bg: '#080818', color: '#6a6aaa', border: '#1a1a3a' },
  'Cooperative': { bg: '#180a00', color: '#9a6a1a', border: '#2a1800' },
  'Govt. initiative': { bg: '#080818', color: '#3a8aaa', border: '#1a2a4a' },
  'Govt. owned': { bg: '#080818', color: '#3a8aaa', border: '#1a2a4a' },
  'Indian brand': { bg: '#0a1800', color: '#6a9a2a', border: '#1a3a00' },
  'Tata-owned': { bg: '#080818', color: '#6a6aaa', border: '#1a1a3a' },
  'Indian-owned': { bg: '#0a1800', color: '#6a9a2a', border: '#1a3a00' },
  'Community': { bg: '#180a00', color: '#9a6a1a', border: '#2a1800' },
  'Local': { bg: '#180a00', color: '#9a6a1a', border: '#2a1800' },
  'Public media': { bg: '#080818', color: '#3a8aaa', border: '#1a2a4a' },
  'Systemic': { bg: '#181818', color: '#666', border: '#2a2a2a' },
  'Open standard': { bg: '#081a08', color: '#4a9a4a', border: '#1a3a1a' },
}

export default function SectorDetail() {
  const { group, sectorId } = useParams()
  const data = group === 'adani' ? adani : reliance
  const isAdani = group === 'adani'
  const accentColor = isAdani ? '#F59E0B' : '#D84B4B'

  const sector = data.sectors.find(s => s.id === sectorId)
  if (!sector) return <div className="p-8 text-muted">Sector not found.</div>

  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          to={`/explore/${group}`}
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-offwhite mb-6 transition-colors"
        >
          ← {data.badge} {data.name}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{sector.icon}</span>
            <h1 className="text-2xl font-black tracking-tight text-offwhite">{sector.name}</h1>
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-xl">{sector.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BRANDS */}
          <div>
            <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4">
              Brands & Services
            </p>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '0.5px solid #1e1e1e' }}
            >
              {sector.brands.map((brand, i) => (
                <div
                  key={brand.name}
                  className="px-4 py-3"
                  style={{
                    background: i % 2 === 0 ? '#1A1A1F' : '#161616',
                    borderBottom: i < sector.brands.length - 1 ? '0.5px solid #111' : 'none',
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-offwhite">{brand.name}</p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">{brand.detail}</p>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: accentColor }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ALTERNATIVES */}
          <div>
            <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4">
              Boycott / Non-Cooperate → Alternatives
            </p>
            {sector.alternatives.map(alt => (
              <div key={alt.avoid}>
                {/* Avoid block */}
                <div
                  className="rounded-xl p-4 mb-3"
                  style={isAdani
                    ? { background: '#0f0f00', border: '0.5px solid #252200' }
                    : { background: '#150505', border: '0.5px solid #2e0f0f' }
                  }
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: accentColor }}>
                    Boycott / Non-Cooperate
                  </p>
                  <p
                    className="text-lg font-black tracking-tight mb-1 line-through"
                    style={{ color: isAdani ? '#3a3000' : '#3a1010', textDecorationColor: isAdani ? '#2a2000' : '#2a0808' }}
                  >
                    {alt.avoid}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">{alt.avoidReason}</p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-px" style={{ background: '#1a1a1a' }} />
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">Instead, try</span>
                  <div className="flex-1 h-px" style={{ background: '#1a1a1a' }} />
                </div>

                {/* Picks */}
                <div className="flex flex-col gap-3">
                  {alt.picks.map(pick => {
                    const tc = tagColors[pick.tag] || tagColors['Independent']
                    return (
                      <div key={pick.name} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: '#1a3a1a' }}
                        />
                        <div>
                          <p className="text-sm font-bold text-offwhite mb-1">{pick.name}</p>
                          {pick.tag && (
                            <span
                              className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-1"
                              style={{ background: tc.bg, color: tc.color, border: `0.5px solid ${tc.border}` }}
                            >
                              {pick.tag}
                            </span>
                          )}
                          <p className="text-xs text-muted leading-relaxed">{pick.note}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav to next sector */}
        <div className="mt-10 flex gap-3 flex-wrap">
          <Link
            to={`/explore/${group}`}
            className="text-xs font-bold px-4 py-2 rounded-lg transition-colors text-muted hover:text-offwhite"
            style={{ background: '#111', border: '0.5px solid #222' }}
          >
            ← All {data.name} sectors
          </Link>
          <Link
            to="/alternatives"
            className="text-xs font-bold px-4 py-2 rounded-lg"
            style={{ background: accentColor, color: isAdani ? '#000' : '#fff' }}
          >
            View all alternatives →
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
