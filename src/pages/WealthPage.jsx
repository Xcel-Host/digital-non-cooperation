import { useState } from 'react'
import { Link } from 'react-router-dom'
import SourceChip from '../components/SourceChip'
import Footer from '../components/Footer'

// ── DATA ─────────────────────────────────────────────────────
// Forbes year-end estimates, $ billions. Sources on the page.
const wealthData = [
  { year: '2014', ambani: 18.6, adani: 7.1 },
  { year: '2016', ambani: 19.3, adani: 9.7 },
  { year: '2018', ambani: 40.1, adani: 11.9 },
  { year: '2020', ambani: 88.7, adani: 25.2 },
  { year: '2022', ambani: 90.8, adani: 92.6 },
  { year: '2024', ambani: 119.5, adani: 116.0 },
]
const USD_INR = 83
// Combined growth 2014 → 2024 ≈ $209.8B → per-second pace in ₹
const GROWTH_PER_SEC_INR = (209.8e9 * USD_INR) / (10 * 365 * 24 * 3600)

// One-scale comparison, ₹ lakh crore (1 lakh crore = 1e12)
const scaleBars = [
  {
    label: 'A1 + A2 combined wealth (2024)', value: 19.5, color: '#D84B4B',
    note: '$235.5 B at ₹83/$',
    sources: [{ label: 'Business Standard (Forbes 2024)', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
  },
  {
    label: 'Union health budget (one year)', value: 0.91, color: '#5a7a9a',
    note: '≈ ₹90,000 crore', sources: [],
  },
  {
    label: 'MGNREGA budget (one year)', value: 0.86, color: '#5a7a9a',
    note: '≈ ₹86,000 crore', sources: [],
  },
  {
    label: 'Annual income of 1,000 average Indians', value: 0.0002, color: '#4a8a4a',
    note: '₹20 crore — the sliver is the point', sources: [],
  },
]

const indices = [
  {
    label: 'Global Hunger Index 2024', value: '105 / 127', sub: '\u201cSerious\u201d — score 27.3',
    sources: [{ label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' }],
  },
  {
    label: 'Wealth held by top 1% (2022-23)', value: '40.1%', sub: 'Highest on record',
    sources: [{ label: 'World Inequality Lab', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' }],
  },
  {
    label: 'Income to bottom 50%', value: '15%', sub: 'Top 10% take ~58%',
    sources: [{ label: 'Scroll.in (WIR 2026)', url: 'https://scroll.in/latest/1089182/inequality-in-india-among-highest-in-the-world-top-1-holds-40-wealth-study' }],
  },
  {
    label: 'Exited multidimensional poverty', value: '24.82 cr', sub: '2013-14 → 2022-23 (govt data)',
    sources: [{ label: 'Down To Earth (NITI Aayog)', url: 'https://www.downtoearth.org.in/governance/as-told-to-parliament-march-26-2025-global-hunger-index-flawed-says-centre' }],
  },
]

const policyFacts = [
  {
    title: 'Corporate tax cut (Sep 2019)', value: '₹1.45 lakh crore / year',
    detail: 'Rate cut from 30% to 22% (15% for new manufacturing). The finance minister put the annual revenue foregone at ₹1.45 lakh crore.',
    sources: [
      { label: 'Business Today', url: 'https://www.businesstoday.in/latest/economy-politics/story/nirmala-sitharaman-finance-minister-slash-corporate-tax-rate-domestic-firms-227683-2019-09-20' },
      { label: 'The Wire', url: 'https://thewire.in/macro/nirmala-sitharaman-corporate-tax-cuts' },
    ],
  },
  {
    title: 'Wilful defaults — Indian banks (2023)', value: '₹3.16 lakh crore',
    detail: 'RBI data on wilful defaults — roughly 3.5 years of the entire MGNREGA budget.',
    sources: [],
  },
]

function fmtSeconds(s) {
  if (s < 60) return `${Math.round(s)} seconds`
  if (s < 3600) return `${Math.round(s / 60)} minutes`
  return `${(s / 3600).toFixed(1)} hours`
}

export default function WealthPage({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const statBg = isDark ? '#111' : '#fafaf6'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'
  const card = { background: cardBg, border: `0.5px solid ${border}`, borderRadius: 14, padding: 20, marginBottom: 14 }

  const [incomeLakh, setIncomeLakh] = useState(5)
  const incomeINR = incomeLakh * 1e5
  const seconds = incomeINR / GROWTH_PER_SEC_INR
  const yearsForOneDay = Math.round((GROWTH_PER_SEC_INR * 86400) / incomeINR)
  const maxWealth = 130
  const maxBar = 19.5

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 py-10">

        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 8 }}>
          Their wealth · Your country
        </p>
        <h1 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-1px', color: textColor, marginBottom: 6 }}>
          Numbers too big to feel — until you use your own salary
        </h1>
        <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, maxWidth: 620, marginBottom: 24 }}>
          Billions don't mean anything to a human brain. Time does. Every figure below carries a source link — and where a source is still being verified, you'll see a pending chip instead of a silent claim.
        </p>

        {/* ── CALCULATOR ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Your salary vs their wealth growth (2014–2024 pace)
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <label style={{ fontSize: 13, color: muted, whiteSpace: 'nowrap' }}>Your yearly income</label>
            <input type="range" min="1" max="50" step="1" value={incomeLakh}
              onChange={e => setIncomeLakh(parseInt(e.target.value, 10))}
              style={{ flex: 1, minWidth: 140, accentColor: '#D84B4B' }} />
            <span style={{ fontSize: 15, fontWeight: 800, color: textColor, minWidth: 80, textAlign: 'right' }}>₹{incomeLakh} lakh</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
            <div style={{ background: isDark ? '#150505' : '#fff5f5', border: `0.5px solid ${isDark ? '#2e0f0f' : '#fcc'}`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 11.5, color: '#D84B4B', marginBottom: 4, lineHeight: 1.4 }}>Their combined wealth grew by your annual income every</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: textColor }}>{fmtSeconds(seconds)}</p>
            </div>
            <div style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 11.5, color: muted, marginBottom: 4, lineHeight: 1.4 }}>Years you'd work to match one day of that growth</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: textColor }}>{yearsForOneDay.toLocaleString('en-IN')} years</p>
            </div>
          </div>
          <p style={{ fontSize: 10.5, color: muted, marginTop: 10 }}>
            Basis: combined Forbes net worth $25.7 B (2014) → $235.5 B (2024), converted at ₹83/$. Net worth growth is not income — it's the rise in what they own — but it's the scale your purchases feed into.
          </p>
        </div>

        {/* ── ONE-SCALE BARS ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
            One unit, one scale — ₹ lakh crore
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {scaleBars.map((b, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12.5, color: textColor, fontWeight: 600 }}>{b.label}</span>
                  <span style={{ fontSize: 12, color: muted }}>{b.value >= 0.01 ? `₹${b.value} lakh crore` : b.note}</span>
                </div>
                <div style={{ height: 16, background: statBg, borderRadius: 8, border: `0.5px solid ${border}`, overflow: 'hidden' }}>
                  <div style={{ width: `${Math.max((b.value / maxBar) * 100, 0.4)}%`, height: '100%', background: b.color }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 10.5, color: muted }}>{b.value >= 0.01 ? b.note : ''}</span>
                  <SourceChip sources={b.sources} isDark={isDark} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#e8950a', fontWeight: 600, marginTop: 12 }}>
            The last sliver is drawn at minimum visible width — at true scale it would be invisible. That gap is the message.
          </p>
        </div>

        {/* ── DECADE CHART ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
            The decade, year by year ($ billions, Forbes)
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 180, marginBottom: 8 }}>
            {wealthData.map(d => (
              <div key={d.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 0, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, width: '100%', height: '100%', justifyContent: 'center' }}>
                  <div title={`Ambani $${d.ambani}B`} style={{ width: '38%', maxWidth: 26, height: `${(d.ambani / maxWealth) * 100}%`, background: '#D84B4B', borderRadius: '3px 3px 0 0' }} />
                  <div title={`Adani $${d.adani}B`} style={{ width: '38%', maxWidth: 26, height: `${(d.adani / maxWealth) * 100}%`, background: '#F59E0B', borderRadius: '3px 3px 0 0' }} />
                </div>
                <span style={{ fontSize: 10, color: muted, marginTop: 6 }}>{d.year}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: muted }}><span style={{ display: 'inline-block', width: 10, height: 10, background: '#D84B4B', borderRadius: 2, marginRight: 5 }} />A1 Ambani</span>
            <span style={{ fontSize: 11, color: muted }}><span style={{ display: 'inline-block', width: 10, height: 10, background: '#F59E0B', borderRadius: 2, marginRight: 5 }} />A2 Adani</span>
          </div>
          <p style={{ fontSize: 11.5, color: textColor, lineHeight: 1.5, background: statBg, border: `0.5px solid ${border}`, borderRadius: 8, padding: 10 }}>
            Where is the average Indian on this chart? At ~$2,400/year, the bar would be <strong>0.0008 pixels tall</strong>. It cannot be drawn. That invisible bar is 140 crore people.
          </p>
          <div style={{ marginTop: 10 }}>
            <SourceChip isDark={isDark} sources={[
              { label: 'Forbes 2024 (BS)', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' },
              { label: 'Forbes 2021 (BS)', url: 'https://www.business-standard.com/amp/article/companies/at-93-bn-net-worth-mukesh-ambani-tops-2021-forbes-list-of-india-s-richest-121100700433_1.html' },
            ]} />
          </div>
        </div>

        {/* ── INDICES ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Meanwhile — India's indices (including the government's counterpoint)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
            {indices.map((x, i) => (
              <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 12 }}>
                <p style={{ fontSize: 11, color: muted, marginBottom: 4, lineHeight: 1.3 }}>{x.label}</p>
                <p style={{ fontSize: 21, fontWeight: 900, color: textColor }}>{x.value}</p>
                <p style={{ fontSize: 10.5, color: muted, margin: '2px 0 8px' }}>{x.sub}</p>
                <SourceChip sources={x.sources} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        {/* ── POLICY FACTS ── */}
        <div style={card}>
          <p style={{ fontSize: 12, fontWeight: 700, color: muted, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Public money, documented
          </p>
          <div style={{ display: 'grid', gap: 10 }}>
            {policyFacts.map((f, i) => (
              <div key={i} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: textColor }}>{f.title}</p>
                  <p style={{ fontSize: 13, fontWeight: 900, color: '#D84B4B' }}>{f.value}</p>
                </div>
                <p style={{ fontSize: 12, color: muted, lineHeight: 1.5, marginBottom: 8 }}>{f.detail}</p>
                <SourceChip sources={f.sources} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/person/modi" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: cardBg, color: textColor, border: `0.5px solid ${border}` }}>
            Said vs record — the Modi page →
          </Link>
          <Link to="/alternatives" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: '#D84B4B', color: '#fff' }}>
            What you can switch today →
          </Link>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
