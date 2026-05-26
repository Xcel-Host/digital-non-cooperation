import { useState } from 'react'
import Footer from '../components/Footer'

const steps = [
  { title: 'Switch one service', desc: 'Move from Jio, JioMart, or any Reliance/Adani product to an alternative' },
  { title: 'Choose local kirana over JioMart', desc: 'Your rupee stays in your neighbourhood' },
  { title: 'Search before you buy', desc: 'Use this platform to check who owns a brand before purchasing' },
  { title: 'Diversify your news sources', desc: 'Read beyond Network18 and NDTV channels' },
  { title: 'Share this platform', desc: 'Awareness is the first act of non-cooperation' },
  { title: 'Support a cooperative or local brand', desc: 'Amul, Dhara, Fabindia, Bovonto — real choices' },
]

export default function Participate() {
  const [checked, setChecked] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const total = Object.values(checked).filter(Boolean).length
  const counter = 'Movement Growing'

  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest text-red uppercase mb-3">
          Step 5 · Take Action
        </p>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: '#F3F4F6', marginBottom: 8 }}>Participate</h1>
        <p style={{ fontSize: 14, color: '#aaa', marginBottom: 32, lineHeight: 1.7 }}>
          Join thousands taking silent action. Economic Non-Cooperation doesn't need a march.
          It needs a decision. One switch. One kirana. One search before you buy.
        </p>

        {/* Counter */}
        <div
          className="rounded-2xl p-6 text-center mb-8"
          style={{ background: '#0d0800', border: '0.5px solid #2a1800' }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 8 }}>Movement Growing</p>
          <p style={{ fontSize: 36, fontWeight: 900, color: '#F59E0B' }}>✊ Join Us</p>
          <p style={{ fontSize: 12, color: '#7a6a40', marginTop: 8 }}>thousands taking silent action every day</p>
        </div>

        {/* Steps */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: 16 }}>
          Mark your acts of non-cooperation
        </p>

        <div className="flex flex-col gap-1 mb-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex items-start gap-4 py-4 cursor-pointer"
              style={{ borderBottom: i < steps.length - 1 ? '0.5px solid #2a2a2a' : 'none' }}
              onClick={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                style={checked[i]
                  ? { background: '#1a4a1a', border: '1.5px solid #4a8a4a' }
                  : { background: '#1a1a1a', border: '1.5px solid #555' }
                }
              >
                {checked[i] && <span style={{ color: '#4adb4a', fontSize: 11 }}>✓</span>}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: checked[i] ? '#4adb4a' : '#F3F4F6', marginBottom: 3 }}>
                  {s.title}
                </p>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => setSubmitted(true)}
          className="w-full py-4 rounded-xl text-sm font-black transition-all"
          style={submitted
            ? { background: '#081008', border: '0.5px solid #1a4a1a', color: '#4a8a4a' }
            : { background: '#D84B4B', color: '#fff' }
          }
        >
          {submitted ? 'Recorded. Thank you. ✓ Share this platform now.' : 'I\'ll Take Action ✊'}
        </button>

        {submitted && (
          <p className="text-xs text-center text-[#aaa] mt-3">
            Share this platform — awareness is non-cooperation
          </p>
        )}

        {/* Philosophy reminder */}
        <div
          className="mt-10 p-5 rounded-xl"
          style={{ background: '#080600', border: '0.5px solid #1e1800' }}
        >
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-3">Digital Satyagraha</p>
          <p className="text-sm text-[#ddd] leading-relaxed mb-3">
            Gandhi's Satyagraha was daily, non-violent choice — not marches, not rage.
            Digital Non-Cooperation applies the same idea to how we spend, stream, and consume.
          </p>
          <div className="flex flex-wrap gap-2">
            {['#DigitalNonCooperation', '#DigitalBoycott', '#EconomicNonCooperation', '#NonViolentNonCooperation'].map(t => (
              <span key={t} className="text-xs font-bold text-amber/40">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Want to do more? */}
      <div className="max-w-2xl mx-auto px-4 pb-4">
        <a href="/what-else"
          className="flex items-center justify-between p-5 rounded-xl"
          style={{ background: '#0d0900', border: '0.5px solid #2a1800' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 4 }}>16 Practical Steps</p>
            <p style={{ fontSize: 14, fontWeight: 800, color: '#F3F4F6' }}>Want to do more?</p>
            <p style={{ fontSize: 11, color: '#7a6a40', marginTop: 4 }}>Non-violent, practical acts beyond just knowing.</p>
          </div>
          <span style={{ fontSize: 18, color: '#F59E0B' }}>→</span>
        </a>
      </div>
      <Footer />
    </main>
  )
}
