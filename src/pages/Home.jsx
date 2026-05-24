import HeroSection from '../components/HeroSection'
import SearchSection from '../components/SearchSection'
import HomeEmpires from '../components/HomeEmpires'
import HomeParticipate from '../components/HomeParticipate'
import Footer from '../components/Footer'

export default function Home({ theme }) {
  return (
    <main>
      <HeroSection theme={theme} />
      <SearchSection theme={theme} />
      <HomeEmpires theme={theme} />
      <HomeParticipate theme={theme} />
      <Footer theme={theme} />
    </main>
  )
}
