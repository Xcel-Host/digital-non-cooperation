import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const steps = [
  { emoji: '📱', title: 'Switch one service', desc: 'Move from Jio, JioMart, or any Reliance/Adani product to an alternative' },
  { emoji: '🏪', title: 'Choose local kirana over JioMart', desc: 'Your rupee stays in your neighbourhood, not a billionaire\'s pocket' },
  { emoji: '🔍', title: 'Search before you buy', desc: 'Use this platform to check who owns a brand before purchasing' },
  { emoji: '📰', title: 'Diversify your news sources', desc: 'Read beyond Network18 and NDTV — seek independent voices' },
  { emoji: '📣', title: 'Share this platform', desc: 'Awareness is the first act of non-cooperation. Tell one person.' },
  { emoji: '🤝', title: 'Support a cooperative or local brand', desc: 'Amul, Dhara, Fabindia, Bovonto — real choices exist' },
]

export default function Participate({ theme }) {
  const [checked, setChecked] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const total = Object.values(checked).filter(Boolean).length

  return (
    <main style={{ background: '#0B0B0F', minHeight: '100vh' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 20px' }}>

        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 12 }}>Step 5 · Take Action</p>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#F3F4F6', marginBottom: 8, letterSpacing: '-1px', lineHeight: 1.1 }}>
          Make the<br /><span style={{ color: '#D84B4B' }}>Pledge.</span>
        </h1>
        <p style={{ fontSize: 14, color: '#aaa', marginBottom: 36, lineHeight: 1.7 }}>
          No march needed. No rage needed. Just one conscious decision at a time.
          This is how empires lose power — silently, consistently, collectively.
        </p>

        {/* Progress indicator */}
        {total > 0 && !submitted && (
          <div style={{ marginBottom: 24, padding: '12px 16px', borderRadius: 10, background: 'rgba(74,219,74,0.08)', border: '0.5px solid rgba(74,219,74,0.2)' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#4adb4a' }}>
              {total} of {steps.length} acts committed ✊
            </p>
            <div style={{ marginTop: 8, height: 3, borderRadius: 2, background: '#1a1a1a' }}>
              <div style={{ height: '100%', borderRadius: 2, background: '#4adb4a', width: `${(total / steps.length) * 100}%`, transition: 'width 0.3s ease' }} />
            </div>
          </div>
        )}

        {/* Steps as pledge items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
          {steps.map((s, i) => (
            <div
              key={s.title}
              onClick={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
              style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                borderRadius: 12, cursor: 'pointer',
                background: checked[i] ? 'rgba(74,219,74,0.06)' : '#111',
                border: `1px solid ${checked[i] ? 'rgba(74,219,74,0.25)' : '#1e1e1e'}`,
                transition: 'all 0.2s ease', marginBottom: 6,
              }}>
              <div style={{
                width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: checked[i] ? '#4adb4a' : 'transparent',
                border: `1.5px solid ${checked[i] ? '#4adb4a' : '#444'}`,
                fontSize: 12, fontWeight: 900, color: '#000',
                transition: 'all 0.2s ease',
              }}>
                {checked[i] ? '✓' : ''}
              </div>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: checked[i] ? '#4adb4a' : '#F3F4F6', marginBottom: 2 }}>{s.title}</p>
                <p style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {!submitted ? (
          <button
            onClick={() => total > 0 && setSubmitted(true)}
            style={{
              width: '100%', padding: '16px', borderRadius: 12, fontSize: 15, fontWeight: 800,
              background: total > 0 ? '#D84B4B' : '#1a1a1a',
              color: total > 0 ? '#fff' : '#555',
              border: `1px solid ${total > 0 ? '#D84B4B' : '#2a2a2a'}`,
              cursor: total > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
              boxShadow: total > 0 ? '0 4px 20px rgba(216,75,75,0.3)' : 'none',
            }}>
            {total === 0 ? 'Select at least one act above' : `I commit to ${total} act${total > 1 ? 's' : ''} of non-cooperation ✊`}
          </button>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 20px', borderRadius: 16, background: 'rgba(74,219,74,0.06)', border: '1px solid rgba(74,219,74,0.2)' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✊</div>
            <p style={{ fontSize: 20, fontWeight: 900, color: '#4adb4a', marginBottom: 8 }}>Pledge made.</p>
            <p style={{ fontSize: 13, color: '#aaa', marginBottom: 24, lineHeight: 1.6 }}>
              {total} acts committed. Small choices, repeated consistently, change systems.
            </p>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#F3F4F6', marginBottom: 16 }}>Now spread the word ↓</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/?text=I just made my Digital Non-Cooperation pledge. Know who owns your internet, news %26 groceries: https://digital-non-cooperation.vercel.app`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: '10px 18px', borderRadius: 8, background: '#25D366', color: '#fff', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>
                📱 Share on WhatsApp
              </a>
              <a href={`https://twitter.com/intent/tweet?text=I just made my Digital Non-Cooperation pledge. Know who owns your daily life in India. %23DigitalNonCooperation&url=https://digital-non-cooperation.vercel.app`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: '10px 18px', borderRadius: 8, background: '#1DA1F2', color: '#fff', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>
                🐦 Share on X
              </a>
            </div>
          </div>
        )}

        {/* Philosophy reminder */}
        <div style={{ marginTop: 32, padding: '20px', borderRadius: 14, background: '#080600', border: '0.5px solid #1e1800' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 10 }}>Digital Satyagraha</p>
          <p style={{ fontSize: 13, color: '#bbb', lineHeight: 1.7, marginBottom: 10 }}>
            Gandhi's Satyagraha was daily, non-violent choice — not marches, not rage.
            Digital Non-Cooperation applies the same idea to how we spend, stream, and consume.
          </p>
        </div>

        {/* Want to do more */}
        <Link to="/what-else" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderRadius: 14, background: '#0d0900', border: '0.5px solid #2a1800', textDecoration: 'none', marginTop: 16 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4 }}>16 Practical Steps</p>
            <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6' }}>Want to do more?</p>
            <p style={{ fontSize: 11, color: '#888', marginTop: 4 }}>Non-violent, practical acts beyond just knowing.</p>
          </div>
          <span style={{ fontSize: 18, color: '#F59E0B' }}>→</span>
        </Link>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
