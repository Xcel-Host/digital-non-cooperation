import { Link } from 'react-router-dom'

export default function HomeEmpires({ theme }) {
  const isDark = theme !== 'light'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-2">
        <h2 className="text-lg font-black tracking-tight" style={{ color: textColor }}>The Two Empires</h2>
        <p className="text-xs mt-1" style={{ color: muted }}>Tap to explore brands, sectors & alternatives</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3 mt-4">
        {/* A1 */}
        <Link to="/explore/reliance"
          className="relative rounded-xl p-4 transition-all group block"
          style={{ background: isDark ? '#150505' : '#fff8f8', border: `0.5px solid ${isDark ? '#2e0f0f' : '#fcc'}` }}>
          <div className="inline-block text-xs font-black px-2 py-0.5 rounded mb-3" style={{ background: '#D84B4B', color: '#fff' }}>A1</div>
          <div className="text-lg font-black mb-1" style={{ color: textColor }}>Ambani Empire</div>
          <div className="text-xs mb-3" style={{ color: muted }}>Mukesh Ambani</div>
          <div className="text-xs leading-relaxed" style={{ color: muted }}>
            Telecom · Retail<br />Media · Streaming<br />Fashion · Finance
          </div>
          <span className="absolute right-3 bottom-3 text-base transition-colors group-hover:text-red-500" style={{ color: isDark ? '#2a2a2a' : '#ddd' }}>→</span>
        </Link>
        <Link to="/person/ambani" className="block text-center text-xs font-semibold py-1.5 rounded-lg mt-1.5" style={{ color: '#D84B4B', background: isDark ? '#150505' : '#fff0f0', border: '0.5px solid #2e0f0f' }}>
          Who is Mukesh Ambani? →
        </Link>

        {/* A2 */}
        <Link to="/explore/adani"
          className="relative rounded-xl p-4 transition-all group block"
          style={{ background: isDark ? '#0f0f00' : '#fffef0', border: `0.5px solid ${isDark ? '#252200' : '#f5e080'}` }}>
          <div className="inline-block text-xs font-black px-2 py-0.5 rounded mb-3" style={{ background: '#F59E0B', color: '#000' }}>A2</div>
          <div className="text-lg font-black mb-1" style={{ color: textColor }}>Adani Empire</div>
          <div className="text-xs mb-3" style={{ color: muted }}>Gautam Adani</div>
          <div className="text-xs leading-relaxed" style={{ color: muted }}>
            Ports · Airports<br />Power · Cement<br />Media · Food
          </div>
          <span className="absolute right-3 bottom-3 text-base transition-colors" style={{ color: isDark ? '#2a2a2a' : '#ddd' }}>→</span>
        </Link>
        <Link to="/person/adani" className="block text-center text-xs font-semibold py-1.5 rounded-lg mt-1.5" style={{ color: '#b8860b', background: isDark ? '#0f0f00' : '#fffce0', border: '0.5px solid #252200' }}>
          Who is Gautam Adani? →
        </Link>
      </div>

      {/* Their power tip */}
      <div className="rounded-xl p-4 flex items-start gap-3"
        style={{ background: isDark ? '#111' : '#fff', border: `0.5px solid ${border}` }}>
        <span className="text-lg flex-shrink-0">💡</span>
        <div>
          <p className="text-sm font-bold mb-1" style={{ color: textColor }}>Their power. Your choices.</p>
          <p className="text-xs leading-relaxed" style={{ color: muted }}>
            Every rupee you spend is a vote. Concentration gives control — over prices, news, and choices.
          </p>
          <p className="text-xs font-semibold mt-2" style={{ color: '#D84B4B' }}>
            This affects your daily life.
          </p>
        </div>
      </div>

      {/* Real India + Election quick links */}
      <div className="grid grid-cols-1 gap-3 mt-3">
        <Link to="/real-india" className="rounded-xl p-4 block"
          style={{ background: isDark ? '#0f2418' : '#edfaf4', border: '0.5px solid #1d4030', textDecoration: 'none' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#6fcf97' }}>Real India</p>
              <p className="text-sm font-bold mb-0.5" style={{ color: textColor }}>While they got richer — how is everyone else doing?</p>
              <p className="text-xs" style={{ color: muted }}>Jobs · Hunger · Inequality · Every number sourced</p>
            </div>
            <span style={{ color: '#6fcf97', fontSize: 18 }}>→</span>
          </div>
        </Link>
        <Link to="/election-2024" className="rounded-xl p-4 block"
          style={{ background: isDark ? '#150505' : '#fff5f5', border: '0.5px solid #2e0f0f', textDecoration: 'none' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#D84B4B' }}>2024 Election</p>
              <p className="text-sm font-bold mb-0.5" style={{ color: textColor }}>Six documented concerns — and the government's answers</p>
              <p className="text-xs" style={{ color: muted }}>Turnout data · Bonds · Hate speech · EVM concerns</p>
            </div>
            <span style={{ color: '#D84B4B', fontSize: 18 }}>→</span>
          </div>
        </Link>
        <Link to="/person/modi" className="rounded-xl p-4 block"
          style={{ background: isDark ? '#111' : '#fafaf6', border: `0.5px solid ${border}`, textDecoration: 'none' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: muted }}>GOVT</p>
              <p className="text-sm font-bold mb-0.5" style={{ color: textColor }}>Modi — 10 promises checked, rules set, connections mapped</p>
              <p className="text-xs" style={{ color: muted }}>Dated, sourced, including the government's side</p>
            </div>
            <span style={{ color: muted, fontSize: 18 }}>→</span>
          </div>
        </Link>
      </div>

      {/* More empires coming */}
      <div className="rounded-xl p-4 mt-3"
        style={{ background: isDark ? '#0d0d0d' : '#f8f8f4', border: `0.5px solid ${border}` }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: muted }}>Coming soon</p>
        <p className="text-sm font-bold mb-2" style={{ color: textColor }}>More Empires Being Mapped</p>
        <div className="flex flex-wrap gap-2">
          {['Tata Group (A3)', 'Aditya Birla (A4)', 'Times Group · Media', 'Bajaj · Mahindra'].map(e => (
            <span key={e} className="text-xs px-2 py-1 rounded-lg"
              style={{ background: isDark ? '#1a1a1a' : '#eee', color: muted, border: `0.5px solid ${border}` }}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
