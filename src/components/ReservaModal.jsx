import React, { useState } from 'react';

const horarios = Array.from({ length: 24 }, (_, i) => {
  const hour = 8 + Math.floor(i / 2); // desde 8:00
  const minute = i % 2 === 0 ? '00' : '30';
  return `${hour.toString().padStart(2, '0')}:${minute}`;
});

const salas = [
  { id: 1, nombre: 'Sala 01', ocupados: ['10:00', '10:30', '14:00', '14:30', '18:00', '18:30'] },
  { id: 2, nombre: 'Sala 02', ocupados: ['09:30', '10:00', '12:00', '12:30'] },
  { id: 3, nombre: 'Sala 03', ocupados: ['09:30', '10:00', '13:00', '13:30', '16:30', '17:00'] },
];

const ReservaModal = ({ sede, onClose }) => {
  const [reservaConfirmada, setReservaConfirmada] = useState(false);
  const [filtroSala, setFiltroSala] = useState('');
  const [fecha, setFecha] = useState(() => {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // yyyy-mm-dd
  });
  const [seleccion, setSeleccion] = useState([]);

  const toggleSeleccion = (salaId, hora) => {
    const index = horarios.indexOf(hora);
    const siguiente = horarios[index + 1];
    if (!siguiente) return;

    const bloque1 = `${salaId}-${hora}`;
    const bloque2 = `${salaId}-${siguiente}`;

    const yaSeleccionado = seleccion.includes(bloque1) || seleccion.includes(bloque2);

    // Si ya se seleccionó el par, deseleccionarlo
    if (
      seleccion.includes(bloque1) &&
      seleccion.includes(bloque2)
    ) {
      setSeleccion(seleccion.filter((b) => b !== bloque1 && b !== bloque2));
      return;
    }

    if (yaSeleccionado) return; // Evita seleccionar bloques sueltos o repetidos

    const sala = salas.find((s) => s.id === salaId);

    const ocupado1 = sala.ocupados.includes(hora);
    const ocupado2 = sala.ocupados.includes(siguiente);

    if (ocupado1 || ocupado2) return;

    // Solo permitir hasta 2 pares (4 bloques)
    if (seleccion.length >= 4) return;

    setSeleccion([...seleccion, bloque1, bloque2]);
  };



  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-4">
      {reservaConfirmada ?(
        <div className='flex flex-col items-center justify-center p-8 text-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-green-700">Reserva confirmada con éxito</h2>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>   
        </div>
      ):(
        <>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Reservar en: {sede}</h2>

          <div className="overflow-x-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-start md:items-end">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Fecha:</label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Sala:</label>
                <select
                  value={filtroSala}
                  onChange={(e) => setFiltroSala(e.target.value)}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Todas las salas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Capacidad:</label>
                <select className="border p-2 rounded w-full">
                  <option value="">Cualquier cantidad</option>
                </select>
              </div>
            </div>
            <table className="table-auto border w-full text-sm">
              <thead>
                <tr>
                  <th className="p-2 border">Sala</th>
                  {horarios.map((hora) => (
                    <th key={hora} className="px-2 py-1 border text-nowrap">{hora}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {salas.map((sala) => (
                  <tr key={sala.id}>
                    <td className="p-2 border font-medium">{sala.nombre}</td>
                    {horarios.map((hora) => {
                      const ocupado = sala.ocupados.includes(hora);
                      const clave = `${sala.id}-${hora}`;
                      const seleccionado = seleccion.includes(clave);
                      return (
                        <td
                          key={hora}
                          className={`border cursor-pointer text-center transition-all
                            ${ocupado ? 'bg-gray-300 cursor-not-allowed' : ''}
                            ${seleccionado ? 'bg-blue-500 text-white' : ''}
                            ${!ocupado && !seleccionado ? 'hover:bg-blue-100' : ''}
                          `}
                          onClick={() => {
                            if (!ocupado) toggleSeleccion(sala.id, hora);
                          }}
                        >
                          {ocupado ? '×' : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            >
              Cerrar
            </button>
            <button
              onClick={()=> setReservaConfirmada(true)}
              disabled={seleccion.length < 2}
              className={`px-4 py-2 rounded text-white transition ${
                seleccion.length >= 2
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-300 cursor-not-allowed'
              }`}
            >
              Confirmar reserva
            </button>
          </div>
    </>
  )}
  </div>
  </div>  
  );
};

export default ReservaModal;
