import './App.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Noticias from './components/Noticias.jsx'
import HorariosBiblioteca from './components/HorariosBiblioteca.jsx'

function App() {

  return (
    <div>
      <Header/>
      <Banner/>
      <HorariosBiblioteca/>
      <Noticias/>
    </div>
    
  )
}

export default App
