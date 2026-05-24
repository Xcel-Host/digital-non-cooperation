import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function AboutPage({ theme }) {
  const isDark = (theme || 'dark') !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'

  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#D84B4B', marginBottom: 12 }}>
          About this platform
        </p>
        <h1 style={{ fontSize: 34, fontWeight: 900, letterSpacing: '-1px', color: textColor, marginBottom: 8, lineHeight: 1.05 }}>
          Digital Non-Cooperation
        </h1>
        <p style={{ fontSize: 14, color: muted, lineHeight: 1.7, marginBottom: 40 }}>
          A civic transparency platform for India. Independent. Non-partisan. Non-violent.
        </p>

        {/* WHY THIS WAS BUILT — prominent section */}
        <div style={{ background: isDark ? '#0d0900' : '#fffbe6', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, borderRadius: 16, padding: 24, marginBottom: 40 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 12 }}>Why this was built</p>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: textColor, marginBottom: 16, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
            Because frustration without direction is just noise.
          </h2>
          <p style={{ fontSize: 13, color: isDark ? 'rgba(243,244,246,0.75)' : '#555', lineHeight: 1.8, marginBottom: 14 }}>
            Most people feel it. Life is getting more expensive. The internet feels like it's owned by one company. The news sounds the same on every channel. Local shops are disappearing. But nobody tells you <strong style={{ color: textColor }}>why</strong> — or what you can do about it.
          </p>
          <p style={{ fontSize: 13, color: isDark ? 'rgba(243,244,246,0.75)' : '#555', lineHeight: 1.8, marginBottom: 14 }}>
            This platform was built because <strong style={{ color: textColor }}>awareness is the first act of freedom.</strong> When you know that Jio, JioMart, Network18, AJIO, and JioHotstar are all the same company — your frustration finally has a name. And when frustration has a name, it becomes a choice.
          </p>
          <p style={{ fontSize: 13, color: isDark ? 'rgba(243,244,246,0.75)' : '#555', lineHeight: 1.8, marginBottom: 14 }}>
            You don't have to boycott everything. You don't have to protest. You don't have to sacrifice comfort. Just <strong style={{ color: textColor }}>one small step</strong> — switching one service, buying from one local store, reading one independent news source. That's all.
          </p>
          <p style={{ fontSize: 13, color: isDark ? 'rgba(243,244,246,0.75)' : '#555', lineHeight: 1.8, marginBottom: 0 }}>
            Because millions of small steps, taken freely and consciously, are more powerful than any march. This is <strong style={{ color: '#F59E0B' }}>Digital Satyagraha</strong> — the freedom of conscious choice, one rupee at a time.
          </p>
        </div>

        {/* Rest of about sections */}
        {[
          { title: 'What is this?', content: 'Digital Non-Cooperation is a platform that maps how concentrated corporate power — specifically the Ambani (A1) and Adani (A2) empires — shapes your daily life through telecom, media, retail, energy, airports, and more. It then shows you real, named alternatives and helps you take small, non-violent acts of consumer non-cooperation.' },
          { title: 'Who built this?', content: 'This is an independent civic project. It is not funded by any political party, corporate group, or foreign entity. It is built by Indians who believe transparency and consumer awareness are fundamental rights.' },
          { title: 'Is this anti-anyone?', content: "No. This platform is not against any individual, company, or political party. It is about the concentration of power and its effects on ordinary people. The data here is sourced from public filings, Forbes, Bloomberg, and verified public records." },
          { title: 'Data accuracy', content: 'We make every effort to ensure accuracy. Brand ownership is sourced from company filings, Forbes/Bloomberg data, and verified public records. If you find an error, please contact us.' },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: textColor, marginBottom: 6 }}>{s.title}</h2>
            <p style={{ fontSize: 12, color: muted, lineHeight: 1.7 }}>{s.content}</p>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 32 }}>
          <Link to="/philosophy" style={{ fontSize: 12, fontWeight: 700, padding: '8px 16px', borderRadius: 8, background: isDark ? '#0d0900' : '#fffbe6', color: '#F59E0B', border: `0.5px solid ${isDark ? '#2a1800' : '#f5e080'}`, textDecoration: 'none' }}>
            Read the Philosophy →
          </Link>
          <Link to="/wealth" style={{ fontSize: 12, fontWeight: 700, padding: '8px 16px', borderRadius: 8, background: cardBg, color: muted, border: `0.5px solid ${border}`, textDecoration: 'none' }}>
            Wealth Data →
          </Link>
          <Link to="/what-else" style={{ fontSize: 12, fontWeight: 700, padding: '8px 16px', borderRadius: 8, background: cardBg, color: muted, border: `0.5px solid ${border}`, textDecoration: 'none' }}>
            What Else Can You Do? →
          </Link>
        </div>
      </div>
      <Footer theme={theme} />
    </main>
  )
}
