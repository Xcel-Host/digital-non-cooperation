import { useState } from 'react'
import { Link } from 'react-router-dom'


const quickAlts = [
  { avoid: 'Jio', dot: 'r', try: 'Airtel / BSNL' },
  { avoid: 'JioHotstar', dot: 'r', try: 'SonyLIV / Stremio' },
  { avoid: 'JioMart', dot: 'r', try: 'Local kirana / ONDC' },
  { avoid: 'AJIO', dot: 'r', try: 'Myntra / Fabindia' },
  { avoid: 'Reliance Digital', dot: 'r', try: 'Croma / Local shops' },
  { avoid: 'Fortune Oil', dot: 'a', try: 'Dhara / Amul / Saffola' },
  { avoid: 'Campa Cola', dot: 'a', try: 'Bovonto / Lahori Zeera' },
  { avoid: 'NDTV', dot: 'a', try: 'The Wire / The Hindu' },
]

const stopItems = [
  { icon: '🏛️', text: 'Ambani and Adani fund and fuel power.' },
  { icon: '📺', text: 'Media they own shapes your mind.' },
  { icon: '🗳️', text: 'Politics they support stays in power.' },
  { icon: '💰', text: 'Your money strengthens their empire.' },
]

const checkItems = [
  'Switched one service',
  'Supported local business',
  'Shared with friends',
  'Reduced monopoly dependency',
  'Learning & spreading awareness',
]

