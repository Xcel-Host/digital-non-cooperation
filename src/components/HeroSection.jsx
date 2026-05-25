import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const philosophyPillars = [
  { color: '#D84B4B', title: 'Non-violence', desc: "We don't hate. We resist through awareness. No violence, only clarity. This is not anger — it is information. Directed, purposeful, peaceful." },
  { color: '#F59E0B', title: 'Non-cooperation', desc: 'We withdraw economic support from monopoly. Silently. Consistently. Not all at once — one rupee at a time. One switch per month matters.' },
  { color: '#4a8a4a', title: 'Truth & Awareness', desc: 'We expose control. We spread truth. We educate before we act. When you know who owns what you buy, every purchase becomes a conscious choice.' },
  { color: '#4a6a8a', title: 'Self-Respect', desc: "We choose freedom over convenience. Our choices reflect our values. India First. People First. Not because it's comfortable, but because it's right." },
]

const disconnectSteps = [
  { num: '1', bg: '#D84B4B', color: '#fff', title: 'Know the Empires', desc: 'Understand how A1 (Ambani) and A2 (Adani) control key sectors of your daily life.' },
  { num: '2', bg: '#F59E0B', color: '#000', title: 'Explore Sectors', desc: 'See which brands, apps, and services belong to each empire.' },
  { num: '3', bg: '#1a3a1a', color: '#5a9a5a', title: 'Choose Alternatives', desc: 'Find real, named alternatives available in India — not vague suggestions.' },
  { num: '4', bg: '#1a1a3a', color: '#5a5a9a', title: 'Take Action Silently', desc: 'One switch. One kirana. One search before you buy.' },
  { num: '5', bg: '#2a1a3a', color: '#8a5a9a', title: 'Build a Movement', desc: 'Share. Millions of small acts of non-cooperation create big change.' },
]

const rippleNodes = [
  { id: 0, label: 'You choose\nalternatives', color: '#F59E0B', angle: 270 },
  { id: 1, label: 'Empires\nlose share', color: '#D84B4B', angle: 342 },
  { id: 2, label: 'Local jobs\ngrow', color: '#4a9a4a', angle: 54 },
  { id: 3, label: 'Less funding\nto power', color: '#4a6a9a', angle: 126 },
  { id: 4, label: 'Fairer\nelections', color: '#8a5a9a', angle: 198 },
]

const comingEmpires = ['Tata Group (A3)', 'Aditya Birla (A4)', 'Times Group · Media', 'Bajaj · Mahindra']

function CenteredModal({ open, onClose, children }) {
  React.useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])
  if (!open) return null
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 540, background: '#0d0d12', border: '0.5px solid #2a2a2a', borderRadius: 18, maxHeight: '88vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'sticky', top: 12, float: 'right', marginRight: 12, width: 28, height: 28, borderRadius: '50%', background: '#1a1a1f', border: '0.5px solid #333', color: '#888', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>✕</button>
        <div style={{ padding: '16px 24px 28px' }}>{children}</div>
      </div>
    </div>
  )
}

