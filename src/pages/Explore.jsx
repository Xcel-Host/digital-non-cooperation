import { Link, useParams } from 'react-router-dom'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import Footer from '../components/Footer'

export default function Explore() {
  const { group } = useParams()
  const data = group === 'adani' ? adani : reliance
  const isAdani = group === 'adani'

  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-8">
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
          <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">{data.name}</h1>
          <p className="text-sm text-muted mb-1">{data.person}</p>
          <p className="text-xs text-muted leading-relaxed max-w-xl">{data.description}</p>
        </div>

        {/* Toggle between empires */}
        <div className="flex gap-3 mb-8">
          <Link
            to="/explore/reliance"
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all"
            style={!isAdani
              ? { background: '#D84B4B', color: '#fff' }
              : { background: '#1a0505', color: '#D84B4B', border: '0.5px solid #2e0f0f' }
            }
          >
            A1 — Ambani Empire
          </Link>
          <Link
            to="/explore/adani"
            className="px-4 py-2 rounded-lg text-xs font-bold transition-all"
            style={isAdani
              ? { background: '#F59E0B', color: '#000' }
              : { background: '#0f0f00', color: '#F59E0B', border: '0.5px solid #252200' }
            }
          >
            A2 — Adani Empire
          </Link>
        </div>

        {/* Sector grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.sectors.map(sector => (
            <Link
              key={sector.id}
              to={`/sector/${group}/${sector.id}`}
              className="relative rounded-xl p-4 transition-all group"
              style={{ background: '#1A1A1F', border: '0.5px solid #222' }}
            >
              <div className="text-2xl mb-3">{sector.icon}</div>
              <div className="text-sm font-bold text-offwhite mb-1">{sector.name}</div>
              <div className="text-xs text-muted">{sector.count}</div>
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
          style={isAdani
            ? { background: '#0f0f00', border: '0.5px solid #252200' }
            : { background: '#150505', border: '0.5px solid #2e0f0f' }
          }
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
      <Footer />
    </main>
  )
}
