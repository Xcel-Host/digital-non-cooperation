// ─────────────────────────────────────────────────────────────
// PEOPLE PROFILES — A1 (Ambani), A2 (Adani), Modi
// WRITING RULES:
// 1. Simple English — a 15-year-old should get every sentence.
// 2. Nothing without a source URL. Empty = amber "pending" chip.
// 3. State what happened + when + who reported it. No opinions.
//    Include the other side (govt / company response) always.
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
        sources: [{ label: 'Forbes via Business Standard', url: 'https://www.business-standard.com/finance/news/mukesh-ambani-tops-forbes-india-rich-list-2025-reliance-jio-125100900371_1.html' }],
      },
      {
        label: 'World rank (2024)', value: '#9', sub: 'First Asian past $100 billion',
        sources: [{ label: 'Forbes via Business Standard', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
      },
      {
        label: 'Jio subscribers (Dec 2025)', value: '489 M', sub: '39% of every Indian phone plan',
        sources: [{ label: 'TRAI data via TelecomTalk', url: 'https://telecomtalk.info/airtel-crosses-463million-wireless-subscribers-jio-trai/1004280/' }],
      },
      {
        label: 'Group subsidiaries', value: '200+', sub: 'Plus 78 associates & 27 JVs',
        sources: [{ label: 'RIL Annual Report 2024-25', url: 'https://www.ril.com/ar2024-25/pdf/Consolidated-Financial-Statements.pdf' }],
      },
    ],
    events: [
      {
        year: '1958–1977', tag: 'Wealth',
        text: 'The start: Dhirubhai Ambani, a school teacher\'s son, begins with less than $350 after working at a petrol station in Yemen. He builds Reliance and takes it to the stock market in 1977 — sparking India\'s equity cult.',
        sources: [{ label: 'Knowledge at Wharton', url: 'https://knowledge.wharton.upenn.edu/article/after-months-of-acrimony-an-outbreak-of-brotherly-love-at-reliance/' }],
      },
      {
        year: 'Jul 2002', tag: 'Wealth',
        text: 'Father Dhirubhai dies without leaving a will. His two sons — Mukesh and Anil — start fighting over who controls the empire.',
        sources: [{ label: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2005/6/18/indias-reliance-splits' }],
      },
      {
        year: 'Jun 2005', tag: 'Wealth',
        text: 'Their mother splits the empire. Mukesh keeps oil, chemicals and the money machine. Anil gets telecom, power and finance. Anil\'s side later collapses under debt. Mukesh\'s side becomes today\'s giant.',
        sources: [
          { label: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2005/6/18/indias-reliance-splits' },
          { label: 'Knowledge at Wharton', url: 'https://knowledge.wharton.upenn.edu/article/after-months-of-acrimony-an-outbreak-of-brotherly-love-at-reliance/' },
        ],
      },
      {
        year: 'May 2014', tag: 'Media',
        text: 'Reliance buys Network18. One purchase brings CNN-News18, News18, Colors TV, Moneycontrol and many more under the Ambani family. From this point, much of the news you watch is owned by a company the news should question.',
        sources: [
          { label: 'RIL official press release', url: 'https://www.ril.com/sites/default/files/2023-01/PR29052014.pdf' },
          { label: 'Medianama (timeline)', url: 'https://www.medianama.com/2014/05/223-how-reliance-industries-acquired-network18-a-detailed-timeline-of-events/' },
        ],
      },
      {
        year: 'Sep 2016', tag: 'Telecom',
        text: 'Jio launches with free calls and data for months. No rival can match free. Competitors shrink or die. Jio becomes India\'s #1 network. Cheap data was real — and so was the market control that came with it.',
        sources: [
          { label: 'Scroll.in', url: 'https://scroll.in/article/815424/jio-launch-mukesh-ambani-wants-to-become-indias-data-king-by-sparking-a-telecom-bloodbath' },
          { label: 'Business Standard', url: 'https://www.business-standard.com/article/companies/how-jio-was-born-tired-of-poor-internet-speed-isha-ambani-mooted-the-idea-118031600357_1.html' },
        ],
      },
      {
        year: 'Apr–Jul 2020', tag: 'Finance',
        text: 'The world\'s biggest tech companies buy into Jio: Facebook pays $5.7 billion, Google pays $4.5 billion. In a few months Jio raises ~$20 billion total — more than every Indian startup raised in all of 2019 combined.',
        sources: [
          { label: 'TechCrunch (Facebook)', url: 'https://techcrunch.com/2020/04/21/facebook-reliance-jio/' },
          { label: 'CNBC (Google)', url: 'https://www.cnbc.com/2020/07/15/google-jio-platforms-deal.html' },
        ],
      },
      {
        year: 'Feb 2024', tag: 'Media',
        text: 'Reliance and Disney agree to merge JioCinema and Disney+ Hotstar. Deal value: ~₹70,352 crore ($8.5 billion). Reliance holds 56.12% of the merged entity "JioHotstar", launched February 2025. Cricket, movies and serials for hundreds of millions under one roof.',
        sources: [
          { label: 'Disney SEC 8-K filing (primary)', url: 'https://www.sec.gov/Archives/edgar/data/0001744489/000119312524049404/d800554dex991.htm' },
          { label: 'Disney+ Hotstar Wikipedia (timeline)', url: 'https://en.wikipedia.org/wiki/Disney%2B_Hotstar' },
        ],
      },
      {
        year: '2024', tag: 'Wealth',
        text: 'Forbes counts his wealth at $116 billion — world rank #9. In 2014 it was $18.6 billion. That is roughly 6× bigger in 10 years.',
        sources: [{ label: 'Forbes via Business Standard', url: 'https://www.business-standard.com/india-news/forbes-billionaires-2024-list-ambani-tops-india-with-net-worth-of-116-bn-124040300399_1.html' }],
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
        sources: [{ label: 'Forbes via Gulf News', url: 'https://gulfnews.com/business/markets/mukesh-ambani-tops-forbes-2025-rich-list-yusuffali-leads-malayalis-1.500301077' }],
      },
      {
        label: 'Wealth growth in one year', value: '3×', sub: '$25 B → $75 B (2020 → 2021)',
        sources: [{ label: 'Forbes via Business Standard', url: 'https://www.business-standard.com/amp/article/companies/at-93-bn-net-worth-mukesh-ambani-tops-2021-forbes-list-of-india-s-richest-121100700433_1.html' }],
      },
      {
        label: 'Airports run by the group', value: '7', sub: 'India\'s biggest private operator',
        sources: [{ label: 'Tribune India', url: 'https://www.tribuneindia.com/news/business/aai-hands-over-mangaluru-airport-to-adani-group-on-lease-for-50-years-163924' }],
      },
      {
        label: 'Mundra Port cargo (annual)', value: '155+ MT', sub: 'India\'s largest commercial port',
        sources: [{ label: 'Adani Ports official', url: 'https://www.adaniports.com/ports-and-terminals/mundra-port' }],
      },
    ],
    events: [
      {
        year: '1988', tag: 'Wealth',
        text: 'The start: Gautam Adani, a college dropout from Gujarat, sets up Adani Exports — a small commodity trading company in Ahmedabad.',
        sources: [
          { label: 'Adani Group official history', url: 'https://www.adani.com/about-us/our-journey' },
          { label: 'Britannica biography', url: 'https://www.britannica.com/biography/Gautam-Adani' },
        ],
      },
      {
        year: '1990s', tag: 'Wealth',
        text: 'He gets land at Mundra on the Gujarat coast and begins building a port. Over decades it becomes India\'s largest private port — the gate through which a large share of India\'s imports and exports pass.',
        sources: [
          { label: 'Mundra Port Wikipedia', url: 'https://en.wikipedia.org/wiki/Mundra_Port' },
          { label: 'Adani Ports official', url: 'https://www.adaniports.com/ports-and-terminals/mundra-port' },
        ],
      },
      {
        year: '2001–2014', tag: 'Context',
        text: 'The Gujarat years: Adani backs Narendra Modi when Modi is Gujarat\'s Chief Minister and other business groups criticise him. Modi frequently travels in Adani\'s corporate jet. Both rise together — one in politics, one in business. British journalist James Crabtree, who wrote a book on India\'s new billionaires, described their careers as "symbiotic."',
        sources: [{ label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' }],
      },
      {
        year: 'Feb 2019', tag: 'Airports',
        text: 'The government privatises six airports. The old rule said bidders need airport experience — that rule is dropped before bidding opens. Adani, who has never run an airport, wins all six for 50-year leases. Officials at two government bodies had formally objected; they were overruled. The government\'s answer: the deal still earns the Airports Authority ₹904 crore in 2020-21.',
        sources: [
          { label: 'India.com (timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Business Standard (govt reply)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' },
        ],
      },
      {
        year: '2022', tag: 'Wealth',
        text: 'For a short time he becomes the world\'s 2nd richest person — briefly ahead of Jeff Bezos. No Indian had ever climbed this high.',
        sources: [{ label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' }],
      },
      {
        year: 'Aug–Dec 2022', tag: 'Media',
        text: 'The NDTV takeover. Years earlier, NDTV\'s founders took a ₹400 crore loan with a hidden cost: the lender could convert it into 29% of NDTV shares. Adani buys that lender and converts the loan into ownership. The founders resign. Star anchor Ravish Kumar quits, saying a channel owned by a company dependent on government contracts cannot freely question the government. Adani says the takeover is a "responsibility."',
        sources: [
          { label: 'Tribune India', url: 'https://www.tribuneindia.com/news/nation/prannoy-roy-wife-radhika-roy-resign-as-adani-group-nears-takeover-of-ndtv-456215' },
          { label: 'Foreign Policy (Ravish Kumar)', url: 'https://foreignpolicy.com/2022/12/22/the-new-goliath-of-indias-media-meets-his-david/' },
          { label: 'RSF (press freedom report)', url: 'https://rsf.org/en/ndtv-takeover-signals-end-pluralism-india-s-leading-media' },
        ],
      },
      {
        year: 'Jan 2023', tag: 'Markets',
        text: 'US short-seller Hindenburg Research publishes a report alleging stock price manipulation and hidden debts. Adani shares crash — over $150 billion in market value wiped out at the peak. The group calls every allegation false.',
        sources: [{ label: 'Fortune Asia', url: 'https://fortune.com/asia/2025/09/19/adani-shares-jump-indian-regulator-dismiss-hindenburg-claims/' }],
      },
      {
        year: 'Nov 2024', tag: 'Markets',
        text: 'US federal prosecutors indict Gautam Adani and others, alleging promises of over $250 million in bribes to Indian officials to win solar energy contracts. Adani shares fall again sharply. The group calls all charges "baseless" and says it will fight them in court.',
        sources: [
          { label: 'Malay Mail (AFP)', url: 'https://www.malaymail.com/news/money/2024/11/22/more-losses-for-adani-shares-in-india-after-founder-charged-with-paying-more-than-us250m-in-bribes-for-govt-contracts/157681' },
          { label: 'OCCRP investigation', url: 'https://www.occrp.org/en/investigation/bank-documents-expose-scale-of-secret-investments-in-adani-group-by-adani-family-associates' },
        ],
      },
      {
        year: 'Sep 2025', tag: 'Markets',
        text: 'The other side: SEBI closes the main Hindenburg cases, finding the key allegations "not established." Adani calls it proof the claims were always false. Reuters reports some smaller SEBI cases are still open. The US case continues separately.',
        sources: [
          { label: 'Business Standard', url: 'https://www.business-standard.com/markets/news/sebi-clears-adani-group-dismisses-hindenburg-allegations-125091801259_1.html' },
          { label: 'Al Jazeera', url: 'https://www.aljazeera.com/economy/2025/9/18/indian-regulators-dismiss-stock-manipulation-allegations-on-adani-group' },
        ],
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
    role: 'Prime Minister of India (2014–present) · Gujarat Chief Minister (2001–2014)',
    image: '/vg.png',
    framing: 'He owns no companies. He sets the rules the companies play by. This page is a dated, sourced record of what he said, what he decided, and what happened next.',
    scopeNote: 'How to read this page: every card tells you what happened, when, and who reported it. Where the government or a court answered back, we show that too. We do not tell you what to think — read the sources and decide yourself.',

    // ── SCOREBOARD ──────────────────────────────────────────────
    scorecard: {
      total: 10,
      unfulfilled: 6,
      partial: 2,
      disputed: 2,
      note: 'Based on original stated deadlines. "Partial" means some progress but the specific target was missed.',
    },

    stats: [
      { label: 'Years in power', value: '24+', sub: 'Gujarat 2001–14, India 2014–now', sources: [{ label: 'BBC profile', url: 'https://www.bbc.com/news/world-asia-india-16020711' }] },
      { label: 'Terms as PM', value: '3', sources: [{ label: 'ECI results', url: 'https://results.eci.gov.in/' }] },
      {
        label: 'Richest 1% own (of all wealth)', value: '₹40 / ₹100', sub: 'Highest ever recorded',
        sources: [{ label: 'World Inequality Lab', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' }],
      },
      {
        label: 'India hunger rank (2024)', value: '105 / 127', sub: '"Serious" level',
        sources: [{ label: 'Tribune India (PTI)', url: 'https://www.tribuneindia.com/news/india/global-hunger-index-2024-india-ranks-under-serious-category-on-par-with-pakistan-afghanistan' }],
      },
    ],

    // ── SAID vs RECORD (accordion on page) ──────────────────────
    statements: [
      {
        id: 's1',
        date: 'Nov 2013 – 2014 campaign',
        context: 'BJP election rallies across India',
        said: 'Black money stashed abroad is so vast that bringing it back could mean ₹15–20 lakh for every poor Indian\'s account. (Caveat: fact-checkers at BOOM and Logically Facts confirm this was NOT in the BJP manifesto as a literal pledge — it functioned as campaign rhetoric.)',
        record: 'No per-citizen deposit occurred. BJP president Amit Shah explicitly called the line a "jumla" (hollow promise) on ABP News, Feb 5, 2015. An RTI asking when the ₹15 lakh would be deposited received no substantive answer.',
        status: 'Disputed / Unfulfilled',
        statusColor: '#e8950a',
        sources: [
          { label: 'BOOM fact-check', url: 'https://www.boomlive.in/did-modi-promise-to-deposit-rs-15-lakh-in-every-account-a-factcheck' },
          { label: 'Logically Facts (manifesto)', url: 'https://www.logicallyfacts.com/en/fact-check/false-narendra-modi-had-promised-2-crore-jobs-during-the-2014-election-campaigns' },
          { label: 'Amit Shah "jumla" (ABP News)', url: 'https://www.youtube.com/watch?v=MNrQcCCYmtA' },
        ],
      },
      {
        id: 's2',
        date: '2013–2014 campaign',
        context: 'Multiple BJP rallies, Lok Sabha election',
        said: '2 crore jobs every year. (Caveat: fact-checkers confirm this exact phrase is NOT in the BJP manifesto. The number came from a 2013 Agra rally and was misattributed in press. BJP leaders and opposition both later treated it as a commitment.)',
        record: 'CMIE (independent) shows employed persons fell from 41.27 crore (2016-17) to 40.57 crore (2022-23) — a net loss of 70 lakh jobs economy-wide. Government\'s own ASI data shows registered manufacturing jobs rose by 46 lakh in 8 years — far short of 2 crore per year. Parliament was told: 22 crore people applied for govt jobs in 8 years; only 7 lakh were hired.',
        status: 'Unfulfilled / Disputed',
        statusColor: '#D84B4B',
        sources: [
          { label: 'Logically Facts (wording)', url: 'https://www.logicallyfacts.com/en/fact-check/false-narendra-modi-had-promised-2-crore-jobs-during-the-2014-election-campaigns' },
          { label: 'OnlyFact (manifesto)', url: 'https://onlyfact.in/2-crore-jobs-every-year-promised-by-prime-minister-narendra-modi-fact-check/' },
          { label: 'Peoples Democracy (CMIE data)', url: 'https://peoplesdemocracy.in/2024/0407_pd/where-are-promised-two-crore-jobs-every-year' },
          { label: 'Deccan Herald (7 lakh hired)', url: 'https://www.deccanherald.com/amp/story/india%2Fmodis-guarantee-is-guarantee-of-unemployment-priyanka-gandhi-2879014.html' },
          { label: 'Govt ASI data (DGE)', url: 'https://dge.gov.in/dge/sites/default/files/2024-11/Revised_Employment_situation_08_11.pdf' },
        ],
      },
      {
        id: 's3',
        date: '28 Feb 2016',
        context: 'Kisan Kalyan rally, Bareilly, Uttar Pradesh',
        said: '"I wish to double the income of farmers by 2022 when India will celebrate 75 years of its independence."',
        record: 'A government-commissioned Dalwai Committee report needed ~10.4% real annual income growth. The NSSO survey (2019) showed average farm household income of ₹10,218/month — far from the target. 2022 came and went. The government never announced the target was met. A senior NITI Aayog official privately said it was "always a mirage."',
        status: 'Unfulfilled',
        statusColor: '#D84B4B',
        sources: [
          { label: 'India.com (original rally)', url: 'https://www.india.com/news/india/narendra-modi-in-bareilly-pm-promises-to-double-farmers-income-by-2022-989790/' },
          { label: 'Zee News (rally coverage)', url: 'https://zeenews.india.com/news/india/pm-narendra-modi-remembers-famous-bareilly-jhumka-says-my-dream-is-to-see-farmers-double-their-income-by-2022_1860376.html' },
          { label: 'ThePrint (NITI "mirage")', url: 'https://theprint.in/opinion/modi-govt-official-finally-let-it-slip-doubling-farmers-income-by-2022-was-always-a-mirage/631550/' },
          { label: 'NITI Aayog DFI report', url: 'https://www.niti.gov.in/' },
        ],
      },
      {
        id: 's4',
        date: '25 Sep 2014',
        context: 'Make in India launch, Vigyan Bhavan, New Delhi',
        said: 'Make manufacturing 25% of GDP by 2022. Create 100 million (10 crore) new manufacturing jobs.',
        record: 'Manufacturing share of GDP: ~17.3% in 2023-24, barely changed from ~17% in 2013-14. Registered manufacturing jobs (ASI): rose by only ~46 lakh in 8 years — vs the 10 crore target. No official source claims either target was met.',
        status: 'Unfulfilled',
        statusColor: '#D84B4B',
        sources: [
          { label: 'Down To Earth (10-yr review)', url: 'https://www.downtoearth.org.in/governance/but-did-we-really-make-in-india' },
          { label: 'Govt ASI data (DGE)', url: 'https://dge.gov.in/dge/sites/default/files/2024-11/Revised_Employment_situation_08_11.pdf' },
          { label: 'CEDA Ashoka University', url: 'https://ceda.ashoka.edu.in/full-version-are-manufacturing-jobs-growing-or-declining-heres-what-the-data-shows/' },
        ],
      },
      {
        id: 's5',
        date: '20 Sep 2018 (reaffirmed Budget 2019-20)',
        context: 'IICC foundation stone; Finance Minister\'s Budget Speech',
        said: 'India will become a $5 trillion economy — initially by 2022, then revised to FY2024-25.',
        record: 'India\'s GDP was ~$3.50 trillion in 2023-24 and ~$3.76 trillion in 2024-25 (IMF, April 2026). Both the 2022 and 2025 deadlines were missed. Government now talks about "third-largest economy by 2027-28" and "Viksit Bharat 2047."',
        status: 'Unfulfilled',
        statusColor: '#D84B4B',
        sources: [
          { label: 'The Wire (analysis)', url: 'https://m.thewire.in/article/economy/five-trillion-dollar-economy-modi-india-fail-again' },
          { label: 'The Quint (Subhash Chandra Garg)', url: 'https://www.thequint.com/opinion/modis-third-largest-and-5-trillion-economy-targets-are-off-track-india' },
          { label: 'IMF World Economic Outlook', url: 'https://www.imf.org/en/Publications/WEO/weo-database/2026/April' },
        ],
      },
      {
        id: 's6',
        date: '25 Jun 2015',
        context: 'Smart Cities Mission launch, New Delhi',
        said: 'Develop 100 smart cities in 5 years with ₹48,000 crore central assistance.',
        record: 'Required multiple deadline extensions — to June 2024, then March 2025. The mission closed March 31, 2025. Only 18 of 100 cities had completed all their projects by the final deadline; 92.8% of tendered projects done overall.',
        status: 'Partial',
        statusColor: '#4a8a4a',
        sources: [
          { label: 'Down To Earth (Jan 2025 status)', url: 'https://www.downtoearth.org.in/governance/after-a-decade-of-its-launch-only-18-out-of-100-cities-have-completed-smart-cities-mission-projects-but-there-are-some-positive-takeaways' },
          { label: 'Smart Cities Mission Wikipedia', url: 'https://en.wikipedia.org/wiki/Smart_Cities_Mission' },
          { label: 'PIB official update', url: 'https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=151908&ModuleId=3' },
        ],
      },
      {
        id: 's7',
        date: '25 Jun 2015',
        context: 'Pradhan Mantri Awas Yojana (PMAY) launch',
        said: 'Housing for All by 2022 — build ~2 crore pucca houses for the poor.',
        record: 'By Dec 2022: 107 lakh of 123 lakh sanctioned houses were started; only 61 lakh delivered to beneficiaries. Both PMAY-Urban and PMAY-Gramin deadlines were extended. Programme now runs as "PMAY 2.0" with new targets.',
        status: 'Partial / Unfulfilled',
        statusColor: '#e8950a',
        sources: [
          { label: 'NewsClick (2022 audit)', url: 'https://www.newsclick.in/housing-all-2022-heres-status' },
          { label: 'PM India (official launch)', url: 'https://www.pmindia.gov.in/en/news_updates/housing-for-all-by-2022-mission-national-mission-for-urban-housing/' },
          { label: 'PIB Cabinet extension', url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1850679' },
        ],
      },
      {
        id: 's8',
        date: '14 Sep 2017',
        context: 'Mumbai–Ahmedabad bullet train groundbreaking, Ahmedabad (with Japanese PM Shinzo Abe)',
        said: 'India\'s first bullet train inaugurated by August 15, 2022 (India\'s 75th Independence Day).',
        record: 'Land acquisition disputes, legal challenges and COVID-related disruptions pushed the timeline back by years. As of 2024-25, civil construction is ongoing. NHSRCL projects partial operations starting ~2027 at the earliest.',
        status: 'Unfulfilled',
        statusColor: '#D84B4B',
        sources: [
          { label: 'The Wire (project status)', url: 'https://thewire.in/government/mumbai-ahmedabad-bullet-train-launch-modi' },
          { label: 'MAHSR Wikipedia (timeline)', url: 'https://en.wikipedia.org/wiki/Mumbai%E2%80%93Ahmedabad_high-speed_rail_corridor' },
          { label: 'NHSRCL official site', url: 'https://nhsrcl.in/' },
        ],
      },
      {
        id: 's9',
        date: '2013–2014 campaign',
        context: 'Central campaign slogan, all rallies and media',
        said: '"Acche din aane wale hain" — Good days are coming. An aspirational slogan, not a single measurable claim.',
        record: 'Not measurable against any single dataset. Government cites GDP growth, UPI payments and infrastructure. Critics point to rising unemployment, rural distress and inflation. Because no specific number was ever attached, no data alone can confirm or deny it.',
        status: 'Disputed',
        statusColor: '#888',
        sources: [
          { label: 'Deccan Herald (opposition audit)', url: 'https://www.deccanherald.com/amp/national/opposition-finds-nothing-in-pms-independence-day-speech-questions-modi-on-previous-promises-1136288.html' },
        ],
      },
      {
        id: 's10',
        date: 'Multiple (Make in India 2014, FTP 2015-20, Atmanirbhar 2020)',
        context: 'Multiple budgets and PM speeches',
        said: 'Substantially increase exports — reaching $1 trillion in total exports.',
        record: 'Total exports (merchandise + services) hit a record $824.9 billion in FY2024-25 per Ministry of Commerce. However exports as a share of GDP fell from ~25.2% (2013-14) to ~22.7% (2023-24) — exports grew slower than the overall economy. India\'s share of world merchandise exports barely moved (1.7% → 1.8%).',
        status: 'Partial',
        statusColor: '#4a8a4a',
        sources: [
          { label: 'PIB Commerce (FY2024-25 data)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2122016' },
          { label: 'Make in India Wikipedia', url: 'https://en.wikipedia.org/wiki/Make_in_India' },
          { label: 'Economic Survey', url: 'https://www.indiabudget.gov.in/economicsurvey/' },
        ],
      },
    ],

    // ── POLICY TIMELINE ──────────────────────────────────────────
    events: [
      {
        era: 'Gujarat years (2001–2014)',
        year: 'Oct 2001', tag: 'Context',
        text: 'Becomes Chief Minister of Gujarat — his first government job. He will run the state for nearly 13 years.',
        sources: [{ label: 'BBC profile', url: 'https://www.bbc.com/news/world-asia-india-16020711' }],
      },
      {
        year: '2002', tag: 'Context',
        text: 'Communal riots in Gujarat kill over 1,000 people by official count, most of them Muslim. Modi\'s government is heavily criticised internationally. A Supreme Court-appointed SIT later finds no evidence to prosecute him, and the Supreme Court upholds that finding in June 2022. The US denied him a visa in 2005 under a law on severe violations of religious freedom.',
        sources: [
          { label: 'Outlook India (SC clean chit, Jun 2022)', url: 'https://www.outlookindia.com/national/gujarat-riots-sc-upholds-sit-clean-chit-to-pm-modi-dismisses-zakia-jafri-s-plea-news-204338' },
          { label: 'US State Dept (2005 visa denial)', url: 'https://2001-2009.state.gov/p/sca/rls/rm/2005/43701.htm' },
        ],
      },
      {
        year: '2001–2014', tag: 'A2',
        text: 'The Adani connection begins here. Adani backs Modi when other industrialists criticise him. Modi frequently travels in Adani\'s corporate jet during campaign trips across Gujarat. British journalist James Crabtree describes their careers as "symbiotic": "Mr Modi\'s pro-business policies helped Mr Adani expand."',
        sources: [
          { label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' },
          { label: 'Financial Times (Crabtree)', url: 'https://www-ft-com.ezproxy.brunel.ac.uk/content/474706d6-1243-4f1e-b365-891d4c5d528b' },
        ],
      },
      {
        era: 'PM years (2014–now)',
        year: 'May 2014', tag: 'A2',
        text: 'Wins the election. Flies from Ahmedabad to Delhi for his swearing-in on Adani\'s private jet — the Adani logo visible in every photo. The image becomes one of the most discussed in Indian politics. Rahul Gandhi held it up in Parliament in Feb 2023 while questioning whether ties to Adani blocked investigations.',
        sources: [
          { label: 'ThePrint (book excerpt)', url: 'https://theprint.in/pageturner/excerpt/adani-modi-gujarats-journey-from-vibrant-to-flagrant-blatant-belligerent-and-strident/2491404/' },
          { label: 'AdaniWatch (jet spending)', url: 'https://www.adaniwatch.org/exclusive_did_pm_modi_and_bjp_disclose_election_spending_on_adani_private_jet_lease' },
        ],
      },
      {
        year: 'Nov 2016', tag: 'Policy',
        text: 'Demonetisation: at 8pm on TV, cancels 86% of India\'s cash overnight, saying it will destroy black money. Long queues at banks for weeks; small businesses suffer badly. Two years later the RBI\'s own annual report counted the notes: 99.3% came back to the banks. If black money was hiding in cash, almost none of it was caught.',
        sources: [
          { label: 'Deccan Herald (PTI, 99.3%)', url: 'https://www.deccanherald.com/amp/story/india%2F993-demonetised-currency-689975.html' },
          { label: 'Business Standard (RBI report)', url: 'https://www.business-standard.com/article/economy-policy/people-returned-98-96-of-demonetised-rs-500-and-rs-1-000-notes-rbi-117083001197_1.html' },
        ],
      },
      {
        year: 'Feb 2019', tag: 'A2',
        text: 'Six government airports privatised. The prior-experience requirement is dropped before bidding. Adani — zero airport experience — wins all six for 50 years. Officials\' objections are formally overruled. Government says the deal still earns the Airports Authority ₹904 crore.',
        sources: [
          { label: 'India.com (airport timeline)', url: 'https://www.india.com/business/adani-hindenburg-saga-gautam-adani-road-to-getting-operating-rights-for-6-airports-top-points-5894291/' },
          { label: 'Business Standard (govt reply)', url: 'https://www.business-standard.com/amp/article/economy-policy/tangible-economic-gain-to-aai-on-leasing-out-six-airports-under-ppp-govt-121020301857_1.html' },
        ],
      },
      {
        year: 'Sep 2019', tag: 'Policy',
        text: 'Corporate tax cut from 30% to 22% (15% for new manufacturing). The finance minister herself puts the revenue given up at ₹1.45 lakh crore every year — more than India\'s whole annual health budget. The stock market jumps 1,900 points the same day.',
        sources: [
          { label: 'Business Today', url: 'https://www.businesstoday.in/latest/economy-politics/story/nirmala-sitharaman-finance-minister-slash-corporate-tax-rate-domestic-firms-227683-2019-09-20' },
          { label: 'The Wire', url: 'https://thewire.in/macro/nirmala-sitharaman-corporate-tax-cuts' },
        ],
      },
      {
        year: '2020–2021', tag: 'Policy',
        text: 'Three new farm laws spark the biggest farmer protest in decades — farmers camp at Delhi\'s borders for over a year in winter. In November 2021, Modi repeals all three laws on national TV. A rare step back.',
        sources: [{ label: 'Al Jazeera (repeal)', url: 'https://www.aljazeera.com/news/2021/11/19/india-pm-modi-repeals-controversial-farm-laws-after-year-of-protests' }],
      },
      {
        year: 'Feb 2024', tag: 'Policy',
        text: 'The Supreme Court strikes down electoral bonds — the anonymous political-funding scheme his government created in 2018 — as unconstitutional. Judges rule voters have a right to know who funds parties. The full donor list is published: BJP received ₹6,060+ crore, the most of any party. 94% of all bond money came in ₹1 crore denominations — this was large-company money, not small donors.',
        sources: [
          { label: 'Tribune India (SC verdict)', url: 'https://www.tribuneindia.com/news/india/unconstitutional-sc-junks-electoral-bonds-scheme-seeks-info-on-donors-591168' },
          { label: 'BBC (donor data)', url: 'https://feeds.bbci.co.uk/news/world-asia-india-68509410' },
          { label: 'India TV (party-wise totals)', url: 'https://www.indiatvnews.com/explainers/electoral-bonds-data-bjp-biggest-beneficiary-followed-by-tmc-congress-complete-list-political-parties-election-commission-sbi-supreme-court-2024-03-15-921619' },
        ],
      },
      {
        year: 'Apr–Jun 2024', tag: 'Context',
        text: '2024 General Election: BJP wins but loses its outright majority, getting 240 seats vs 370+ projected. Forms coalition government. NGO watchdog ADR documents 5,89,691 discrepancies between votes polled and votes counted. ECI dismisses concerns. See the full 2024 Election page for all six clusters of documented concerns.',
        sources: [
          { label: 'ADR discrepancy report', url: 'https://adrindia.org/content/report-reveals-vote-count-discrepancies-2024-lok-sabha-elections' },
        ],
      },
      {
        year: 'Mar 2024', tag: 'Context',
        text: 'Economists at the World Inequality Lab (including Thomas Piketty) publish: the richest 1% now hold ₹40 of every ₹100 of wealth — more unequal than India under British rule. They call today\'s India a "Billionaire Raj."',
        sources: [
          { label: 'World Inequality Lab (study)', url: 'https://wid.world/news-article/inequality-in-india-the-billionaire-raj-is-now-more-unequal-than-the-british-colonial-raj/' },
          { label: 'The News Minute', url: 'https://www.thenewsminute.com/news/top-1-in-india-holds-401-wealth-says-world-inequality-lab-report' },
        ],
      },
    ],
  },
}

export const PERSON_IDS = ['ambani', 'modi', 'adani']
