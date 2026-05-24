import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function AboutPage({ theme }) {
  const isDark = theme !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'

  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#D84B4B' }}>About this platform</p>
        <h1 className="text-3xl font-black tracking-tight mb-2" style={{ color: textColor }}>Digital Non-Cooperation</h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: muted }}>
          A civic transparency platform for India. Independent. Non-partisan. Non-violent.
        </p>

        {[
          { title: 'What is this?', content: 'Digital Non-Cooperation is a platform that maps how concentrated corporate power — specifically the Ambani (A1) and Adani (A2) empires — shapes your daily life through telecom, media, retail, energy, airports, and more. It then shows you real, named alternatives and helps you take small, non-violent acts of consumer non-cooperation.' },
          { title: 'Who built this?', content: 'This is an independent civic project. It is not funded by any political party, corporate group, or foreign entity. It is built by Indians who believe transparency and consumer awareness are fundamental rights.' },
          { title: 'Is this anti-anyone?', content: 'No. This platform is not against any individual, company, or political party. It is about the concentration of power and its effects on ordinary people. The data here is sourced from public filings, Forbes, Bloomberg, and verified public records.' },
          { title: 'Philosophy', content: 'Digital Satyagraha — Gandhi\'s non-violent resistance applied to consumer choices. Non-violence. Non-cooperation. Truth & Awareness. Self-Respect. Small consistent acts of redirecting spending and attention toward alternatives.' },
          { title: 'Data accuracy', content: 'We make every effort to ensure accuracy. Brand ownership is sourced from company filings, Forbes/Bloomberg data, and verified public records. If you find an error, please contact us.' },
        ].map(s => (
          <div key={s.title} className="mb-6">
            <h2 className="text-sm font-bold mb-2" style={{ color: textColor }}>{s.title}</h2>
            <p className="text-xs leading-relaxed" style={{ color: muted }}>{s.content}</p>
          </div>
        ))}

        <div className="flex gap-3 flex-wrap mt-8">
          <Link to="/philosophy" className="text-xs font-bold px-4 py-2 rounded-lg" style={{ background: '#0d0900', color: '#F59E0B', border: '0.5px solid #2a1800' }}>
            Read the Philosophy →
          </Link>
          <Link to="/wealth" className="text-xs font-bold px-4 py-2 rounded-lg" style={{ background: cardBg, color: muted, border: `0.5px solid ${border}` }}>
            Wealth Data →
          </Link>
          <Link to="/what-else" className="text-xs font-bold px-4 py-2 rounded-lg" style={{ background: cardBg, color: muted, border: `0.5px solid ${border}` }}>
            What Else Can You Do? →
          </Link>
        </div>
      </div>
      <Footer theme={theme} />
    </main>
  )
}
