import HeroSection from '../components/HeroSection'
import SearchSection from '../components/SearchSection'
import HomeParticipate from '../components/HomeParticipate'
import Footer from '../components/Footer'

export default function Home({ theme }) {
  return (
    <main>
      <HeroSection theme={theme} />
      <SearchSection theme={theme} />
      <HomeParticipate theme={theme} />
      <Footer theme={theme} />
    </main>
  )
}
