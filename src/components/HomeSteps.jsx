import { Link } from 'react-router-dom'

const steps = [
  { num: '1', color: 'bg-red text-white', title: 'Know the Empires', desc: 'Explore how Ambani and Adani control key sectors.' },
  { num: '2', color: 'bg-amber text-black', title: 'Explore Sectors', desc: 'See the brands, products and companies.' },
  { num: '3', color: 'bg-green-700 text-white', title: 'Choose Alternatives', desc: 'Real options. Real impact.' },
  { num: '4', color: 'bg-blue-700 text-white', title: 'Take Action Silently', desc: 'Boycott what you can. Support what\'s right.' },
  { num: '5', color: 'bg-purple-700 text-white', title: 'Build a Movement', desc: 'Millions of small acts create big change.' },
]

const sectors = [
  { icon: '📶', name: 'Telecom' },
  { icon: '🛒', name: 'Retail' },
  { icon: '📺', name: 'Media & News' },
  { icon: '🎬', name: 'Streaming' },
  { icon: '⚡', name: 'Energy & Power' },
  { icon: '📦', name: 'Consumer Goods' },
  { icon: '💻', name: 'Digital Services' },
  { icon: '👗', name: 'Fashion' },
  { icon: '🏦', name: 'Finance' },
  { icon: '✈️', name: 'Infrastructure' },
  { icon: '🏗️', name: 'Cement' },
  { icon: '🌾', name: 'Food & FMCG' },
]

export default function HomeSteps() {
  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* HOW IT WORKS */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-4">How it works</p>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {steps.map(s => (
            <div
              key={s.num}
              className="flex-shrink-0 w-36 rounded-xl p-3"
              style={{ background: '#1A1A1F', border: '0.5px solid #222' }}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mb-2 ${s.color}`}>
                {s.num}
              </div>
              <div className="text-xs font-bold text-offwhite mb-1 leading-tight">{s.title}</div>
              <div className="text-xs text-[#aaa] leading-snug">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: CHOOSE EMPIRE */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">Step 1: The Two Empires</h2>
        <p className="text-xs text-[#aaa] mb-4">Most of what you use daily is connected to these two.</p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* A1 */}
          <Link
            to="/explore/reliance"
            className="relative rounded-xl p-4 transition-all hover:border-red group"
            style={{ background: '#150505', border: '0.5px solid #2e0f0f' }}
          >
            <div className="inline-block text-xs font-black px-2 py-0.5 rounded mb-2 bg-red text-white">A1</div>
            <div className="text-lg font-black text-offwhite mb-1">Ambani Empire</div>
            <div className="text-xs text-[#aaa] leading-relaxed">
              Telecom · Retail · Media · Digital<br />Energy · Fashion · Finance
            </div>
            <span className="absolute right-3 bottom-3 text-[#aaa] group-hover:text-red transition-colors">→</span>
          </Link>

          {/* A2 */}
          <Link
            to="/explore/adani"
            className="relative rounded-xl p-4 transition-all hover:border-amber group"
            style={{ background: '#0f0f00', border: '0.5px solid #252200' }}
          >
            <div className="inline-block text-xs font-black px-2 py-0.5 rounded mb-2 bg-amber text-black">A2</div>
            <div className="text-lg font-black text-offwhite mb-1">Adani Empire</div>
            <div className="text-xs text-[#aaa] leading-relaxed">
              Infrastructure · Energy · Ports<br />Airports · Media · Cement
            </div>
            <span className="absolute right-3 bottom-3 text-[#aaa] group-hover:text-amber transition-colors">→</span>
          </Link>
        </div>

        {/* Their power card */}
        <div
          className="rounded-xl p-4 text-center"
          style={{ background: '#0d0d0d', border: '0.5px solid #1a1a1a' }}
        >
          <div className="text-lg mb-1">💡</div>
          <div className="text-sm font-bold text-offwhite mb-1">Their power. Your choices.</div>
          <div className="text-xs text-[#aaa] mb-2">Every rupee you spend is a vote. Choose wisely.</div>
          <div className="text-xs text-red font-semibold">
            Concentration gives control. Control shapes prices, news, and choices.
          </div>
        </div>
      </div>

      {/* STEP 2: SECTORS */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-black tracking-tight text-offwhite">Step 2: Explore Sectors</h2>
            <p className="text-xs text-[#aaa]">Select a sector to see brands and companies.</p>
          </div>
          <Link to="/alternatives" className="text-xs font-bold text-red">View All →</Link>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {sectors.map(s => (
            <Link
              key={s.name}
              to="/alternatives"
              className="flex-shrink-0 flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all hover:border-red"
              style={{ background: '#1A1A1F', border: '0.5px solid #222', minWidth: 76 }}
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-xs text-[#aaa] text-center leading-tight font-medium">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
