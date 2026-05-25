import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function AboutPage({ theme }) {
  const isDark = (theme || 'dark') !== 'light'

  return (
    <main style={{ background: '#050505', minHeight: '100vh' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px' }}>

        {/* HEADER */}
        <div style={{ marginBottom: 42 }}>
          <p style={{ color: '#ff4d4d', letterSpacing: '4px', fontSize: 11, fontWeight: 700, marginBottom: 18, textTransform: 'uppercase' }}>
            About this platform
          </p>
          <h1 style={{ fontSize: 'clamp(40px,6vw,64px)', lineHeight: 1, fontWeight: 900, marginBottom: 16, color: '#f3f3f3' }}>
            Digital <span style={{ color: '#ffb100' }}>Non-Cooperation</span>
          </h1>
          <p style={{ color: '#9b9b9b', fontSize: 18, lineHeight: 1.6 }}>
            A civic transparency platform for India. Independent. Non-partisan. Non-violent.
          </p>
        </div>

        {/* HERO CARD */}
        <div style={{
          background: 'rgba(18,18,18,0.85)',
          border: '1px solid rgba(255,140,0,0.18)',
          borderRadius: 24,
          padding: 'clamp(24px,4vw,42px)',
          marginBottom: 56,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 0 80px rgba(255,80,0,0.05), inset 0 0 40px rgba(255,80,0,0.03)',
        }}>
          <p style={{ color: '#ffb100', letterSpacing: '3px', fontSize: 12, fontWeight: 700, marginBottom: 18, textTransform: 'uppercase' }}>
            Why this was built
          </p>
          <h2 style={{ fontSize: 'clamp(24px,4vw,42px)', lineHeight: 1.1, marginBottom: 28, fontWeight: 800, color: '#f3f3f3' }}>
            Because frustration without direction is just noise.
          </h2>

          {[
            'Most people feel something is wrong. Life keeps getting more expensive. The internet feels controlled by a handful of companies. The same narratives repeat across news channels. Local businesses disappear while giant platforms expand into everything.',
            'But most people stop there — frustrated, cynical, exhausted — because they don\'t know what to do next.',
          ].map((p, i) => (
            <p key={i} style={{ color: '#cfcfcf', lineHeight: 1.9, fontSize: 17, marginBottom: 22 }}>{p}</p>
          ))}

          <p style={{ color: '#ffffff', fontWeight: 700, fontSize: 20, marginBottom: 22, lineHeight: 1.6 }}>
            The real problem is not just concentration of power, but the absence of visible alternatives.
          </p>

          <p style={{ color: '#cfcfcf', lineHeight: 1.9, fontSize: 17, marginBottom: 22 }}>
            This platform exists to make those alternatives visible.
          </p>

          <p style={{ color: '#cfcfcf', lineHeight: 1.9, fontSize: 17, marginBottom: 22 }}>
            When you discover that{' '}
            <span style={{ color: '#ff5a5a', fontWeight: 700 }}>Jio</span>,{' '}
            <span style={{ color: '#ff5a5a', fontWeight: 700 }}>JioMart</span>,{' '}
            <span style={{ color: '#ff5a5a', fontWeight: 700 }}>Network18</span>,{' '}
            <span style={{ color: '#ff5a5a', fontWeight: 700 }}>AJIO</span>, and{' '}
            <span style={{ color: '#ff5a5a', fontWeight: 700 }}>JioHotstar</span>{' '}
            belong to the same ecosystem, your frustration becomes clearer. But clarity alone changes nothing unless you can act on it.
          </p>

          {/* Quote block */}
          <div style={{ borderLeft: '3px solid #ff5a5a', paddingLeft: 24, margin: '36px 0' }}>
            <p style={{ color: '#ffffff', fontSize: 22, lineHeight: 1.7, fontWeight: 700, marginBottom: 0 }}>
              One different payment app.<br />
              One independent news source.<br />
              One local store.<br />
              One switch before your next purchase.
            </p>
          </div>

          <p style={{ color: '#cfcfcf', lineHeight: 1.9, fontSize: 17, marginBottom: 22 }}>
            Systems survive when people feel dependent on them. Systems weaken when dependence becomes optional.
          </p>

          <p style={{ color: '#ffb100', fontSize: 20, fontWeight: 700, marginBottom: 38, lineHeight: 1.6 }}>
            Millions of small conscious choices, repeated over time, reshape markets, influence power, and create pressure for accountability.
          </p>

          <div style={{ fontSize: 28, fontWeight: 900, color: '#ff4d4d', letterSpacing: '1px' }}>
            This is Digital Non-Cooperation.
          </div>
        </div>

        {/* INFO BLOCKS */}
        <div style={{ display: 'grid', gap: 34 }}>
          {[
            {
              title: 'What is this?',
              paras: [
                'Digital Non-Cooperation maps how concentrated corporate power — specifically the Ambani (A1) and Adani (A2) ecosystems — shape daily life through telecom, media, retail, energy, airports, and digital infrastructure.',
                'It then shows real, named alternatives and helps people take small, non-violent acts of consumer non-cooperation.',
              ],
            },
            {
              title: 'Who built this?',
              paras: [
                'This is an independent civic project. It is not funded by any political party, corporate group, or foreign entity.',
                'It is built by Indians who believe transparency, consumer awareness, and visible alternatives are fundamental rights.',
              ],
            },
            {
              title: 'Is this anti-anyone?',
              paras: [
                'No. This platform is not against any individual, company, or political party.',
                'It focuses on the concentration of power, dependency, and the effects these systems have on ordinary people.',
                'The information here is sourced from public filings, Bloomberg, Forbes, company disclosures, and verified public records.',
              ],
            },
            {
              title: 'Data accuracy',
              paras: [
                'We make every effort to ensure accuracy. Brand ownership and ecosystem mapping are sourced from public filings, verified databases, and company records.',
                'If you find an error, please contact us.',
              ],
            },
          ].map((block, i, arr) => (
            <div key={block.title} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: 26 }}>
              <h3 style={{ fontSize: 28, marginBottom: 16, color: '#ffffff', fontWeight: 700 }}>{block.title}</h3>
              {block.paras.map((p, j) => (
                <p key={j} style={{ color: '#9d9d9d', lineHeight: 1.9, fontSize: 16, marginBottom: j < block.paras.length - 1 ? 14 : 0 }}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 52, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <Link to="/philosophy" style={{ background: 'linear-gradient(90deg,#ff5a5a,#ff3b3b)', color: '#fff', padding: '16px 26px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Read the Philosophy →
          </Link>
          <Link to="/wealth" style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.08)', color: '#cfcfcf', padding: '16px 22px', borderRadius: 14, textDecoration: 'none', fontSize: 14 }}>
            Wealth Data →
          </Link>
          <Link to="/what-else" style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.08)', color: '#cfcfcf', padding: '16px 22px', borderRadius: 14, textDecoration: 'none', fontSize: 14 }}>
            What Else Can You Do? →
          </Link>
        </div>

      </div>
      <Footer theme={theme} />
    </main>
  )
}
