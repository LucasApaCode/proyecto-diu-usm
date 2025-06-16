import { useState } from 'react'
import { useNavigate } from 'react-router'

import Header from '../components/Header'
import NavBar2 from '../components/NavBar2'
import banner from '../assets/quienes_somos.jpg'
import SelectorBiblioteca from '../components/SelectorBiblioteca'


export default function QuienesSomos() {
    const [seccion, setSeccion] = useState("mision")
    const contenido = {
        mision: "Apoyar sólidamente la gestión docente, la investigación y la extensión de la Universidad mediante la satisfacción y la anticipación a las necesidades de información de los usuarios considerando como factores la globalización, la internacionalización y el desarrollo de la universidad virtual.",
        vision: "La SIDB se propone ser reconocida por la comunidad académica y usuarios en general, como el aliado permanente en los ciclos de aprendizaje relacionado con docencia e investigación, colaborando de forma eficaz con información y recursos tecnológicos, para la consecución de los propósitos de excelencia académica y de calidad de servicio comprometidos por la Universidad.",
        lineamientos: [
            "Posicionamiento: La Biblioteca desarrollará políticas para posicionarse como líder en la entrega de información, para esto buscará mecanismos para fidelizar a sus usuarios y ampliará las maneras de entregarla, teniendo en cuenta el desarrollo tecnológico presente.",
            "Excelencia: La Biblioteca irá en búsqueda de una mejora continua de sus operaciones, incorporando métodos de control en cada proyecto que emprenda, para asegurar el éxito en la implementación de éstos.",
            "Referente Nacional: La Biblioteca intentará estar a la vanguardia en el plano nacional implementando cambios que impacten de mejor manera en la satisfacción de necesidades de información del usuario.",
            "Crecimiento y Diversificación: La Biblioteca realizará monitoreos con el fin de saber oportunamente las nuevas necesidades de los usuarios, siempre con el ánimo de cambio constante en pos de la mejora continua de sus operaciones",
            "Contribución a la equidad: La Biblioteca apoyará la misión de la universidad en este plano, con el fin de promover un país más igualitario y justo",
            "Integración: La biblioteca promoverá alianzas con otras instituciones de esta naturaleza buscando promover la entrega de un mejor servicio."
        ]
    }

    const [modalAbierto, setModalAbierto] = useState(false)
    const navigate = useNavigate()

    const handleSeleccionBiblioteca = (biblio) => {
      navigate(`/reservar?biblio=${encodeURIComponent(biblio)}`)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <NavBar2 imagenFondo={banner} posicionImagen={"center 20%"} onReservarClick={() => setModalAbierto(true)} />
            <SelectorBiblioteca
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
                onSelect={handleSeleccionBiblioteca}
            />
            <div className="px-6 py-12 max-w-7xl mx-auto">
                <div className="flex justify-center gap-4 mb-8">
                    <button onClick={() => setSeccion("mision")} className={`px-4 py-2 rounded-md cursor-pointer ${seccion === "mision" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>Misión</button>
                    <button onClick={() => setSeccion("vision")} className={`px-4 py-2 rounded-md cursor-pointer ${seccion === "vision" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>Visión</button>
                    <button onClick={() => setSeccion("lineamientos")} className={`px-4 py-2 rounded-md cursor-pointer ${seccion === "lineamientos" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>Lineamientos Estratégicos</button>
                </div>

                {seccion === "mision" && <p className="text-gray-700 mb-10">{contenido.mision}</p>}
                {seccion === "vision" && <p className="text-gray-700 mb-10">{contenido.vision}</p>}
                {seccion === "lineamientos" && (
                  <ul className="list-disc list-inside text-gray-700 mb-10">
                    {contenido.lineamientos.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Inclusión en Biblioteca USM</h3>
                    <p className="text-gray-700">
                        Uno de nuestros objetivos principales como Unidad de Información es ser un apoyo efectivo en el aprendizaje 
                        académico de los estudiantes de nuestra universidad. En este contexto, hemos incorporado tecnología inclusiva 
                        para brindar condiciones de equidad en el acceso y uso de la información durante el proceso enseñanza-aprendizaje.
                    </p>
                </section>
            </div>
        </div>
    )
}