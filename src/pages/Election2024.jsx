import { useState } from 'react'
import { Link } from 'react-router-dom'
import SourceChip from '../components/SourceChip'
import Footer from '../components/Footer'

// ─────────────────────────────────────────────────────────────
// IMPORTANT: This page documents concerns RAISED BY NGOs,
// civil society, and international watchdogs. Each cluster
// includes the Election Commission's or government's response.
// No conclusion is stated — read the sources yourself.
// Source: ADR filings, HRW, Amnesty, CIVICUS, US State Dept.
// ─────────────────────────────────────────────────────────────

const clusters = [
  {
    id: 'turnout',
    title: 'Voter turnout data — delays and unexplained spikes',
    tag: 'Data',
    tagColor: '#7fb0ff',
    summary: 'The watchdog ADR found turnout figures rose 5–6% between election-day estimates and final published numbers, published 11 days late.',
    detail: `What NGOs raised: India's main election watchdog, the Association for Democratic Reforms (ADR), filed a Supreme Court application noting:
• The Election Commission took 11 days to publish final turnout data for Phase 1 (voting April 19; data released April 30).
• Turnout figures increased by 5–6% between polling-day estimates and the final numbers.
• The "Vote for Democracy" coalition estimated 5 crore votes were added between first and final count.
• ADR's post-election report (July 29, 2024) found 5,89,691 discrepancies between votes polled and votes counted across 538 constituencies.

ECI response: The ECI told the Supreme Court the spike reflected inclusion of postal ballots in final counts, called ADR's concerns "unfounded suspicions," and argued immediate publication would "cause confusion." The Supreme Court declined to order immediate publication during the election.

Status: ADR filed a further Supreme Court application in August 2024. Matter listed for hearing March 10, 2026.`,
    sources: [
      { label: 'ADR SC application summary', url: 'https://adrindia.org/content/judgment-and-petition' },
      { label: 'ADR post-election discrepancy report', url: 'https://adrindia.org/content/report-reveals-vote-count-discrepancies-2024-lok-sabha-elections' },
      { label: 'ADR transparency concerns', url: 'https://adrindia.org/content/eci-faces-ire-over-lack-transparency-and-discrepancy-poll-data-poll-body-dismisses' },
      { label: 'Deccan Herald (Congress on 1.07 cr discrepancy)', url: 'https://www.deccanherald.com/amp/story/elections%2Findia%2Flok-sabha-elections-2024-congress-questions-delay-in-release-of-voter-turnout-data-by-ec-3033543.html' },
      { label: 'DD News (SC declined interim relief)', url: 'https://ddnews.gov.in/en/supreme-court-declines-to-direct-election-commission-to-publish-data-of-votes-polled-per-booth/' },
    ],
  },
  {
    id: 'bonds',
    title: 'Electoral bonds — secret donations, unconstitutional ruling',
    tag: 'Money',
    tagColor: '#f5c34b',
    summary: 'The Supreme Court struck down the secret political-donation scheme as unconstitutional. Forced data showed BJP received ₹6,060+ crore — over half of all bond money.',
    detail: `What happened: The Supreme Court on February 15, 2024 — just weeks before voting began — struck down the Electoral Bond scheme as unconstitutional, ruling it violated voters' right to information.

Key numbers from the forced disclosure:
• Total bonds: ₹16,000+ crore (~$2 billion) donated secretly between 2018 and 2024.
• BJP received ₹6,060+ crore — over 57% of the total.
• 94% of all bond money came in ₹1 crore denominations — large-company money, not small donors.
• Civil society lawyers flagged apparent quid pro quo: over 15 of the top 30 corporate donors were reportedly under investigation by ED or CBI at the time of purchase.

Government response: FM Nirmala Sitharaman dismissed quid pro quo claims as "assumptions." BJP said the scheme was legal when it operated. The Supreme Court later (August 2, 2024) declined to order confiscation of bonds already received.`,
    sources: [
      { label: 'ADR analysis of SC verdict', url: 'https://adrindia.org/content/democratizing-elections-supreme-court-india%E2%80%99s-landmark-verdict-electoral-bonds' },
      { label: 'Al Jazeera (SC verdict)', url: 'https://www.aljazeera.com/news/2024/2/15/indias-supreme-court-scraps-electoral-bonds-calls-it-unconstitutional' },
      { label: 'Tribune India (verdict text)', url: 'https://www.tribuneindia.com/news/india/unconstitutional-sc-junks-electoral-bonds-scheme-seeks-info-on-donors-591168' },
      { label: 'BBC (donor data breakdown)', url: 'https://feeds.bbci.co.uk/news/world-asia-india-68509410' },
      { label: 'India TV (party-wise totals)', url: 'https://www.indiatvnews.com/explainers/electoral-bonds-data-bjp-biggest-beneficiary-followed-by-tmc-congress-complete-list-political-parties-election-commission-sbi-supreme-court-2024-03-15-921619' },
      { label: 'Tribune India (SC review dismissed)', url: 'https://www.tribuneindia.com/news/india/electoral-bonds-sc-junks-petition-seeking-review-of-its-order-against-confiscation-of-donations-received-by-political-parties' },
    ],
  },
  {
    id: 'hatespeech',
    title: 'Hate speech and Model Code of Conduct violations',
    tag: 'Campaign',
    tagColor: '#D84B4B',
    summary: 'India Hate Lab documented 1,165 hate-speech instances in 2024 — a 74% spike. A third happened during the campaign. The ECI issued notices but no bans.',
    detail: `What NGOs raised:

Modi's Banswara rally (April 21, 2024): Modi referred to Muslims as "infiltrators" who would benefit from Congress redistribution plans and warned Congress would seize Hindu women's "mangalsutra." Two formal ECI complaints were filed.

India Hate Lab (Washington): Documented 1,165 instances of hate speech against minorities in 2024 — a 74% spike over 2023. A third occurred during the election campaign (March 16–June 1). 98.5% targeted Muslims. Politicians including the PM and Home Minister were named as "most frequent purveyors."

Human Rights Watch: Documented over 110 Islamophobic statements by leaders during the campaign period.

PUCL open letter to ECI (May 2024): Said BJP candidates and star campaigners — "including the Prime Minister" — made flagrant violations through religious appeals, while the ECI took no effective action.

ECI/BJP response: ECI issued notices to both BJP (over Modi's speech) and Congress (over Rahul Gandhi's alleged false claim about poverty) — stopping short of any ban. BJP rejected "anti-India reports." The ECI said it acted impartially.`,
    sources: [
      { label: 'Alt News (Banswara speech)', url: 'https://www.altnews.in/hate-speech-by-modi-at-banswara-pm-villainizes-muslims-yet-again/' },
      { label: 'Al Jazeera ("infiltrators" accusation)', url: 'https://www.aljazeera.com/news/2024/4/22/infiltrators-modi-accused-of-anti-muslim-hate-speech-amid-india-election' },
      { label: 'PBS/AP (hate speech report)', url: 'https://www.pbs.org/newshour/world/modi-accused-of-hate-speech-for-calling-muslims-infiltrators-at-indian-election-rally' },
      { label: 'BBC (India Hate Lab 74% spike)', url: 'https://feeds.bbci.co.uk/news/articles/cpwx9942x72o' },
      { label: 'PUCL open letter to ECI', url: 'https://pucl.org/manage-writings/open-letter-to-election-commission-of-india-on-concerns-regarding-the-conduct-of-the-lok-sabha-elections-2024/' },
      { label: 'Deccan Herald (ECI notice to both sides)', url: 'https://www.deccanherald.com/amp/story/elections%2Findia%2Flok-sabha-elections-2024-ec-takes-cognisance-of-mcc-violation-by-modi-rahul-seeks-response-by-april-29-2994057.html' },
    ],
  },
  {
    id: 'ngocrackdown',
    title: 'NGO and press crackdown before the election',
    tag: 'Civil society',
    tagColor: '#888',
    summary: '21,933 NGOs have lost their foreign-funding licences (FCRA). Amnesty India was forced to shut down in 2020 and had not resumed. Multiple international watchdogs rated India\'s civic space "Repressed."',
    detail: `What international organisations documented:

FCRA crackdowns: As of March 2026, official data shows 21,933 organisations had lost FCRA (foreign-funding) licences. Five prominent NGOs lost licences in April 2024 — during the election itself. Amnesty International India was forced to shut operations in 2020 after government froze its accounts; it had not resumed India operations by election day.

Human Rights Watch (Feb 8, 2024): CBI raided activist Harsh Mander's home and offices weeks before the election. Over 250 scholars condemned the raid.

CIVICUS Monitor: Rated India's civic space as "Repressed" ahead of elections. Cited government crackdown on civil society and use of anti-terror laws (UAPA) to keep activists imprisoned.

US State Department Country Report 2024: Described a "climate of self-censorship and fear" among NGOs. Cited HRW's report of at least 34 journalists attacked, 5 arrested, and 175+ social media accounts and web links blocked.

Government response: GoI frames FCRA enforcement as preventing foreign interference in Indian democracy. BJP rejects characterisations of crackdown as politically motivated.`,
    sources: [
      { label: 'Human Rights Watch (Feb 2024)', url: 'https://www.hrw.org/news/2024/02/08/india-laws-misused-crack-down-peaceful-dissent' },
      { label: 'CIVICUS Monitor (pre-election)', url: 'https://monitor.civicus.org/explore/india-crackdown-on-the-opposition-divisive-rhetoric-and-targeting-of-activists-and-critics-persists-around-the-elections/' },
      { label: 'Amnesty International (FCRA charter)', url: 'https://www.amnesty.org/en/wp-content/uploads/2024/06/ASA2081542024ENGLISH.pdf' },
      { label: 'Amnesty International (Mar 2026 report)', url: 'https://www.amnesty.org/en/latest/news/2026/03/india-parliament-must-reject-proposal-to-extend-restrictions-on-overseas-funding-for-ngos/' },
      { label: 'Joint statement: HRW + Amnesty + others (Aug 2024)', url: 'https://www.amnesty.org/en/latest/research/2024/08/joint-statement-eu-should-press-india-to-end-rights-abuses/' },
      { label: 'US State Dept Country Report (India 2024)', url: 'https://www.state.gov/reports/2024-country-reports-on-human-rights-practices/india/' },
    ],
  },
  {
    id: 'evm',
    title: 'EVM integrity concerns',
    tag: 'EVMs',
    tagColor: '#9aa4b2',
    summary: 'Multiple parties raised EVM concerns. No verified technical evidence of tampering exists. ADR documented a separate data-reconciliation issue: 5.89 lakh discrepancies between votes polled and counted.',
    detail: `Important note: EVM tampering claims are disputed and have NOT been substantiated with verified technical evidence. The ADR discrepancy data is a separate, documented data-reconciliation concern — not the same as claiming machines were rigged.

What was raised:
• ADR, Common Cause and opposition parties had petitioned the Supreme Court in 2019 for a full VVPAT paper-count audit. The SC declined.
• During 2024 elections, the ECI received 954 complaints by 11am on May 25 alone from parties alleging EVM malfunctions and agents barred from booths.
• The "Vote for Democracy" report flagged lack of CCTVs in strong rooms and alleged "circumstantial concerns" in at least 80 constituencies.
• ADR's post-election report (July 29, 2024): 5,89,691 discrepancies between votes polled and votes counted across 538 constituencies.

ECI's position: EVMs are tamper-proof standalone devices not connected to any network. Manipulation is technically impossible. The Supreme Court upheld the existing system in its 2024 ruling. 

One counterpoint often made: BJP actually lost its outright majority in 2024, winning only 240 seats against projected 370+ — which some analysts cite as itself suggesting the system was not manipulated in BJP's favour.`,
    sources: [
      { label: 'ADR (discrepancy report, July 2024)', url: 'https://adrindia.org/content/report-reveals-vote-count-discrepancies-2024-lok-sabha-elections' },
      { label: 'Deccan Herald (954 EVM complaints)', url: 'https://www.deccanherald.com/amp/story/elections%2Findia%2Flok-sabha-elections-2024-bengal-sees-sporadic-incidents-of-violence-in-some-seats-amid-polling-3038397.html' },
      { label: 'NewsClick (Vote for Democracy report)', url: 'https://www.newsclick.in/vote-democracy-report-conduct-general-election-2024-raises-concerns-over-discrepancies' },
    ],
  },
  {
    id: 'arrests',
    title: 'Opposition leaders arrested before voting',
    tag: 'Legal',
    tagColor: '#e8950a',
    summary: 'Delhi CM Arvind Kejriwal was arrested on March 21, 2024 — weeks before Phase 1 voting — by the Enforcement Directorate, and ran his campaign from jail.',
    detail: `What happened: Delhi Chief Minister Arvind Kejriwal (AAP) was arrested by the Enforcement Directorate on March 21, 2024 — weeks before Phase 1 of voting — in a money-laundering case linked to the Delhi liquor policy. He ran his campaign from jail. The Supreme Court granted him interim bail on May 10 for the campaign period.

CIVICUS Monitor reported this as part of broader "PMLA weaponisation" against the political opposition ahead of elections. The pattern — of ED/CBI action against opposition leaders in the run-up to elections — was also documented in several other state-level cases.

Government response: GoI says enforcement action is based on evidence and is independent of political motivation. Courts have ruled on the merits of individual cases.`,
    sources: [
      { label: 'CIVICUS Monitor (Kejriwal arrest context)', url: 'https://monitor.civicus.org/explore/india-crackdown-on-the-opposition-divisive-rhetoric-and-targeting-of-activists-and-critics-persists-around-the-elections/' },
      { label: 'Amnesty International (India charter Jun 2024)', url: 'https://www.amnesty.org/en/wp-content/uploads/2024/06/ASA2081542024ENGLISH.pdf' },
    ],
  },
]

