export default function ConfirmacionModal({ sala, onClose }) {
  if (!sala) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-2">✅ Reserva Confirmada</h3>
        <p className="text-gray-800 mb-4">Has reservado <strong>{sala}</strong> exitosamente.</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
