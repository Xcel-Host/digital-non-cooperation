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


// Cinematic flow animation — spending flowing upward into concentrated power
function FlowAnimation({ isDark }) {
  const canvasRef = React.useRef(null)
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    // Spending icons as simple glyphs
    const icons = ['₹', '🛒', '📶', '⛽', '📱', '🛍️', '💊', '📺']

    // Particles: originate bottom-left, flow toward top-right (pyramid apex)
    const particles = Array.from({ length: 38 }, (_, i) => ({
      x: Math.random() * W * 0.55,
      y: H * 0.4 + Math.random() * H * 0.6,
      targetX: W * 0.82 + Math.random() * 20,
      targetY: 20 + Math.random() * 30,
      progress: Math.random(),
      speed: 0.0008 + Math.random() * 0.0012,
      icon: icons[Math.floor(Math.random() * icons.length)],
      showIcon: i < 10,
      opacity: 0.08 + Math.random() * 0.18,
      size: 1.2 + Math.random() * 1.4,
      trail: [],
      returning: Math.random() < 0.06, // only 6% return
    }))

    // Stream lines — thin paths from bottom-left to top-right
    const streams = Array.from({ length: 12 }, (_, i) => {
      const startX = W * 0.05 + (i / 12) * W * 0.5
      const startY = H * 0.7 + Math.random() * H * 0.28
      const midX = W * 0.35 + Math.random() * W * 0.2
      const midY = H * 0.3 + Math.random() * H * 0.2
      const endX = W * 0.78 + Math.random() * W * 0.08
      const endY = H * 0.06 + Math.random() * H * 0.08
      return { startX, startY, midX, midY, endX, endY, opacity: 0.04 + Math.random() * 0.06 }
    })

    function getBezierPoint(t, sx, sy, mx, my, ex, ey) {
      const mt = 1 - t
      return {
        x: mt * mt * sx + 2 * mt * t * mx + t * t * ex,
        y: mt * mt * sy + 2 * mt * t * my + t * t * ey,
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Draw stream paths
      streams.forEach(s => {
        ctx.beginPath()
        ctx.moveTo(s.startX, s.startY)
        ctx.quadraticCurveTo(s.midX, s.midY, s.endX, s.endY)
        ctx.strokeStyle = `rgba(180, 60, 60, ${s.opacity})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      })

      // Draw particles along bezier paths
      particles.forEach(p => {
        p.progress += p.speed
        if (p.progress > 1) {
          p.progress = 0
          p.x = Math.random() * W * 0.55
          p.y = H * 0.4 + Math.random() * H * 0.6
        }

        const stream = streams[Math.floor(Math.random() * streams.length) % streams.length]
        let pos
        if (p.returning) {
          // Small weak return flow — goes downward
          pos = getBezierPoint(
            p.progress,
            W * 0.82, H * 0.08,
            W * 0.6, H * 0.4,
            W * 0.1 + Math.random() * 0.1 * W, H * 0.9
          )
        } else {
          pos = getBezierPoint(
            p.progress,
            stream.startX, stream.startY,
            stream.midX, stream.midY,
            stream.endX, stream.endY
          )
        }

        // Particle gets brighter and smaller as it approaches apex
        const proximityToApex = 1 - p.progress
        const glowIntensity = p.returning ? 0.06 : (0.1 + p.progress * 0.25)
        const alpha = p.opacity * glowIntensity * (p.returning ? 0.3 : 1)
        const r = p.returning ? p.size * 0.6 : p.size * (0.6 + p.progress * 0.5)

        // Glow
        if (!p.returning && p.progress > 0.7) {
          const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r * 4)
          grd.addColorStop(0, `rgba(200, 100, 60, ${alpha * 0.8})`)
          grd.addColorStop(1, `rgba(200, 100, 60, 0)`)
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // Dot
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
        ctx.fillStyle = p.returning
          ? `rgba(100, 100, 200, ${alpha})`
          : `rgba(${180 + p.progress * 40}, ${60 + p.progress * 20}, ${40}, ${alpha})`
        ctx.fill()

        // Icon label for first few particles at low progress
        if (p.showIcon && p.progress < 0.3) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.5})`
          ctx.font = `${8 + p.progress * 4}px sans-serif`
          ctx.fillText(p.icon, pos.x + r + 1, pos.y + 3)
        }
      })

      // Apex convergence glow
      const apexX = W * 0.82
      const apexY = H * 0.07
      const grd = ctx.createRadialGradient(apexX, apexY, 0, apexX, apexY, 18)
      grd.addColorStop(0, 'rgba(210, 90, 50, 0.22)')
      grd.addColorStop(0.5, 'rgba(180, 60, 40, 0.08)')
      grd.addColorStop(1, 'rgba(180, 60, 40, 0)')
      ctx.beginPath()
      ctx.arc(apexX, apexY, 18, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.85 }}
    />
  )
}

