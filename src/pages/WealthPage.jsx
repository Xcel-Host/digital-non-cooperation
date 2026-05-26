import Footer from '../components/Footer'

// Verified wealth data from Forbes/Bloomberg
const wealthData = [
  { year: '2012', ambani: 21, adani: 3.7, avgIndian: 1.5 },
  { year: '2014', ambani: 18.6, adani: 7.1, avgIndian: 1.6 },
  { year: '2016', ambani: 19.3, adani: 9.7, avgIndian: 1.7 },
  { year: '2018', ambani: 40.1, adani: 11.9, avgIndian: 2.0 },
  { year: '2020', ambani: 88.7, adani: 25.2, avgIndian: 1.8 },
  { year: '2021', ambani: 84.5, adani: 50.5, avgIndian: 2.1 },
  { year: '2022', ambani: 90.8, adani: 92.6, avgIndian: 2.3 },
  { year: '2023', ambani: 83.4, adani: 47.2, avgIndian: 2.2 },
  { year: '2024', ambani: 119.5, adani: 116.0, avgIndian: 2.4 },
]

const keyFacts = [
  {
    icon: '📈',
    title: 'Ambani 2014 → 2024',
    value: '542%',
    detail: '$18.6B → $119.5B while India\'s average wage grew ~40% in the same period',
    color: '#D84B4B',
  },
  {
    icon: '🚀',
    title: 'Adani 2014 → 2024',
    value: '1,535%',
    detail: '$7.1B → $116B — the fastest wealth growth of any billionaire in the world in this period',
    color: '#F59E0B',
  },
  {
    icon: '🌍',
    title: 'World ranking (2024)',
    value: '#9 & #13',
    detail: 'Ambani #13 globally. Adani has been as high as #3 in the world. Both routinely in Asia\'s top 2.',
    color: '#5a9a5a',
  },
  {
    icon: '🇮🇳',
    title: 'Average Indian (2024)',
    value: '~₹2 lakh/yr',
    detail: 'Per capita income ~$2,400/year. Ambani earns more in one minute than an average Indian earns in a year.',
    color: '#4a6a8a',
  },
]

const loanWaivers = [
  { entity: 'Adani Group companies', amount: 'Multiple NPAs restructured', note: 'Hindenburg report (2023) alleged financial irregularities; Supreme Court ordered SEBI probe' },
  { entity: 'Reliance Industries', amount: 'Zero net debt pledge (2021)', note: 'Raised $35B through deals to clear debt — many PSU banks held this debt at preferential rates' },
  { entity: 'Corporate tax cut (2019)', amount: '₹1.45 lakh crore annual benefit', note: 'Modi govt cut corporate tax from 30% to 22% — largest beneficiaries were large conglomerates' },
  { entity: 'Wilful defaulters — Indian banks', amount: '₹3.16 lakh crore (2023)', note: 'RBI data: ₹3.16 lakh crore in wilful defaults — money that could fund MGNREGA for 30 years' },
]

