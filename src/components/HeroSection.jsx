import { useState } from 'react'
import { Link } from 'react-router-dom'

const philosophyPillars = [
  { color: '#D84B4B', title: 'Non-violence', desc: 'We don\'t hate. We resist through awareness. No violence, only clarity.' },
  { color: '#F59E0B', title: 'Non-cooperation', desc: 'We withdraw economic support from monopoly. Silently. Consistently.' },
  { color: '#4a8a4a', title: 'Truth & Awareness', desc: 'We expose control. We spread truth. We educate before we act.' },
  { color: '#4a6a8a', title: 'Self-Respect', desc: 'We choose freedom over convenience. India First. People First.' },
]

const disconnectSteps = [
  { num: '1', color: '#D84B4B', bg: '#fff', title: 'Know the Empires', desc: 'Understand how A1 (Ambani) and A2 (Adani) control key sectors of your daily life.' },
  { num: '2', color: '#000', bg: '#F59E0B', title: 'Explore Sectors', desc: 'See which brands, apps, and services belong to each empire.' },
  { num: '3', color: '#fff', bg: '#1a3a1a', title: 'Choose Alternatives', desc: 'Find real, named alternatives available in India — not vague suggestions.' },
  { num: '4', color: '#fff', bg: '#1a1a3a', title: 'Take Action Silently', desc: 'One switch. One kirana. One search before you buy. Non-violent, consistent.' },
  { num: '5', color: '#fff', bg: '#2a1a3a', title: 'Build a Movement', desc: 'Share this platform. Millions of small acts of non-cooperation create big change.' },
]

function Popup({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="w-full max-w-lg rounded-t-2xl overflow-y-auto"
        style={{ background: '#0d0d12', border: '0.5px solid #2a2a2a', maxHeight: '82vh' }}>
        <div className="w-9 h-1 rounded-full mx-auto mt-3 mb-4" style={{ background: '#333' }} />
        {children}
        <button onClick={onClose}
          className="w-full mt-3 py-3 text-sm font-bold mx-auto block"
          style={{ background: '#1a1a1f', borderTop: '0.5px solid #222', color: '#888' }}>
          Close ✕
        </button>
      </div>
    </div>
  )
}

