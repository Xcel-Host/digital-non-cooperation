import Footer from '../components/Footer'

const pillars = [
  { color: '#D84B4B', title: 'Non-violence', desc: 'We don\'t hate. We resist through awareness. No violence, only clarity. This is not anger — it is information. Directed, purposeful, peaceful.' },
  { color: '#F59E0B', title: 'Non-cooperation', desc: 'We withdraw economic support from monopoly. Silently. Consistently. Not all at once — one rupee at a time. One switch per month matters.' },
  { color: '#4a8a4a', title: 'Truth & Awareness', desc: 'We expose control. We spread truth. We educate before we act. When you know who owns what you buy, every purchase becomes a conscious choice.' },
  { color: '#4a6a8a', title: 'Self-Respect', desc: 'We choose freedom over convenience. Our choices reflect our values. India First. People First. Not because it\'s comfortable, but because it\'s right.' },
]

export default function Philosophy() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest text-amber uppercase mb-4">
          Our Philosophy · Our Method · Our Movement
        </p>

        <h1 className="text-4xl font-black tracking-tight text-offwhite mb-2 leading-none">
          Digital<br />Satyagraha
        </h1>

        <p className="text-sm italic text-[#aaa] mb-8">
          "Digital Satyagraha is the modern path of non-violent resistance."
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="text-sm font-black text-amber">#DigitalNonCooperation</span>
          <span className="text-sm font-bold text-amber/50">#DigitalBoycott</span>
          <span className="text-sm font-bold text-amber/50">#NonViolentNonCooperation</span>
          <span className="text-sm font-bold text-amber/50">#EconomicNonCooperation</span>
        </div>

        {/* What is it */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-3">01 — What is this?</p>
          <p className="text-sm text-[#ddd] leading-loose">
            Gandhi's Satyagraha was non-violent resistance through <strong className="text-offwhite">daily, consistent choices</strong> — not marches, not rage.
            Digital Non-Cooperation applies the same idea to how we spend, stream, and consume in 2025.
          </p>
          <p className="text-sm text-[#ddd] leading-loose mt-3">
            When two corporate groups control your internet, your news, your groceries, and your airports —
            awareness and redirection of spending is a form of quiet, peaceful resistance.
          </p>
        </div>

        {/* What it is NOT */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-3">02 — What it is NOT</p>
          <div
            className="p-4 rounded-xl"
            style={{ background: '#111', border: '0.5px solid #1e1e1e' }}
          >
            <p className="text-sm text-[#ddd] leading-loose">
              Not a political party.<br />
              Not ideology.<br />
              Not violence.<br />
              Not even a boycott in the aggressive sense.<br />
              <strong className="text-offwhite">It is consumer clarity.</strong> Know who owns what.
              Choose accordingly. That's all.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-5">03 — The 4 Pillars</p>
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex items-start gap-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ background: p.color }}
                />
                <div>
                  <p className="text-sm font-black text-offwhite mb-1">{p.title}</p>
                  <p className="text-xs text-[#aaa] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 acts */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-5">04 — The 4 Acts</p>
          {[
            ['Switch one service', 'Telecom, streaming, or grocery. One redirect per month matters.'],
            ['Know before you buy', '10 seconds on this platform to know who benefits from your rupee.'],
            ['Support local first', 'Kirana over JioMart. Handloom over AJIO. Your money, your vote.'],
            ['Diversify your media', 'When two groups own your news, seek independent sources — newsletters, independent journalists, regional press.'],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="flex items-start gap-4 py-4"
              style={{ borderBottom: '0.5px solid #111' }}
            >
              <span className="text-amber text-sm flex-shrink-0">→</span>
              <div>
                <p className="text-sm font-bold text-offwhite mb-0.5">{title}</p>
                <p className="text-xs text-[#aaa] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Economic Non-Cooperation */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-[#aaa] uppercase mb-3">05 — Economic Non-Cooperation</p>
          <p className="text-sm text-[#ddd] leading-loose">
            Concentration of corporate power is not fixed. It grows with every subscription renewed,
            every app kept, every purchase unreflected on.
          </p>
          <p className="text-sm text-[#ddd] leading-loose mt-3">
            <strong className="text-offwhite">Economic Non-Cooperation</strong> means redirecting small amounts
            of everyday spending toward alternatives — cooperatives, local businesses, open-source tools,
            government services. Not all at once. One step at a time.
          </p>
        </div>

        {/* Quote */}
        <div
          className="p-5 rounded-xl"
          style={{ background: '#080600', border: '0.5px solid #1e1800' }}
        >
          <p className="text-base leading-loose" style={{ color: '#8a7a50', fontStyle: 'italic' }}>
            "Be the change without shouting.<br />
            This is how India wins back its future.<br />
            <strong className="text-amber">One choice at a time."</strong>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