// Pyramid component
function PowerPyramid({ isDark, textColor }) {
  const layers = [
    { label: 'THEY OWN MARKETS', sub: 'System structure', fill: isDark ? '#2a0808' : '#fee2e2', textFill: '#D84B4B', subFill: isDark ? '#a05050' : '#b91c1c', pts: '140,10 188,46 92,46' },
    { label: 'THEY SHAPE NARRATIVES', sub: 'Media & information', fill: isDark ? '#1f0808' : '#fecaca', textFill: isDark ? '#e07070' : '#b91c1c', subFill: isDark ? '#7a5050' : '#991b1b', pts: '92,46 188,46 208,86 72,86' },
    { label: 'THEY INFLUENCE GOVT', sub: 'Policy & resources', fill: isDark ? '#160505' : '#fca5a5', textFill: isDark ? '#c06060' : '#7f1d1d', subFill: isDark ? '#6a4040' : '#7f1d1d', pts: '72,86 208,86 228,126 52,126' },
    { label: 'YOU FUND IT EVERY DAY', sub: 'Every rupee. Every purchase.', fill: isDark ? '#0d0303' : '#f87171', textFill: isDark ? '#F3F4F6' : '#fff', subFill: isDark ? '#ccc' : '#fee2e2', pts: '52,126 228,126 254,170 16,170' },
  ]
  return (
    <div style={{ borderRadius: 14, padding: '18px 20px 14px', background: isDark ? '#111' : '#fff', border: `0.5px solid ${isDark ? '#222' : '#ddd'}` }}>
      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#555', marginBottom: 14, textAlign: 'center' }}>Today, power looks like this</p>
      <svg viewBox="0 0 270 180" style={{ width: '100%', height: 'auto' }} role="img" aria-label="Power pyramid: Few own at top, We pay at bottom">
        {layers.map((l, i) => (
          <g key={l.label}>
            <polygon points={l.pts} fill={l.fill} stroke={isDark ? '#2a0808' : '#D84B4B'} strokeWidth="0.5" />
            <text x="140" y={28 + i * 40} textAnchor="middle" fill={l.textFill} fontSize="9" fontWeight="800">{l.label}</text>
            <text x="140" y={40 + i * 40} textAnchor="middle" fill={l.subFill} fontSize="7">{l.sub}</text>
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 12, padding: '10px 12px', borderRadius: 8, background: isDark ? '#0d0800' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B', lineHeight: 1.55 }}>But change starts small.<br />You + Your choices = Real change</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: empiresOpen ? '1fr' : '1fr 1fr', gap: 40, alignItems: 'start' }} className="hero-grid">

            {/* LEFT */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', color: '#b83c3c', textTransform: 'uppercase', marginBottom: 16 }}>India · Non-violence · Non-cooperation</p>

              <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 14, color: textColor }}>
                How do you{' '}
                <span style={{ color: '#fff', background: '#F59E0B', fontStyle: 'normal', padding: '2px 8px', borderRadius: 6, display: 'inline-block' }}>RESIST</span>{' '}
                <span style={{ color: '#D84B4B' }}>Modi</span> silently?
              </h1>

              <p style={{ fontSize: 15, fontWeight: 700, color: textColor, marginBottom: 6 }}>Through your choices. Through non-cooperation.</p>
              <p style={{ fontSize: 13, color: mutedColor, lineHeight: 1.65, marginBottom: 28 }}>
                Every rupee you spend is a vote. Boycott monopoly. Support alternatives.{' '}
                <span style={{ color: '#c44040', fontWeight: 600 }}>This is Digital Satyagraha.</span>
              </p>

              {/* BUTTONS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button onClick={() => setPhilOpen(true)}
                    style={{ padding: '11px 12px', background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, color: '#F59E0B', fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 13 }} />
                    Digital Satyagraha Philosophy
                  </button>
                  <button onClick={() => setStepsOpen(true)}
                    style={{ padding: '11px 12px', background: cardBg, border: `0.5px solid ${borderCol}`, color: textColor, fontSize: 12, fontWeight: 700, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 13 }} />
                    How It Works
                  </button>
                </div>
                {/* Explore Empires — subtle gradient, less height, soft shadow */}
                <button onClick={() => setEmpiresOpen(e => !e)}
                  style={{ width: '100%', padding: '10px 20px', background: 'linear-gradient(135deg, #c43e3e 0%, #d84b4b 40%, #c43e3e 100%)', color: '#fff', fontSize: 13, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer', letterSpacing: '0.2px', boxShadow: '0 3px 12px rgba(196,62,62,0.22)' }}>
                  {empiresOpen ? 'Close Empires ↑' : 'Explore Empires →'}
                </button>
              </div>

              {/* STATS ROW — all 3 pills in one line, larger numbers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 32, paddingTop: 8, flexWrap: 'nowrap', overflowX: 'auto' }} className="hide-scrollbar">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                  <div style={{ display: 'flex' }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{ width: 30, height: 30, borderRadius: '50%', background: isDark ? '#2a2a2a' : '#ddd', border: `2px solid ${isDark ? '#0B0B0F' : '#f4f4f0'}`, marginLeft: i > 0 ? -9 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <svg viewBox="0 0 30 30" style={{ width: '100%', height: '100%' }}>
                          <circle cx="15" cy="11" r="5" fill={isDark ? '#555' : '#aaa'} />
                          <ellipse cx="15" cy="23" rx="8" ry="6" fill={isDark ? '#555' : '#aaa'} />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: '#e8950a', lineHeight: 1 }}>24,382+</div>
                    <div style={{ fontSize: 9, color: mutedColor, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>People Taking Action</div>
                  </div>
                </div>
                <div style={{ width: '0.5px', height: 32, background: borderCol, flexShrink: 0 }} />
                {[['🕊️', 'Silent', 'Non-violent'], ['✊', 'Consistent', 'Non-cooperation'], ['🇮🇳', 'India First', 'People First']].map(([icon, bold, sub]) => (
                  <div key={bold} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: cardBg, border: `0.5px solid ${borderCol}`, borderRadius: 18, flexShrink: 0 }}>
                    <span style={{ fontSize: 12 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: textColor, lineHeight: 1, whiteSpace: 'nowrap' }}>{bold}</div>
                      <div style={{ fontSize: 9, color: mutedColor, whiteSpace: 'nowrap' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FLOW ANIMATION — cinematic background */}
              {!empiresOpen && (
                <div style={{ position: 'relative', height: 120, marginBottom: 0, marginTop: -8, overflow: 'hidden' }}>
                  <FlowAnimation isDark={isDark} />
                </div>
              )}

              {/* EXPANDED EMPIRES */}
              {empiresOpen && (
                <div style={{ marginBottom: 32 }}>
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
            </div>

            {/* RIGHT */}
            {!empiresOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Caricatures — enlarged */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, paddingTop: 16 }}>
                  {[
                    { src: '/a1.png', label: 'A1', labelBg: '#1a1a1a', labelColor: '#888', size: 108, border: '1.5px solid #333' },
                    { src: '/vg.png', label: 'Modi', labelBg: '#1a0505', labelColor: '#ff6060', size: 140, border: '2.5px solid #D84B4B', mb: 14 },
                    { src: '/a2.png', label: 'A2', labelBg: '#1a1a1a', labelColor: '#888', size: 108, border: '1.5px solid #333' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, marginBottom: c.mb || 0 }}>
                      <div style={{ width: c.size, height: c.size, borderRadius: '50%', overflow: 'hidden', border: c.border, background: '#111', boxShadow: c.label === 'Modi' ? '0 8px 32px rgba(216,75,75,0.2)' : '0 4px 16px rgba(0,0,0,0.4)' }}>
                        <img src={c.src} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, background: c.labelBg, color: c.labelColor }}>{c.label}</span>
                    </div>
                  ))}
                </div>

                {/* PYRAMID */}
                <PowerPyramid isDark={isDark} textColor={textColor} />
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        {!empiresOpen && (
          <div style={{ borderTop: `0.5px solid ${borderCol}`, marginTop: 0, padding: '22px 0' }}>
            <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontSize: 20, fontWeight: 900, color: textColor, lineHeight: 1.2, marginBottom: 4 }}>Small acts of non-cooperation<br />can bring big change.</p>
                <p style={{ fontSize: 13, color: '#e8950a', fontWeight: 600 }}>Be the change. Build the future.</p>
              </div>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[
                  { num: '812+', label: 'Brands Tracked', color: '#e8950a' },
                  { num: '2', label: 'Big Empires', color: textColor },
                  { num: '36+', label: 'Sectors Covered', color: textColor },
                  { num: '1,245+', label: 'Alternatives Listed', color: '#e8950a' },
                  { num: '24,382+', label: 'People Taking Action', color: '#c44040' },
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
      </CenteredModal>

      <style>{`
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
