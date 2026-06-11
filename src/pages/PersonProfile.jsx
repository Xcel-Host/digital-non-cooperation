import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { people } from '../data/people'
import { reliance } from '../data/reliance'
import { adani } from '../data/adani'
import SourceChip from '../components/SourceChip'
import Footer from '../components/Footer'

// Tag colour map
const TAG_BG = {
  A1: '#2e0f0f', A2: '#252200', Policy: '#0f1a2e', Context: '#1a1a1a',
  Wealth: '#0f2418', Telecom: '#2e0f0f', Finance: '#0f1a2e', Airports: '#252200',
  Markets: '#1a1a1a', Media: '#0f1a2e',
}
const TAG_COLOR = {
  A1: '#ff8a8a', A2: '#f5c34b', Policy: '#7fb0ff', Context: '#aaa',
  Wealth: '#6fcf97', Telecom: '#ff8a8a', Finance: '#7fb0ff', Airports: '#f5c34b',
  Markets: '#aaa', Media: '#7fb0ff',
}

function Tag({ name }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4,
      background: TAG_BG[name] || '#1a1a1a', color: TAG_COLOR[name] || '#aaa' }}>
      {name}
    </span>
  )
}

// Accordion card for a single promise
function PromiseCard({ s, isDark, isLast }) {
  const [open, setOpen] = useState(false)
  const cardBg = isDark ? '#111' : '#fafaf6'
  const border = isDark ? '#2a2a2a' : '#e5e5e5'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'

  return (
    <div style={{ borderBottom: isLast ? 'none' : `0.5px solid ${border}` }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: isDark ? '#1a1a1a' : '#f0f0f0', color: s.statusColor, flexShrink: 0, marginTop: 2, whiteSpace: 'nowrap' }}>
          {s.status}
        </span>
        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: textColor, margin: '0 0 2px', lineHeight: 1.3 }}>{s.context}</p>
          <p style={{ fontSize: 11, color: muted, margin: 0 }}>{s.date}</p>
        </div>
        <span style={{ fontSize: 16, color: muted, flexShrink: 0, marginTop: 2,
          transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
      </button>

      {open && (
        <div style={{ background: cardBg, borderRadius: 10, padding: 14, marginBottom: 10 }}>
          <p style={{ fontSize: 11, fontWeight: 800, color: muted, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 6 }}>He said</p>
          <p style={{ fontSize: 13, color: textColor, lineHeight: 1.6, marginBottom: 12 }}>{s.said}</p>
          <p style={{ fontSize: 11, fontWeight: 800, color: muted, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 6 }}>What actually happened</p>
          <p style={{ fontSize: 13, color: textColor, lineHeight: 1.6, marginBottom: 12 }}>{s.record}</p>
          <SourceChip sources={s.sources} isDark={isDark} />
        </div>
      )}
    </div>
  )
}

// Accordion for timeline events
function TimelineEvent({ ev, isDark, isLast, personColor }) {
  const [open, setOpen] = useState(false)
  const border = isDark ? '#2a2a2a' : '#e5e5e5'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'

  // Keep long events open by default if text > 180 chars
  const isShort = ev.text.length < 120

  return (
    <div style={{ position: 'relative', marginBottom: isLast ? 0 : 18 }}>
      <span style={{ position: 'absolute', left: -24, top: 5, width: 9, height: 9, borderRadius: '50%', background: personColor }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: muted }}>{ev.year}</span>
        <Tag name={ev.tag} />
      </div>

      {isShort ? (
        <>
          <p style={{ fontSize: 13, color: textColor, lineHeight: 1.55, marginBottom: 8 }}>{ev.text}</p>
          <SourceChip sources={ev.sources} isDark={isDark} />
        </>
      ) : (
        <>
          <p style={{ fontSize: 13, color: textColor, lineHeight: 1.55, marginBottom: open ? 8 : 4 }}>
            {open ? ev.text : ev.text.slice(0, 120) + '…'}
          </p>
          {!open && (
            <button onClick={() => setOpen(true)}
              style={{ fontSize: 11, color: muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: 8, textDecoration: 'underline' }}>
              read more
            </button>
          )}
          {open && (
            <>
              <SourceChip sources={ev.sources} isDark={isDark} />
              <button onClick={() => setOpen(false)}
                style={{ fontSize: 11, color: muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 4, textDecoration: 'underline', display: 'block' }}>
                show less
              </button>
            </>
          )}
          {!open && <SourceChip sources={ev.sources} isDark={isDark} />}
        </>
      )}
    </div>
  )
}

