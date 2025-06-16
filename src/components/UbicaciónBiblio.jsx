import { bibliotecasData } from "../data/Bibliotecas"

export default function UbicacionBiblio() {
    return (
        <section className="bg-[#181819] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8 texte-center text-white">Bibliotecas y Horarios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {bibliotecasData.map((biblio)=> (
                        <div key={biblio.id} className="bg-white shadow-md rounded-md overflows-hidden p-6">
                            <h3 className="text-xl font-bold mb-2">{biblio.nombre}</h3>
                            <p className="text-gray-700"><strong>Ubicación:</strong> {biblio.ubicacion}</p>
                            <p className="text-gray-700"><strong>Horario:</strong> {biblio.horario}</p>
                            {biblio.imagen && (
                                <img src={biblio.imagen} alt={biblio.nombre} className="mt-4 w-full h-32 object-cover rounded"/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}