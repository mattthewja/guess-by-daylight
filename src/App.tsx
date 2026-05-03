import { Routes, Route } from 'react-router'

import GamePage from './pages/GamePage/GamePage.tsx'
import GuidePage from './pages/GuidePage/GuidePage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'

import './App.css'

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/guide" element={<GuidePage />} />
    </Routes>
  </>)
}

export default App
