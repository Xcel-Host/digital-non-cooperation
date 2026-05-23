export const reliance = {
  id: 'reliance',
  badge: 'A1',
  name: 'Ambani Empire',
  person: 'Mukesh Ambani',
  color: '#D84B4B',
  colorClass: 'red',
  tagline: 'Telecom · Retail · Media · Digital · Energy · Fashion · Finance',
  description:
    'Reliance Industries Limited (RIL) is India\'s largest private sector company. With 258+ entities, it touches almost every part of daily life — your internet, your news, your grocery, your clothes, your petrol pump.',
  sectors: [
    {
      id: 'telecom',
      icon: '📶',
      name: 'Telecom',
      count: '3 services · 506M users',
      description:
        'Jio controls 38% of India\'s telecom market with 506 million subscribers. When one group controls your internet, it also shapes what you stream, read, and buy. Pricing pressure from competitors disappears.',
      brands: [
        { name: 'Jio', detail: '506M subscribers · 38% market share · India\'s largest telecom' },
        { name: 'JioFiber', detail: 'Home broadband · Fastest growing ISP in India' },
        { name: 'Jio AirFiber', detail: 'Wireless home internet · 5G-based' },
        { name: 'JioPhone', detail: 'Budget 4G smartphones for mass market' },
        { name: 'Jio-bp', detail: 'Petrol pumps · 51% Reliance JV with BP' },
      ],
      alternatives: [
        {
          avoid: 'Jio',
          avoidReason: 'Controls 38% of India\'s telecom. One group owns your internet, data, and attention.',
          picks: [
            { name: 'Airtel', tag: 'Independent', note: 'Comparable plans, strong 5G network, nationwide coverage' },
            { name: 'BSNL', tag: 'Govt. owned', note: 'Government-owned, supports public telecom infrastructure' },
            { name: 'Vi (Vodafone Idea)', tag: 'Independent', note: 'Viable alternative, especially in metros' },
            { name: 'MTNL', tag: 'Govt. owned', note: 'Delhi and Mumbai — government-operated' },
          ],
        },
      ],
    },
    {
      id: 'media',
      icon: '📺',
      name: 'Media & News',
      count: '50+ channels · Network18',
      description:
        'Network18 is 56.89% owned by Reliance. It runs over 50 channels and portals — CNN-News18, CNBC TV18, News18 India, Colors TV, and more. When one corporate group owns this much media, editorial independence becomes a real question.',
      brands: [
        { name: 'CNN-News18', detail: 'English news channel · Network18' },
        { name: 'CNBC TV18', detail: 'Business & markets news · Network18' },
        { name: 'News18 India', detail: 'Hindi news · Network18' },
        { name: 'News18 Regional', detail: '20 regional language channels · Network18' },
        { name: 'Colors TV', detail: 'Hindi entertainment · Network18' },
        { name: 'Colors Kannada', detail: 'Kannada entertainment · Network18' },
        { name: 'Colors Bangla', detail: 'Bengali entertainment · Network18' },
        { name: 'MTV India', detail: 'Youth music channel · Network18' },
        { name: 'VH1 India', detail: 'International music · Network18' },
        { name: 'Nickelodeon India', detail: 'Kids channel · Network18' },
        { name: 'Forbes India', detail: 'Business magazine · Network18' },
        { name: 'Moneycontrol', detail: 'Finance & markets portal · Network18' },
        { name: 'Firstpost', detail: 'News portal · Network18' },
        { name: 'DEN Networks', detail: 'Cable TV operator · Reliance 78.62%' },
        { name: 'Hathway', detail: 'Cable & broadband · Reliance 71.95%' },
      ],
      alternatives: [
        {
          avoid: 'Network18 channels (CNN-News18, CNBC TV18, Colors, etc.)',
          avoidReason: '56.89% owned by Reliance — 50+ channels under one corporate owner.',
          picks: [
            { name: 'The Wire', tag: 'Independent', note: 'Donation-funded independent digital journalism' },
            { name: 'Newslaundry', tag: 'Independent', note: 'Subscription-funded, known for media criticism and original reporting' },
            { name: 'The Hindu', tag: 'Independent', note: 'Over 140 years old, editorially autonomous' },
            { name: 'Indian Express', tag: 'Independent', note: 'Independent print and digital, strong investigative journalism' },
            { name: 'Scroll.in', tag: 'Independent', note: 'Digital-first independent news platform' },
            { name: 'The Print', tag: 'Independent', note: 'Policy and politics focused digital news' },
          ],
        },
      ],
    },
    {
      id: 'streaming',
      icon: '🎬',
      name: 'Streaming & Music',
      count: '3 platforms · 500M+ viewers',
      description:
        'JioHotstar (merged JioCinema + Disney+ Hotstar in Feb 2025) is 63% controlled by Reliance — India\'s largest streaming platform. It holds IPL rights, making it almost impossible to watch cricket without paying Reliance.',
      brands: [
        { name: 'JioHotstar', detail: 'Reliance 63% · Merged JioCinema + Disney+ Hotstar · IPL rights holder' },
        { name: 'JioSaavn', detail: 'Music streaming · Podcasts · 100M+ users' },
        { name: 'JioTV', detail: 'Live TV streaming app · 800+ channels' },
        { name: 'JioCinema', detail: 'Now merged into JioHotstar' },
      ],
      alternatives: [
        {
          avoid: 'JioHotstar / JioSaavn / JioTV',
          avoidReason: 'Reliance 63% — India\'s largest OTT. IPL and cricket rights make it a near-monopoly.',
          picks: [
            { name: 'SonyLIV', tag: 'Independent', note: 'Sony Pictures — independent of Reliance/Adani. Has cricket rights too.' },
            { name: 'ZEE5', tag: 'Independent', note: 'Zee Entertainment — independent, strong regional content' },
            { name: 'MX Player', tag: 'Independent', note: 'Times Internet — free streaming, large library' },
            { name: 'Stremio', tag: 'Open source', note: 'Open-source media aggregator. Add IndiaStreams add-on for Hindi content.' },
            { name: 'Kodi', tag: 'Open source', note: 'Self-hosted media center. Full control, no subscription.' },
            { name: 'Spotify', tag: 'Independent', note: 'Music streaming — independent of Indian conglomerates' },
            { name: 'Wynk Music (Airtel)', tag: 'Independent', note: 'Airtel\'s music app — not Reliance' },
            { name: 'Gaana', tag: 'Independent', note: 'Times Internet — independent music streaming' },
          ],
        },
      ],
    },
    {
      id: 'retail',
      icon: '🛒',
      name: 'Retail & Grocery',
      count: '18,836 stores · 7,000 towns',
      description:
        'Reliance Retail is India\'s largest retailer by revenue — ₹3.3 lakh crore in FY2025. With 18,836 stores across 7,000 towns, when Reliance enters your neighbourhood, local kirana stores lose footfall fast.',
      brands: [
        { name: 'JioMart', detail: 'Online grocery and general merchandise' },
        { name: 'Smart Bazaar', detail: 'Large-format hypermarket chain' },
        { name: 'Freshpik', detail: 'Premium grocery format' },
        { name: 'Reliance Fresh', detail: 'Neighbourhood grocery stores' },
        { name: 'Reliance Smart', detail: 'Supermarket format' },
        { name: 'Reliance Smart Point', detail: 'Convenience stores' },
        { name: '7-India Convenience Retail', detail: 'Convenience stores · Reliance subsidiary' },
      ],
      alternatives: [
        {
          avoid: 'JioMart / Smart Bazaar / Freshpik / Reliance Fresh',
          avoidReason: '18,836 stores — bigger than the next 10 Indian retailers combined. Local retail loses when Reliance enters.',
          picks: [
            { name: 'Local kirana', tag: 'Community', note: 'Your money stays in your neighbourhood. Supports local livelihoods directly.' },
            { name: 'ONDC apps (Paytm, Magicpin)', tag: 'Govt. initiative', note: 'Open Network for Digital Commerce — like UPI for shopping. Connects you to local sellers without platform monopoly.' },
            { name: 'Big Bazaar (Future Retail)', tag: 'Independent', note: 'Now partially independent after Reliance exit from some assets' },
            { name: 'DMart', tag: 'Independent', note: 'Avenue Supermarts — independent large-format retail' },
            { name: 'Local weekly markets (haats)', tag: 'Community', note: 'Direct from farmer or producer — no middleman, no platform fee' },
          ],
        },
      ],
    },
    {
      id: 'fashion',
      icon: '👗',
      name: 'Fashion & Lifestyle',
      count: '6 brands',
      description:
        'Reliance has quietly become India\'s largest fashion retailer — both online (AJIO) and offline (Trends, Azorte). Acquisitions of Zivame, Clovia, and Tira beauty give it a grip on every segment of fashion and personal care.',
      brands: [
        { name: 'AJIO', detail: 'Online fashion marketplace · 2,500+ brands' },
        { name: 'Trends', detail: 'In-store fashion retail chain' },
        { name: 'Azorte', detail: 'Premium fashion concept stores' },
        { name: 'Zivame', detail: 'Intimate wear · Acquired by Reliance' },
        { name: 'Clovia', detail: 'Lingerie brand · Acquired by Reliance Retail' },
        { name: 'Tira', detail: 'Beauty & cosmetics retail · Launched by Isha Ambani' },
        { name: 'Fynd', detail: 'Fashion e-commerce platform · Reliance subsidiary' },
      ],
      alternatives: [
        {
          avoid: 'AJIO / Trends / Azorte / Zivame / Clovia / Tira',
          avoidReason: 'All Reliance-owned. From online shopping to lingerie to beauty — one group.',
          picks: [
            { name: 'Myntra', tag: 'Independent', note: 'Flipkart/Walmart-owned — independent of Reliance/Adani' },
            { name: 'Meesho', tag: 'Independent', note: 'Independent, strong for budget fashion and small sellers' },
            { name: 'Fabindia', tag: 'Indian-owned', note: 'Handloom & ethical sourcing. Supports artisan livelihoods.' },
            { name: 'Westside', tag: 'Tata-owned', note: 'Tata group — independent of Reliance/Adani' },
            { name: 'Pantaloons', tag: 'Independent', note: 'Aditya Birla group — independent' },
            { name: 'Local handloom shops', tag: 'Community', note: 'Direct from weavers. Money goes to artisans.' },
            { name: 'Nykaa', tag: 'Independent', note: 'For beauty — publicly listed, independent' },
          ],
        },
      ],
    },
    {
      id: 'fmcg',
      icon: '🥤',
      name: 'FMCG & Beverages',
      count: '3 brands',
      description:
        'Campa Cola was a nostalgic brand — Reliance bought it for ₹22 crore in 2022 and relaunched it aggressively at ₹10 for 200ml to disrupt Pepsi and Coke. Sosyo is a Gujarat-based drink in which Reliance holds 50%.',
      brands: [
        { name: 'Campa Cola', detail: 'Cola drink · Reliance Consumer Products · ₹22Cr acquisition 2022' },
        { name: 'Campa Lime', detail: 'Lime drink · Reliance Consumer Products' },
        { name: 'Campa Orange', detail: 'Orange drink · Reliance Consumer Products' },
        { name: 'Campa Jeera', detail: 'Jeera flavour · Reliance Consumer Products' },
        { name: 'Sosyo', detail: 'Gujarat-based soft drink · Reliance holds 50%' },
      ],
      alternatives: [
        {
          avoid: 'Campa Cola / Campa range / Sosyo',
          avoidReason: 'Campa acquired by Reliance 2022. Aggressively priced to dominate the soft drinks market.',
          picks: [
            { name: 'Bovonto', tag: 'Indian brand', note: 'Chennai-based cult favourite. Grape-flavoured soda. Fully independent.' },
            { name: 'Lahori Zeera', tag: 'Indian brand', note: 'North India favourite jeera soda. Independent brand growing fast.' },
            { name: 'Paper Boat', tag: 'Indian brand', note: 'Indian flavours — Aamras, Aampanna, Jaljeera. Hector Beverages.' },
            { name: 'Jayanti Cola', tag: 'Indian brand', note: 'Rajasthan-based regional cola brand — independent' },
            { name: 'Local nimbu paani / shikanji', tag: 'Local', note: 'Roadside lemon water — the original Indian soft drink. Zero corporate.' },
            { name: 'Appy Fizz', tag: 'Indian brand', note: 'Parle Agro — Indian-owned, independent of Reliance/Adani' },
          ],
        },
      ],
    },
    {
      id: 'pharma-tech',
      icon: '💊',
      name: 'Pharma & Electronics',
      count: '2 brands',
      description:
        'Netmeds (online pharmacy) and Reliance Digital (electronics retail) extend Reliance\'s reach into healthcare and consumer technology.',
      brands: [
        { name: 'Netmeds', detail: 'Online pharmacy · Acquired by Reliance 2020' },
        { name: 'Reliance Digital', detail: 'Electronics retail · 500+ stores' },
        { name: 'Jio Points', detail: 'Electronics and accessories retail' },
      ],
      alternatives: [
        {
          avoid: 'Netmeds / Reliance Digital',
          avoidReason: 'Reliance expanding into pharmacy and consumer electronics.',
          picks: [
            { name: 'Jan Aushadhi stores', tag: 'Govt. initiative', note: 'Generic medicines at 50–90% lower cost. Government-backed. 10,000+ stores.' },
            { name: 'Tata 1mg', tag: 'Independent', note: 'Tata group pharmacy platform — independent of Reliance/Adani' },
            { name: 'PharmEasy', tag: 'Independent', note: 'Independent online pharmacy' },
            { name: 'Croma (Tata)', tag: 'Independent', note: 'Tata-owned electronics retail — independent' },
            { name: 'Vijay Sales', tag: 'Independent', note: 'Independent electronics chain, strong in West India' },
            { name: 'Local electronics shops', tag: 'Community', note: 'Supports small business. Often better prices and service.' },
          ],
        },
      ],
    },
    {
      id: 'finance',
      icon: '💰',
      name: 'Finance & Digital',
      count: '3 services',
      description:
        'Jio Financial Services (demerged from RIL in 2023) is building insurance, lending, and payments products. Combined with JioMoney and Jio\'s 506M user base, this is a major financial services play.',
      brands: [
        { name: 'Jio Financial Services', detail: 'NBFC · Loans, insurance, payments · Listed on BSE/NSE' },
        { name: 'JioMoney', detail: 'Digital wallet and payments' },
        { name: 'Jio Cloud', detail: 'Cloud computing platform' },
        { name: 'Haptik', detail: 'AI chatbot platform · Jio Platforms subsidiary' },
      ],
      alternatives: [
        {
          avoid: 'Jio Financial Services / JioMoney',
          avoidReason: 'Reliance building a full financial services empire on top of its 506M telecom user base.',
          picks: [
            { name: 'UPI (any app)', tag: 'Open standard', note: 'PhonePe, Google Pay, Paytm — UPI is government infrastructure, choose any app' },
            { name: 'SBI YONO', tag: 'Govt. owned', note: 'State Bank of India digital banking' },
            { name: 'Zerodha / Groww', tag: 'Independent', note: 'For investments — independent Indian fintech companies' },
          ],
        },
      ],
    },
  ],
}
