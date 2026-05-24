import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SearchSection from '../components/SearchSection'
import Footer from '../components/Footer'

export default function Home({ theme, empiresOpen, setEmpiresOpen }) {
  const isDark = theme !== 'light'
  const textColor = isDark ? '#F3F4F6' : '#111'
  const muted = isDark ? '#666' : '#888'
  const cardBg = isDark ? '#1A1A1F' : '#fff'
  const border = isDark ? '#222' : '#ddd'

  return (
    <main>
      <HeroSection theme={theme} empiresOpen={empiresOpen} setEmpiresOpen={setEmpiresOpen} />

      {!empiresOpen && (
        <>
          <SearchSection theme={theme} />

          <section className="max-w-6xl mx-auto px-4 pb-6" style={{ marginTop: -8 }}>
            <div style={{ background: cardBg, border: `0.5px solid ${border}`, borderRadius: 16, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: textColor, marginBottom: 4 }}>Join the movement</h2>
                <p style={{ fontSize: 12, color: muted }}>Silent. Non-violent. Consistent.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#F59E0B', letterSpacing: '-1px', lineHeight: 1 }}>24,382</div>
                  <div style={{ fontSize: 10, color: muted }}>participating</div>
                </div>
                <Link to="/participate" style={{ background: '#D84B4B', color: '#fff', fontSize: 13, fontWeight: 800, padding: '12px 20px', borderRadius: 10, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  I'll Take Action ✊
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer theme={theme} />
    </main>
  )
}
