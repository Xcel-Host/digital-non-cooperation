import { useState } from 'react'
import { Link } from 'react-router-dom'

const philosophyPillars = [
  { color: '#D84B4B', title: 'Non-violence', desc: "We don't hate. We resist through awareness. No violence, only clarity." },
  { color: '#F59E0B', title: 'Non-cooperation', desc: 'We withdraw economic support from monopoly. Silently. Consistently.' },
  { color: '#4a8a4a', title: 'Truth & Awareness', desc: 'We expose control. We spread truth. We educate before we act.' },
  { color: '#4a6a8a', title: 'Self-Respect', desc: "We choose freedom over convenience. India First. People First." },
]

const disconnectSteps = [
  { num: '1', bg: '#D84B4B', color: '#fff', title: 'Know the Empires', desc: 'Understand how A1 (Ambani) and A2 (Adani) control key sectors of your daily life.' },
  { num: '2', bg: '#F59E0B', color: '#000', title: 'Explore Sectors', desc: 'See which brands, apps, and services belong to each empire.' },
  { num: '3', bg: '#1a3a1a', color: '#5a9a5a', title: 'Choose Alternatives', desc: 'Find real, named alternatives available in India — not vague suggestions.' },
  { num: '4', bg: '#1a1a3a', color: '#5a5a9a', title: 'Take Action Silently', desc: 'One switch. One kirana. One search before you buy.' },
  { num: '5', bg: '#2a1a3a', color: '#8a5a9a', title: 'Build a Movement', desc: 'Share. Millions of small acts of non-cooperation create big change.' },
]

