import { useNavigate } from 'react-router'
import { useState } from 'react'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Noticias from '../components/Noticias'
import UbicacionBiblio from '../components/UbicaciónBiblio'
import Buscador from '../components/Buscador'
import SelectorBiblioteca from '../components/SelectorBiblioteca'

export default function Home() {
    const [modalAbierto, setModalAbierto] = useState(false)
    const navigate = useNavigate()

    const handleSeleccionBiblioteca = (biblio) => {
      navigate(`/reservar?biblio=${encodeURIComponent(biblio)}`)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <NavBar onReservarClick={() => setModalAbierto(true)}/>
            <SelectorBiblioteca
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
                onSelect={handleSeleccionBiblioteca}
            />
            <Buscador />
            <UbicacionBiblio />
            <Noticias />
        </div>
    )
}