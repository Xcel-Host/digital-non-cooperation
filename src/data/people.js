// ─────────────────────────────────────────────────────────────
// PEOPLE PROFILES — A1 (Ambani), A2 (Adani), Modi
// RULE: nothing goes on the site without a source URL.
// Entries with sources: [] render a "source pending" chip —
// fill these in as research completes. Keep wording neutral:
// state what happened + date + source. No conclusions.
// ─────────────────────────────────────────────────────────────

export const people = {
  // ── A1 ──────────────────────────────────────────────────────
  ambani: {
    id: 'ambani',
    type: 'empire',
    badge: 'A1',
    color: '#D84B4B',
    name: 'Mukesh Ambani',
    role: 'Chairman, Reliance Industries',
    image: '/a1.png',
    group: 'reliance',
    framing: 'The empire that touches your internet, news, groceries and clothes — 258+ entities across 8 sectors.',
    stats: [
      {
        label: 'Net worth — Forbes India 2025', value: '$105 B',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/finance/news/mukesh-ambani-tops-forbes-india-rich-list-2025-reliance-jio-125100900371_1.html' }],
      },
      {
        label: 'World rank — Forbes 2024', value: '#9', sub: '$116 B, first Asian past $100 B',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
      },
      { label: 'Group entities', value: '258+', sources: [] },
      { label: 'Jio subscribers', value: '506 M', sub: '~38% of Indian telecom', sources: [] },
    ],
    events: [
      {
        year: '2014', tag: 'Wealth', text: 'Net worth $18.6 billion per Forbes — the baseline year for the decade comparison.',
        sources: [],
      },
      {
        year: '2016', tag: 'Telecom', text: 'Jio launches with months of free data, reshaping the telecom market and triggering consolidation among rivals.',
        sources: [],
      },
      {
        year: '2021', tag: 'Finance', text: 'Reliance raises roughly $35 billion through stake sales and reaches its target of zero net debt.',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/amp/article/companies/mukesh-ambani-india-s-richest-in-forbes-list-followed-by-gautam-adani-121040700618_1.html' }],
      },
      {
        year: '2024', tag: 'Wealth', text: 'Forbes World list puts net worth at $116 billion, rank #9 globally — up from $83 billion a year earlier.',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
      },
      {
        year: '2025', tag: 'Wealth', text: 'Tops the Forbes India rich list again at $105 billion as the combined wealth of India\u2019s 100 richest falls 9%.',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/finance/news/mukesh-ambani-tops-forbes-india-rich-list-2025-reliance-jio-125100900371_1.html' }],
      },
    ],
  },

  // ── A2 ──────────────────────────────────────────────────────
  adani: {
    id: 'adani',
    type: 'empire',
    badge: 'A2',
    color: '#F59E0B',
    name: 'Gautam Adani',
    role: 'Chairman, Adani Group',
    image: '/a2.png',
    group: 'adani',
    framing: 'Ports, airports, power, cement, food and media — infrastructure you cannot opt out of without knowing it.',
    stats: [
      {
        label: 'Net worth — Forbes India 2025', value: '$92 B',
        sources: [{ label: 'Gulf News (Forbes)', url: 'https://gulfnews.com/business/markets/mukesh-ambani-tops-forbes-2025-rich-list-yusuffali-leads-malayalis-1.500301077' }],
      },
      {
        label: 'Wealth growth 2020 → 2021', value: '3×', sub: '$25.2 B → $74.8 B in one year',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/amp/article/companies/at-93-bn-net-worth-mukesh-ambani-tops-2021-forbes-list-of-india-s-richest-121100700433_1.html' }],
      },
      {
        label: 'Airports operated', value: '7', sub: 'Largest private operator',
        sources: [{ label: 'Tribune India', url: 'https://www.tribuneindia.com/news/business/aai-hands-over-mangaluru-airport-to-adani-group-on-lease-for-50-years-163924' }],
      },
      { label: 'Ports & terminals', value: '13+', sub: 'Incl. Mundra, India\u2019s largest', sources: [] },
    ],
    events: [
      {
        year: 'Feb 2019', tag: 'Airports', text: 'Wins bids for all six AAI airports put up for privatisation, with no prior airport experience — an empowered group of secretaries had decided prior experience would be neither a prerequisite nor a post-bid requirement. DEA and NITI Aayog objections were recorded and overruled.',
        sources: [
          { label: 'India.com (timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Tribune India', url: 'https://www.tribuneindia.com/news/business/aai-hands-over-mangaluru-airport-to-adani-group-on-lease-for-50-years-163924' },
        ],
      },
      {
        year: '2020–21', tag: 'Airports', text: 'Takes over operations of the six airports on 50-year leases; government tells Rajya Sabha the per-passenger-fee model would earn AAI an estimated ₹904 crore profit in 2020-21.',
        sources: [{ label: 'Business Standard (PTI)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' }],
      },
      {
        year: 'Jan 2023', tag: 'Markets', text: 'US short-seller Hindenburg Research publishes allegations of stock manipulation and accounting fraud; group stocks lose over $100 billion in value in the following weeks. Adani Group denies all allegations.',
        sources: [],
      },
      {
        year: '2025', tag: 'Wealth', text: 'Second on the Forbes India list at $92 billion, closing much of the gap to the top spot.',
        sources: [{ label: 'Gulf News (Forbes)', url: 'https://gulfnews.com/business/markets/mukesh-ambani-tops-forbes-2025-rich-list-yusuffali-leads-malayalis-1.500301077' }],
      },
    ],
  },

  // ── MODI ────────────────────────────────────────────────────
  modi: {
    id: 'modi',
    type: 'govt',
    badge: 'GOVT',
    color: '#888',
    name: 'Narendra Modi',
    role: 'Prime Minister of India (since 2014)',
    image: '/vg.png',
    framing: 'Not an empire — the policy environment the two empires grew in. This page is a dated, sourced record.',
    scopeNote: 'What this page is: public statements and policy decisions, each with a date and source link, including official counterpoints. What it isn\u2019t: opinion or conclusion. Read the sources and decide for yourself.',
    stats: [
      { label: 'In office since', value: '2014', sources: [] },
      { label: 'Terms', value: '3', sources: [] },
      {
        label: 'Top 1% wealth share (2022-23)', value: '40.1%', sub: 'Highest on record',
        sources: [{ label: 'World Inequality Lab', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' }],
      },
      {
        label: 'Global Hunger Index 2024', value: '105 / 127', sub: '\u201cSerious\u201d category',
        sources: [{ label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' }],
      },
    ],
    // ── SAID vs RECORD — rally/public statements ─────────────
    statements: [
      {
        date: '7 Nov 2013',
        context: 'Election rally, Kanker, Chhattisgarh',
        said: 'Speaking on black money stashed abroad, suggested that recovering it could mean ₹15 lakh for every poor Indian\u2019s account.',
        record: 'In 2015 BJP president Amit Shah described the remark as a \u201cjumla\u201d (rhetorical idiom), saying the money would not be credited to accounts. The PMO declined an RTI asking when the deposit would be made.',
        status: 'Called a jumla',
        sources: [
          { label: 'BOOM fact-check', url: 'https://www.boomlive.in/did-modi-promise-to-deposit-rs-15-lakh-in-every-account-a-factcheck' },
          { label: 'Deccan Herald', url: 'https://www.deccanherald.com/india/amit-shah-calls-modi-bluff-2111288' },
        ],
      },
      {
        date: '2013–14 campaign',
        context: 'Lok Sabha election rallies',
        said: 'The campaign became widely associated with a promise of up to 2 crore jobs a year. (The exact wording is disputed — fact-checks note the figure was attributed in reporting rather than a single verbatim quote.)',
        record: 'Government\u2019s own PLFS showed unemployment at 6.1% in 2017-18 — a 45-year high. The report was initially withheld; the National Statistical Commission\u2019s acting chairman resigned in protest before its release.',
        status: 'Disputed / unfulfilled',
        sources: [
          { label: 'Scroll.in (decade review)', url: 'https://scroll.in/article/1063428/a-decade-under-modi-rising-unemployment-declining-wages-poor-quality-jobs' },
          { label: 'OnlyFact (wording fact-check)', url: 'https://onlyfact.in/2-crore-jobs-every-year-promised-by-prime-minister-narendra-modi-fact-check/' },
        ],
      },
      {
        date: '28 Feb 2016',
        context: 'Kisan rally, Bareilly, Uttar Pradesh',
        said: '\u201cI wish to double the income of farmers by 2022, when India celebrates 75 years of independence.\u201d',
        record: 'A NITI Aayog member\u2019s report found the target required ~10.4% annual real income growth against ~0.5% recent trend. The 2022 deadline passed without the government claiming the target was met.',
        status: 'Unfulfilled',
        sources: [
          { label: 'India.com (rally report)', url: 'https://www.india.com/news/india/narendra-modi-in-bareilly-pm-promises-to-double-farmers-income-by-2022-989790/' },
          { label: 'Tribune India (NITI report)', url: 'https://www.tribuneindia.com/news/archive/nation/doubling-farm-income-by-2022-not-possible-niti-386310' },
          { label: 'ThePrint', url: 'https://theprint.in/opinion/modi-govt-official-finally-let-it-slip-doubling-farmers-income-by-2022-was-always-a-mirage/631550/' },
        ],
      },
    ],
    // ── POLICY & PROXIMITY TIMELINE ──────────────────────────
    events: [
      {
        year: 'Feb 2019', tag: 'A2', text: 'Adani Group, with no prior airport experience, wins all six airports privatised by the government after the prior-experience requirement was dropped; DEA and NITI Aayog objections were overruled. Government later cited an estimated ₹904 crore AAI profit from the fee model.',
        sources: [
          { label: 'India.com (timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Business Standard (govt response)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' },
        ],
      },
      {
        year: 'Sep 2019', tag: 'Policy', text: 'Corporate tax cut from 30% to 22% (15% for new manufacturing). The finance minister put the annual revenue foregone at ₹1.45 lakh crore. Largest beneficiaries by size were big conglomerates; the Sensex rose ~1,900 points the same day.',
        sources: [
          { label: 'Business Today', url: 'https://www.businesstoday.in/latest/economy-politics/story/nirmala-sitharaman-finance-minister-slash-corporate-tax-rate-domestic-firms-227683-2019-09-20' },
          { label: 'The Wire', url: 'https://thewire.in/macro/nirmala-sitharaman-corporate-tax-cuts' },
        ],
      },
      {
        year: 'Mar 2024', tag: 'Context', text: 'World Inequality Lab study (Bharti, Chancel, Piketty, Somanchi) finds top 1% income and wealth shares at 22.6% and 40.1% — the highest on record — calling the era a \u201cBillionaire Raj\u201d more unequal than the colonial period.',
        sources: [
          { label: 'WID.world (study)', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' },
          { label: 'The News Minute', url: 'https://www.thenewsminute.com/news/top-1-in-india-holds-401-wealth-says-world-inequality-lab-report' },
        ],
      },
      {
        year: 'Oct 2024', tag: 'Context', text: 'Global Hunger Index ranks India 105th of 127 (\u201cserious\u201d). Government counterpoint: NITI Aayog\u2019s MPI shows 24.82 crore people exited multidimensional poverty between 2013-14 and 2022-23, and the government disputes the GHI\u2019s methodology.',
        sources: [
          { label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' },
          { label: 'Down To Earth (govt response)', url: 'https://www.downtoearth.org.in/governance/as-told-to-parliament-march-26-2025-global-hunger-index-flawed-says-centre' },
        ],
      },
    ],
  },
}

export const PERSON_IDS = ['ambani', 'modi', 'adani']
