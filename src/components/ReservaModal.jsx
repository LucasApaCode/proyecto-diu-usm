import React from 'react';

const ReservaModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Reservar Sala</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Nombre</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium">Fecha</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium">Hora</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservaModal;
