import { Link, useParams, Navigate } from 'react-router-dom'
import { people } from '../data/people'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import SourceChip from '../components/SourceChip'
import Footer from '../components/Footer'

const TAG_COLORS = {
  A1: { bg: '#2e0f0f', color: '#ff8a8a', light: '#fcc' },
  A2: { bg: '#252200', color: '#f5c34b', light: '#f5e080' },
  Policy: { bg: '#0f1a2e', color: '#7fb0ff', light: '#cce0ff' },
  Context: { bg: '#1a1a1a', color: '#aaa', light: '#ddd' },
  Wealth: { bg: '#0f2418', color: '#6fcf97', light: '#bfe8cf' },
  Telecom: { bg: '#2e0f0f', color: '#ff8a8a', light: '#fcc' },
  Finance: { bg: '#0f1a2e', color: '#7fb0ff', light: '#cce0ff' },
  Airports: { bg: '#252200', color: '#f5c34b', light: '#f5e080' },
  Markets: { bg: '#1a1a1a', color: '#aaa', light: '#ddd' },
}

function Tag({ name, isDark }) {
  const c = TAG_COLORS[name] || TAG_COLORS.Context
  return (
    <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 5, background: isDark ? c.bg : '#fff', color: isDark ? c.color : '#555', border: `0.5px solid ${isDark ? c.bg : c.light}` }}>
      {name}
    </span>
  )
}

export default function PersonProfile({ theme }) {
  const { id } = useParams()
  const person = people[id]
  const isDark = (theme || 'dark') !== 'light'

  if (!person) return <Navigate to="/" replace />

  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const statBg = isDark ? '#111' : '#fafaf6'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'
  const isGovt = person.type === 'govt'
  const empireData = person.group === 'reliance' ? reliance : person.group === 'adani' ? adani : null

  const card = { background: cardBg, border: `0.5px solid ${border}`, borderRadius: 14, padding: 20, marginBottom: 14 }

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">

        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: muted, textDecoration: 'none', marginBottom: 20 }}>
          ← Back to Home
        </Link>

        {/* ── HEADER ── */}
        <div style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${person.color}`, background: '#111', flexShrink: 0 }}>
              <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 5, background: isGovt ? (isDark ? '#2a2a2a' : '#ddd') : person.color, color: isGovt ? muted : person.badge === 'A2' ? '#000' : '#fff' }}>
                  {person.badge}
                </span>
                <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.5px', color: textColor }}>{person.name}</h1>
              </div>
              <p style={{ fontSize: 12, color: muted, marginBottom: 4 }}>{person.role}</p>
              <p style={{ fontSize: 13, color: muted, lineHeight: 1.5, maxWidth: 560 }}>{person.framing}</p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
            {person.stats.map((s, i) => (
              <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 12 }}>
                <p style={{ fontSize: 11, color: muted, marginBottom: 4, lineHeight: 1.3 }}>{s.label}</p>
                <p style={{ fontSize: 22, fontWeight: 900, color: textColor, marginBottom: 2 }}>{s.value}</p>
                {s.sub && <p style={{ fontSize: 10.5, color: muted, marginBottom: 6 }}>{s.sub}</p>}
                <SourceChip sources={s.sources} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        {/* ── SCOPE NOTE (govt only) ── */}
        {person.scopeNote && (
          <div style={{ ...card, borderColor: isDark ? '#1e3a5f' : '#b9d4f0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>ℹ️</span>
            <p style={{ fontSize: 12.5, color: muted, lineHeight: 1.6 }}>{person.scopeNote}</p>
          </div>
        )}

        {/* ── EMPIRE CHIPS (A1/A2 only) ── */}
        {empireData && (
          <div style={card}>
            <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
              The empire — tap a sector
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {empireData.sectors.map(s => (
                <Link key={s.id} to={`/sector/${person.group}/${s.id}`}
                  style={{ fontSize: 12, fontWeight: 600, padding: '7px 14px', borderRadius: 8, textDecoration: 'none', background: statBg, color: textColor, border: `0.5px solid ${border}` }}>
                  {s.icon} {s.name} <span style={{ color: muted }}>· {s.brands.length} brands</span>
                </Link>
              ))}
              <Link to={`/explore/${person.group}`}
                style={{ fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none', background: person.color, color: person.badge === 'A2' ? '#000' : '#fff' }}>
                Full empire map →
              </Link>
            </div>
          </div>
        )}

        {/* ── SAID vs RECORD (govt only) ── */}
        {person.statements && (
          <div style={card}>
            <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Said vs record
            </p>
            <p style={{ fontSize: 11.5, color: muted, marginBottom: 16 }}>
              Public statements as reported by the press, paired with what official data later showed. Every card carries its sources.
            </p>
            <div style={{ display: 'grid', gap: 12 }}>
              {person.statements.map((st, i) => (
                <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 5, background: isDark ? '#251a00' : '#fff7e0', color: '#e8950a', border: '0.5px solid #4a3a10' }}>
                      {st.status}
                    </span>
                    <span style={{ fontSize: 11, color: muted }}>{st.context} · {st.date}</span>
                  </div>
                  <p style={{ fontSize: 13, color: textColor, lineHeight: 1.55, marginBottom: 6 }}>
                    <span style={{ color: muted, fontWeight: 700 }}>Said: </span>{st.said}
                  </p>
                  <p style={{ fontSize: 13, color: textColor, lineHeight: 1.55, marginBottom: 10 }}>
                    <span style={{ color: muted, fontWeight: 700 }}>Record: </span>{st.record}
                  </p>
                  <SourceChip sources={st.sources} isDark={isDark} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TIMELINE ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {isGovt ? 'Policy & proximity timeline' : 'Key events — every card sourced'}
          </p>
          <div style={{ borderLeft: `2px solid ${isDark ? '#2a2a2a' : '#ddd'}`, paddingLeft: 18, marginLeft: 4 }}>
            {person.events.map((ev, i) => (
              <div key={i} style={{ marginBottom: i < person.events.length - 1 ? 18 : 0, position: 'relative' }}>
                <span style={{ position: 'absolute', left: -24, top: 5, width: 9, height: 9, borderRadius: '50%', background: person.color }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: muted }}>{ev.year}</span>
                  <Tag name={ev.tag} isDark={isDark} />
                </div>
                <p style={{ fontSize: 13, color: textColor, lineHeight: 1.55, marginBottom: 8 }}>{ev.text}</p>
                <SourceChip sources={ev.sources} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CROSS LINKS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10, marginBottom: 14 }}>
          {Object.values(people).filter(p => p.id !== id).map(p => (
            <Link key={p.id} to={`/person/${p.id}`}
              style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, textDecoration: 'none' }}>
              <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: p.type === 'govt' ? (isDark ? '#2a2a2a' : '#ddd') : p.color, color: p.type === 'govt' ? muted : p.badge === 'A2' ? '#000' : '#fff' }}>{p.badge}</span>
              <p style={{ fontSize: 14, fontWeight: 800, color: textColor, margin: '8px 0 2px' }}>{p.name}</p>
              <p style={{ fontSize: 11, color: muted }}>Open profile →</p>
            </Link>
          ))}
          <Link to="/wealth"
            style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, textDecoration: 'none' }}>
            <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: isDark ? '#0f2418' : '#e2f3e8', color: '#6fcf97' }}>📊</span>
            <p style={{ fontSize: 14, fontWeight: 800, color: textColor, margin: '8px 0 2px' }}>Wealth vs Poverty</p>
            <p style={{ fontSize: 11, color: muted }}>The scale comparison →</p>
          </Link>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