export default function WealthPage() {
  const maxWealth = 130

  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest text-red uppercase mb-3">
          Data · Verified · Forbes / Bloomberg
        </p>
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">
          Their Wealth. Your Life.
        </h1>
        <p className="text-sm text-[#aaa] mb-8 leading-relaxed max-w-xl">
          How much have A1 and A2 grown since 2014 — and what did average Indians earn in the same period?
          The gap tells you everything.
        </p>

        {/* Key facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {keyFacts.map(f => (
            <div key={f.title} className="rounded-xl p-5"
              style={{ background: '#1A1A1F', border: '0.5px solid #222' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{f.icon}</span>
                <span className="text-xs text-[#aaa] font-medium">{f.title}</span>
              </div>
              <div className="text-3xl font-black tracking-tight mb-2" style={{ color: f.color }}>
                {f.value}
              </div>
              <p className="text-xs text-[#aaa] leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="mb-10">
          <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">
            Net Worth Growth (USD Billion)
          </h2>
          <p className="text-xs text-[#aaa] mb-6">Source: Forbes India Rich List, Bloomberg Billionaires Index</p>

          <div className="space-y-3">
            {wealthData.map(d => (
              <div key={d.year}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#aaa] w-8">{d.year}</span>
                  <div className="flex-1 flex flex-col gap-1">
                    {/* Ambani bar */}
                    <div className="flex items-center gap-2">
                      <div className="w-4 text-xs text-red font-bold">A1</div>
                      <div className="flex-1 h-4 rounded-full overflow-hidden"
                        style={{ background: '#1a0505' }}>
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${(d.ambani / maxWealth) * 100}%`, background: '#D84B4B' }} />
                      </div>
                      <span className="text-xs text-red font-bold w-12 text-right">${d.ambani}B</span>
                    </div>
                    {/* Adani bar */}
                    <div className="flex items-center gap-2">
                      <div className="w-4 text-xs text-amber font-bold">A2</div>
                      <div className="flex-1 h-4 rounded-full overflow-hidden"
                        style={{ background: '#0f0f00' }}>
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${(d.adani / maxWealth) * 100}%`, background: '#F59E0B' }} />
                      </div>
                      <span className="text-xs text-amber font-bold w-12 text-right">${d.adani}B</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-lg text-xs text-[#aaa]"
            style={{ background: '#111', border: '0.5px solid #1e1e1e' }}>
            📌 Average Indian per capita income in 2024: ~$2,400/year (~$0.0000024B).
            Ambani's 2024 net worth = 49,791 times the average Indian annual income.
          </div>
        </div>

        {/* Modi era comparison */}
        <div className="mb-10 p-5 rounded-xl"
          style={{ background: '#0d0000', border: '0.5px solid #2e0f0f' }}>
          <p className="text-xs font-bold text-red uppercase tracking-widest mb-3">
            The Modi Era (2014–2024)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Ambani wealth growth', value: '+542%', sub: '$18.6B → $119.5B' },
              { label: 'Adani wealth growth', value: '+1,535%', sub: '$7.1B → $116B' },
              { label: 'Average Indian wage growth', value: '+40%', sub: '₹12,000 → ₹16,800/month (approx)' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-xs text-[#aaa] mb-1">{s.label}</p>
                <p className="text-2xl font-black text-red">{s.value}</p>
                <p className="text-xs text-[#aaa] mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tax & loans section */}
        <div className="mb-10">
          <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">
            Tax Cuts & Loan Write-offs
          </h2>
          <p className="text-xs text-[#aaa] mb-5 leading-relaxed">
            While wealth grew, public money subsidised the system.
          </p>
          <div className="flex flex-col gap-3">
            {loanWaivers.map(l => (
              <div key={l.entity} className="p-4 rounded-xl"
                style={{ background: '#1A1A1F', border: '0.5px solid #222' }}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="text-sm font-bold text-offwhite">{l.entity}</p>
                  <span className="text-xs font-bold text-amber flex-shrink-0">{l.amount}</span>
                </div>
                <p className="text-xs text-[#aaa] leading-relaxed">{l.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Asia richest timeline */}
        <div className="mb-10">
          <h2 className="text-lg font-black tracking-tight text-offwhite mb-1">
            Asia's Richest Person Timeline
          </h2>
          <p className="text-xs text-[#aaa] mb-5">When Indians topped Asia's wealth rankings</p>
          <div className="flex flex-col gap-2">
            {[
              { year: '2012–2021', person: 'Mukesh Ambani', rank: 'Asia #1', note: 'Consistent Asia richest' },
              { year: 'Feb 2022', person: 'Gautam Adani', rank: 'Asia #1', note: 'First time Adani overtook Ambani' },
              { year: 'Jan 2023', person: 'Mukesh Ambani', rank: 'Asia #1', note: 'After Hindenburg report crashed Adani stocks' },
              { year: 'Jan 2024', person: 'Gautam Adani', rank: 'Asia #1', note: 'Reclaimed after Supreme Court no new probe order' },
              { year: '2024', person: 'Both', rank: 'Neck and neck', note: 'Both oscillating between #1 and #2 in Asia' },
            ].map(t => (
              <div key={t.year} className="flex items-start gap-4 py-2"
                style={{ borderBottom: '0.5px solid #111' }}>
                <span className="text-xs text-[#aaa] w-24 flex-shrink-0 font-mono">{t.year}</span>
                <div>
                  <span className="text-sm font-bold text-offwhite">{t.person} </span>
                  <span className="text-xs text-amber font-bold">{t.rank}</span>
                  <p className="text-xs text-[#aaa] mt-0.5">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-5 rounded-xl" style={{ background: '#080600', border: '0.5px solid #1e1800' }}>
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-2">The Point</p>
          <p className="text-sm text-[#ddd] leading-loose">
            This is not about jealousy of wealth. It is about the <strong className="text-offwhite">concentration</strong> of wealth,
            its connection to political power, and how it shapes what you pay for electricity,
            internet, cement, groceries, and news.
            <br /><br />
            <strong className="text-amber">Every rupee you redirect is a vote against this concentration.</strong>
          </p>
        </div>

        <p className="text-xs text-[#aaa] mt-6 leading-relaxed">
          Sources: Forbes India Rich List (2012–2024), Bloomberg Billionaires Index, Hurun India Rich List 2024,
          RBI Annual Report 2023, Ministry of Finance corporate tax data.
        </p>
      </div>
      <Footer />
    </main>
  )
}
