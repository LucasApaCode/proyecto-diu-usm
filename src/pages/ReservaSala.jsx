import { useState } from 'react'

import Header from '../components/Header'
import NavBar2 from '../components/NavBar2'
import banner from '../assets/reserva_sala.jpg'
import {salasDisponibles} from '../data/SalasDisponibles' 

export default function ReservaSala() {
    const query = new URLSearchParams(window.location.search)
    const bibliotecaInicial = query.get("biblio") || ""

    const [biblioteca, setBiblioteca] = useState(bibliotecaInicial)
    const [categoria, setCategoria] = useState("todos")
    const [capacidad, setCapacidad] = useState("cualquiera")
    const [fecha, setFecha] = useState("2025-06-16")
    const [desde, setDesde] = useState("18:00")
    const [hasta, setHasta] = useState("20:00")
    const [filtrado, setFiltrado] = useState([])

    const handleFiltrar = (e) => {
      e.preventDefault()
      if (!biblioteca) return
      setFiltrado(salasDisponibles)
    };

    return (
        <div className="min-h-sreen bg-white">
            <Header />
            <NavBar2 imagenFondo={banner} posicionImagen={"center 50%"}/>
            <section className="bg-gray-100 py-16">
                <div className="px-6 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Buscar espacios - Biblioteca {biblioteca || ""}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <form onSubmit={handleFiltrar} className="md:col-span-1 space-y-4 rounded-xl p-4 shadow-md bg-white">
                        <h3 className="text-xl font-semibold mb-2">Buscar por tiempo</h3>
                        <div>
                          <label className="block text-sm font-medium">Categoría</label>
                          <select className="w-full px-2 py-1 border rounded cursor-pointer" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="todos">Mostrar Todos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Capacidad</label>
                          <select className="w-full px-2 py-1 border rounded cursor-pointer" value={capacidad} onChange={(e) => setCapacidad(e.target.value)}>
                            <option value="cualquiera">Para cualquier cantidad de personas</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Fecha</label>
                          <input type="date" className="w-full px-2 py-1 border rounded cursor-pointer" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <label className="block text-sm font-medium">De</label>
                            <input type="time" className="w-full px-2 py-1 border rounded cursor-pointer" value={desde} onChange={(e) => setDesde(e.target.value)} />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium">Hasta</label>
                            <input type="time" className="w-full px-2 py-1 border rounded cursor-pointer" value={hasta} onChange={(e) => setHasta(e.target.value)} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" /> <label>Espacio accesible</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" /> <label>Con enchufe</label>
                        </div>
                        <button type="submit" className="bg-[#085c94] text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer">Buscar</button>
                      </form>

                      <div className="md:col-span-3 space-y-6">
                        {biblioteca ? (
                          <>
                            <p className="text-gray-800">Mostrando {filtrado.length} coincidencias, {desde} - {hasta}, {fecha}</p>
                            {filtrado.map((sala) => (
                              <div key={sala.id} className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start md:items-center shadow-md">
                                <div className="w-full md:w-1/4 h-40 bg-gray-200 rounded"></div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-[#085c94] mb-1">{sala.nombre}</h4>
                                  <p className="text-sm text-gray-600 mb-1">La reserva anterior termina a las {sala.horaFinAnterior}</p>
                                  <p className="text-gray-700 text-sm mb-2">{sala.descripcion}</p>
                                  <div className="text-sm text-gray-500">👥 {sala.capacidad} personas</div>
                                </div>
                                <button className="bg-[#085c94] text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Reservar ahora</button>
                              </div>
                            ))}
                          </>
                        ) : (
                          <p className="text-gray-600 italic">No se ha especificado una biblioteca.</p>
                        )}
                      </div>
                    </div>
                </div>
            </section>
        </div>
    )
}