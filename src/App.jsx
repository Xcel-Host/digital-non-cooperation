import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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
import AboutPage from './pages/AboutPage'
import PersonProfile from './pages/PersonProfile'
import RealIndia from './pages/RealIndia'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [empiresOpen, setEmpiresOpen] = useState(false)

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.body.style.background = next === 'light' ? '#f4f4f0' : '#0B0B0F'
    document.body.style.color = next === 'light' ? '#111' : '#F3F4F6'
  }

  const closeEmpires = () => setEmpiresOpen(false)

  return (
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} closeEmpires={closeEmpires} />
      <Routes>
        <Route path="/" element={<Home theme={theme} empiresOpen={empiresOpen} setEmpiresOpen={setEmpiresOpen} />} />
        <Route path="/explore/:group" element={<Explore theme={theme} />} />
        <Route path="/person/:id" element={<PersonProfile theme={theme} />} />
        <Route path="/sector/:group/:sectorId" element={<SectorDetail theme={theme} />} />
        <Route path="/alternatives" element={<Alternatives theme={theme} />} />
        <Route path="/participate" element={<Participate theme={theme} />} />
        <Route path="/philosophy" element={<Philosophy theme={theme} />} />
        <Route path="/wealth" element={<WealthPage theme={theme} />} />
        <Route path="/real-india" element={<RealIndia theme={theme} />} />
        <Route path="/what-else" element={<WhatElsePage theme={theme} />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage theme={theme} />} />
        <Route path="*" element={<Home theme={theme} empiresOpen={empiresOpen} setEmpiresOpen={setEmpiresOpen} />} />
      </Routes>
    </BrowserRouter>
  )
}