export default function HomeBottom() {
  const [checked, setChecked] = useState({ 0: true, 1: true, 2: true })

  const toggleCheck = i => {
    setChecked(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* STEP 3: ALTERNATIVES PREVIEW */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">Step 3: Alternatives That Work</h2>
        <p className="text-xs text-muted mb-4">Choose alternatives. Reduce monopoly power.</p>

        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '0.5px solid #1e1e1e' }}
        >
          {/* Header */}
          <div className="flex justify-between px-4 py-2" style={{ background: '#161616' }}>
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Avoid</span>
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Try This Instead</span>
          </div>

          {quickAlts.map((a, i) => (
            <div
              key={a.avoid}
              className="flex items-center px-4 py-2.5 gap-3"
              style={{
                borderBottom: i < quickAlts.length - 1 ? '0.5px solid #111' : 'none',
                background: '#1A1A1F',
              }}
            >
              <div className="flex items-center gap-2 flex-1">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={
                    a.dot === 'r'
                      ? { background: '#1a0505', color: '#D84B4B', border: '0.5px solid #2e0f0f' }
                      : { background: '#0f0f00', color: '#F59E0B', border: '0.5px solid #252200' }
                  }
                >
                  {a.avoid[0]}
                </div>
                <span className="text-xs font-semibold text-muted line-through" style={{ textDecorationColor: '#2e0f0f' }}>
                  {a.avoid}
                </span>
              </div>
              <span className="text-muted text-sm">→</span>
              <span className="text-xs font-bold text-offwhite flex-1 text-right">{a.try}</span>
            </div>
          ))}
        </div>

        <Link
          to="/alternatives"
          className="block w-full mt-3 py-2.5 rounded-xl text-center text-xs font-bold text-red transition-colors"
          style={{ background: '#111', border: '0.5px solid #1e1e1e' }}
        >
          View All Alternatives →
        </Link>
      </div>

      {/* STEP 4 */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">Step 4: How You Stop Modi Silently</h2>
        <p className="text-xs text-muted mb-4">You don't need to protest. Just make better choices.</p>

        <div className="flex flex-col gap-2 mb-4">
          {stopItems.map(item => (
            <div
              key={item.text}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: '#0d0000', border: '0.5px solid #1a0808' }}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-xs text-offwhite/80 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-sm font-bold text-red mb-1">Stop feeding the system.</p>
        <p className="text-xs text-muted">Withdraw your money. Withdraw your attention. Power will shift.</p>
      </div>

      {/* STEP 5: PARTICIPATE */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">Step 5: Participate</h2>
        <p className="text-xs text-muted mb-4">Join thousands taking silent action.</p>

        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: '#0d0800', border: '0.5px solid #2a1800' }}
        >
          <p className="text-xs text-amber/60 uppercase tracking-widest mb-1 font-bold">Movement Growing</p>
          <p className="text-3xl font-black text-amber tracking-tighter">✊ Join Us</p>
          <p className="text-xs text-amber/40 mt-1">thousands taking silent action every day</p>
        </div>

        <div className="mb-4">
          {checkItems.map((label, i) => (
            <div
              key={label}
              className="flex items-center gap-3 py-2.5 cursor-pointer"
              style={{ borderBottom: i < checkItems.length - 1 ? '0.5px solid #0e0e0e' : 'none' }}
              onClick={() => toggleCheck(i)}
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                style={
                  checked[i]
                    ? { background: '#081008', border: '0.5px solid #1a3a1a' }
                    : { border: '0.5px solid #222' }
                }
              >
                {checked[i] && <span className="text-green-500 text-xs">✓</span>}
              </div>
              <span className="text-xs text-offwhite/80">{label}</span>
            </div>
          ))}
        </div>

        <Link
          to="/participate"
          className="flex items-center justify-center gap-2 w-full bg-red text-white py-3.5 rounded-xl text-sm font-black hover:bg-red/90 transition-colors"
        >
          I'll Take Action ✊
        </Link>
      </div>

      {/* REAL CHANGE */}
      <div className="mb-8">
        <h2 className="text-2xl font-black tracking-tight text-offwhite mb-1">Real Change. Real India.</h2>
        <p className="text-xs text-muted mb-3">Non-violence. Non-cooperation. Non-surrender.</p>
        <div
          className="p-4 rounded-xl"
          style={{ background: '#080600', border: '0.5px solid #1e1800' }}
        >
          <p className="text-xs leading-loose" style={{ color: '#8a7a50' }}>
            Be the change without shouting.<br />
            This is Digital Satyagraha.<br />
            This is how India wins back its future.<br />
            <strong className="text-amber">One choice at a time.</strong>
          </p>
        </div>
      </div>

      {/* WEALTH DATA TEASER */}
      <div className="mb-8">
        <Link to="/wealth"
          className="block p-5 rounded-xl transition-all hover:border-red"
          style={{ background: '#0d0000', border: '0.5px solid #2e0f0f' }}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-red uppercase tracking-widest mb-2">Data · Verified</p>
              <h3 className="text-lg font-black text-offwhite mb-1">Their Wealth. Your Life.</h3>
              <p className="text-xs text-muted leading-relaxed">
                Ambani +542% · Adani +1,535% since 2014.<br/>
                Average Indian wage: +40% in the same period.
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-black text-red">542%</div>
              <div className="text-xs text-muted">Ambani growth</div>
              <div className="text-xl font-black text-amber mt-1">1,535%</div>
              <div className="text-xs text-muted">Adani growth</div>
            </div>
          </div>
          <div className="mt-3 text-xs font-bold text-red">View wealth data & graphs →</div>
        </Link>
      </div>

      {/* WHAT ELSE CAN YOU DO */}
      <div className="mb-8">
        <Link to="/what-else"
          className="block p-5 rounded-xl transition-all hover:border-amber"
          style={{ background: '#0d0900', border: '0.5px solid #2a1800' }}>
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-2">16 Practical Steps</p>
          <h3 className="text-lg font-black text-offwhite mb-1">What else can you do?</h3>
          <p className="text-xs text-muted leading-relaxed mb-3">
            Non-violent, practical acts of consumer non-cooperation — beyond just knowing.
          </p>
          <div className="text-xs font-bold text-amber">Read the 16 steps →</div>
        </Link>
      </div>

      {/* MORE EMPIRES COMING */}
      <div className="mb-8">
        <div className="p-5 rounded-xl" style={{ background: '#111', border: '0.5px solid #1e1e1e' }}>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Coming Soon</p>
          <h3 className="text-base font-black text-offwhite mb-2">More Empires Being Mapped</h3>
          <p className="text-xs text-muted leading-relaxed mb-4">
            A1 and A2 are the biggest — but concentration of power in India goes deeper.
            We are currently researching and verifying:
          </p>
          <div className="flex flex-col gap-2">
            {[
              { name: 'Tata Group', note: 'A3 — Retail, Airlines, Tech, Defence, Media' },
              { name: 'Aditya Birla Group', note: 'A4 — Cement, Telecom (Vi), Fashion, Finance' },
              { name: 'Bajaj / Mahindra', note: 'Finance, Auto, Defence' },
              { name: 'Times Group / TV Today', note: 'Media concentration mapping' },
            ].map(e => (
              <div key={e.name} className="flex items-center gap-3 py-2"
                style={{ borderBottom: '0.5px solid #1a1a1a' }}>
                <div className="w-2 h-2 rounded-full bg-muted flex-shrink-0" style={{ background: '#333' }} />
                <div>
                  <span className="text-sm font-bold text-offwhite/50">{e.name}</span>
                  <span className="text-xs text-muted ml-2">{e.note}</span>
                </div>
                <span className="ml-auto text-xs text-muted">Soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

