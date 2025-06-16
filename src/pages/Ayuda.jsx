import { useState } from 'react'
import { useNavigate } from 'react-router'

import Header from '../components/Header'
import NavBar2 from '../components/NavBar2'
import banner from '../assets/mesa_ayuda.jpg'
import SelectorBiblioteca from '../components/SelectorBiblioteca'

export default function AyudaPage() {
    const [modalAbierto, setModalAbierto] = useState(false)
    const navigate = useNavigate()

    const handleSeleccionBiblioteca = (biblio) => {
      navigate(`/reservar?biblio=${encodeURIComponent(biblio)}`)
    };
    return (
      <div className="min-h-screen bg-white">
          <Header />
          <NavBar2 imagenFondo={banner} posicionImagen={"center 15%"} onReservarClick={() => setModalAbierto(true)} />
          <SelectorBiblioteca
              isOpen={modalAbierto}
              onClose={() => setModalAbierto(false)}
              onSelect={handleSeleccionBiblioteca}
          />
          <div className="px-6 py-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Ayuda y Preguntas Frecuentes</h2>   
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">FAQs</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>¿Cómo puedo reservar una sala de estudio?</li>
                  <li>¿Dónde encuentro el catálogo de libros?</li>
                  <li>¿Puedo acceder a los recursos desde fuera del campus?</li>
                  <li>¿Cómo contacto a un bibliotecario?</li>
                </ul>
              </section>  
              <section>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Envíanos tu consulta</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Nombre completo" className="w-full px-4 py-2 border rounded-md" />
                  <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-2 border rounded-md" />
                  <textarea placeholder="Escribe tu consulta aquí..." className="w-full px-4 py-2 border rounded-md h-32" />
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Enviar Consulta
                  </button>
                </form>
              </section>
          </div>
      </div>
    );
}