function Cluster({ c, isDark }) {
  const [open, setOpen] = useState(false)
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const statBg = isDark ? '#111' : '#fafaf6'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'

  return (
    <div style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, marginBottom: 10, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: isDark ? '#1a1a1a' : '#f0f0f0', color: c.tagColor, border: `0.5px solid ${c.tagColor}30`, flexShrink: 0, marginTop: 2 }}>
          {c.tag}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: textColor, margin: '0 0 4px', lineHeight: 1.3 }}>{c.title}</p>
          <p style={{ fontSize: 12.5, color: muted, margin: 0, lineHeight: 1.5 }}>{c.summary}</p>
        </div>
        <span style={{ fontSize: 16, color: muted, flexShrink: 0, marginTop: 2, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
      </button>

      {open && (
        <div style={{ borderTop: `0.5px solid ${border}`, padding: '14px 16px' }}>
          {c.detail.split('\n').filter(l => l.trim()).map((line, i) => {
            if (line.startsWith('•')) return (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: c.tagColor, flexShrink: 0, marginTop: 2 }}>•</span>
                <p style={{ fontSize: 12.5, color: muted, margin: 0, lineHeight: 1.6 }}>{line.slice(1).trim()}</p>
              </div>
            )
            const isHeading = /^(What|ECI|Government|Status|Important|One)/.test(line)
            return (
              <p key={i} style={{ fontSize: isHeading ? 11 : 12.5, fontWeight: isHeading ? 700 : 400, color: isHeading ? textColor : muted, margin: '0 0 6px', lineHeight: 1.6, textTransform: isHeading ? 'uppercase' : 'none', letterSpacing: isHeading ? '0.5px' : 'normal' }}>
                {line}
              </p>
            )
          })}
          <div style={{ marginTop: 12 }}>
            <SourceChip sources={c.sources} isDark={isDark} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Election2024({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const bg = isDark ? '#0B0B0F' : '#f4f4f0'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#9a9a9a' : '#777'

  return (
    <main style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 py-10">

        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', color: '#D84B4B', textTransform: 'uppercase', marginBottom: 8 }}>
          2024 General Election
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.5px', color: textColor, marginBottom: 6 }}>
          Concerns raised. Responses given. You decide.
        </h1>
        <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, maxWidth: 620, marginBottom: 8 }}>
          The 2024 Lok Sabha election (April 19 – June 1, results June 4) was the world's largest democratic exercise. Six clusters of concerns were documented by NGOs, civil society and international watchdogs. Every cluster below includes the ECI's or government's response. No conclusion is drawn — only sources.
        </p>

        {/* Scope note */}
        <div style={{ background: cardBg, border: `0.5px solid ${isDark ? '#1e3a5f' : '#b9d4f0'}`, borderRadius: 12, padding: '12px 16px', marginBottom: 20, display: 'flex', gap: 10 }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>ℹ️</span>
          <p style={{ fontSize: 12.5, color: muted, margin: 0, lineHeight: 1.6 }}>
            BJP won 240 seats against projected 370+ and lost its outright majority — a fact some analysts cite as evidence the system was not rigged in its favour. Others say the concerns remain valid regardless of the result. Both perspectives are in the sources.
          </p>
        </div>

        {/* Result banner */}
        <div style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 12, padding: '14px 16px', marginBottom: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
          {[
            { label: 'BJP seats won', value: '240', sub: 'vs 303 in 2019' },
            { label: 'Seats projected', value: '370+', sub: 'pre-election estimates' },
            { label: 'Majority needed', value: '272', sub: 'NDA coalition crosses this' },
            { label: 'Voter turnout', value: '65.8%', sub: 'final official figure' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20, fontWeight: 900, color: textColor, margin: '0 0 2px' }}>{s.value}</p>
              <p style={{ fontSize: 11, color: muted, margin: '0 0 2px' }}>{s.label}</p>
              <p style={{ fontSize: 10, color: isDark ? '#555' : '#bbb' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '2px', color: muted, textTransform: 'uppercase', marginBottom: 12 }}>
          Six documented concern clusters — tap to expand
        </p>

        {clusters.map(c => <Cluster key={c.id} c={c} isDark={isDark} />)}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
          <Link to="/person/modi" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: cardBg, color: textColor, border: `0.5px solid ${border}` }}>
            ← Modi full profile
          </Link>
          <Link to="/real-india" style={{ fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', background: cardBg, color: textColor, border: `0.5px solid ${border}` }}>
            Real India report card →
          </Link>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
