import HeroSection from '../components/HeroSection'
import SearchSection from '../components/SearchSection'
import Footer from '../components/Footer'

export default function Home({ theme, empiresOpen, setEmpiresOpen }) {
  const isDark = theme !== 'light'
  const border = isDark ? '#222' : '#ddd'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'

  return (
    <main>
      <HeroSection theme={theme} empiresOpen={empiresOpen} setEmpiresOpen={setEmpiresOpen} />

      {!empiresOpen && (
        <>
          <SearchSection theme={theme} />

          {/* Banner section after search */}
          <section style={{ borderTop: `0.5px solid ${border}`, borderBottom: `0.5px solid ${border}`, background: isDark ? '#0d0d10' : '#f0f0eb', padding: '18px 0' }}>
            <div className="max-w-6xl mx-auto px-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>

              {/* Quote */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                <span style={{ fontSize: 28, color: '#D84B4B', lineHeight: 1, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.7 }}>"</span>
                <p style={{ fontSize: 13, fontWeight: 700, color: textColor }}>This isn't about hate. It's about healing India.</p>
              </div>

              {/* 3 Pillars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                {[
                  { icon: '🔍', label: 'Question Everything' },
                  { icon: '🛡️', label: 'Choose Consciously' },
                  { icon: '🏛️', label: 'Build Alternatives' },
                ].map((p, i) => (
                  <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ fontSize: 16 }}>{p.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: muted }}>{p.label}</span>
                    {i < 2 && <span style={{ color: border, marginLeft: 10 }}>·</span>}
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: isDark ? '#F59E0B' : '#b87000', lineHeight: 1.5 }}>Freedom over dependency.<br />People over profit.</p>
              </div>

            </div>
          </section>
        </>
      )}

      <Footer theme={theme} />
    </main>
  )
}
