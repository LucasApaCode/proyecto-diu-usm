import React from 'react';
import ReservaModal from './ReservaModal';
import { useState } from 'react';

const Header = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const sedes = [
    'Biblioteca Central',
    'Campus San Joaquín',
    'Campus Vitacura',
    'Campus Viña del Mar',
  ];

  const handleReservarClick = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  const handleSeleccionarSede = (sede) => {
    setSedeSeleccionada(sede);
    setMostrarDropdown(false);
    setMostrarModal(true);
  };

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
                onClick={handleReservarClick}
                className='bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition'
              >
                Reservar Sala
              </button>
              {mostrarDropdown && (
                <div className="absolute mt-2 bg-white border rounded shadow-md z-50">
                  {sedes.map((sede,index)=> (
                    <button key={index} onClick={()=> handleSeleccionarSede(sede)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      {sede}
                    </button>
                  ))}
                </div>
              )}
              
            </li>
          </ul>
        </nav>
      </header>
      {mostrarModal && (
        <ReservaModal sede={sedeSeleccionada} onClose={() => setMostrarModal(false)}></ReservaModal>
      )}
    </>
  );
};

export default Header;