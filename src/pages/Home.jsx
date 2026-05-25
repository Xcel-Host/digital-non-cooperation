import HeroSection from '../components/HeroSection'
import SearchSection from '../components/SearchSection'
import Footer from '../components/Footer'

export default function Home({ theme, empiresOpen, setEmpiresOpen }) {

  return (
    <main>
      <HeroSection theme={theme} empiresOpen={empiresOpen} setEmpiresOpen={setEmpiresOpen} />

      {!empiresOpen && (
        <>
          <SearchSection theme={theme} />
        </>
      )}

      <Footer theme={theme} />
    </main>
  )
}
