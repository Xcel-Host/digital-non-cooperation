import { useState } from 'react'
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

const empireData = [
  { badge: 'A1', badgeBg: '#D84B4B', badgeColor: '#fff', name: 'Ambani Empire', person: 'Mukesh Ambani', sectors: 'Telecom · Retail · Media · Streaming · Fashion · Finance · FMCG', cardBg: '#150505', cardBorder: '#2e0f0f', lightBg: '#fff8f8', lightBorder: '#fcc', to: '/explore/reliance' },
  { badge: 'A2', badgeBg: '#F59E0B', badgeColor: '#000', name: 'Adani Empire', person: 'Gautam Adani', sectors: 'Ports · Airports · Power · Cement · Media · Food · Gas', cardBg: '#0f0f00', cardBorder: '#252200', lightBg: '#fffef0', lightBorder: '#f5e080', to: '/explore/adani' },
]

const comingEmpires = ['Tata Group (A3)', 'Aditya Birla (A4)', 'Times Group · Media', 'Bajaj · Mahindra']

function CenteredModal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 540, background: '#0d0d12', border: '0.5px solid #2a2a2a', borderRadius: 18, maxHeight: '88vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose}
          style={{ position: 'sticky', top: 12, float: 'right', marginRight: 12, width: 28, height: 28, borderRadius: '50%', background: '#1a1a1f', border: '0.5px solid #333', color: '#888', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>✕</button>
        <div style={{ padding: '16px 24px 28px' }}>{children}</div>
      </div>
    </div>
  )
}