function EmpireCard({ badge, name, person, sectors, group, isDark, onClick }) {
  const isA1 = badge === 'A1'
  const accentColor = isA1 ? '#D84B4B' : '#F59E0B'
  return (
    <div onClick={onClick}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      style={{ position: 'relative', borderRadius: 20, padding: '28px 24px', cursor: 'pointer', overflow: 'hidden', minHeight: 200,
        background: isA1 ? 'linear-gradient(145deg, #1f0505 0%, #0a0000 60%, #120000 100%)' : 'linear-gradient(145deg, #0e0e00 0%, #050500 60%, #080800 100%)',
        border: `1px solid ${isA1 ? '#3a1010' : '#2a2400'}`,
        transition: 'transform 0.2s ease',
        boxShadow: isA1 ? '0 4px 24px rgba(216,75,75,0.1)' : '0 4px 24px rgba(245,158,11,0.08)',
      }}>
      {isA1 ? (
        <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.1, userSelect: 'none', fontSize: 28, fontWeight: 900, letterSpacing: '-1px', color: '#D84B4B' }}>Reliance</div>
      ) : (
        <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', opacity: 0.12, userSelect: 'none', fontSize: 32, fontWeight: 900, letterSpacing: '-1px', background: 'linear-gradient(135deg, #8b6fd4, #6a4faa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>adani</div>
      )}
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, marginBottom: 16, background: isA1 ? '#D84B4B' : '#F59E0B', color: isA1 ? '#fff' : '#000', fontSize: 12, fontWeight: 900 }}>{badge}</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: '#F3F4F6', letterSpacing: '-1px', lineHeight: 1.05, marginBottom: 8 }}>{name}</div>
      <div style={{ fontSize: 12, color: '#555', marginBottom: 14, fontWeight: 500 }}>{person}</div>
      <div style={{ fontSize: 11, color: '#3a3a3a', lineHeight: 1.8 }}>{sectors}</div>
      <div style={{ position: 'absolute', right: 20, bottom: 20, fontSize: 20, color: accentColor, opacity: 0.6 }}>→</div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${accentColor}, transparent)`, opacity: 0.4 }} />
    </div>
  )
}

function RippleLoopDiagram() {
  const cx = 200, cy = 200, r = 120
  const nodeR = 38

  const nodes = rippleNodes.map(n => {
    const rad = (n.angle * Math.PI) / 180
    return { ...n, x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  })

  function arcPath(from, to) {
    return `M ${from.x} ${from.y} A ${r} ${r} 0 0 1 ${to.x} ${to.y}`
  }

  function arrowTip(from, to, offset = 14) {
    const dx = to.x - from.x, dy = to.y - from.y
    const len = Math.sqrt(dx * dx + dy * dy)
    return { x: to.x - (dx / len) * offset, y: to.y - (dy / len) * offset }
  }

  return (
    <div style={{ marginTop: 28 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 16, textAlign: 'center' }}>The Ripple Effect — a virtuous loop</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 340 }} aria-label="Ripple loop diagram">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M1,1 L7,4 L1,7 Z" fill="#F59E0B" opacity="0.7" />
            </marker>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {nodes.map((node, i) => {
            const next = nodes[(i + 1) % nodes.length]
            return (
              <g key={`arc-${i}`}>
                <path d={arcPath(node, next)} fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" />
              </g>
            )
          })}
          <circle cx={cx} cy={cy} r={46} fill="#0d0900" stroke="#2a1800" strokeWidth="0.5" />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="800">YOUR</text>
          <text x={cx} y={cy + 6} textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="800">CHOICE</text>
          <text x={cx} y={cy + 20} textAnchor="middle" fill="#555" fontSize="8">ripples outward</text>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.1" />
          {nodes.map((node, i) => (
            <g key={`node-${i}`} filter="url(#glow)">
              <circle cx={node.x} cy={node.y} r={nodeR} fill="#0d0d12" stroke={node.color} strokeWidth="1" opacity="0.9" />
              {node.label.split('\n').map((line, li) => (
                <text key={li} x={node.x} y={node.y + (li - (node.label.split('\n').length - 1) / 2) * 12}
                  textAnchor="middle" dominantBaseline="middle" fill={node.color} fontSize="8.5" fontWeight="700">{line}</text>
              ))}
            </g>
          ))}
        </svg>
      </div>
      <p style={{ fontSize: 10, color: '#555', textAlign: 'center', marginTop: 8, lineHeight: 1.6 }}>
        Every conscious purchase breaks the loop of exploitation.<br />
        <span style={{ color: '#F59E0B', fontWeight: 700 }}>Less exploitation → loops back to you.</span>
      </p>
    </div>
  )
}

function PowerPyramid({ isDark, textColor }) {
  const layers = [
    { label: 'THEY OWN MARKETS', sub: 'System structure', fill: isDark ? 'rgba(58,10,10,0.72)' : '#fee2e2', textFill: '#e05050', subFill: isDark ? '#b06060' : '#b91c1c', pts: '140,10 188,46 92,46' },
    { label: 'THEY SHAPE NARRATIVES', sub: 'Media & information', fill: isDark ? 'rgba(46,8,8,0.72)' : '#fecaca', textFill: isDark ? '#e87070' : '#b91c1c', subFill: isDark ? '#8a5858' : '#991b1b', pts: '92,46 188,46 208,86 72,86' },
    { label: 'THEY INFLUENCE GOVT', sub: 'Policy & resources', fill: isDark ? 'rgba(34,6,6,0.72)' : '#fca5a5', textFill: isDark ? '#cc6868' : '#7f1d1d', subFill: isDark ? '#7a4848' : '#7f1d1d', pts: '72,86 208,86 228,126 52,126' },
    { label: 'YOU FUND IT EVERY DAY', sub: 'Every rupee. Every purchase.', fill: isDark ? 'rgba(24,4,4,0.72)' : '#f87171', textFill: isDark ? '#F3F4F6' : '#fff', subFill: isDark ? '#ddd' : '#fee2e2', pts: '52,126 228,126 254,170 16,170' },
  ]
  return (
    <div style={{
      borderRadius: 14,
      padding: '18px 20px 14px',
      background: isDark ? 'rgba(10,10,10,0.72)' : 'rgba(255,255,255,0.85)',
      border: `0.5px solid ${isDark ? 'rgba(60,20,20,0.6)' : '#ddd'}`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888', marginBottom: 14, textAlign: 'center' }}>Today, power looks like this</p>
      <svg viewBox="0 0 270 180" style={{ width: '100%', height: 'auto' }} role="img" aria-label="Power pyramid">
        {layers.map((l, i) => (
          <g key={l.label}>
            <polygon points={l.pts} fill={l.fill} stroke={isDark ? '#6a2020' : '#D84B4B'} strokeWidth="1" />
            <text x="140" y={28 + i * 40} textAnchor="middle" fill={l.textFill} fontSize="9" fontWeight="800">{l.label}</text>
            <text x="140" y={40 + i * 40} textAnchor="middle" fill={l.subFill} fontSize="7">{l.sub}</text>
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 10, padding: '8px 10px', borderRadius: 8, background: isDark ? 'rgba(13,8,0,0.8)' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: '#F59E0B', lineHeight: 1.5 }}>But change starts small.<br />You + Your choices = Real change</p>
      </div>
    </div>
  )
}

export default function HeroSection({ theme, empiresOpen, setEmpiresOpen }) {
  const [philOpen, setPhilOpen] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const isDark = theme !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const mutedColor = isDark ? '#888' : '#666'
  const cardBg = isDark ? 'rgba(26,26,31,0.75)' : '#fff'
  const borderCol = isDark ? 'rgba(40,40,40,0.8)' : '#ddd'

  const empires = [
    { badge: 'A1', name: 'Ambani Empire', person: 'Mukesh Ambani', sectors: 'Telecom · Retail · Media · Digital Energy · Fashion · More', group: 'reliance' },
    { badge: 'A2', name: 'Adani Empire', person: 'Gautam Adani', sectors: 'Infrastructure · Energy · Ports · Airports · Media · More', group: 'adani' },
  ]

  return (
    <>
      {/* SECTION — hero-bg.png spans full width behind everything */}
      <section style={{ position: 'relative', borderBottom: `0.5px solid ${isDark ? '#222' : '#ddd'}`, paddingTop: 48, overflow: 'hidden' }}>

        {/* Full-width background image */}
        {!empiresOpen && (
          <>
            <img
              src="/hero-bg.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center bottom',
                zIndex: 0,
              }}
            />
            {/* Top fade — keeps heading text readable over dark part of image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(11,11,15,0.72) 0%, rgba(11,11,15,0.38) 40%, rgba(11,11,15,0.55) 75%, rgba(11,11,15,0.88) 100%)',
              zIndex: 1,
            }} />
          </>
        )}

        {/* Page background when empiresOpen (no bg image) */}
        {empiresOpen && (
          <div style={{ position: 'absolute', inset: 0, background: isDark ? '#0B0B0F' : '#f8f8f4', zIndex: 0 }} />
        )}

        {/* All content above bg */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-6xl mx-auto px-4">
            <div style={{ display: 'grid', gridTemplateColumns: empiresOpen ? '1fr' : '1fr 1fr', gap: 40, alignItems: 'start' }} className="hero-grid">

              {/* ── LEFT COLUMN ── */}
              <div style={{ position: 'relative' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', color: '#b83c3c', textTransform: 'uppercase', marginBottom: 16 }}>India · Non-violence · Non-cooperation</p>

                <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 14, color: '#F3F4F6' }}>
                  How do you{' '}
                  <span style={{ color: '#fff', background: '#F59E0B', fontStyle: 'normal', padding: '2px 8px', borderRadius: 6, display: 'inline-block' }}>RESIST</span>{' '}
                  being exploited?
                </h1>

                <p style={{ fontSize: 15, fontWeight: 700, color: '#F3F4F6', marginBottom: 6 }}>Through your choices. Through alternatives. Through non-cooperation.</p>
                <p style={{ fontSize: 13, color: 'rgba(243,244,246,0.65)', lineHeight: 1.65, marginBottom: 28 }}>
                  Every rupee you spend is a vote. Boycott monopoly. Support alternatives.{' '}
                  <span style={{ color: '#c44040', fontWeight: 600 }}>This is Digital Satyagraha.</span>
                </p>

                {/* BUTTONS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <button onClick={() => setPhilOpen(true)}
                      style={{ padding: '11px 12px', background: 'rgba(13,9,0,0.75)', backdropFilter: 'blur(6px)', border: '0.5px solid rgba(42,24,0,0.9)', color: '#F59E0B', fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 13 }} />
                      Digital Satyagraha Philosophy
                    </button>
                    <button onClick={() => setStepsOpen(true)}
                      style={{ padding: '11px 12px', background: 'rgba(26,26,31,0.75)', backdropFilter: 'blur(6px)', border: `0.5px solid ${borderCol}`, color: '#F3F4F6', fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 13 }} />
                      How It Works
                    </button>
                  </div>
                  <button onClick={() => setEmpiresOpen(e => !e)}
                    style={{ width: '100%', padding: '10px 20px', background: 'linear-gradient(135deg, #c43e3e 0%, #d84b4b 40%, #c43e3e 100%)', color: '#fff', fontSize: 13, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer', letterSpacing: '0.2px', boxShadow: '0 3px 12px rgba(196,62,62,0.3)' }}>
                    {empiresOpen ? 'Close Empires ↑' : 'Explore Empires →'}
                  </button>
                </div>

                {/* STATS PILLS */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 28, paddingTop: 8, flexWrap: 'nowrap', overflowX: 'auto' }} className="hide-scrollbar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'rgba(13,9,0,0.72)', backdropFilter: 'blur(6px)', border: '0.5px solid rgba(42,24,0,0.8)', borderRadius: 18, flexShrink: 0 }}>
                    <span style={{ fontSize: 14 }}>✊</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#F59E0B', lineHeight: 1, whiteSpace: 'nowrap' }}>Movement Growing</div>
                      <div style={{ fontSize: 9, color: 'rgba(243,244,246,0.5)', whiteSpace: 'nowrap' }}>Join thousands taking action</div>
                    </div>
                  </div>
                  <div style={{ width: '0.5px', height: 32, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
                  {[['🕊️', 'Silent', 'Non-violent'], ['✊', 'Consistent', 'Non-cooperation'], ['🇮🇳', 'India First', 'People First']].map(([icon, bold, sub]) => (
                    <div key={bold} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: 'rgba(26,26,31,0.72)', backdropFilter: 'blur(6px)', border: '0.5px solid rgba(40,40,40,0.8)', borderRadius: 18, flexShrink: 0 }}>
                      <span style={{ fontSize: 12 }}>{icon}</span>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#F3F4F6', lineHeight: 1, whiteSpace: 'nowrap' }}>{bold}</div>
                        <div style={{ fontSize: 9, color: 'rgba(243,244,246,0.5)', whiteSpace: 'nowrap' }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* EXPANDED EMPIRES */}
                {empiresOpen && (
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      {empires.map(e => (
                        <EmpireCard key={e.badge} {...e} isDark={isDark}
                          onClick={() => window.location.href = `/explore/${e.group}`} />
                      ))}
                    </div>
                    <div style={{ background: isDark ? '#111' : '#fff', border: `0.5px solid ${isDark ? '#222' : '#ddd'}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: textColor, marginBottom: 3 }}>Their power. Your choices.</p>
                        <p style={{ fontSize: 11, color: mutedColor, lineHeight: 1.5 }}>Concentration gives control — over prices, news, and choices. This affects your daily life.</p>
                      </div>
                    </div>
                    <div style={{ background: isDark ? '#0d0d0d' : '#f8f8f4', border: `0.5px solid ${isDark ? '#222' : '#ddd'}`, borderRadius: 12, padding: '12px 16px' }}>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Coming soon</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: textColor, marginBottom: 10 }}>More Empires Being Mapped</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {comingEmpires.map(e => (
                          <span key={e} style={{ fontSize: 10, padding: '4px 12px', borderRadius: 8, background: isDark ? '#1a1a1a' : '#eee', color: '#666', border: `0.5px solid ${isDark ? '#222' : '#ddd'}` }}>{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* JOIN THE MOVEMENT — flows after stats pills, on top of bg image */}
                {!empiresOpen && (
                  <div style={{
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '0.5px solid rgba(216,75,75,0.25)',
                    borderRadius: 16,
                    padding: '24px 22px 20px',
                    marginBottom: 36,
                  }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(245,158,11,0.9)', marginBottom: 10 }}>Join the Movement</p>
                    <p style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(28px,4vw,42px)',
                      fontWeight: 900,
                      fontStyle: 'italic',
                      color: '#F3F4F6',
                      lineHeight: 1.1,
                      letterSpacing: '-0.5px',
                      marginBottom: 6,
                    }}>
                      Join the<br />
                      <span style={{ color: '#D84B4B' }}>Movement</span>
                    </p>
                    <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.5)', marginBottom: 16 }}>Silent. Non-violent. Consistent.</p>
                    <Link to="/participate"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: '#D84B4B',
                        color: '#fff', fontSize: 13, fontWeight: 800,
                        padding: '13px 24px', borderRadius: 10, textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(216,75,75,0.4)',
                        border: '0.5px solid rgba(255,100,100,0.3)',
                      }}>
                      I'll Take Action ✊
                    </Link>
                  </div>
                )}
              </div>

              {/* ── RIGHT COLUMN ── */}
              {!empiresOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Caricatures */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, paddingTop: 16 }}>
                    {[
                      { src: '/a1.png', label: 'A1', labelBg: 'rgba(26,26,26,0.8)', labelColor: '#888', size: 108, border: '1.5px solid #333' },
                      { src: '/vg.png', label: 'Modi', labelBg: 'rgba(26,5,5,0.85)', labelColor: '#ff6060', size: 140, border: '2.5px solid #D84B4B', mb: 14 },
                      { src: '/a2.png', label: 'A2', labelBg: 'rgba(26,26,26,0.8)', labelColor: '#888', size: 108, border: '1.5px solid #333' },
                    ].map(c => (
                      <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, marginBottom: c.mb || 0 }}>
                        <div style={{ width: c.size, height: c.size, borderRadius: '50%', overflow: 'hidden', border: c.border, background: '#111', boxShadow: c.label === 'Modi' ? '0 8px 32px rgba(216,75,75,0.3)' : '0 4px 16px rgba(0,0,0,0.5)' }}>
                          <img src={c.src} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, background: c.labelBg, color: c.labelColor }}>{c.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pyramid — semi-transparent so bg shows through */}
                  <PowerPyramid isDark={isDark} textColor={textColor} />
                </div>
              )}

            </div>
          </div>

          {/* BOTTOM STATS STRIP */}
          {!empiresOpen && (
            <div style={{ borderTop: `0.5px solid rgba(255,255,255,0.08)`, marginTop: 0, padding: '22px 0', background: 'rgba(11,11,15,0.85)', backdropFilter: 'blur(8px)' }}>
              <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 20, fontWeight: 900, color: '#F3F4F6', lineHeight: 1.2, marginBottom: 4 }}>Small acts of non-cooperation<br />can bring big change.</p>
                  <p style={{ fontSize: 13, color: '#e8950a', fontWeight: 600 }}>Be the change. Build the future.</p>
                </div>
                <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                  {[
                    { num: '81+', label: 'Brands Tracked', color: '#e8950a' },
                    { num: '2', label: 'Big Empires', color: '#F3F4F6' },
                    { num: '15', label: 'Sectors Covered', color: '#F3F4F6' },
                    { num: '75+', label: 'Alternatives Listed', color: '#e8950a' },
                    { num: '✊', label: 'Movement Growing', color: '#c44040' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 22, fontWeight: 900, color: s.color, letterSpacing: '-0.5px', lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontSize: 10, color: 'rgba(243,244,246,0.5)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PHILOSOPHY MODAL */}
      <CenteredModal open={philOpen} onClose={() => setPhilOpen(false)}>
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 8 }}>Our Philosophy · Our Method · Our Movement</p>
        <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px', color: '#F3F4F6', marginBottom: 4, lineHeight: 1 }}>Digital<br />Satyagraha</h2>
        <p style={{ fontSize: 12, color: '#666', fontStyle: 'italic', marginBottom: 16 }}>"Digital Satyagraha is the modern path of non-violent resistance."</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: '#F59E0B' }}>#DigitalNonCooperation</span>
          {['#DigitalBoycott','#NonViolentNonCooperation','#EconomicNonCooperation'].map(t => (
            <span key={t} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(245,158,11,0.4)' }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>01 — What is this?</p>
        <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.7)', lineHeight: 1.75, marginBottom: 8 }}>Gandhi's Satyagraha was non-violent resistance through <strong style={{ color: '#F3F4F6' }}>daily, consistent choices</strong> — not marches, not rage. Digital Non-Cooperation applies the same idea to how we spend, stream, and consume in 2025.</p>
        <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.7)', lineHeight: 1.75, marginBottom: 20 }}>When two corporate groups control your internet, your news, your groceries, and your airports — awareness and redirection of spending is a form of quiet, peaceful resistance.</p>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>02 — What it is NOT</p>
        <div style={{ background: '#111', border: '0.5px solid #1e1e1e', borderRadius: 10, padding: '12px 14px', marginBottom: 20 }}>
          <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.7)', lineHeight: 1.9 }}>Not a political party.<br />Not ideology.<br />Not violence.<br />Not even a boycott in the aggressive sense.<br /><strong style={{ color: '#F3F4F6' }}>It is consumer clarity.</strong> Know who owns what. Choose accordingly. That's all.</p>
        </div>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 12 }}>03 — The 4 Pillars</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
          {philosophyPillars.map(p => (
            <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: 5 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 800, color: '#F3F4F6', marginBottom: 3 }}>{p.title}</p>
                <p style={{ fontSize: 11, color: '#7a6a40', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 12 }}>04 — The 4 Acts</p>
        <div style={{ marginBottom: 20 }}>
          {[['Switch one service','Telecom, streaming, or grocery. One redirect per month matters.'],['Know before you buy','10 seconds on this platform to know who benefits from your rupee.'],['Support local first','Kirana over JioMart. Handloom over AJIO. Your money, your vote.'],['Diversify your media','When two groups own your news, seek independent sources — newsletters, independent journalists, regional press.']].map(([title, desc]) => (
            <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: '0.5px solid #111' }}>
              <span style={{ color: '#F59E0B', fontSize: 13, flexShrink: 0, marginTop: 1 }}>→</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#F3F4F6', marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 11, color: '#666', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>05 — Economic Non-Cooperation</p>
        <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.7)', lineHeight: 1.75, marginBottom: 8 }}>Concentration of corporate power is not fixed. It grows with every subscription renewed, every app kept, every purchase unreflected on.</p>
        <p style={{ fontSize: 12, color: 'rgba(243,244,246,0.7)', lineHeight: 1.75, marginBottom: 20 }}><strong style={{ color: '#F3F4F6' }}>Economic Non-Cooperation</strong> means redirecting small amounts of everyday spending toward alternatives — cooperatives, local businesses, open-source tools, government services. Not all at once. One step at a time.</p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          {['Withdraw','Reduce','Replace','Transform'].map((s,i,arr) => (
            <span key={s} style={{ fontSize: 11, color: '#555' }}>{s}{i < arr.length-1 ? ' →' : ''}</span>
          ))}
        </div>
        <div style={{ padding: '14px 16px', borderLeft: '2px solid #F59E0B', borderRadius: '0 10px 10px 0', background: '#080600', marginBottom: 12 }}>
          <p style={{ fontSize: 13, color: '#8a7a50', lineHeight: 1.8, fontStyle: 'italic' }}>"Be the change without shouting.<br />This is how India wins back its future.<br /><strong style={{ color: '#F59E0B' }}>One choice at a time."</strong></p>
        </div>
        <div style={{ padding: '12px 14px', borderLeft: '2px solid #F59E0B', borderRadius: '0 8px 8px 0', background: '#0a0800' }}>
          <p style={{ fontSize: 12, color: '#8a7a50', lineHeight: 1.7, fontStyle: 'italic' }}>"Non-cooperation with evil is as much a duty as cooperation with good."</p>
          <p style={{ fontSize: 11, color: '#F59E0B', fontWeight: 700, marginTop: 6 }}>— Mahatma Gandhi</p>
        </div>
      </CenteredModal>

      {/* HOW IT WORKS MODAL */}
      <CenteredModal open={stepsOpen} onClose={() => setStepsOpen(false)}>
        <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px', color: '#F3F4F6', marginBottom: 4 }}>How It Works</h2>
        <p style={{ fontSize: 12, color: '#666', marginBottom: 20 }}>Know → Explore → Choose → Act → Spread</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {disconnectSteps.map(s => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: s.bg, color: s.color, fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{s.num}</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#F3F4F6', marginBottom: 3 }}>{s.title}</p>
                <p style={{ fontSize: 11, color: '#666', lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <RippleLoopDiagram />
      </CenteredModal>

      <style>{`
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
