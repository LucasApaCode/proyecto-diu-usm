import { useState } from "react"

export default function SelectorBiblioteca({ isOpen, onClose, onSelect }) {
  const [selected, setSelected] = useState("")

  const handleConfirm = () => {
    if (selected) {
      onSelect(selected)
      onClose()
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Selecciona una biblioteca</h3>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        >
          <option value="">-- Selecciona una biblioteca --</option>
          <option value="San Joaquín">Biblioteca Campus San Joaquín</option>
          <option value="Central">Biblioteca Central</option>
          <option value="Vitacura">Biblioteca Campus Vitacura</option>
          <option value="Concepción">Biblioteca Sede Concepción</option>
          <option value="Viña del Mar">Biblioteca Sede Viña del Mar</option>
        </select>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancelar</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}