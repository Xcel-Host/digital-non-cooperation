// ─────────────────────────────────────────────────────────────
// PEOPLE PROFILES — A1 (Ambani), A2 (Adani), Modi
// WRITING RULES:
// 1. Simple English. A 15-year-old should get every sentence.
// 2. Nothing without a source URL. Empty sources = amber
//    "source pending" chip on the site. Fill as research comes.
// 3. Say what happened + when + who reported it. No opinions.
//    Include the other side (government / company response).
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
    framing: 'One family. Your internet, your news, your groceries, your clothes. Here is how that happened, step by step.',
    stats: [
      {
        label: 'Net worth (2025)', value: '$105 B', sub: 'About ₹87 lakh crore',
        sources: [{ label: 'Business Standard (Forbes)', url: 'https://www.business-standard.com/finance/news/mukesh-ambani-tops-forbes-india-rich-list-2025-reliance-jio-125100900371_1.html' }],
      },
      {
        label: 'World rank (2024)', value: '#9', sub: 'First Asian past $100 B',
        sources: [{ label: 'Business Standard (Forbes)', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
      },
      { label: 'Companies in the group', value: '258+', sources: [] },
      { label: 'People using Jio', value: '506 M', sub: 'More than 1 in 3 Indians', sources: [] },
    ],
    events: [
      {
        year: '1958–1977', tag: 'Wealth', text: 'The start: Dhirubhai Ambani, a school teacher\u2019s son, begins with a small trading firm and less than $350, after working at a petrol station in Yemen. He builds Reliance and takes it to the stock market in 1977.',
        sources: [{ label: 'Knowledge at Wharton', url: 'https://knowledge.wharton.upenn.edu/article/after-months-of-acrimony-an-outbreak-of-brotherly-love-at-reliance/' }],
      },
      {
        year: 'Jul 2002', tag: 'Wealth', text: 'Dhirubhai dies without leaving a will. His two sons, Mukesh and Anil, start fighting over who controls the company.',
        sources: [{ label: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2005/6/18/indias-reliance-splits' }],
      },
      {
        year: 'Jun 2005', tag: 'Wealth', text: 'Their mother splits the empire. Mukesh keeps oil and chemicals — the money machine. Anil gets telecom, power and finance. Anil\u2019s side later collapses under debt. Mukesh\u2019s side becomes today\u2019s giant.',
        sources: [
          { label: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2005/6/18/indias-reliance-splits' },
          { label: 'Knowledge at Wharton', url: 'https://knowledge.wharton.upenn.edu/article/after-months-of-acrimony-an-outbreak-of-brotherly-love-at-reliance/' },
        ],
      },
      {
        year: '2014', tag: 'Media', text: 'Reliance buys Network18 — one purchase brings CNN-News18, News18, Colors TV, Moneycontrol and more under the family. From this day, much of the news you watch is owned by a company the news should question.',
        sources: [],
      },
      {
        year: 'Sep 2016', tag: 'Telecom', text: 'Jio launches with free data for months. No other company can match free. Rivals shrink or die, and Jio becomes India\u2019s biggest network. Cheap data was real — and so was the control that came with it.',
        sources: [],
      },
      {
        year: '2020', tag: 'Finance', text: 'The world\u2019s tech giants buy in: Facebook pays $5.7 billion and Google pays $4.5 billion for pieces of Jio. In a few months Jio raises about $20 billion — more than every Indian startup raised in all of 2019 combined.',
        sources: [
          { label: 'TechCrunch (Facebook)', url: 'https://techcrunch.com/2020/04/21/facebook-reliance-jio/' },
          { label: 'CNBC (Google)', url: 'https://www.cnbc.com/2020/07/15/google-jio-platforms-deal.html' },
        ],
      },
      {
        year: '2021', tag: 'Finance', text: 'With that money, Reliance pays off its loans and reaches zero net debt. The empire is now cash-rich and ready to buy more.',
        sources: [{ label: 'Business Standard', url: 'https://www.business-standard.com/amp/article/companies/mukesh-ambani-india-s-richest-in-forbes-list-followed-by-gautam-adani-121040700618_1.html' }],
      },
      {
        year: '2024–25', tag: 'Media', text: 'Reliance and Disney merge their streaming businesses into JioHotstar. Cricket, movies and serials for hundreds of millions of viewers now sit under one roof.',
        sources: [],
      },
      {
        year: '2024', tag: 'Wealth', text: 'Forbes counts his wealth at $116 billion — world rank #9. In 2014 it was $18.6 billion. That is roughly 6 times bigger in 10 years.',
        sources: [{ label: 'Business Standard (Forbes)', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
      },
      {
        year: '2025', tag: 'Wealth', text: 'Still India\u2019s richest at $105 billion, even in a year when India\u2019s 100 richest lost money overall.',
        sources: [{ label: 'Business Standard (Forbes)', url: 'https://www.business-standard.com/finance/news/mukesh-ambani-tops-forbes-india-rich-list-2025-reliance-jio-125100900371_1.html' }],
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
    framing: 'Ports, airports, power lines, cement, cooking oil, news channels. You cannot opt out of infrastructure — which is exactly why it matters who owns it.',
    stats: [
      {
        label: 'Net worth (2025)', value: '$92 B', sub: 'About ₹76 lakh crore',
        sources: [{ label: 'Gulf News (Forbes)', url: 'https://gulfnews.com/business/markets/mukesh-ambani-tops-forbes-2025-rich-list-yusuffali-leads-malayalis-1.500301077' }],
      },
      {
        label: 'Wealth growth in one year', value: '3×', sub: '$25 B → $75 B (2020 → 2021)',
        sources: [{ label: 'Business Standard (Forbes)', url: 'https://www.business-standard.com/amp/article/companies/at-93-bn-net-worth-mukesh-ambani-tops-2021-forbes-list-of-india-s-richest-121100700433_1.html' }],
      },
      {
        label: 'Airports run by the group', value: '7', sub: 'India\u2019s biggest private operator',
        sources: [{ label: 'Tribune India', url: 'https://www.tribuneindia.com/news/business/aai-hands-over-mangaluru-airport-to-adani-group-on-lease-for-50-years-163924' }],
      },
      { label: 'Ports & terminals', value: '13+', sub: 'Including Mundra, India\u2019s largest', sources: [] },
    ],
    events: [
      {
        year: '1988', tag: 'Wealth', text: 'The start: Gautam Adani, a college dropout, sets up a small trading company in Gujarat that buys and sells goods.',
        sources: [],
      },
      {
        year: '1990s', tag: 'Wealth', text: 'He gets land at Mundra on the Gujarat coast and starts building a port. Over time it becomes India\u2019s largest private port — the gate through which a big share of India\u2019s imports and exports pass.',
        sources: [],
      },
      {
        year: '2001–2014', tag: 'Context', text: 'The Gujarat years: Adani backs Narendra Modi, Gujarat\u2019s chief minister, when other business groups criticise him. The group grows fast in this period. Journalists who studied the two men describe their careers as rising together.',
        sources: [{ label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' }],
      },
      {
        year: 'Feb 2019', tag: 'Airports', text: 'The government privatises six airports. The old rule said bidders need airport experience — that rule is dropped before bidding. Adani, who has never run an airport, wins all six, for 50 years each. Officials at two government bodies had objected; they were overruled. The government\u2019s answer: the deal would earn the Airports Authority ₹904 crore in 2020-21.',
        sources: [
          { label: 'India.com (timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Business Standard (govt reply)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' },
        ],
      },
      {
        year: '2022', tag: 'Wealth', text: 'For a short time he is the world\u2019s 2nd richest person — ahead of Jeff Bezos. No Indian had ever been this high.',
        sources: [{ label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' }],
      },
      {
        year: 'Aug–Dec 2022', tag: 'Media', text: 'The NDTV takeover. Years earlier, NDTV\u2019s founders took a ₹400 crore loan with a hidden cost: the lender could convert it into 29% of NDTV. Adani buys that lender, converts the loan, and takes control. The founders resign. Famous anchor Ravish Kumar quits, saying a channel owned by a company that depends on government contracts cannot question the government. Adani says he sees the takeover as a \u201cresponsibility\u201d.',
        sources: [
          { label: 'Tribune India', url: 'https://www.tribuneindia.com/news/nation/prannoy-roy-wife-radhika-roy-resign-as-adani-group-nears-takeover-of-ndtv-456215' },
          { label: 'Al Jazeera', url: 'https://www.aljazeera.com/economy/2022/12/5/indian-billionaire-adani-is-now-ndtvs-biggest-shareholder' },
          { label: 'RSF (press freedom)', url: 'https://rsf.org/en/ndtv-takeover-signals-end-pluralism-india-s-leading-media' },
        ],
      },
      {
        year: 'Jan 2023', tag: 'Markets', text: 'A US research firm, Hindenburg, publishes a report claiming the group inflated its share prices and hid debts. Adani shares crash — at one point losing over $150 billion in value. The group calls every claim false.',
        sources: [{ label: 'Fortune', url: 'https://fortune.com/asia/2025/09/19/adani-shares-jump-indian-regulator-dismiss-hindenburg-claims/' }],
      },
      {
        year: 'Jan 2024', tag: 'Markets', text: 'India\u2019s Supreme Court says the market regulator SEBI should keep investigating, and refuses to hand the probe to anyone else.',
        sources: [{ label: 'OCCRP', url: 'https://www.occrp.org/en/investigation/bank-documents-expose-scale-of-secret-investments-in-adani-group-by-adani-family-associates' }],
      },
      {
        year: 'Nov 2024', tag: 'Markets', text: 'US prosecutors charge Gautam Adani and others, saying they promised over $250 million in bribes to Indian officials to win contracts. Adani shares fall again. The group calls the charges \u201cbaseless\u201d and says it will fight them in court.',
        sources: [
          { label: 'Malay Mail (AFP)', url: 'https://www.malaymail.com/news/money/2024/11/22/more-losses-for-adani-shares-in-india-after-founder-charged-with-paying-more-than-us250m-in-bribes-for-govt-contracts/157681' },
          { label: 'Fortune', url: 'https://fortune.com/asia/2025/09/19/adani-shares-jump-indian-regulator-dismiss-hindenburg-claims/' },
        ],
      },
      {
        year: 'Sep 2025', tag: 'Markets', text: 'The other side: SEBI closes the main Hindenburg cases, saying the key allegations were \u201cnot established\u201d. Adani calls it proof the claims were always false. Reuters reports some smaller cases are still open, and the US case continues.',
        sources: [
          { label: 'Business Standard', url: 'https://www.business-standard.com/markets/news/sebi-clears-adani-group-dismisses-hindenburg-allegations-125091801259_1.html' },
          { label: 'Al Jazeera', url: 'https://www.aljazeera.com/economy/2025/9/18/indian-regulators-dismiss-stock-manipulation-allegations-on-adani-group' },
        ],
      },
      {
        year: '2025', tag: 'Wealth', text: 'Despite everything, he is India\u2019s 2nd richest at $92 billion. In 2014 he had $7.1 billion. That is about 13 times bigger in roughly a decade — the fastest climb of any billionaire on earth in that period.',
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
    role: 'Prime Minister of India (since 2014) · Gujarat Chief Minister (2001–2014)',
    image: '/vg.png',
    framing: 'He owns no companies. He sets the rules the companies play by. This page is a record of what he said, what he decided, and what happened next — with sources.',
    scopeNote: 'How to read this page: every card tells you what happened, when, and who reported it. Where the government or a court answered back, we show that too. We don\u2019t tell you what to think. Read the sources and decide yourself.',
    stats: [
      { label: 'Years in power', value: '24+', sub: 'Gujarat 2001–14, India 2014–now', sources: [] },
      { label: 'Terms as PM', value: '3', sources: [] },
      {
        label: 'Richest 1% own (of all wealth)', value: '₹40 of ₹100', sub: 'Highest ever recorded',
        sources: [{ label: 'World Inequality Lab', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' }],
      },
      {
        label: 'India\u2019s hunger rank (2024)', value: '105 / 127', sub: '\u201cSerious\u201d level',
        sources: [{ label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' }],
      },
    ],
    // ── SAID vs RECORD — what he said at rallies, what happened ──
    statements: [
      {
        date: '7 Nov 2013',
        context: 'Election rally, Kanker, Chhattisgarh',
        said: 'Talking about black money hidden abroad, he said bringing it back could mean ₹15 lakh for every poor Indian\u2019s bank account.',
        record: 'Nobody got the money. In 2015, BJP chief Amit Shah called the line a \u201cjumla\u201d — a figure of speech, not a promise. When someone filed an RTI asking when the ₹15 lakh would come, the PM\u2019s office did not give a date.',
        status: 'Called a jumla',
        sources: [
          { label: 'BOOM fact-check', url: 'https://www.boomlive.in/did-modi-promise-to-deposit-rs-15-lakh-in-every-account-a-factcheck' },
          { label: 'Deccan Herald', url: 'https://www.deccanherald.com/india/amit-shah-calls-modi-bluff-2111288' },
        ],
      },
      {
        date: '2013–14 campaign',
        context: 'Lok Sabha election rallies',
        said: 'The campaign became famous for a promise of up to 2 crore jobs a year. (Fact-checkers note the exact words are disputed — the number spread through news reports, not one single quote.)',
        record: 'What the government\u2019s own survey later showed: unemployment hit 6.1% in 2017-18 — the worst in 45 years. The report was kept unpublished at first. The head of the statistics commission resigned in protest before it came out.',
        status: 'Disputed / unfulfilled',
        sources: [
          { label: 'Scroll.in (10-year review)', url: 'https://scroll.in/article/1063428/a-decade-under-modi-rising-unemployment-declining-wages-poor-quality-jobs' },
          { label: 'OnlyFact (wording check)', url: 'https://onlyfact.in/2-crore-jobs-every-year-promised-by-prime-minister-narendra-modi-fact-check/' },
        ],
      },
      {
        date: '28 Feb 2016',
        context: 'Farmers\u2019 rally, Bareilly, Uttar Pradesh',
        said: 'He said he wished to double farmers\u2019 income by 2022, when India turns 75.',
        record: 'A government expert\u2019s own report said this needed farm incomes to grow about 10% every year — they had been growing around 0.5%. 2022 came and went. The government never announced the target was met.',
        status: 'Unfulfilled',
        sources: [
          { label: 'India.com (rally report)', url: 'https://www.india.com/news/india/narendra-modi-in-bareilly-pm-promises-to-double-farmers-income-by-2022-989790/' },
          { label: 'Tribune India (NITI report)', url: 'https://www.tribuneindia.com/news/archive/nation/doubling-farm-income-by-2022-not-possible-niti-386310' },
          { label: 'ThePrint', url: 'https://theprint.in/opinion/modi-govt-official-finally-let-it-slip-doubling-farmers-income-by-2022-was-always-a-mirage/631550/' },
        ],
      },
    ],
    // ── POLICY TIMELINE — Gujarat era, then PM era ──────────────
    events: [
      {
        era: 'Gujarat years (2001–2014)',
        year: 'Oct 2001', tag: 'Context', text: 'Becomes Chief Minister of Gujarat — his first government job ever. He will run the state for nearly 13 years.',
        sources: [],
      },
      {
        year: '2002', tag: 'Context', text: 'Communal riots in Gujarat kill over 1,000 people by official count, most of them Muslims. Modi\u2019s government is heavily criticised for its handling. Years later, a Supreme Court-appointed investigation team finds no evidence to prosecute him, and the Supreme Court upholds that finding in 2022. The US denied him a visa over the riots from 2005 until he became PM.',
        sources: [],
      },
      {
        year: '2001–2014', tag: 'A2', text: 'The Adani connection begins here. Adani backs Modi when other industrialists criticise him. Modi frequently travels in Adani\u2019s corporate jet during these years. Both rise together — one in politics, one in business.',
        sources: [{ label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' }],
      },
      {
        era: 'PM years (2014–now)',
        year: 'May 2014', tag: 'A2', text: 'Wins the election. Flies from Ahmedabad to Delhi for his swearing-in on Adani\u2019s private jet, the Adani logo visible in the photos. The picture becomes famous — the opposition still holds it up in Parliament.',
        sources: [
          { label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' },
          { label: 'AdaniWatch', url: 'https://www.adaniwatch.org/exclusive_did_pm_modi_and_bjp_disclose_election_spending_on_adani_private_jet_lease' },
        ],
      },
      {
        year: 'Nov 2016', tag: 'Policy', text: 'Demonetisation: at 8pm on TV, he cancels 86% of India\u2019s cash overnight, saying it will destroy black money. People queue for weeks; small businesses suffer. Two years later the RBI counts the notes: 99.3% came back to the banks. If black money was hiding in cash, almost none of it was caught.',
        sources: [
          { label: 'Deccan Herald (PTI)', url: 'https://www.deccanherald.com/amp/story/india%2F993-demonetised-currency-689975.html' },
          { label: 'Business Standard', url: 'https://www.business-standard.com/article/economy-policy/people-returned-98-96-of-demonetised-rs-500-and-rs-1-000-notes-rbi-117083001197_1.html' },
        ],
      },
      {
        year: 'Feb 2019', tag: 'A2', text: 'Six government airports are privatised. The rule requiring airport experience is dropped before bidding. Adani — zero airport experience — wins all six for 50 years. Officials\u2019 objections are overruled. (Government\u2019s answer: the deal still earns the Airports Authority money.)',
        sources: [
          { label: 'India.com (timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Business Standard (govt reply)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' },
        ],
      },
      {
        year: 'Sep 2019', tag: 'Policy', text: 'Big companies get a tax cut: from 30% down to 22%. The finance minister herself says the government gives up ₹1.45 lakh crore every year — more than the whole yearly health budget. The stock market jumps 1,900 points the same day.',
        sources: [
          { label: 'Business Today', url: 'https://www.businesstoday.in/latest/economy-politics/story/nirmala-sitharaman-finance-minister-slash-corporate-tax-rate-domestic-firms-227683-2019-09-20' },
          { label: 'The Wire', url: 'https://thewire.in/macro/nirmala-sitharaman-corporate-tax-cuts' },
        ],
      },
      {
        year: '2020–2021', tag: 'Policy', text: 'Three new farm laws trigger the biggest farmer protest in decades — farmers camp at Delhi\u2019s borders for a year. In Nov 2021, Modi repeals all three laws, a rare step back.',
        sources: [{ label: 'Mint (decade review)', url: 'https://www.pressreader.com/india/mint-mumbai/20240221/281552295787672' }],
      },
      {
        year: 'Feb–Mar 2024', tag: 'Policy', text: 'The Supreme Court strikes down \u201celectoral bonds\u201d — a scheme his government created that let companies give parties unlimited money in secret. The court calls it unconstitutional: voters have a right to know who pays parties. The data comes out: BJP received the most, over ₹6,060 crore. 94% of all bond money came in ₹1 crore notes — this was big-company money, not small donors.',
        sources: [
          { label: 'Tribune India', url: 'https://www.tribuneindia.com/news/india/unconstitutional-sc-junks-electoral-bonds-scheme-seeks-info-on-donors-591168' },
          { label: 'BBC (donor data)', url: 'https://feeds.bbci.co.uk/news/world-asia-india-68509410' },
          { label: 'India TV (party-wise data)', url: 'https://www.indiatvnews.com/explainers/electoral-bonds-data-bjp-biggest-beneficiary-followed-by-tmc-congress-complete-list-political-parties-election-commission-sbi-supreme-court-2024-03-15-921619' },
        ],
      },
      {
        year: 'Mar 2024', tag: 'Context', text: 'Economists at the World Inequality Lab (including Thomas Piketty) publish a study: the richest 1% now hold ₹40 of every ₹100 of wealth and ₹22.6 of every ₹100 of income — more unequal than India under British rule. They call today\u2019s India a \u201cBillionaire Raj\u201d.',
        sources: [
          { label: 'WID.world (the study)', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' },
          { label: 'The News Minute', url: 'https://www.thenewsminute.com/news/top-1-in-india-holds-401-wealth-says-world-inequality-lab-report' },
        ],
      },
      {
        year: 'Oct 2024', tag: 'Context', text: 'India ranks 105 out of 127 countries on the Global Hunger Index — \u201cserious\u201d level, behind Bangladesh, Nepal and Sri Lanka. The government\u2019s answer: the index\u2019s method is flawed, and its own data shows 24.82 crore people came out of poverty in 9 years.',
        sources: [
          { label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' },
          { label: 'Down To Earth (govt reply)', url: 'https://www.downtoearth.org.in/governance/as-told-to-parliament-march-26-2025-global-hunger-index-flawed-says-centre' },
        ],
      },
    ],
  },
}

export const PERSON_IDS = ['ambani', 'modi', 'adani']