export default function HeroSection({ theme }) {
  const [philOpen, setPhilOpen] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const [howOpen, setHowOpen] = useState(false)

  const isDark = theme !== 'light'

  return (
    <>
      <section style={{ background: isDark ? '#0a0000' : '#fff5f5', borderBottom: `0.5px solid ${isDark ? '#1a0000' : '#fcc'}` }}>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* LEFT */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#D84B4B', letterSpacing: '2.5px' }}>
                India · Non-violence · Non-cooperation
              </p>

              <h1 className="font-black leading-none tracking-tighter mb-3"
                style={{ fontSize: 'clamp(28px, 8vw, 48px)', color: isDark ? '#F3F4F6' : '#111' }}>
                How can you stop{' '}
                <span style={{ color: '#D84B4B' }}>Vishwaguru</span> silently?
              </h1>

              <p className="font-bold mb-2" style={{ fontSize: 13, color: isDark ? '#F3F4F6' : '#111' }}>
                Through your choices. Through non-cooperation.
              </p>

              <p className="leading-relaxed mb-6" style={{ fontSize: 12, color: '#888' }}>
                Every rupee you spend is a vote. Boycott monopoly.<br />
                Support alternatives.{' '}
                <span style={{ color: '#D84B4B', fontWeight: 600 }}>This is Digital Satyagraha.</span>
              </p>

              {/* 2x2 BUTTON GRID */}
              <div className="grid grid-cols-2 gap-2">
                {/* Explore Empires — primary */}
                <Link to="/explore/reliance"
                  className="flex items-center justify-center gap-1.5 font-bold rounded-xl py-3 px-3 transition-all text-center"
                  style={{ background: '#D84B4B', color: '#fff', fontSize: 12 }}>
                  Explore Empires →
                </Link>

                {/* Steps to Disconnect */}
                <button onClick={() => setStepsOpen(true)}
                  className="flex items-center justify-center gap-1.5 font-bold rounded-xl py-3 px-3 transition-all"
                  style={{ background: isDark ? '#1a1a1f' : '#f0f0eb', border: `0.5px solid ${isDark ? '#2a2a2a' : '#ddd'}`, color: isDark ? '#F3F4F6' : '#111', fontSize: 12 }}>
                  <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 13 }} />
                  Steps to Disconnect
                </button>

                {/* Digital Satyagraha Philosophy */}
                <button onClick={() => setPhilOpen(true)}
                  className="flex items-center justify-center gap-1.5 font-bold rounded-xl py-3 px-3 transition-all"
                  style={{ background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, color: '#F59E0B', fontSize: 12 }}>
                  <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 13 }} />
                  Satyagraha Philosophy
                </button>

                {/* How It Works */}
                <button onClick={() => setHowOpen(true)}
                  className="flex items-center justify-center gap-1.5 font-bold rounded-xl py-3 px-3 transition-all"
                  style={{ background: isDark ? '#1a1a1f' : '#f0f0eb', border: `0.5px solid ${isDark ? '#2a2a2a' : '#ddd'}`, color: isDark ? '#888' : '#666', fontSize: 12 }}>
                  <i className="ti ti-info-circle" aria-hidden="true" style={{ fontSize: 13 }} />
                  How It Works
                </button>
              </div>
            </div>

            {/* RIGHT — parliament + silhouettes + power box */}
            <div className="flex flex-col gap-4">
              {/* Parliament */}
              <div className="relative w-full rounded-xl overflow-hidden" style={{ height: 144, background: '#080000' }}>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 144" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="400" height="144" fill="#080000"/>
                  <ellipse cx="200" cy="120" rx="160" ry="40" fill="#3a0000" opacity="0.6"/>
                  <ellipse cx="200" cy="80" rx="26" ry="22" fill="#1a0505" stroke="#3a1010" strokeWidth="0.5"/>
                  <rect x="174" y="80" width="52" height="44" fill="#1a0505"/>
                  <rect x="197" y="58" width="6" height="22" fill="#2a0808"/>
                  <polygon points="200,48 194,62 206,62" fill="#2a0808"/>
                  <rect x="60" y="94" width="114" height="30" fill="#150404" stroke="#2a0808" strokeWidth="0.3"/>
                  <rect x="56" y="88" width="122" height="8" fill="#1a0505"/>
                  <rect x="226" y="94" width="114" height="30" fill="#150404" stroke="#2a0808" strokeWidth="0.3"/>
                  <rect x="222" y="88" width="122" height="8" fill="#1a0505"/>
                  {[72,88,104,120,136,152].map(x => <rect key={x} x={x} y="94" width="2.5" height="30" fill="#200808" opacity="0.7"/>)}
                  {[246,262,278,294,310,326].map(x => <rect key={x} x={x} y="94" width="2.5" height="30" fill="#200808" opacity="0.7"/>)}
                  <rect x="0" y="124" width="400" height="20" fill="#080000"/>
                </svg>
                {/* Silhouettes: A1 | Modi (center, tallest) | A2 */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-end gap-3 z-10">
                  {/* A1 */}
                  <div className="flex flex-col items-center gap-1">
                    <img src="/a1.png" alt="A1" className="rounded-full object-cover object-top"
                      style={{ width: 44, height: 44, border: '1.5px solid #D84B4B', background: '#1a0505' }}
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                    />
                    <div className="rounded-full items-center justify-center hidden"
                      style={{ width: 44, height: 44, background: '#1a1000', border: '1.5px solid #3a2800' }} />
                    <span className="text-xs font-black px-1.5 py-0.5 rounded" style={{ background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000', fontSize: 9 }}>A1</span>
                  </div>
                  {/* Modi — center, biggest */}
                  <div className="flex flex-col items-center gap-1 mb-1">
                    <img src="/vg.png" alt="Modi" className="rounded-full object-cover object-top"
                      style={{ width: 56, height: 56, border: '2px solid #D84B4B', background: '#1a0505' }}
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                    />
                    <div className="rounded-full items-center justify-center hidden"
                      style={{ width: 56, height: 56, background: '#1a0505', border: '2px solid #D84B4B' }} />
                    <span className="text-xs font-black px-1.5 py-0.5 rounded" style={{ background: '#1a0505', color: '#ff6060', border: '0.5px solid #3a1010', fontSize: 9 }}>Modi</span>
                  </div>
                  {/* A2 */}
                  <div className="flex flex-col items-center gap-1">
                    <img src="/a2.png" alt="A2" className="rounded-full object-cover object-top"
                      style={{ width: 44, height: 44, border: '1.5px solid #F59E0B', background: '#131000' }}
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                    />
                    <div className="rounded-full items-center justify-center hidden"
                      style={{ width: 44, height: 44, background: '#1a1000', border: '1.5px solid #3a2800' }} />
                    <span className="text-xs font-black px-1.5 py-0.5 rounded" style={{ background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000', fontSize: 9 }}>A2</span>
                  </div>
                </div>
              </div>

              {/* Power box */}
              <div className="rounded-xl p-4" style={{ background: isDark ? '#111' : '#fff', border: `0.5px solid ${isDark ? '#1e1e1e' : '#ddd'}` }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#555', letterSpacing: '1px' }}>Today, power looks like this</p>
                {[
                  { bold: 'Few own', light: 'Most companies' },
                  { bold: 'Few control', light: 'Media & narrative' },
                  { bold: 'Few decide', light: 'Policies & resources' },
                  { bold: 'We pay', light: 'Higher prices, fewer choices' },
                ].map(p => (
                  <div key={p.bold} className="flex items-center gap-2 mb-2 last:mb-0">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#D84B4B' }} />
                    <span className="text-xs font-bold" style={{ color: isDark ? '#F3F4F6' : '#111' }}>{p.bold} </span>
                    <span className="text-xs" style={{ color: '#666' }}>{p.light}</span>
                  </div>
                ))}
                <div className="mt-3 p-2.5 rounded-lg" style={{ background: isDark ? '#0d0800' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}` }}>
                  <p className="text-xs font-semibold" style={{ color: '#F59E0B' }}>
                    But change starts small.<br />You + Your choices = Real change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weakens strip */}
        <div className="border-t text-center py-4"
          style={{ background: isDark ? '#0d0000' : '#fff5f5', borderColor: isDark ? '#1a0000' : '#fcc' }}>
          <p className="text-sm" style={{ color: isDark ? '#aaa' : '#888' }}>Power grows when we cooperate.</p>
          <p className="text-sm font-bold mt-0.5" style={{ color: '#D84B4B' }}>Power weakens when we withdraw.</p>
          <div className="flex justify-center gap-8 mt-3">
            {[['🕊️', 'Non-violence'], ['✋', 'Non-cooperation'], ['🇮🇳', 'India First']].map(([icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-lg">{icon}</span>
                <span className="text-xs" style={{ color: '#555' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY POPUP */}
      <Popup open={philOpen} onClose={() => setPhilOpen(false)}>
        <div className="px-5 pb-2">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#F59E0B' }}>Our Philosophy · Our Method · Our Movement</p>
          <h2 className="text-2xl font-black tracking-tight mb-1" style={{ color: '#F3F4F6' }}>Digital Satyagraha</h2>
          <p className="text-xs italic mb-5" style={{ color: '#666' }}>"Digital Satyagraha is the modern path of non-violent resistance."</p>
          <div className="flex flex-col gap-4 mb-5">
            {philosophyPillars.map(p => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.color }} />
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: '#F3F4F6' }}>{p.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#7a6a40' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['#DigitalNonCooperation', '#DigitalBoycott', '#NonViolentNonCooperation', '#EconomicNonCooperation'].map(t => (
              <span key={t} className="text-xs font-bold" style={{ color: 'rgba(245,158,11,0.4)' }}>{t}</span>
            ))}
          </div>
          <div className="p-3 rounded-r-lg text-xs leading-loose italic" style={{ background: '#0a0800', borderLeft: '2px solid #F59E0B', color: '#8a7a50', borderRadius: '0 6px 6px 0' }}>
            "Non-cooperation with evil is as much a duty as cooperation with good."<br />
            <strong style={{ color: '#F59E0B' }}>— Mahatma Gandhi</strong>
          </div>
        </div>
      </Popup>

      {/* STEPS TO DISCONNECT POPUP */}
      <Popup open={stepsOpen} onClose={() => setStepsOpen(false)}>
        <div className="px-5 pb-2">
          <h2 className="text-xl font-black tracking-tight mb-1" style={{ color: '#F3F4F6' }}>Steps to Disconnect</h2>
          <p className="text-xs mb-5" style={{ color: '#666' }}>Know → Explore → Choose → Act → Spread</p>
          <div className="flex flex-col gap-4">
            {disconnectSteps.map(s => (
              <div key={s.num} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                  style={{ background: s.bg, color: s.color }}>
                  {s.num}
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: '#F3F4F6' }}>{s.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#666' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popup>

      {/* HOW IT WORKS POPUP */}
      <Popup open={howOpen} onClose={() => setHowOpen(false)}>
        <div className="px-5 pb-2">
          <h2 className="text-xl font-black tracking-tight mb-3" style={{ color: '#F3F4F6' }}>How It Works</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#aaa' }}>
            Digital Non-Cooperation is a civic transparency platform for India. It maps how two corporate empires — Ambani (A1) and Adani (A2) — influence your daily life through telecom, media, retail, energy, and more.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#aaa' }}>
            It then shows you <span style={{ color: '#F3F4F6', fontWeight: 600 }}>real, named alternatives</span> — and helps you take small, non-violent acts of consumer non-cooperation.
          </p>
          <div className="p-3 rounded-lg text-xs" style={{ background: '#0d0900', border: '0.5px solid #2a1800', color: '#7a6a40' }}>
            Not propaganda. Not rage. Not a political party.<br />
            <strong style={{ color: '#F59E0B' }}>Just clarity. Just choices.</strong>
          </div>
        </div>
      </Popup>
    </>
  )
}
