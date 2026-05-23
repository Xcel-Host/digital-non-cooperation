export const adani = {
  id: 'adani',
  badge: 'A2',
  name: 'Adani Empire',
  person: 'Gautam Adani',
  color: '#F59E0B',
  colorClass: 'amber',
  tagline: 'Ports · Airports · Power · Cement · Media · Food · Gas · Defence',
  description:
    'Adani Group started as a commodity trading firm in 1988. Today it controls critical national infrastructure — ports, airports, power, gas — that affects every Indian whether they know it or not.',
  sectors: [
    {
      id: 'ports',
      icon: '🚢',
      name: 'Ports & Logistics',
      count: '13 ports · Mundra SEZ',
      description:
        'Adani Ports & SEZ is India\'s largest private port operator. Mundra Port in Gujarat is India\'s largest commercial port. 13 ports handle a massive share of India\'s imports and exports — affecting prices of goods for everyone.',
      brands: [
        { name: 'Mundra Port', detail: 'India\'s largest commercial port · Gujarat' },
        { name: 'Adani Ports & SEZ', detail: '13 ports nationwide · Largest private port operator' },
        { name: 'Adani Logistics', detail: 'Rail, road & warehousing services' },
        { name: 'Adani Agri Logistics', detail: 'Grain storage and logistics' },
        { name: 'Krishnapatnam Port', detail: 'Andhra Pradesh · Adani acquired' },
        { name: 'Gangavaram Port', detail: 'Andhra Pradesh · Adani acquired' },
        { name: 'Dhamra Port', detail: 'Odisha · Adani acquired' },
      ],
      alternatives: [
        {
          avoid: 'Adani Ports (no direct consumer choice)',
          avoidReason: 'Controls major share of India\'s port infrastructure. Affects supply chain costs for all goods.',
          picks: [
            { name: 'No direct consumer alternative', tag: 'Systemic', note: 'Port infrastructure is not switchable by consumers. Awareness of how port concentration affects import prices matters. Support policy advocacy.' },
          ],
        },
      ],
    },
    {
      id: 'airports',
      icon: '✈️',
      name: 'Airports',
      count: '8 airports · 94M passengers/year',
      description:
        'Adani Airports Holdings manages 8 major Indian airports — Mumbai (India\'s busiest), Ahmedabad, Jaipur, Lucknow, Guwahati, Mangaluru, Thiruvananthapuram, and Navi Mumbai (under development). 94 million passengers a year pass through Adani-managed airports.',
      brands: [
        { name: 'Mumbai Airport (CSIA)', detail: 'India\'s busiest airport · Adani managed' },
        { name: 'Ahmedabad Airport', detail: 'Sardar Vallabhbhai Patel International · Adani managed' },
        { name: 'Jaipur Airport', detail: 'Adani managed' },
        { name: 'Lucknow Airport', detail: 'Chaudhary Charan Singh International · Adani managed' },
        { name: 'Guwahati Airport', detail: 'Lokpriya Gopinath Bordoloi International · Adani managed' },
        { name: 'Mangaluru Airport', detail: 'Adani managed' },
        { name: 'Thiruvananthapuram Airport', detail: 'Adani managed' },
        { name: 'Navi Mumbai Airport', detail: 'Under construction · Adani' },
      ],
      alternatives: [
        {
          avoid: 'Adani-managed airports (no practical alternative)',
          avoidReason: '94M passengers/year across 8 airports. No consumer choice in most cities.',
          picks: [
            { name: 'No direct alternative', tag: 'Systemic', note: 'Airport privatisation means no consumer choice of operator. This is a policy issue — awareness and civic engagement matters most here.' },
          ],
        },
      ],
    },
    {
      id: 'power',
      icon: '⚡',
      name: 'Power & Energy',
      count: '4 companies',
      description:
        'Adani Power is India\'s largest private thermal power producer. Adani Electricity supplies electricity to all of Mumbai. Adani Total Gas distributes piped gas in 50+ cities. Your electricity bill, your cooking gas — Adani.',
      brands: [
        { name: 'Adani Power', detail: 'India\'s largest private thermal power producer · 15GW+ capacity' },
        { name: 'Adani Electricity Mumbai', detail: 'Sole electricity distributor for Mumbai city' },
        { name: 'Adani Energy Solutions', detail: 'Power transmission lines · Pan-India' },
        { name: 'Adani Total Gas', detail: 'Piped natural gas (PNG) · 50+ cities · JV with TotalEnergies' },
        { name: 'Adani Green Energy', detail: 'Solar & wind power · 8.3GW capacity · Largest in India' },
        { name: 'Adani New Industries', detail: 'Green hydrogen · Solar panels manufacturing' },
      ],
      alternatives: [
        {
          avoid: 'Adani Electricity Mumbai / Adani Total Gas',
          avoidReason: 'Adani is the sole electricity distributor for Mumbai. Adani Total Gas serves 50+ cities.',
          picks: [
            { name: 'BEST (Mumbai)', tag: 'Govt. owned', note: 'Brihanmumbai Electric Supply & Transport — operates in some Mumbai areas' },
            { name: 'Rooftop Solar (PM Surya Ghar)', tag: 'Govt. initiative', note: 'Government scheme with subsidy for rooftop solar. Reduces grid dependency.' },
            { name: 'Indane / HP Gas / Bharat Gas', tag: 'Govt. owned', note: 'For cooking gas — use government PSU cylinders instead of PNG where possible' },
          ],
        },
      ],
    },
    {
      id: 'media',
      icon: '📺',
      name: 'Media',
      count: 'NDTV · 3 channels',
      description:
        'NDTV was India\'s most trusted independent news network for decades. In 2022–23, Adani\'s AMG Media Networks acquired a 64.71% majority stake. Quintillion Business Media (BQ Prime / Bloomberg Quint) is also Adani-owned.',
      brands: [
        { name: 'NDTV 24x7', detail: 'English news · AMG Media Networks (Adani 64.71%)' },
        { name: 'NDTV India', detail: 'Hindi news · Adani-owned' },
        { name: 'NDTV Profit', detail: 'Business & markets news · Adani-owned' },
        { name: 'NDTV World', detail: 'International news · Adani-owned' },
        { name: 'BQ Prime (Bloomberg Quint)', detail: 'Business news portal · Quintillion Business Media · Adani-owned' },
      ],
      alternatives: [
        {
          avoid: 'NDTV (all channels) / BQ Prime',
          avoidReason: 'Once India\'s most independent news network. Now majority-owned by Adani (64.71%) since 2022–23.',
          picks: [
            { name: 'The Wire', tag: 'Independent', note: 'Independent digital journalism, funded by readers' },
            { name: 'Newslaundry', tag: 'Independent', note: 'Subscription-funded — no dependence on corporate advertisers' },
            { name: 'The Hindu', tag: 'Independent', note: 'Over 140 years, editorially autonomous' },
            { name: 'Indian Express', tag: 'Independent', note: 'Strong investigative journalism, independent' },
            { name: 'BBC Hindi', tag: 'Public media', note: 'British public broadcaster — no Indian corporate ownership' },
            { name: 'DW Hindi', tag: 'Public media', note: 'German public broadcaster — independent' },
            { name: 'Scroll.in / The Print', tag: 'Independent', note: 'Independent digital news platforms' },
          ],
        },
      ],
    },
    {
      id: 'cement',
      icon: '🏗️',
      name: 'Cement & Materials',
      count: '3 brands · 2nd largest in India',
      description:
        'Adani acquired Ambuja Cements and ACC in 2022 — making the group India\'s second-largest cement producer. Then acquired Sanghi Industries in 2023. Your next home construction likely touches Adani cement.',
      brands: [
        { name: 'Ambuja Cements', detail: 'India\'s 2nd largest cement brand · Adani acquired 2022' },
        { name: 'ACC (Associated Cement)', detail: 'Major cement brand · Adani acquired 2022' },
        { name: 'Sanghi Industries', detail: 'Cement manufacturer · Adani acquired 2023' },
      ],
      alternatives: [
        {
          avoid: 'Ambuja Cement / ACC / Sanghi',
          avoidReason: 'All three acquired by Adani. Together form India\'s 2nd largest cement producer.',
          picks: [
            { name: 'UltraTech Cement', tag: 'Independent', note: 'Aditya Birla Group — India\'s #1 cement brand, independent of Reliance/Adani' },
            { name: 'Shree Cement', tag: 'Independent', note: 'Independent — strong in North and East India' },
            { name: 'Dalmia Bharat Cement', tag: 'Independent', note: 'Independent producer, strong in South and East India' },
            { name: 'JK Cement', tag: 'Independent', note: 'Independent, strong in North India' },
            { name: 'Ramco Cements', tag: 'Independent', note: 'South India specialist, independent' },
          ],
        },
      ],
    },
    {
      id: 'food',
      icon: '🌾',
      name: 'Food & FMCG',
      count: 'Fortune · India\'s #1 oil brand',
      description:
        'Adani Wilmar (joint venture with Wilmar International) produces Fortune — India\'s #1 edible oil brand with 18–20% market share. Also produces rice, wheat flour, sugar, pulses and packaged foods under the Fortune label.',
      brands: [
        { name: 'Fortune Sunflower Oil', detail: 'India\'s #1 edible oil · Adani Wilmar JV' },
        { name: 'Fortune Soyabean Oil', detail: 'Adani Wilmar · Mass market edible oil' },
        { name: 'Fortune Rice Bran Oil', detail: 'Adani Wilmar' },
        { name: 'Fortune Basmati Rice', detail: 'Packaged rice · Adani Wilmar' },
        { name: 'Fortune Chakki Fresh Atta', detail: 'Wheat flour · Adani Wilmar' },
        { name: 'Fortune Sugar', detail: 'Packaged sugar · Adani Wilmar' },
        { name: 'Fortune Pulses', detail: 'Dal and lentils · Adani Wilmar' },
        { name: 'Fryola', detail: 'Budget edible oil · Adani Wilmar' },
        { name: 'Alife', detail: 'Edible oil sub-brand · Adani Wilmar' },
      ],
      alternatives: [
        {
          avoid: 'Fortune (oils, rice, atta, sugar, pulses)',
          avoidReason: 'India\'s #1 edible oil brand — Adani Wilmar JV. 18–20% market share in edible oils.',
          picks: [
            { name: 'Amul', tag: 'Cooperative', note: '3.6 million farmer-members. Profits return to farmers. Not a corporation.' },
            { name: 'Mother Dairy', tag: 'Cooperative', note: 'NDDB government-backed cooperative. Dhara oils brand.' },
            { name: 'Dhara (NDDB)', tag: 'Govt. cooperative', note: 'National Dairy Development Board — government-backed edible oils' },
            { name: 'Saffola (Marico)', tag: 'Independent', note: 'Marico — independent Indian FMCG company' },
            { name: 'Sundrop (Agro Tech)', tag: 'Independent', note: 'Independent brand, not Reliance/Adani' },
            { name: 'Local cold-pressed oils', tag: 'Local', note: 'Groundnut, sesame, coconut oil from local mills — healthier and supports local economy' },
          ],
        },
      ],
    },
    {
      id: 'infrastructure',
      icon: '🛣️',
      name: 'Roads, Data & Defence',
      count: '3 sectors',
      description:
        'Adani Enterprises incubates new businesses — currently building data centers (AdaniConneX), 8 road projects, defence & aerospace manufacturing, and water infrastructure.',
      brands: [
        { name: 'AdaniConneX', detail: 'Data centers · AI-ready green compute · JV with EdgeConneX' },
        { name: 'Adani Roads', detail: '8 highway projects under construction' },
        { name: 'Adani Defence & Aerospace', detail: 'Drones, ammunition, helicopters · Defence manufacturing' },
        { name: 'Adani Water', detail: 'Water treatment and infrastructure' },
        { name: 'Adani Realty', detail: 'Real estate projects across India' },
        { name: 'Adani University', detail: 'Private university in Ahmedabad' },
      ],
      alternatives: [
        {
          avoid: 'AdaniConneX / Adani infrastructure',
          avoidReason: 'Adani building dominance in data, roads, defence, and water — all critical national infrastructure.',
          picks: [
            { name: 'NIC (National Informatics Centre)', tag: 'Govt. owned', note: 'For government digital infrastructure — public sector' },
            { name: 'BSNL Data Centre', tag: 'Govt. owned', note: 'Government-owned data infrastructure' },
            { name: 'Awareness & civic engagement', tag: 'Systemic', note: 'Infrastructure privatisation is a policy question. Civic participation and awareness matters more than individual switching here.' },
          ],
        },
      ],
    },
  ],
}
