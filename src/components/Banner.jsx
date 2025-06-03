import React from 'react';
import { useState } from 'react';
import bannerImage from '/banner.jpg';

const Banner = () => {
  const [tipo, setTipo] = useState('todos');
  const [termino, setTermino] = useState('');

  const manejarBusqueda = (e) => {
    e.preventDefault();
    alert(`Buscando "${termino}" en ${tipo}...`);
  };

  return (
    <div
      className="relative h-[550px] bg-cover bg-[center_30%] flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent z-0" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent z-0" />

        <div className="relative z-10 text-center px-4 w-full max-w-3xl">
            <form
              onSubmit={manejarBusqueda}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 w-full flex flex-col gap-4 items-center"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 w-full text-center">
                    Buscar en el Catálogo
              </h3>  
              <input
                  type="text"
                  value={termino}
                  onChange={(e) => setTermino(e.target.value)}
                  placeholder='Escibe un libro, e-book, autor, revista o tesis'
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
        
              <div className='w-full flex flex-col md:flex-row gap-4 items-center justify-center'>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="todos">Todos</option>
                  <option value="libros">Libro</option>
                  <option value="autor">Autor</option>
                  <option value="ebooks">E-book</option>
                  <option value="revistas">Revista</option>
                  <option value="tesis">Tesis</option>
                </select>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Buscar
                </button>
               </div> 
            </form>
        </div>
    </div>
  );
};

export default Banner;
