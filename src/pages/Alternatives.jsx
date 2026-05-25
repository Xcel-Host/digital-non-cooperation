import { useState } from 'react'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import Footer from '../components/Footer'

const tabs = ['All', 'Telecom', 'Media', 'Streaming', 'Retail', 'Food & FMCG', 'Fashion', 'Pharma & Tech', 'Power', 'Cement']

function getAllAlts() {
  const result = []
  const addFrom = (data, isAdani) => {
    data.sectors.forEach(sector => {
      sector.alternatives.forEach(alt => {
        alt.picks.forEach(pick => {
          result.push({
            group: isAdani ? 'adani' : 'reliance',
            sector: sector.name,
            avoid: alt.avoid,
            avoidReason: alt.avoidReason,
            pick: pick.name,
            tag: pick.tag,
            note: pick.note,
            isAdani,
          })
        })
      })
    })
  }
  addFrom(reliance, false)
  addFrom(adani, true)
  return result
}

const allAlts = getAllAlts()

const tabSectorMap = {
  'All': null,
  'Telecom': 'Telecom',
  'Media': 'Media & News',
  'Streaming': 'Streaming & Music',
  'Retail': 'Retail & Grocery',
  'Food & FMCG': 'Food & FMCG',
  'Fashion': 'Fashion & Lifestyle',
  'Pharma & Tech': 'Pharma & Electronics',
  'Power': 'Power & Energy',
  'Cement': 'Cement & Materials',
}

export default function Alternatives() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? allAlts
    : allAlts.filter(a => a.sector === tabSectorMap[activeTab])

  // Group by avoid brand for display
  const grouped = filtered.reduce((acc, item) => {
    const key = item.avoid
    if (!acc[key]) acc[key] = { ...item, picks: [] }
    acc[key].picks.push({ name: item.pick, tag: item.tag, note: item.note })
    return acc
  }, {})

  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">Alternatives</h1>
        <p className="text-sm text-muted mb-6">
          Real alternatives. Named brands. Available in India. Reduce monopoly dependency one choice at a time.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-shrink-0 text-xs font-bold px-3 py-2 rounded-xl transition-all"
              style={activeTab === tab
                ? { background: '#D84B4B', color: '#fff', border: '0.5px solid #D84B4B' }
                : { background: '#161616', color: '#666', border: '0.5px solid #1e1e1e' }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Alternatives grid */}
        <div className="flex flex-col gap-6">
          {Object.values(grouped).map(item => (
            <div
              key={item.avoid}
              className="rounded-xl overflow-hidden"
              style={{ border: `0.5px solid ${item.isAdani ? '#252200' : '#2e0f0f'}` }}
            >
              {/* Header */}
              <div
                className="px-4 py-3 flex items-start justify-between gap-3"
                style={{ background: item.isAdani ? '#0f0f00' : '#150505' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-black px-2 py-0.5 rounded"
                      style={item.isAdani
                        ? { background: '#F59E0B', color: '#000' }
                        : { background: '#D84B4B', color: '#fff' }
                      }
                    >
                      {item.isAdani ? 'A2' : 'A1'}
                    </span>
                    <span className="text-xs text-muted">{item.sector}</span>
                  </div>
                  <p
                    className="text-sm font-black tracking-tight"
                    style={{
                      color: item.isAdani ? '#c8a820' : '#e05050',
                      textDecoration: 'line-through',
                      textDecorationColor: item.isAdani ? '#F59E0B' : '#D84B4B',
                      textDecorationThickness: '2px',
                    }}
                  >
                    {item.avoid}
                  </p>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{item.avoidReason}</p>
                </div>
                <span className="text-lg flex-shrink-0">🚫</span>
              </div>

              {/* Arrow divider */}
              <div className="flex items-center gap-2 px-4 py-2" style={{ background: '#111' }}>
                <div className="flex-1 h-px" style={{ background: '#2a2a2a' }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: '#4adb4a', letterSpacing: '1.5px' }}>✓ TRY INSTEAD</span>
                <div className="flex-1 h-px" style={{ background: '#2a2a2a' }} />
              </div>

              {/* Picks */}
              <div style={{ background: '#1A1A1F' }}>
                {item.picks.map((pick, i) => (
                  <div
                    key={pick.name}
                    className="px-4 py-3 flex items-start gap-3"
                    style={{ borderBottom: i < item.picks.length - 1 ? '0.5px solid #111' : 'none' }}
                  >
                    <span className="text-green-500 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-bold text-offwhite">{pick.name}</p>
                      {pick.tag && (
                        <span
                          className="inline-block text-xs font-semibold px-2 py-0.5 rounded mt-0.5 mb-1"
                          style={{ background: '#0a1a0a', color: '#4a8a4a', border: '0.5px solid #1a3a1a' }}
                        >
                          {pick.tag}
                        </span>
                      )}
                      <p className="text-xs text-muted leading-relaxed">{pick.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted text-sm">
            No alternatives listed for this category yet.
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