export default function PersonProfile({ theme }) {
  const { id } = useParams()
  const person = people[id]
  const isDark = (theme || 'dark') !== 'light'
  const [statementsOpen, setStatementsOpen] = useState(false)

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
          ← Home
        </Link>

        {/* ── HEADER ── */}
        <div style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${person.color}`, background: '#111', flexShrink: 0 }}>
              <img src={person.image} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4,
                  background: isGovt ? (isDark ? '#2a2a2a' : '#ddd') : person.color,
                  color: isGovt ? muted : person.badge === 'A2' ? '#000' : '#fff' }}>
                  {person.badge}
                </span>
                <h1 style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.5px', color: textColor }}>{person.name}</h1>
              </div>
              <p style={{ fontSize: 12, color: muted, marginBottom: 4 }}>{person.role}</p>
              <p style={{ fontSize: 13, color: muted, lineHeight: 1.5, maxWidth: 520 }}>{person.framing}</p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
            {person.stats.map((s, i) => (
              <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 12 }}>
                <p style={{ fontSize: 11, color: muted, marginBottom: 4, lineHeight: 1.3 }}>{s.label}</p>
                <p style={{ fontSize: 20, fontWeight: 900, color: textColor, marginBottom: 2 }}>{s.value}</p>
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
            <p style={{ fontSize: 12.5, color: muted, margin: 0, lineHeight: 1.6 }}>{person.scopeNote}</p>
          </div>
        )}

        {/* ── SCOREBOARD (govt only) ── */}
        {person.scorecard && (
          <div style={card}>
            <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
              10 big promises · what happened
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 10, marginBottom: 10 }}>
              {[
                { label: 'Unfulfilled', value: person.scorecard.unfulfilled, color: '#D84B4B' },
                { label: 'Partial', value: person.scorecard.partial, color: '#4a8a4a' },
                { label: 'Disputed', value: person.scorecard.disputed, color: '#e8950a' },
              ].map((sc, i) => (
                <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 12, textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 900, color: sc.color, margin: '0 0 4px' }}>{sc.value}</p>
                  <p style={{ fontSize: 11, color: muted, margin: 0 }}>{sc.label}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: muted, lineHeight: 1.5 }}>{person.scorecard.note}</p>
            <button onClick={() => setStatementsOpen(o => !o)}
              style={{ marginTop: 12, fontSize: 12, fontWeight: 700, padding: '8px 16px', borderRadius: 8, background: person.color, color: person.badge === 'A2' ? '#000' : '#fff', border: 'none', cursor: 'pointer' }}>
              {statementsOpen ? 'Hide all promises ↑' : 'See all 10 promises ↓'}
            </button>
          </div>
        )}

        {/* ── PROMISE CARDS (accordion, govt only) ── */}
        {person.statements && statementsOpen && (
          <div style={card}>
            <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
              He said · What actually happened
            </p>
            <p style={{ fontSize: 12, color: muted, marginBottom: 14, lineHeight: 1.5 }}>
              Things said at rallies, as newspapers reported them — next to what official numbers later showed. Every card has proof links. Where fact-checkers dispute the original wording, that is flagged too.
            </p>
            {person.statements.map((s, i) => (
              <PromiseCard key={s.id} s={s} isDark={isDark} isLast={i === person.statements.length - 1} />
            ))}
            {/* Link to election 2024 page */}
            <div style={{ marginTop: 16, padding: '12px 14px', background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
              <p style={{ fontSize: 13, color: textColor, margin: 0 }}>2024 election — voter data, electoral bonds, NGO crackdown, hate speech: all six concern clusters</p>
              <Link to="/election-2024" style={{ fontSize: 12, fontWeight: 700, padding: '7px 14px', borderRadius: 8, textDecoration: 'none', background: '#D84B4B', color: '#fff', whiteSpace: 'nowrap' }}>
                Open 2024 page →
              </Link>
            </div>
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
                Full map →
              </Link>
            </div>
          </div>
        )}

        {/* ── TIMELINE ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {isGovt ? 'What he decided — and what happened next' : 'How the empire was built, year by year'}
          </p>
          <div style={{ borderLeft: `2px solid ${isDark ? '#2a2a2a' : '#ddd'}`, paddingLeft: 18, marginLeft: 4 }}>
            {person.events.map((ev, i) => (
              <div key={i}>
                {ev.era && (
                  <p style={{ fontSize: 11, fontWeight: 800, color: person.color === '#888' ? '#e8950a' : person.color,
                    textTransform: 'uppercase', letterSpacing: '1px', margin: `${i === 0 ? 0 : 10}px 0 14px` }}>
                    {ev.era}
                  </p>
                )}
                <TimelineEvent ev={ev} isDark={isDark} isLast={i === person.events.length - 1} personColor={person.color} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CROSS LINKS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, marginBottom: 14 }}>
          {Object.values(people).filter(p => p.id !== id).map(p => (
            <Link key={p.id} to={`/person/${p.id}`}
              style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, textDecoration: 'none' }}>
              <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4,
                background: p.type === 'govt' ? (isDark ? '#2a2a2a' : '#ddd') : p.color,
                color: p.type === 'govt' ? muted : p.badge === 'A2' ? '#000' : '#fff' }}>{p.badge}</span>
              <p style={{ fontSize: 14, fontWeight: 800, color: textColor, margin: '8px 0 2px' }}>{p.name}</p>
              <p style={{ fontSize: 11, color: muted }}>Open profile →</p>
            </Link>
          ))}
          <Link to="/wealth" style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, textDecoration: 'none' }}>
            <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: isDark ? '#0f2418' : '#e2f3e8', color: '#6fcf97' }}>📊</span>
            <p style={{ fontSize: 14, fontWeight: 800, color: textColor, margin: '8px 0 2px' }}>Wealth vs real India</p>
            <p style={{ fontSize: 11, color: muted }}>The numbers →</p>
          </Link>
          {isGovt && (
            <Link to="/election-2024" style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: 14, textDecoration: 'none' }}>
              <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: isDark ? '#2e0f0f' : '#fce8e8', color: '#D84B4B' }}>🗳️</span>
              <p style={{ fontSize: 14, fontWeight: 800, color: textColor, margin: '8px 0 2px' }}>2024 Election</p>
              <p style={{ fontSize: 11, color: muted }}>Six concern clusters →</p>
            </Link>
          )}
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
