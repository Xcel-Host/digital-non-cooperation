export { reliance } from './reliance'
export { adani } from './adani'

export const GROUPS = {
  reliance: () => import('./reliance').then(m => m.reliance),
  adani: () => import('./adani').then(m => m.adani),
}

export const stats = {
  brands: '81+',
  empires: '2',
  sectors: '15',
  alternatives: '75+',
  participating: 'Movement Growing',
}

export const trendingSearches = [
  'Jio', 'Reliance Retail', 'AJIO', 'NDTV', 'Adani Power',
  'Campa Cola', 'JioHotstar', 'Fortune Oil', 'Mumbai Airport',
  'Ambuja Cement', 'JioMart', 'Network18',
]
