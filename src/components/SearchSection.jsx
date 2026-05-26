import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'

const trendingSearches = ['Jio', 'NDTV', 'Fortune', 'Adani Power', 'AJIO', 'JioHotstar', 'Campa Cola', 'Mumbai Airport', 'Ambuja Cement', 'JioMart']

function buildSearchIndex() {
  const index = []
  reliance.sectors.forEach(sector => {
    sector.brands.forEach(brand => {
      index.push({ name: brand.name, detail: brand.detail, group: 'reliance', groupName: 'Ambani Empire', sector: sector.name, sectorId: sector.id, badge: 'A1', color: '#D84B4B' })
    })
  })
  adani.sectors.forEach(sector => {
    sector.brands.forEach(brand => {
      index.push({ name: brand.name, detail: brand.detail, group: 'adani', groupName: 'Adani Empire', sector: sector.name, sectorId: sector.id, badge: 'A2', color: '#F59E0B' })
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
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [copied, setCopied] = useState(null)
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
    if (results.length > 0) handleSelect(results[0])
    else navigate('/alternatives')
    setShowResults(false)
  }

  const handleShare = (item, e) => {
    e.stopPropagation()
    const url = `https://digital-non-cooperation.vercel.app/sector/${item.group}/${item.sectorId}`
    const text = `Did you know ${item.name} belongs to the ${item.groupName}? Know who owns your daily life 👇`
    if (navigator.share) {
      navigator.share({ title: item.name, text, url }).catch(() => {})
    } else {
      navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
        setCopied(item.name)
        setTimeout(() => setCopied(null), 2000)
      })
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 pt-4 pb-3">
      {/* Search bar */}
      <form onSubmit={handleSubmit} className="relative flex gap-2 mb-4">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: bg, border: `0.5px solid ${border}` }}>
          <span style={{ color: '#aaa' }}>🔍</span>
          <input
            type="text"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            onFocus={() => query && setShowResults(true)}
            placeholder="Search any brand — Jio, Fortune, NDTV..."
            className="bg-transparent flex-1 text-sm outline-none"
            style={{ color: '#F3F4F6' }}
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => { setQuery(''); setResults([]); setShowResults(false) }}
              style={{ color: '#aaa', fontSize: 12, background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
          )}
        </div>
        <button type="submit"
          style={{ background: '#D84B4B', color: '#fff', padding: '0 18px', borderRadius: 12, fontSize: 16, border: 'none', cursor: 'pointer', fontWeight: 700 }}>
          →
        </button>

        {/* Dropdown results */}
        {showResults && results.length > 0 && (
          <div className="absolute top-full left-0 right-12 mt-1 rounded-xl overflow-hidden z-50"
            style={{ background: bg, border: `0.5px solid ${border}` }}>
            {results.map((item, i) => (
              <div key={i}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                style={{ borderBottom: i < results.length - 1 ? `0.5px solid ${border}` : 'none' }}
                onClick={() => handleSelect(item)}>
                <span className="text-xs font-black px-1.5 py-0.5 rounded flex-shrink-0"
                  style={item.badge === 'A1' ? { background: '#D84B4B', color: '#fff' } : { background: '#F59E0B', color: '#000' }}>
                  {item.badge}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#F3F4F6' }}>{item.name}</p>
                  <p style={{ fontSize: 11, color: '#aaa' }}>{item.sector} · {item.groupName}</p>
                </div>
                {/* Share button */}
                <button
                  onClick={(e) => handleShare(item, e)}
                  style={{ padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.05)', border: '0.5px solid #333', color: '#aaa', fontSize: 11, fontWeight: 600, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  {copied === item.name ? '✓ copied' : '↗ share'}
                </button>
              </div>
            ))}
          </div>
        )}

        {showResults && query && results.length === 0 && (
          <div className="absolute top-full left-0 right-12 mt-1 rounded-xl px-4 py-3 z-50"
            style={{ background: bg, border: `0.5px solid ${border}` }}>
            <p style={{ fontSize: 12, color: '#aaa' }}>No match — <span style={{ color: '#F59E0B', cursor: 'pointer' }} onClick={() => navigate('/alternatives')}>browse all alternatives →</span></p>
          </div>
        )}
      </form>

      {/* Trending */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto hide-scrollbar">
        <span style={{ fontSize: 12, fontWeight: 600, color: '#aaa', flexShrink: 0 }}>Trending:</span>
        {trendingSearches.map(t => (
          <button key={t} onClick={() => handleSearch(t)}
            style={{ fontSize: 11, padding: '4px 12px', borderRadius: 20, background: bg3, border: `0.5px solid ${border}`, color: '#aaa', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {t}
          </button>
        ))}
      </div>
    </section>
  )
}
