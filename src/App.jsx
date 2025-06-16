import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router'

import Home from './pages/Home'
import ReservaSala from './pages/ReservaSala'
import QuienesSomos from './pages/QuienesSomos'
import Ayuda from './pages/Ayuda'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservar" element={<ReservaSala />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
