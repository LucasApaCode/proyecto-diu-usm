import { useState } from "react"
import libro1 from "../assets/libro1.jpg"
import libro2 from "../assets/libro2.jpg"
import libro3 from "../assets/libro3.jpg"

export default function Buscador() {
    const [busqueda, setBusqueda] = useState("")
    const [resultados, setResultados] = useState([])

    const manejarBusqueda = (e) => {
        e.preventDefault()
        if(!busqueda.trim()) return
        
        const todos = [
            {
              tipo: "Libro",
              titulo: "Introducción a la Programación",
              autor: "Juan Pérez",
              bibliotecas: ["Valparaíso", "San Joaquín"],
              imagen: libro1,
            },
            {
              tipo: "Revista",
              titulo: "Tecnología y Sociedad",
              autor: "Ricardp J. Gómez",
              bibliotecas: ["Viña del Mar"],
              imagen: libro2,
            },
            {
              tipo: "Ebook",
              titulo: "Bases de Datos Avanzadas",
              autor: "Maria José Aramburu Cabo",
              bibliotecas: ["Valparaíso", "Viña del Mar"],
              imagen: libro3,
            },
        ];

        const filtrados = todos.filter((item) =>
            item.titulo.toLowerCase().includes(busqueda.toLowerCase())
        )
        setResultados(filtrados)

    }

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl bg-white mx-auto px-6 p-6 rounded-xl shadow-md">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Catálogo</h2>
                <form onSubmit={manejarBusqueda} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e)=> setBusqueda(e.target.value)}
                        placeholder="Buscar libro, revista, ebook..."
                        className="flex-1 px-4 py-2 border-gray-300 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition cursor-pointer">
                        Buscar
                    </button>
                </form>
                <div className="mt-8">
                    {resultados.length > 0 ? (
                        <ul className="space-y-8">
                            {resultados.map((item, idx) => (
                                <li key={idx} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                    <img src={item.imagen} alt={item.titulo} className="w-26 h-26 object-cover rounded-md shadow-sm border border-gray-200" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.titulo}</h3>
                                        <p className="text-sm text-gray-600">{item.tipo}</p>
                                        <p className="text-sm text-gray-500 mt-1">Disponible en: {item.bibliotecas.join(", ")}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : busqueda ? (
                        <p className="text-gray-600 mt-4">No se encontraron resultados para "{busqueda}"</p>
                    ) : null}
                </div>
            </div>
        </section>
    )
}