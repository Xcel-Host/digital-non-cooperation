export { reliance } from './reliance'
export { adani } from './adani'

export const GROUPS = {
  reliance: () => import('./reliance').then(m => m.reliance),
  adani: () => import('./adani').then(m => m.adani),
}

export const stats = {
  brands: '812+',
  empires: '2',
  sectors: '36+',
  alternatives: '1,245+',
  participating: '24,382+',
}

export const trendingSearches = [
  'Jio', 'Reliance Retail', 'AJIO', 'NDTV', 'Adani Power',
  'Campa Cola', 'JioHotstar', 'Fortune Oil', 'Mumbai Airport',
  'Ambuja Cement', 'JioMart', 'Network18',
]
