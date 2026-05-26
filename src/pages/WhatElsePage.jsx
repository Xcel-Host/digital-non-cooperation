import Footer from '../components/Footer'

const sections = [
  {
    icon: '💸',
    title: 'Redirect Your Money',
    color: '#D84B4B',
    steps: [
      { step: '01', action: 'Switch your telecom', detail: 'Move from Jio to Airtel or BSNL. One SIM change removes ₹200–500/month from the Reliance ecosystem.' },
      { step: '02', action: 'Buy from local kirana', detail: 'For daily groceries — choose your neighbourhood store over JioMart or Smart Bazaar. Same products, money stays local.' },
      { step: '03', action: 'Replace Fortune oil', detail: 'Next time you buy edible oil, pick Dhara (NDDB cooperative), Saffola, or local cold-pressed oil. Small switch, big signal.' },
      { step: '04', action: 'Drop one Reliance/Adani subscription', detail: 'JioHotstar, JioSaavn — pick one to replace with SonyLIV, Spotify, or the open-source Stremio app.' },
    ],
  },
  {
    icon: '📱',
    title: 'Digital Non-Cooperation',
    color: '#F59E0B',
    steps: [
      { step: '05', action: 'Search before you buy', detail: 'Before buying any product, spend 10 seconds checking if it belongs to A1 or A2. Use this platform.' },
      { step: '06', action: 'Diversify your news', detail: 'If you watch NDTV or Network18 channels daily, add one independent source — The Wire, Newslaundry, or The News Minute for South India.' },
      { step: '07', action: 'Use ONDC apps', detail: 'Download Paytm, Magicpin, or Mystore — these run on ONDC, a government open network that connects you to local sellers without platform monopoly.' },
      { step: '08', action: 'Share this platform', detail: 'Forward this link to 3 people. Awareness multiplies. Every person who knows is one less unconscious consumer.' },
    ],
  },
  {
    icon: '🤝',
    title: 'Support the Alternatives',
    color: '#4a8a4a',
    steps: [
      { step: '09', action: 'Buy cooperative products', detail: 'Amul, Mother Dairy, Dhara — these are farmer cooperatives. Your money goes to 3.6 million farmers, not a billionaire.' },
      { step: '10', action: 'Choose handloom over fast fashion', detail: 'Fabindia, handloom cooperatives, local weavers — the same quality, artisan livelihood, no AJIO markup.' },
      { step: '11', action: 'Use Jan Aushadhi', detail: 'Generic medicines from government Jan Aushadhi stores are 50–90% cheaper than branded pharmacy. 10,000+ stores across India.' },
      { step: '12', action: 'Support independent journalism', detail: 'Subscribe to Newslaundry (₹199/month) or The News Minute. Reader-funded journalism is the only journalism that answers to you.' },
    ],
  },
  {
    icon: '🗣️',
    title: 'Civic Participation',
    color: '#4a6a8a',
    steps: [
      { step: '13', action: 'Talk about concentration', detail: 'Mention corporate concentration in conversations — family dinners, friend groups, social media. Normalise the awareness.' },
      { step: '14', action: 'Ask questions of elected representatives', detail: 'Write to your MP or MLA about airport privatisation, port monopolies, media ownership. RTI applications are powerful.' },
      { step: '15', action: 'Support small businesses actively', detail: 'When a local shop is struggling against a corporate chain — go there, tell your friends, leave a Google review. Active support matters.' },
      { step: '16', action: 'Vote with your attention', detail: 'Every click, every stream, every search is attention data that translates to advertising revenue. Give your attention to independent creators and outlets.' },
    ],
  },
]

const principles = [
  'Non-violent. Every step on this page is peaceful and legal.',
  'Non-cooperation means withdrawing support, not attacking.',
  'Consistency over intensity — small daily choices > one dramatic gesture.',
  'You are not obligated to do everything. One step is a start.',
  'This is consumer awareness, not a political movement.',
]

export default function WhatElsePage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest text-amber uppercase mb-3">
          Beyond Awareness · Practical Steps
        </p>
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">
          What else can you do?
        </h1>
        <p className="text-sm text-[#aaa] mb-3 leading-relaxed">
          16 non-violent, practical acts of consumer non-cooperation.
          You don't need to do all of them. Start with one.
        </p>

        {/* Principles */}
        <div className="p-4 rounded-xl mb-10"
          style={{ background: '#0d0900', border: '0.5px solid #2a1800' }}>
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-3">Ground rules</p>
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
              <span className="text-amber text-xs flex-shrink-0 mt-0.5">✓</span>
              <p className="text-xs text-amber/70 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        {sections.map(section => (
          <div key={section.title} className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-lg font-black tracking-tight text-offwhite">{section.title}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {section.steps.map(s => (
                <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: '#1A1A1F', border: '0.5px solid #222' }}>
                  <div className="text-xs font-black flex-shrink-0 w-8 mt-0.5"
                    style={{ color: section.color }}>
                    {s.step}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-offwhite mb-1">{s.action}</p>
                    <p className="text-xs text-[#aaa] leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Gandhi quote */}
        <div className="p-5 rounded-xl"
          style={{ background: '#080600', border: '0.5px solid #1e1800' }}>
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-3">Gandhi</p>
          <p className="text-sm italic leading-loose" style={{ color: '#8a7a50' }}>
            "Non-cooperation with evil is as much a duty as cooperation with good."
          </p>
          <p className="text-xs text-[#aaa] mt-2">— Mahatma Gandhi</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
