const noticias = [
  {
    id: 1,
    titulo: 'Segunda edición del concurso "Cuentos Breves USM"',
    descripcion: '49 estudiantes de diversas carreras y emplazamientos participaron en esta versión destacando por su talento literario y creatividad.',
    fecha: '01 de junio, 2025',
    imagen: '/imagen1.png',
  },
  {
    id: 2,
    titulo: 'Científicas de la USM entre las 118 destacadas en la Tabla Periódica',
    descripcion: 'Carolina Parra y Claudia López fueron reconocidas junto a otras 116 científicas en la “Tabla Periódica de las Mujeres Científicas” por el Día Internacional de la Mujer y la Niña en la Ciencia.',
    fecha: '28 de mayo, 2025',
    imagen: '/imagen2.png',
  },
  {
    id: 3,
    titulo: 'Capacitación en Diversidad e Inclusión en Biblioteca USM',
    descripcion: 'En un mundo en constante cambio, en Biblioteca USM sabemos que es fundamental adaptarnos y crear espacios donde cada persona se sienta realmente valorada e incluida. Por eso, empezamos a actuar.',
    fecha: '25 de mayo, 2025',
    imagen: '/imagen3.png',
  },
];

const Noticias = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Noticias</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {noticias.map((noticia) => (
                  <div key={noticia.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    {noticia.imagen && (
                      <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover" />
                    )}
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{noticia.titulo}</h3>
                      <p className="text-sm text-gray-500 mb-1">{noticia.fecha}</p>
                      <p className="text-gray-700 text-sm">{noticia.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
    )
}

export default Noticias;