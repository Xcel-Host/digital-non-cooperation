import { Link } from 'react-router-dom'
import SourceChip from '../components/SourceChip'
import Footer from '../components/Footer'

// ── REAL INDIA — the country's report card, in plain words ──
// Rule: every number has a source chip. Government's side included.

const sections = [
  {
    title: 'Jobs',
    icon: '💼',
    cards: [
      {
        big: '45-year high',
        text: 'In 2017-18, unemployment hit 6.1% — the worst since the 1970s, by the government\u2019s own survey. The report was held back at first; the statistics chief resigned in protest.',
        sources: [{ label: 'Scroll.in', url: 'https://scroll.in/article/1063428/a-decade-under-modi-rising-unemployment-declining-wages-poor-quality-jobs' }],
      },
      {
        big: '22 crore applied, 7 lakh got in',
        text: 'The government told Parliament in 2022: over 8 years, 22 crore people applied for central government jobs. About 7 lakh got one. That is roughly 1 job for every 300 applicants.',
        sources: [{ label: 'Deccan Herald', url: 'https://www.deccanherald.com/amp/story/india%2Fmodis-guarantee-is-guarantee-of-unemployment-priyanka-gandhi-2879014' }],
      },
    ],
  },
  {
    title: 'Hunger & food',
    icon: '🍚',
    cards: [
      {
        big: '105 / 127',
        text: 'India\u2019s rank on the 2024 Global Hunger Index — the \u201cserious\u201d category. Bangladesh, Nepal and Sri Lanka all rank better. 35.5% of Indian children under five are too short for their age because of poor nutrition.',
        sources: [{ label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' }],
      },
      {
        big: 'Govt\u2019s side: 24.82 crore',
        text: 'The government rejects the hunger index, calling its method flawed. Its own data says 24.82 crore people came out of poverty between 2013-14 and 2022-23. Both numbers are real — read both sources.',
        sources: [{ label: 'Down To Earth (Parliament reply)', url: 'https://www.downtoearth.org.in/governance/as-told-to-parliament-march-26-2025-global-hunger-index-flawed-says-centre' }],
      },
    ],
  },
  {
    title: 'The wealth gap',
    icon: '⚖️',
    cards: [
      {
        big: '₹40 of every ₹100',
        text: 'That\u2019s how much of India\u2019s wealth the richest 1% own. The highest ever recorded — higher than under British rule, say economists at the World Inequality Lab.',
        sources: [{ label: 'World Inequality Lab', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' }],
      },
      {
        big: '₹15 of every ₹100',
        text: 'When all Indians earn ₹100 together, the poorer half of the country — about 70 crore people — share just ₹15 of it. The top 10% take about ₹58.',
        sources: [{ label: 'Scroll.in (WIR 2026)', url: 'https://scroll.in/latest/1089182/inequality-in-india-among-highest-in-the-world-top-1-holds-40-wealth-study' }],
      },
      {
        big: '~₹2 lakh / year',
        text: 'The average Indian adult\u2019s income (2021 figures). A1\u2019s wealth grew by this amount roughly every 9 seconds over the last decade. Try your own number on the wealth page.',
        sources: [{ label: 'The Asian Age (WIR 2022)', url: 'https://www.pressreader.com/india/the-asian-age/20211208/282802129634934' }],
      },
    ],
  },
  {
    title: 'Money & politics',
    icon: '🗳️',
    cards: [
      {
        big: '₹6,060 crore',
        text: 'What the ruling BJP received through \u201celectoral bonds\u201d — a secret-donation scheme its own government created. The Supreme Court struck the scheme down in 2024 as unconstitutional: voters have a right to know who funds parties.',
        sources: [
          { label: 'Tribune India', url: 'https://www.tribuneindia.com/news/india/unconstitutional-sc-junks-electoral-bonds-scheme-seeks-info-on-donors-591168' },
          { label: 'India TV (data)', url: 'https://www.indiatvnews.com/explainers/electoral-bonds-data-bjp-biggest-beneficiary-followed-by-tmc-congress-complete-list-political-parties-election-commission-sbi-supreme-court-2024-03-15-921619' },
        ],
      },
      {
        big: '94% in ₹1 crore notes',
        text: 'Almost all electoral bond money came in the biggest denomination — ₹1 crore each. This was not small donors. It was companies buying influence, the court data showed.',
        sources: [{ label: 'The Hindu', url: 'https://www.pressreader.com/india/the-hindu-kolkata-9WW9/20240311/281612425369185' }],
      },
      {
        big: '₹1.45 lakh crore / year',
        text: 'What the government gives up every year since the 2019 corporate tax cut — the finance minister\u2019s own number. That is more than India\u2019s entire yearly health budget, given up every single year.',
        sources: [{ label: 'Business Today', url: 'https://www.businesstoday.in/latest/economy-politics/story/nirmala-sitharaman-finance-minister-slash-corporate-tax-rate-domestic-firms-227683-2019-09-20' }],
      },
    ],
  },
]

export default function RealIndia({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const statBg = isDark ? '#111' : '#fafaf6'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 py-10">

        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 8 }}>
          The Real India
        </p>
        <h1 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-1px', color: textColor, marginBottom: 6 }}>
          Two empires got richer. How is everyone else doing?
        </h1>
        <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, maxWidth: 620, marginBottom: 8 }}>
          This is India's report card. Every number links to its source. Where the government disagrees, we show its answer too — you decide who to believe.
        </p>
        <p style={{ fontSize: 12, color: '#e8950a', fontWeight: 600, marginBottom: 24 }}>
          Simple rule: if a card has no source link yet, it shows a "source pending" tag — we never hide that.
        </p>

        {sections.map((sec, si) => (
          <div key={si} style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 14, padding: 20, marginBottom: 14 }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: textColor, marginBottom: 14 }}>
              <span style={{ marginRight: 8 }}>{sec.icon}</span>{sec.title}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
              {sec.cards.map((c, ci) => (
                <div key={ci} style={{ background: statBg, border: `0.5px solid ${border}`, borderRadius: 10, padding: 14 }}>
                  <p style={{ fontSize: 20, fontWeight: 900, color: c.big.startsWith('Govt') ? '#4a8a4a' : textColor, marginBottom: 6, lineHeight: 1.2 }}>{c.big}</p>
                  <p style={{ fontSize: 12.5, color: muted, lineHeight: 1.6, marginBottom: 10 }}>{c.text}</p>
                  <SourceChip sources={c.sources} isDark={isDark} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/wealth" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: cardBg, color: textColor, border: `0.5px solid ${border}` }}>
            Compare with their wealth →
          </Link>
          <Link to="/person/modi" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: cardBg, color: textColor, border: `0.5px solid ${border}` }}>
            Who made the rules →
          </Link>
          <Link to="/alternatives" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: '#D84B4B', color: '#fff' }}>
            What you can do today →
          </Link>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
