import React from 'react';
import ReservaModal from './ReservaModal';
import { useState } from 'react';

const Header = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <nav className="flex justify-between items-center w-full px-4 md:px-12 py-6 text-gray-800">
          <img src="/logo-biblioteca.png" alt="Logo Biblioteca" className="h-12" />
          <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 font-medium drop-shadow">
            <li><a href="#" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-600">Sobre la Biblioteca</a></li>
            <li><a href="#" className="hover:text-blue-600">Contacto</a></li>
            <li><a href="#" className="hover:text-blue-600">Ayuda</a></li>
            <li>
              <button
                onClick={abrirModal}
                className='bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition'
              >
                Reservar Sala
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <ReservaModal isOpen={modalAbierto} onClose={cerrarModal} />
    </>
  );
};

export default Header;