import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import SectorDetail from './pages/SectorDetail'
import Alternatives from './pages/Alternatives'
import Participate from './pages/Participate'
import Philosophy from './pages/Philosophy'
import WealthPage from './pages/WealthPage'
import WhatElsePage from './pages/WhatElsePage'
import { PrivacyPage, TermsPage } from './pages/LegalPages'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:group" element={<Explore />} />
        <Route path="/sector/:group/:sectorId" element={<SectorDetail />} />
        <Route path="/alternatives" element={<Alternatives />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/wealth" element={<WealthPage />} />
        <Route path="/what-else" element={<WhatElsePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
