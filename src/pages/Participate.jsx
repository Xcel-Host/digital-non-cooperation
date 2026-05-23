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
  const counter = 24382 + total

  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest text-red uppercase mb-3">
          Step 5 · Take Action
        </p>
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">Participate</h1>
        <p className="text-sm text-muted mb-8 leading-relaxed">
          Join thousands taking silent action. Economic Non-Cooperation doesn't need a march.
          It needs a decision. One switch. One kirana. One search before you buy.
        </p>

        {/* Counter */}
        <div
          className="rounded-2xl p-6 text-center mb-8"
          style={{ background: '#0d0800', border: '0.5px solid #2a1800' }}
        >
          <p className="text-xs font-bold text-amber/60 uppercase tracking-widest mb-2">People Participating</p>
          <p className="text-5xl font-black text-amber tracking-tighter">{counter.toLocaleString('en-IN')}+</p>
          <p className="text-xs text-amber/40 mt-2">and growing every day</p>
        </div>

        {/* Steps */}
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4">
          Mark your acts of non-cooperation
        </p>

        <div className="flex flex-col gap-1 mb-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex items-start gap-4 py-3 cursor-pointer group"
              style={{ borderBottom: i < steps.length - 1 ? '0.5px solid #0e0e0e' : 'none' }}
              onClick={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                style={checked[i]
                  ? { background: '#081008', border: '0.5px solid #1a4a1a' }
                  : { border: '0.5px solid #222' }
                }
              >
                {checked[i] && <span className="text-green-500 text-xs">✓</span>}
              </div>
              <div>
                <p className={`text-sm font-semibold transition-colors ${checked[i] ? 'text-offwhite' : 'text-offwhite/60'}`}>
                  {s.title}
                </p>
                <p className="text-xs text-muted mt-0.5 leading-relaxed">{s.desc}</p>
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
          <p className="text-xs text-center text-muted mt-3">
            Share this platform — awareness is non-cooperation
          </p>
        )}

        {/* Philosophy reminder */}
        <div
          className="mt-10 p-5 rounded-xl"
          style={{ background: '#080600', border: '0.5px solid #1e1800' }}
        >
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-3">Digital Satyagraha</p>
          <p className="text-sm text-offwhite/70 leading-relaxed mb-3">
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
      <Footer />
    </main>
  )
}