function BottomSheetPopup({ open, onClose, children }) {
  if (!open) return null
  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{ width: '100%', maxWidth: 600, background: '#0d0d12', border: '0.5px solid #2a2a2a', borderRadius: '18px 18px 0 0', maxHeight: '85vh', overflowY: 'auto' }}>
        <div style={{ width: 36, height: 4, background: '#333', borderRadius: 2, margin: '12px auto 16px' }} />
        {children}
        <div style={{ padding: '0 20px 32px' }}>
          <button
            onClick={onClose}
            style={{ width: '100%', padding: '12px', borderRadius: 10, background: '#1a1a1f', border: '0.5px solid #2a2a2a', color: '#888', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection({ theme }) {
  const [philOpen, setPhilOpen] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const isDark = theme !== 'light'

  return (
    <>
      <section style={{ background: isDark ? '#0a0000' : '#fff8f8', borderBottom: `0.5px solid ${isDark ? '#1a0000' : '#fcc'}` }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* LEFT */}
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2.5px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 12 }}>
                India · Non-violence · Non-cooperation
              </p>

              <h1 style={{ fontSize: 'clamp(26px,7vw,46px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-1px', marginBottom: 10, color: isDark ? '#F3F4F6' : '#111' }}>
                How can you stop{' '}
                <span style={{ color: '#D84B4B' }}>Vishwaguru</span> silently?
              </h1>

              <p style={{ fontSize: 13, fontWeight: 700, color: isDark ? '#F3F4F6' : '#111', marginBottom: 6 }}>
                Through your choices. Through non-cooperation.
              </p>

              <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, marginBottom: 20 }}>
                Every rupee you spend is a vote. Boycott monopoly. Support alternatives.{' '}
                <span style={{ color: '#D84B4B', fontWeight: 600 }}>This is Digital Satyagraha.</span>
              </p>

              {/* BUTTONS: full width red, then 2 below */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {/* Explore Empires — full width primary */}
                <Link to="/explore/reliance"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#D84B4B', color: '#fff', fontSize: 13, fontWeight: 800, padding: '12px 20px', borderRadius: 12, textDecoration: 'none', textAlign: 'center' }}>
                  Explore Empires →
                </Link>

                {/* 2 smaller buttons below */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {/* Steps to Disconnect */}
                  <button onClick={() => setStepsOpen(true)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: isDark ? '#1a1a1f' : '#f0f0eb', border: `0.5px solid ${isDark ? '#2a2a2a' : '#ddd'}`, color: isDark ? '#F3F4F6' : '#111', fontSize: 12, fontWeight: 700, padding: '11px 12px', borderRadius: 12, cursor: 'pointer' }}>
                    <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 13 }} />
                    Steps to Disconnect
                  </button>

                  {/* Digital Satyagraha Philosophy — full bottom */}
                  <button onClick={() => setPhilOpen(true)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, color: '#F59E0B', fontSize: 12, fontWeight: 700, padding: '11px 12px', borderRadius: 12, cursor: 'pointer' }}>
                    <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 13 }} />
                    Satyagraha Philosophy
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — parliament + silhouettes + power box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Parliament + silhouettes */}
              <div style={{ position: 'relative', width: '100%', height: 148, background: '#080000', borderRadius: 14, overflow: 'hidden' }}>
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 148" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="400" height="148" fill="#080000"/>
                  <ellipse cx="200" cy="124" rx="160" ry="40" fill="#3a0000" opacity="0.6"/>
                  <ellipse cx="200" cy="82" rx="26" ry="22" fill="#1a0505" stroke="#3a1010" strokeWidth="0.5"/>
                  <rect x="174" y="82" width="52" height="44" fill="#1a0505"/>
                  <rect x="197" y="60" width="6" height="22" fill="#2a0808"/>
                  <polygon points="200,50 194,64 206,64" fill="#2a0808"/>
                  <rect x="60" y="96" width="114" height="30" fill="#150404" stroke="#2a0808" strokeWidth="0.3"/>
                  <rect x="56" y="90" width="122" height="8" fill="#1a0505"/>
                  <rect x="226" y="96" width="114" height="30" fill="#150404" stroke="#2a0808" strokeWidth="0.3"/>
                  <rect x="222" y="90" width="122" height="8" fill="#1a0505"/>
                  {[72,88,104,120,136,152].map(x => <rect key={x} x={x} y="96" width="2.5" height="30" fill="#200808" opacity="0.7"/>)}
                  {[246,262,278,294,310,326].map(x => <rect key={x} x={x} y="96" width="2.5" height="30" fill="#200808" opacity="0.7"/>)}
                  <rect x="0" y="126" width="400" height="22" fill="#080000"/>
                </svg>

                {/* Silhouettes: A1 | Modi center tallest | A2 */}
                <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-end', gap: 12, zIndex: 2 }}>
                  {/* A1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <img src="/a1.png" alt="A1 Ambani" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '1.5px solid #D84B4B', background: '#1a0505' }} />
                    <span style={{ fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 3, background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000' }}>A1</span>
                  </div>
                  {/* Modi — center, biggest */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, marginBottom: 6 }}>
                    <img src="/vg.png" alt="Modi" style={{ width: 58, height: 58, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid #D84B4B', background: '#1a0505' }} />
                    <span style={{ fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 3, background: '#1a0505', color: '#ff6060', border: '0.5px solid #3a1010' }}>Modi</span>
                  </div>
                  {/* A2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <img src="/a2.png" alt="A2 Adani" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '1.5px solid #F59E0B', background: '#131000' }} />
                    <span style={{ fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 3, background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000' }}>A2</span>
                  </div>
                </div>
              </div>

              {/* Power box */}
              <div style={{ borderRadius: 14, padding: 16, background: isDark ? '#111' : '#fff', border: `0.5px solid ${isDark ? '#1e1e1e' : '#ddd'}` }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#555', marginBottom: 12 }}>Today, power looks like this</p>
                {[
                  { bold: 'Few own', light: 'Most companies' },
                  { bold: 'Few control', light: 'Media & narrative' },
                  { bold: 'Few decide', light: 'Policies & resources' },
                  { bold: 'We pay', light: 'Higher prices, fewer choices' },
                ].map(p => (
                  <div key={p.bold} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D84B4B', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#F3F4F6' : '#111' }}>{p.bold} </span>
                    <span style={{ fontSize: 11, color: '#666' }}>{p.light}</span>
                  </div>
                ))}
                <div style={{ marginTop: 10, padding: 10, borderRadius: 8, background: isDark ? '#0d0800' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}` }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', lineHeight: 1.5 }}>
                    But change starts small.<br />You + Your choices = Real change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weakens strip */}
        <div style={{ borderTop: `0.5px solid ${isDark ? '#1a0000' : '#fcc'}`, background: isDark ? '#0d0000' : '#fff5f5', padding: '12px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: isDark ? '#aaa' : '#888' }}>Power grows when we cooperate.</p>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#D84B4B', marginTop: 2 }}>Power weakens when we withdraw.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 10 }}>
            {[['🕊️', 'Non-violence'], ['✋', 'Non-cooperation'], ['🇮🇳', 'India First']].map(([icon, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <span style={{ fontSize: 10, color: '#555' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY POPUP — full detailed version */}
      <BottomSheetPopup open={philOpen} onClose={() => setPhilOpen(false)}>
        <div style={{ padding: '0 20px 16px' }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 8 }}>
            Our Philosophy · Our Method · Our Movement
          </p>
          <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.5px', color: '#F3F4F6', marginBottom: 4 }}>
            Digital Satyagraha
          </h2>
          <p style={{ fontSize: 12, color: '#666', fontStyle: 'italic', marginBottom: 20 }}>
            "Digital Satyagraha is the modern path of non-violent resistance."
          </p>

          {/* 4 Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
            {philosophyPillars.map(p => (
              <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#F3F4F6', marginBottom: 3 }}>{p.title}</p>
                  <p style={{ fontSize: 11, color: '#7a6a40', lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Withdraw → Reduce → Replace → Transform */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
            {['Withdraw', 'Reduce', 'Replace', 'Transform'].map((s, i, arr) => (
              <span key={s} style={{ fontSize: 11, color: '#555' }}>
                {s}{i < arr.length - 1 ? ' →' : ''}
              </span>
            ))}
          </div>

          {/* Hashtags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
            {['#DigitalNonCooperation', '#DigitalBoycott', '#NonViolentNonCooperation', '#EconomicNonCooperation'].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(245,158,11,0.45)' }}>{t}</span>
            ))}
          </div>

          {/* Gandhi quote */}
          <div style={{ padding: '12px 14px', borderLeft: '2px solid #F59E0B', borderRadius: '0 8px 8px 0', background: '#0a0800' }}>
            <p style={{ fontSize: 12, color: '#8a7a50', lineHeight: 1.7, fontStyle: 'italic' }}>
              "Non-cooperation with evil is as much a duty as cooperation with good."
            </p>
            <p style={{ fontSize: 11, color: '#F59E0B', fontWeight: 700, marginTop: 6 }}>— Mahatma Gandhi</p>
          </div>
        </div>
      </BottomSheetPopup>

      {/* STEPS TO DISCONNECT POPUP */}
      <BottomSheetPopup open={stepsOpen} onClose={() => setStepsOpen(false)}>
        <div style={{ padding: '0 20px 16px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px', color: '#F3F4F6', marginBottom: 4 }}>
            Steps to Disconnect
          </h2>
          <p style={{ fontSize: 12, color: '#666', marginBottom: 20 }}>Know → Explore → Choose → Act → Spread</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {disconnectSteps.map(s => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: s.bg, color: s.color, fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  {s.num}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#F3F4F6', marginBottom: 3 }}>{s.title}</p>
                  <p style={{ fontSize: 11, color: '#666', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BottomSheetPopup>
    </>
  )
}
