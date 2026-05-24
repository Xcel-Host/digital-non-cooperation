import { useState } from 'react'
import { Link } from 'react-router-dom'
import PhilosophyPopup from './PhilosophyPopup'

const powerPoints = [
  { bold: 'Few own', light: 'Most companies' },
  { bold: 'Few control', light: 'Media & narrative' },
  { bold: 'Few decide', light: 'Policies & resources' },
  { bold: 'We pay', light: 'Higher prices, fewer choices' },
]

export default function HeroSection() {
  const [philOpen, setPhilOpen] = useState(false)

  return (
    <>
      <section
        className="overflow-hidden border-b"
        style={{ background: '#0a0000', borderColor: '#1a0000' }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* LEFT */}
          <div>
            <p className="text-xs font-bold tracking-widest text-red uppercase mb-3">
              India · Non-violence · Non-cooperation
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tighter mb-3">
              How can you stop{' '}
              <span className="text-red">Modi</span> silently?
            </h1>

            <p className="text-base font-bold text-offwhite mb-2 leading-snug">
              Through your choices.<br />Through non-cooperation.
            </p>

            <p className="text-sm text-muted leading-relaxed mb-5">
              Every rupee you spend is a vote.<br />
              Boycott monopoly. Support alternatives.<br />
              <span className="text-red font-semibold">This is Digital Satyagraha.</span>
            </p>

            {/* Philosophy pill */}
            <button
              onClick={() => setPhilOpen(true)}
              className="w-full flex items-center gap-2 mb-4 px-3 py-2.5 rounded-lg text-left transition-colors"
              style={{
                background: '#0d0900',
                border: '0.5px solid #3a2000',
              }}
            >
              <span className="text-sm">📖</span>
              <span className="text-xs font-bold text-amber flex-1">
                Digital Satyagraha Philosophy
              </span>
              <span className="text-amber/40 text-xs">→</span>
            </button>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/explore/reliance"
                className="flex items-center gap-2 bg-red text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-red/90 transition-colors"
              >
                Explore Empires →
              </Link>
              <Link
                to="/philosophy"
                className="flex items-center gap-2 text-offwhite text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                style={{ border: '0.5px solid #333' }}
              >
                ▶ How It Works
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {/* Parliament + Silhouettes */}
            <div className="relative w-full h-36 overflow-hidden rounded-xl" style={{ background: '#080000' }}>
              {/* Parliament SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 140"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Red glow */}
                <ellipse cx="200" cy="120" rx="160" ry="40" fill="#3a0000" opacity="0.6" />
                {/* Parliament dome */}
                <ellipse cx="200" cy="80" rx="26" ry="22" fill="#1a0505" stroke="#3a1010" strokeWidth="0.5" />
                <rect x="174" y="80" width="52" height="40" fill="#1a0505" />
                {/* Dome spire */}
                <rect x="197" y="58" width="6" height="22" fill="#2a0808" />
                <polygon points="200,48 194,62 206,62" fill="#2a0808" />
                {/* Left wing */}
                <rect x="60" y="94" width="114" height="26" fill="#150404" stroke="#2a0808" strokeWidth="0.3" />
                <rect x="56" y="88" width="122" height="8" fill="#1a0505" />
                {/* Right wing */}
                <rect x="226" y="94" width="114" height="26" fill="#150404" stroke="#2a0808" strokeWidth="0.3" />
                <rect x="222" y="88" width="122" height="8" fill="#1a0505" />
                {/* Left columns */}
                {[72,88,104,120,136,152].map(x => (
                  <rect key={x} x={x} y="94" width="2.5" height="26" fill="#200808" opacity="0.7" />
                ))}
                {/* Right columns */}
                {[246,262,278,294,310,326].map(x => (
                  <rect key={x} x={x} y="94" width="2.5" height="26" fill="#200808" opacity="0.7" />
                ))}
                {/* Ground */}
                <rect x="0" y="120" width="400" height="20" fill="#080000" />
                <rect x="0" y="119" width="400" height="2" fill="#1a0505" opacity="0.4" />
                {/* Crowd silhouettes */}
                {[30,55,330,355].map(x => (
                  <ellipse key={x} cx={x} cy="128" rx="7" ry="12" fill="#150303" opacity="0.5" />
                ))}
              </svg>

              {/* Silhouettes: A1 | MODI (center, tallest) | A2 */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-end gap-2 z-10">
                {/* A1 */}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: '#1a1000', border: '0.5px solid #3a2800' }}
                  />
                  <div
                    className="w-6 h-10 rounded-t"
                    style={{ background: '#1a1000', border: '0.5px solid #3a2800' }}
                  />
                  <span
                    className="text-xs font-black px-1.5 py-0.5 rounded"
                    style={{ background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000', fontSize: 9 }}
                  >
                    A1
                  </span>
                </div>
                {/* MODI — center, tallest */}
                <div className="flex flex-col items-center gap-1 mb-1">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ background: '#1a0505', border: '0.5px solid #3a1010' }}
                  />
                  <div
                    className="w-8 h-14 rounded-t"
                    style={{ background: '#1a0505', border: '0.5px solid #3a1010' }}
                  />
                  <span
                    className="text-xs font-black px-1.5 py-0.5 rounded"
                    style={{ background: '#1a0505', color: '#ff6060', border: '0.5px solid #3a1010', fontSize: 9 }}
                  >
                    Modi
                  </span>
                </div>
                {/* A2 */}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: '#1a1000', border: '0.5px solid #3a2800' }}
                  />
                  <div
                    className="w-6 h-10 rounded-t"
                    style={{ background: '#1a1000', border: '0.5px solid #3a2800' }}
                  />
                  <span
                    className="text-xs font-black px-1.5 py-0.5 rounded"
                    style={{ background: '#131000', color: '#F59E0B', border: '0.5px solid #2a2000', fontSize: 9 }}
                  >
                    A2
                  </span>
                </div>
              </div>
            </div>

            {/* Power box */}
            <div
              className="rounded-xl p-4"
              style={{ background: '#111', border: '0.5px solid #1e1e1e' }}
            >
              <p className="text-xs font-bold tracking-widest text-muted uppercase mb-3">
                Today, power looks like this
              </p>
              {powerPoints.map(p => (
                <div key={p.bold} className="flex items-center gap-2 mb-2 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-offwhite">{p.bold} </span>
                    <span className="text-xs text-muted">{p.light}</span>
                  </div>
                </div>
              ))}
              <div
                className="mt-3 p-2.5 rounded-lg"
                style={{ background: '#0d0800', border: '0.5px solid #2a1800' }}
              >
                <p className="text-xs font-semibold text-amber leading-relaxed">
                  But change starts small.<br />
                  You + Your choices = Real change
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Weakens strip */}
        <div
          className="border-t text-center py-4"
          style={{ background: '#0d0000', borderColor: '#1a0000' }}
        >
          <p className="text-sm text-offwhite/60">Power grows when we cooperate.</p>
          <p className="text-sm font-bold text-red mt-0.5">
            Power weakens when we withdraw.
          </p>
          <div className="flex justify-center gap-8 mt-3">
            {[['🕊️', 'Non-violence'], ['✋', 'Non-cooperation'], ['🇮🇳', 'India First']].map(([icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-lg">{icon}</span>
                <span className="text-xs text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhilosophyPopup open={philOpen} onClose={() => setPhilOpen(false)} />
    </>
  )
}
