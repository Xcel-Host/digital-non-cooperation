import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stats } from '../data'
const trendingSearches = ['Jio', 'NDTV', 'Fortune', 'Adani Power', 'AJIO', 'JioHotstar', 'Campa Cola', 'Mumbai Airport', 'Ambuja Cement', 'JioMart']
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'

// Build a flat searchable index from all brands
function buildSearchIndex() {
  const index = []
  reliance.sectors.forEach(sector => {
    sector.brands.forEach(brand => {
      index.push({
        name: brand.name,
        detail: brand.detail,
        group: 'reliance',
        groupName: 'Ambani Empire',
        sector: sector.name,
        sectorId: sector.id,
        badge: 'A1',
        color: '#D84B4B',
      })
    })
  })
  adani.sectors.forEach(sector => {
    sector.brands.forEach(brand => {
      index.push({
        name: brand.name,
        detail: brand.detail,
        group: 'adani',
        groupName: 'Adani Empire',
        sector: sector.name,
        sectorId: sector.id,
        badge: 'A2',
        color: '#F59E0B',
      })
    })
  })
  return index
}

const searchIndex = buildSearchIndex()

export default function SearchSection({ theme }) {
  const isDark = theme !== 'light'
  const bg = isDark ? '#111' : '#fff'
  const bg3 = isDark ? '#161616' : '#f4f4f0'
  const border = isDark ? '#2a2a2a' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#555' : '#999'
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (q) => {
    setQuery(q)
    if (!q.trim()) { setResults([]); setShowResults(false); return }
    const lower = q.toLowerCase()
    const found = searchIndex.filter(item =>
      item.name.toLowerCase().includes(lower) ||
      item.sector.toLowerCase().includes(lower) ||
      item.detail.toLowerCase().includes(lower)
    ).slice(0, 6)
    setResults(found)
    setShowResults(true)
  }

  const handleSelect = (item) => {
    setShowResults(false)
    setQuery(item.name)
    navigate(`/sector/${item.group}/${item.sectorId}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (results.length > 0) {
      handleSelect(results[0])
    } else {
      navigate('/alternatives')
    }
    setShowResults(false)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 pt-4 pb-3">
      {/* Search bar */}
      <form onSubmit={handleSubmit} className="relative flex gap-2 mb-4">
        <div
          className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: bg, border: `0.5px solid ${border}` }}
        >
          <span className="text-muted text-base">🔍</span>
          <input
            type="text"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            onFocus={() => query && setShowResults(true)}
            placeholder="Search brands, companies, apps, media..."
            className="bg-transparent flex-1 text-sm outline-none"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => { setQuery(''); setResults([]); setShowResults(false) }}
              className="text-muted hover:text-offwhite text-xs">✕</button>
          )}
        </div>
        <button type="submit"
          className="bg-red text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-red/90 transition-colors">
          →
        </button>

        {/* Dropdown results */}
        {showResults && results.length > 0 && (
          <div
            className="absolute top-full left-0 right-12 mt-1 rounded-xl overflow-hidden z-50"
            style={{ background: bg, border: `0.5px solid ${border}` }}
          >
            {results.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                style={{ borderBottom: i < results.length - 1 ? '0.5px solid #222' : 'none' }}
                onClick={() => handleSelect(item)}
              >
                <span
                  className="text-xs font-black px-1.5 py-0.5 rounded flex-shrink-0"
                  style={item.badge === 'A1'
                    ? { background: '#D84B4B', color: '#fff' }
                    : { background: '#F59E0B', color: '#000' }
                  }
                >
                  {item.badge}
                </span>
                <div>
                  <p className="text-sm font-bold text-offwhite">{item.name}</p>
                  <p className="text-xs text-muted">{item.sector} · {item.groupName}</p>
                </div>
                <span className="ml-auto text-xs text-muted">→</span>
              </div>
            ))}
          </div>
        )}

        {showResults && query && results.length === 0 && (
          <div
            className="absolute top-full left-0 right-12 mt-1 rounded-xl px-4 py-3 z-50"
            style={{ background: bg, border: `0.5px solid ${border}` }}
          >
            <p className="text-xs text-muted">No exact match — <span className="text-amber cursor-pointer" onClick={() => navigate('/alternatives')}>browse all alternatives →</span></p>
          </div>
        )}
      </form>

      {/* Trending */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto hide-scrollbar">
        <span className="text-xs font-semibold text-muted">Trending:</span>
        {trendingSearches.map(t => (
          <button key={t} onClick={() => handleSearch(t)}
            className="text-xs px-3 py-1 rounded-full transition-colors text-muted hover:text-offwhite"
            style={{ background: bg3, border: `0.5px solid ${border}` }}>
            {t}
          </button>
        ))}
      </div>
    </section>
  )
}
