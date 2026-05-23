import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stats, trendingSearches } from '../data'

export default function SearchSection() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    if (!query.trim()) return
    const q = query.toLowerCase()
    if (['jio','jiofiber','jiomart','ajio','campa','fortune','netmeds','network18','reliance','jiosaavn','jiohotstar'].some(k => q.includes(k))) {
      navigate('/explore/reliance')
    } else if (['adani','ndtv','ambuja','acc','fortune oil','mundra','adani power','adani green'].some(k => q.includes(k))) {
      navigate('/explore/adani')
    } else {
      navigate('/alternatives')
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <div
          className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: '#111', border: '0.5px solid #2a2a2a' }}
        >
          <span className="text-muted text-base">🔍</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search brands, companies, apps, media..."
            className="bg-transparent flex-1 text-sm text-offwhite outline-none placeholder-muted"
          />
        </div>
        <button
          type="submit"
          className="bg-red text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-red/90 transition-colors"
        >
          →
        </button>
      </form>

      {/* Trending */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-semibold text-muted">Trending:</span>
        {trendingSearches.map(t => (
          <button
            key={t}
            onClick={() => setQuery(t)}
            className="text-xs px-3 py-1 rounded-full transition-colors text-muted hover:text-offwhite"
            style={{ background: '#161616', border: '0.5px solid #1e1e1e' }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Stats strip */}
      <div
        className="flex flex-wrap gap-4 justify-between p-4 rounded-xl"
        style={{ background: '#111', border: '0.5px solid #1e1e1e' }}
      >
        {[
          { icon: '🏷️', num: stats.brands, label: 'Brands Tracked', color: 'text-amber' },
          { icon: '🏛️', num: stats.empires, label: 'Big Empires', color: 'text-offwhite' },
          { icon: '📊', num: stats.sectors, label: 'Sectors Covered', color: 'text-offwhite' },
          { icon: '✅', num: stats.alternatives, label: 'Alternatives Listed', color: 'text-amber' },
          { icon: '👥', num: stats.participating, label: 'People Participating', color: 'text-red' },
        ].map(s => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-base">{s.icon}</span>
            <div>
              <div className={`text-base font-black tracking-tight ${s.color}`}>{s.num}</div>
              <div className="text-xs text-muted leading-none mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