export default function HeroSection({ theme }) {
  const [philOpen, setPhilOpen] = useState(false)
  const [stepsOpen, setStepsOpen] = useState(false)
  const [empiresOpen, setEmpiresOpen] = useState(false)
  const isDark = theme !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const mutedColor = isDark ? '#888' : '#666'
  const cardBg = isDark ? '#1a1a1f' : '#fff'
  const borderCol = isDark ? '#222' : '#ddd'

  return (
    <>
      {/* HERO */}
      <section style={{ background: isDark ? '#0B0B0F' : '#f8f8f4', borderBottom: `0.5px solid ${borderCol}`, padding: '48px 0 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }} className="hero-grid">

            {/* LEFT */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 16 }}>
                India · Non-violence · Non-cooperation
              </p>
              <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px', marginBottom: 14, color: textColor }}>
                How can you stop{' '}
                <span style={{ color: '#D84B4B' }}>Vishwaguru</span> silently?
              </h1>
              <p style={{ fontSize: 15, fontWeight: 700, color: textColor, marginBottom: 6 }}>
                Through your choices. Through non-cooperation.
              </p>
              <p style={{ fontSize: 13, color: mutedColor, lineHeight: 1.65, marginBottom: 24 }}>
                Every rupee you spend is a vote. Boycott monopoly. Support alternatives.{' '}
                <span style={{ color: '#D84B4B', fontWeight: 600 }}>This is Digital Satyagraha.</span>
              </p>

              {/* BUTTONS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                <button onClick={() => setEmpiresOpen(e => !e)}
                  style={{ width: '100%', padding: '14px 20px', background: '#D84B4B', color: '#fff', fontSize: 14, fontWeight: 800, borderRadius: 12, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  {empiresOpen ? 'Close Empires ↑' : 'Explore Empires →'}
                </button>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <button onClick={() => setStepsOpen(true)}
                    style={{ padding: '12px', background: cardBg, border: `0.5px solid ${borderCol}`, color: textColor, fontSize: 12, fontWeight: 700, borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-steps" aria-hidden="true" style={{ fontSize: 14 }} />
                    Steps to Disconnect
                  </button>
                  <button onClick={() => setPhilOpen(true)}
                    style={{ padding: '12px', background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, color: '#F59E0B', fontSize: 12, fontWeight: 700, borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <i className="ti ti-book" aria-hidden="true" style={{ fontSize: 14 }} />
                    Satyagraha Philosophy
                  </button>
                </div>
              </div>

              {/* STATS ROW */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', paddingBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex' }}>
                    {['/a1.png', '/vg.png', '/a2.png'].map((src, i) => (
                      <img key={i} src={src} alt="" style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #0B0B0F', marginLeft: i > 0 ? -8 : 0, objectFit: 'cover', objectPosition: 'top' }} />
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: '#F59E0B', lineHeight: 1 }}>24,382+</div>
                    <div style={{ fontSize: 9, color: mutedColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>People Taking Action</div>
                  </div>
                </div>
                <div style={{ width: '0.5px', height: 32, background: borderCol }} />
                {[['🕊️', 'Silent', 'Non-violent'], ['✊', 'Consistent', 'Non-cooperation'], ['🇮🇳', 'India First', 'People First']].map(([icon, bold, sub]) => (
                  <div key={bold} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', background: cardBg, border: `0.5px solid ${borderCol}`, borderRadius: 20 }}>
                    <span style={{ fontSize: 13 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: textColor, lineHeight: 1 }}>{bold}</div>
                      <div style={{ fontSize: 9, color: mutedColor }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INLINE EMPIRES */}
              {empiresOpen && (
                <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {empireData.map(e => (
                      <Link key={e.badge} to={e.to} style={{ display: 'block', textDecoration: 'none', background: isDark ? e.cardBg : e.lightBg, border: `0.5px solid ${isDark ? e.cardBorder : e.lightBorder}`, borderRadius: 14, padding: '14px 12px', position: 'relative' }}>
                        <div style={{ fontSize: 9, fontWeight: 800, padding: '2px 7px', borderRadius: 4, marginBottom: 8, display: 'inline-block', background: e.badgeBg, color: e.badgeColor }}>{e.badge}</div>
                        <div style={{ fontSize: 15, fontWeight: 900, color: textColor, marginBottom: 3 }}>{e.name}</div>
                        <div style={{ fontSize: 10, color: mutedColor, marginBottom: 8 }}>{e.person}</div>
                        <div style={{ fontSize: 9, color: '#555', lineHeight: 1.6 }}>{e.sectors}</div>
                        <span style={{ position: 'absolute', right: 10, bottom: 10, fontSize: 13, color: '#333' }}>→</span>
                      </Link>
                    ))}
                  </div>
                  <div style={{ background: isDark ? '#111' : '#fff', border: `0.5px solid ${borderCol}`, borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: textColor, marginBottom: 3 }}>Their power. Your choices.</p>
                      <p style={{ fontSize: 10, color: mutedColor, lineHeight: 1.5 }}>Concentration gives control — over prices, news, and choices. This affects your daily life.</p>
                    </div>
                  </div>
                  <div style={{ background: isDark ? '#0d0d0d' : '#f8f8f4', border: `0.5px solid ${borderCol}`, borderRadius: 12, padding: '12px 14px' }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Coming soon</p>
                    <p style={{ fontSize: 12, fontWeight: 700, color: textColor, marginBottom: 8 }}>More Empires Being Mapped</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {comingEmpires.map(e => (
                        <span key={e} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 8, background: isDark ? '#1a1a1a' : '#eee', color: '#666', border: `0.5px solid ${borderCol}` }}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Caricatures */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, padding: '20px 0 0' }}>
                {[
                  { src: '/a1.png', label: 'A1', labelBg: '#D84B4B', labelColor: '#fff', size: 88 },
                  { src: '/vg.png', label: 'Modi', labelBg: '#1a0505', labelColor: '#ff6060', size: 112, border: '3px solid #D84B4B', mb: 8 },
                  { src: '/a2.png', label: 'A2', labelBg: '#131000', labelColor: '#F59E0B', size: 88 },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: c.mb || 0 }}>
                    <div style={{ width: c.size, height: c.size, borderRadius: '50%', overflow: 'hidden', border: c.border || '2px solid #2a2a2a', background: '#111', position: 'relative' }}>
                      <img src={c.src} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, background: c.labelBg, color: c.labelColor }}>{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Power box */}
              <div style={{ borderRadius: 14, padding: 20, background: isDark ? '#111' : '#fff', border: `0.5px solid ${borderCol}` }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#555', marginBottom: 14 }}>Today, power looks like this</p>
                {[
                  { bold: 'Few own', light: 'Most companies' },
                  { bold: 'Few control', light: 'Media & narrative' },
                  { bold: 'Few decide', light: 'Policies & resources' },
                  { bold: 'We pay', light: 'Higher prices, fewer choices' },
                ].map(p => (
                  <div key={p.bold} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#D84B4B', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: textColor }}>{p.bold} </span>
                    <span style={{ fontSize: 13, color: mutedColor }}>{p.light}</span>
                  </div>
                ))}
                <div style={{ marginTop: 14, padding: 12, borderRadius: 10, background: isDark ? '#0d0800' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}` }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#F59E0B', lineHeight: 1.55 }}>
                    But change starts small.<br />You + Your choices = Real change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div style={{ borderTop: `0.5px solid ${borderCol}`, marginTop: 0, padding: '20px 0' }}>
          <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 20, fontWeight: 900, color: textColor, lineHeight: 1.2, marginBottom: 4 }}>Small acts of non-cooperation<br />can bring big change.</p>
              <p style={{ fontSize: 13, color: '#F59E0B', fontWeight: 600 }}>Be the change. Build the future.</p>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { num: '812+', label: 'Brands Tracked', color: '#F59E0B' },
                { num: '2', label: 'Big Empires', color: textColor },
                { num: '36+', label: 'Sectors Covered', color: textColor },
                { num: '1,245+', label: 'Alternatives Listed', color: '#F59E0B' },
                { num: '24,382+', label: 'People Taking Action', color: '#D84B4B' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: s.color, letterSpacing: '-0.5px', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: mutedColor, marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY MODAL */}
      <CenteredModal open={philOpen} onClose={() => setPhilOpen(false)}>
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 8 }}>Our Philosophy · Our Method · Our Movement</p>
        <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px', color: '#F3F4F6', marginBottom: 4, lineHeight: 1 }}>Digital<br />Satyagraha</h2>
        <p style={{ fontSize: 12, color: '#666', fontStyle: 'italic', marginBottom: 16 }}>"Digital Satyagraha is the modern path of non-violent resistance."</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: '#F59E0B' }}>#DigitalNonCooperation</span>
          {['#DigitalBoycott', '#NonViolentNonCooperation', '#EconomicNonCooperation'].map(t => (
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
          {[['Switch one service', 'Telecom, streaming, or grocery. One redirect per month matters.'],['Know before you buy', '10 seconds on this platform to know who benefits from your rupee.'],['Support local first', 'Kirana over JioMart. Handloom over AJIO. Your money, your vote.'],['Diversify your media', 'When two groups own your news, seek independent sources — newsletters, independent journalists, regional press.']].map(([title, desc]) => (
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
          {['Withdraw', 'Reduce', 'Replace', 'Transform'].map((s, i, arr) => (
            <span key={s} style={{ fontSize: 11, color: '#555' }}>{s}{i < arr.length - 1 ? ' →' : ''}</span>
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

      {/* STEPS MODAL */}
      <CenteredModal open={stepsOpen} onClose={() => setStepsOpen(false)}>
        <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px', color: '#F3F4F6', marginBottom: 4 }}>Steps to Disconnect</h2>
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
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
