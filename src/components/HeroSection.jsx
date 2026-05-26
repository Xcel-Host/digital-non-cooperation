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

const rippleSteps = [
  { icon: '🛒', color: '#F59E0B',  title: 'Choose alternatives',                desc: 'One switch. One kirana. One search before you buy.' },
  { icon: '📉', color: '#D84B4B',  title: 'Monopolies weaken',                  desc: 'They lose money, market share and control.' },
  { icon: '🏪', color: '#e06030',  title: 'Local businesses survive',            desc: 'Local shops, services and brands get breathing space.' },
  { icon: '👥', color: '#a060d0',  title: 'Others copy you',                    desc: 'Your choice inspires others in your circle.' },
  { icon: '📢', color: '#4090d0',  title: 'Non-cooperation spreads',             desc: 'Millions of small acts build a movement.' },
  { icon: '📺', color: '#3aa0a0',  title: 'Less control over media & narratives',desc: 'Their grip on stories and public mindshare weakens.' },
  { icon: '💰', color: '#50a050',  title: 'Less funding to political parties',   desc: 'Ruling parties like BJP get less corporate funding.' },
  { icon: '👑', color: '#c0a030',  title: 'Personality cults weaken',           desc: '"Vishwaguru" image loses power and influence.' },
  { icon: '⚖️', color: '#60b060',  title: 'Power becomes accountable',          desc: 'Leaders think twice. Policies become people-focused.' },
  { icon: '🔄', color: '#4080c0',  title: 'Money returns locally',              desc: 'Wealth stays in communities, not in distant corporations.' },
  { icon: '✊', color: '#c04040',  title: 'Citizens gain leverage',             desc: 'People gain real power. Democracy gets stronger.' },
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

function RippleFlowDiagram() {
  return (
    <div style={{ marginTop: 28 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: 16, textAlign: 'center' }}>
        The Ripple Effect — what your choice triggers
      </p>

      {/* Entry arrow */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 30, marginBottom: 4 }}>
        <span style={{ color: '#F59E0B', fontSize: 14, fontWeight: 900 }}>→</span>
      </div>

      <div style={{ position: 'relative' }}>
        {/* LEFT vertical dashed line — fixed position */}
        <div style={{
          position: 'absolute',
          left: 11,
          top: 0,
          bottom: 0,
          width: 0,
          borderLeft: '2px dashed #444',
        }} />

        {/* RIGHT vertical dashed line — fixed position */}
        <div style={{
          position: 'absolute',
          left: 51,
          top: 0,
          bottom: 0,
          width: 0,
          borderLeft: '2px dashed #444',
        }} />

        {rippleSteps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 10, paddingBottom: 10, position: 'relative' }}>

            {/* Left spacer to position circle between the two lines */}
            <div style={{ width: 62, flexShrink: 0, display: 'flex', justifyContent: 'center', position: 'relative' }}>
              {/* Down arrow on left line */}
              {i > 0 && (
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: 8,
                  color: '#555',
                  fontSize: 8,
                  lineHeight: 1,
                }}>▼</div>
              )}
              {/* Circle centered between the two lines */}
              <div style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: `2px solid ${step.color}`,
                background: '#0d0d12',
                boxShadow: `0 0 12px ${step.color}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                position: 'relative',
                zIndex: 2,
              }}>
                {step.icon}
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: step.color, marginBottom: 2, lineHeight: 1.2 }}>{step.title}</p>
              <p style={{ fontSize: 11, color: '#666', lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Exit arrow */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 48, marginTop: 4 }}>
        <span style={{ color: '#F59E0B', fontSize: 14, fontWeight: 900 }}>←</span>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#F59E0B', fontWeight: 700, marginBottom: 3 }}>❤️ Every act counts. Together, we change the system.</p>
        <p style={{ fontSize: 11, color: '#555' }}>Less exploitation. More freedom. Real democracy.</p>
      </div>
    </div>
  )
}

function PowerPyramid({ isDark }) {
  const layers = [
    { label: 'THEY OWN MARKETS', sub: 'System structure', fill: isDark ? '#3a0a0a' : '#fee2e2', textFill: '#e05050', subFill: isDark ? '#b06060' : '#b91c1c', pts: '140,10 188,46 92,46' },
    { label: 'THEY SHAPE NARRATIVES', sub: 'Media & information', fill: isDark ? '#2e0808' : '#fecaca', textFill: isDark ? '#e87070' : '#b91c1c', subFill: isDark ? '#8a5858' : '#991b1b', pts: '92,46 188,46 208,86 72,86' },
    { label: 'THEY INFLUENCE GOVT', sub: 'Policy & resources', fill: isDark ? '#220606' : '#fca5a5', textFill: isDark ? '#cc6868' : '#7f1d1d', subFill: isDark ? '#7a4848' : '#7f1d1d', pts: '72,86 208,86 228,126 52,126' },
    { label: 'YOU FUND IT EVERY DAY', sub: 'Every rupee. Every purchase.', fill: isDark ? '#180404' : '#f87171', textFill: isDark ? '#F3F4F6' : '#fff', subFill: isDark ? '#ddd' : '#fee2e2', pts: '52,126 228,126 254,170 16,170' },
  ]
  return (
    <div style={{ height: '100%', boxSizing: 'border-box', padding: '18px 20px 14px' }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888', marginBottom: 14, textAlign: 'center' }}>Today, power looks like this</p>
      <svg viewBox="0 0 270 180" style={{ width: '100%', height: 'auto' }}>
        {layers.map((l, i) => (
          <g key={l.label}>
            <polygon points={l.pts} fill={l.fill} stroke={isDark ? '#6a2020' : '#D84B4B'} strokeWidth="1" />
            <text x="140" y={28 + i * 40} textAnchor="middle" fill={l.textFill} fontSize="9" fontWeight="800">{l.label}</text>
            <text x="140" y={40 + i * 40} textAnchor="middle" fill={l.subFill} fontSize="7">{l.sub}</text>
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 10, padding: '8px 10px', borderRadius: 8, background: isDark ? '#0d0800' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: '#F59E0B', lineHeight: 1.5 }}>But change starts small.<br />You + Your choices = Real change</p>
      </div>
    </div>
  )
}

export default function HeroSection({ theme, empiresOpen, setEmpiresOpen }) {
  const [philOpen, setPhilOpen] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isDark = theme !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const mutedColor = isDark ? '#888' : '#666'
  const cardBg = isDark ? '#1a1a1f' : '#fff'
  const borderCol = isDark ? '#222' : '#ddd'

  const empires = [
    { badge: 'A1', name: 'Ambani Empire', person: 'Mukesh Ambani', sectors: 'Telecom · Retail · Media · Digital Energy · Fashion · More', group: 'reliance' },
    { badge: 'A2', name: 'Adani Empire', person: 'Gautam Adani', sectors: 'Infrastructure · Energy · Ports · Airports · Media · More', group: 'adani' },
  ]

  return (
    <>
      <section style={{ background: isDark ? '#0B0B0F' : '#f8f8f4', borderBottom: `0.5px solid ${borderCol}`, paddingTop: 48 }}>
        <div className="max-w-6xl mx-auto px-4">

          {/* HERO GRID — position relative so bg image can be absolute behind both columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: (empiresOpen || isMobile) ? '1fr' : '1fr 1fr',
              gap: isMobile ? 24 : 40,
              alignItems: 'stretch',
              position: 'relative',
            }}
          >
            {/* BG IMAGE — sits behind both columns, from left edge to right edge of grid */}
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
                    objectPosition: 'center center',
                    zIndex: 0,
                    borderRadius: 0,
                  }}
                />
                {/* Overlay — dark at top so heading text is readable, lighter in middle to show image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  background: 'linear-gradient(to bottom, rgba(11,11,15,0.92) 0%, rgba(11,11,15,0.65) 45%, rgba(11,11,15,0.75) 100%)',
                }} />
              </>
            )}

            {/* ── LEFT COLUMN ── */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>

              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', color: '#b83c3c', textTransform: 'uppercase', marginBottom: 16 }}>India · Non-violence · Non-cooperation</p>

              <h1 style={{ fontSize: 'clamp(26px,7vw,56px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 14, color: textColor }}>
                How do you{' '}
                <span style={{ color: '#fff', background: '#F59E0B', fontStyle: 'normal', padding: '2px 8px', borderRadius: 6, display: 'inline-block' }}>RESIST</span>{' '}
                being exploited?
              </h1>

              <p style={{ fontSize: 15, fontWeight: 700, color: textColor, marginBottom: 6 }}>Through your choices. Through alternatives. Through non-cooperation.</p>
              <p style={{ fontSize: 13, color: mutedColor, lineHeight: 1.65, marginBottom: 28 }}>
                Every rupee you spend is a vote. Boycott monopoly. Support alternatives.{' '}
                <span style={{ color: '#c44040', fontWeight: 600 }}>This is Digital Satyagraha.</span>
              </p>

              {/* BUTTONS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button onClick={() => setPhilOpen(true)}
                    style={{ padding: '11px 12px', background: isDark ? 'rgba(13,9,0,0.8)' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, color: '#F59E0B', fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 13 }} />
                    Digital Satyagraha Philosophy
                  </button>
                  <button onClick={() => setStepsOpen(true)}
                    style={{ padding: '11px 12px', background: isDark ? 'rgba(26,26,31,0.8)' : '#fff', border: `0.5px solid ${borderCol}`, color: textColor, fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 13 }} />
                    How It Works
                  </button>
                </div>
                <button onClick={() => setEmpiresOpen(e => !e)}
                  style={{ width: '100%', padding: '10px 20px', background: 'linear-gradient(135deg, #c43e3e 0%, #d84b4b 40%, #c43e3e 100%)', color: '#fff', fontSize: 13, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer', letterSpacing: '0.2px', boxShadow: '0 3px 12px rgba(196,62,62,0.22)' }}>
                  {empiresOpen ? 'Close Empires ↑' : 'Explore Empires →'}
                </button>
              </div>

              {/* STATS PILLS */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: isMobile ? 'wrap' : 'nowrap', overflowX: isMobile ? 'visible' : 'auto' }} className="hide-scrollbar">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: isDark ? 'rgba(13,9,0,0.8)' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, borderRadius: 18, flexShrink: 0 }}>
                  <span style={{ fontSize: 14 }}>✊</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#F59E0B', lineHeight: 1, whiteSpace: 'nowrap' }}>Movement Growing</div>
                    <div style={{ fontSize: 9, color: mutedColor, whiteSpace: 'nowrap' }}>Join thousands taking action</div>
                  </div>
                </div>
                <div style={{ width: '0.5px', height: 32, background: borderCol, flexShrink: 0 }} />
                {[['🕊️', 'Silent', 'Non-violent'], ['✊', 'Consistent', 'Non-cooperation'], ['🇮🇳', 'India First', 'People First']].map(([icon, bold, sub]) => (
                  <div key={bold} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: isDark ? 'rgba(26,26,31,0.8)' : '#fff', border: `0.5px solid ${borderCol}`, borderRadius: 18, flexShrink: 0 }}>
                    <span style={{ fontSize: 12 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: textColor, lineHeight: 1, whiteSpace: 'nowrap' }}>{bold}</div>
                      <div style={{ fontSize: 9, color: mutedColor, whiteSpace: 'nowrap' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* EXPANDED EMPIRES */}
              {empiresOpen && (
                <div style={{ marginBottom: 32, marginTop: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {empires.map(e => (
                      <EmpireCard key={e.badge} {...e} isDark={isDark}
                        onClick={() => window.location.href = `/explore/${e.group}`} />
                    ))}
                  </div>
                  <div style={{ background: isDark ? '#111' : '#fff', border: `0.5px solid ${borderCol}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: textColor, marginBottom: 3 }}>Their power. Your choices.</p>
                      <p style={{ fontSize: 11, color: mutedColor, lineHeight: 1.5 }}>Concentration gives control — over prices, news, and choices. This affects your daily life.</p>
                    </div>
                  </div>
                  <div style={{ background: isDark ? '#0d0d0d' : '#f8f8f4', border: `0.5px solid ${borderCol}`, borderRadius: 12, padding: '12px 16px' }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Coming soon</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: textColor, marginBottom: 10 }}>More Empires Being Mapped</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {comingEmpires.map(e => (
                        <span key={e} style={{ fontSize: 10, padding: '4px 12px', borderRadius: 8, background: isDark ? '#1a1a1a' : '#eee', color: '#666', border: `0.5px solid ${borderCol}` }}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* JOIN THE MOVEMENT — grows to fill remaining vertical space */}
              {!empiresOpen && (
                <div style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 32,
                  paddingBottom: 32,
                }}>
                  <p style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(28px, 8vw, 52px)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#F3F4F6',
                    lineHeight: 1.05,
                    textShadow: '0 2px 16px rgba(0,0,0,0.9)',
                    margin: 0,
                  }}>
                    Join the
                  </p>
                  <p style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(34px, 10vw, 66px)',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: '#D84B4B',
                    lineHeight: 1.0,
                    textShadow: '0 2px 24px rgba(216,75,75,0.6)',
                    margin: 0,
                    marginBottom: 24,
                  }}>
                    Movement
                  </p>
                  <Link to="/participate"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'transparent',
                      color: '#F3F4F6',
                      fontSize: 14,
                      fontWeight: 700,
                      padding: '12px 32px',
                      borderRadius: 10,
                      textDecoration: 'none',
                      border: '1.5px solid rgba(243,244,246,0.65)',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.5)',
                      letterSpacing: '0.3px',
                    }}>
                    I'll Take Action ✊
                  </Link>
                </div>
              )}
            </div>

            {/* ── RIGHT COLUMN ── caricatures + pyramid, also above bg */}
            {!empiresOpen && (
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Caricatures */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, paddingTop: 16 }}>
                  {[
                    { src: '/a1.png', label: 'A1', labelBg: '#1a1a1a', labelColor: '#888', size: isMobile ? 80 : 108, border: '1.5px solid #333' },
                    { src: '/vg.png', label: 'Modi', labelBg: '#1a0505', labelColor: '#ff6060', size: isMobile ? 104 : 140, border: '2.5px solid #D84B4B', mb: 14 },
                    { src: '/a2.png', label: 'A2', labelBg: '#1a1a1a', labelColor: '#888', size: isMobile ? 80 : 108, border: '1.5px solid #333' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, marginBottom: c.mb || 0 }}>
                      <div style={{ width: c.size, height: c.size, borderRadius: '50%', overflow: 'hidden', border: c.border, background: '#111', boxShadow: c.label === 'Modi' ? '0 8px 32px rgba(216,75,75,0.2)' : '0 4px 16px rgba(0,0,0,0.4)' }}>
                        <img src={c.src} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, background: c.labelBg, color: c.labelColor }}>{c.label}</span>
                    </div>
                  ))}
                </div>

                {/* Pyramid — flexGrow so it fills remaining height matching left column */}
                <div style={{ flexGrow: 1 }}>
                  <PowerPyramid isDark={isDark} />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM STATS STRIP */}
        {!empiresOpen && (
          <div style={{ borderTop: `0.5px solid ${borderCol}`, marginTop: 0, padding: '22px 0' }}>
            <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, flexDirection: isMobile ? 'column' : 'row' }}>
              <div>
                <p style={{ fontSize: 20, fontWeight: 900, color: textColor, lineHeight: 1.2, marginBottom: 4 }}>Small acts of non-cooperation<br />can bring big change.</p>
                <p style={{ fontSize: 13, color: '#e8950a', fontWeight: 600 }}>Be the change. Build the future.</p>
              </div>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[
                  { num: '95+', label: 'Brands Tracked', color: '#e8950a' },
                  { num: '2', label: 'Big Empires', color: textColor },
                  { num: '15', label: 'Sectors Covered', color: textColor },
                  { num: '75+', label: 'Alternatives Listed', color: '#e8950a' },
                  { num: '✊', label: 'Movement Growing', color: '#c44040' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: s.color, letterSpacing: '-0.5px', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: mutedColor, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PHILOSOPHY MODAL */}
      <CenteredModal open={philOpen} onClose={() => setPhilOpen(false)}>
        {/* Header — styled like About page */}
        <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '0.5px solid #1e1e1e' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#F59E0B', textTransform: 'uppercase', marginBottom: 12 }}>Our Philosophy · Our Method · Our Movement</p>
          <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-1.5px', color: '#F3F4F6', marginBottom: 8, lineHeight: 1 }}>Digital<br />Satyagraha</h2>
          <p style={{ fontSize: 13, color: '#777', fontStyle: 'italic' }}>"Digital Satyagraha is the modern path of non-violent resistance."</p>
        </div>

        {/* 01 */}
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 12 }}>01 — What is this?</p>
        <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, marginBottom: 10 }}>Gandhi's Satyagraha was resistance through daily choices — not rage, not spectacle. Digital Non-Cooperation applies the same idea to how we spend, stream, buy, scroll, and consume in 2025.</p>
        <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, marginBottom: 10 }}>When a few corporate ecosystems control your internet, media, shopping, entertainment, and everyday consumption — awareness becomes resistance.</p>
        <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, marginBottom: 10 }}>Most people already feel something is wrong. The internet feels controlled. Everything is getting more expensive. Local businesses disappear. The same narratives repeat everywhere.</p>
        <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6', lineHeight: 1.6, marginBottom: 10 }}>But frustration without direction is just noise.</p>
        <p style={{ fontSize: 13, color: '#F59E0B', fontWeight: 800, lineHeight: 1.8, marginBottom: 24 }}>People stay trapped because they don't see alternatives. This platform exists to make those alternatives visible.</p>

        {/* 02 */}
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 12 }}>02 — What it is NOT</p>
        <div style={{ background: '#111', border: '0.5px solid #2a2a2a', borderRadius: 10, padding: '16px 18px', marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.9, marginBottom: 10 }}>Not violence. Not blind outrage. Not mob politics. Not "cancel everything."</p>
          <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6', marginBottom: 8 }}>It is consumer clarity.</p>
          <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8 }}>Know who owns what. Choose accordingly. That's all.</p>
        </div>

        {/* 4 Pillars */}
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 16 }}>The 4 Pillars</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          {[
            { icon: '✊', title: 'Non-Violence', desc: 'No hate. No intimidation. No mobs. Just awareness and choice.' },
            { icon: '💸', title: 'Non-Cooperation', desc: 'Monopolies survive because we keep feeding them. One switch matters. One rupee at a time.' },
            { icon: '👁️', title: 'Truth & Awareness', desc: "Most people don't even know who owns what. That's where control begins." },
            { icon: '🧠', title: 'Self-Respect', desc: 'Convenience becomes dangerous when it creates dependency. Freedom over dependency.' },
          ].map(p => (
            <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{p.icon}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6', marginBottom: 4 }}>{p.title}</p>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Start Small */}
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 16 }}>Start Small</p>
        <div style={{ marginBottom: 24 }}>
          {[
            ['Switch one service', 'One app. One payment method. One subscription. That\'s enough to begin.'],
            ['Support local first', 'Kirana over monopoly platforms. Your money is your leverage.'],
            ['Check before you buy', '10 seconds to know where your rupee goes.'],
            ['Diversify your media', 'If every channel sounds the same, something is broken. Seek independent voices.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: '0.5px solid #1a1a1a' }}>
              <span style={{ color: '#F59E0B', fontSize: 16, flexShrink: 0, marginTop: 1 }}>→</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#F3F4F6', marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 05 */}
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 12 }}>05 — Economic Non-Cooperation</p>
        <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, marginBottom: 10 }}>Economic Non-Cooperation means gradually redirecting parts of everyday spending toward alternatives: local businesses, independent media, smaller competitors, open ecosystems, and community-driven services.</p>
        <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, marginBottom: 24 }}>Not perfectly. Not all at once. Just consciously. Because systems survive through dependency. And dependency weakens when people realize they have choices.</p>

        <div style={{ padding: '16px 18px', borderLeft: '3px solid #F59E0B', borderRadius: '0 10px 10px 0', background: '#080600', marginBottom: 12 }}>
          <p style={{ fontSize: 14, color: '#c8a84a', lineHeight: 1.8, fontStyle: 'italic' }}>"Be the change without shouting. One conscious choice at a time."</p>
        </div>
        <div style={{ padding: '14px 16px', borderLeft: '3px solid #F59E0B', borderRadius: '0 8px 8px 0', background: '#0a0800' }}>
          <p style={{ fontSize: 13, color: '#c8a84a', lineHeight: 1.7, fontStyle: 'italic' }}>"Non-cooperation with evil is as much a duty as cooperation with good."</p>
          <p style={{ fontSize: 12, color: '#F59E0B', fontWeight: 700, marginTop: 8 }}>— Mahatma Gandhi</p>
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
        <RippleFlowDiagram />
      </CenteredModal>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}
