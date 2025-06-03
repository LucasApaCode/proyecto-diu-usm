const horariosPorBiblioteca = [
  {
    location: 'Valparaíso',
    name: 'Casa Central',
    horarios: {
      Lunes: '08:15 - 19:45',
      Martes: '08:15 - 19:45',
      Miércoles: '08:15 - 19:45',
      Jueves: '08:15 - 19:45',
      Viernes: '08:15 - 18:45',
      Sábado: '09:00 - 12:45',
      Domingo: 'Cerrado',
    },
  },
  {
    location: 'Santiago',
    name: 'San Joaquín',
    horarios: {
      Lunes: '08:00 - 20:00',
      Martes: '08:00 - 20:00',
      Miércoles: '08:00 - 20:00',
      Jueves: '08:00 - 20:00',
      Viernes: '08:00 - 19:00',
      Sábado: 'Cerrado',
      Domingo: 'Cerrado',
    },
  },
  {
    location: 'Santiago',
    name: 'Vitacura',
    horarios: {
      Lunes: '08:15 - 19:45',
      Martes: '08:15 - 19:45',
      Miércoles: '08:15 - 19:45',
      Jueves: '08:15 - 19:45',
      Viernes: '08:15 - 19:45',
      Sábado: '09:00 - 12:45',
      Domingo: 'Cerrado',
    },
  },
  {
    location: 'Viña del Mar',
    name: 'Sede Viña del Mar',
    horarios: {
      Lunes: '08:30 - 20:30',
      Martes: '08:30 - 20:30',
      Miércoles: '08:30 - 20:30',
      Jueves: '08:30 - 20:30',
      Viernes: '08:30 - 20:30',
      Sábado: '09:00 - 13:00',
      Domingo: 'Cerrado',
    },
  },
  {
    location: 'Concepción',
    name: 'Sede Concepción',
    horarios: {
      Lunes: '08:10 - 20:20',
      Martes: '08:10 - 20:20',
      Miércoles: '08:10 - 20:20',
      Jueves: '08:10 - 20:20',
      Viernes: '08:10 - 19:30',
      Sábado: '09:00 - 14:00',
      Domingo: 'Cerrado',
    },
  },
];

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const HorariosBiblioteca = () => {
  return (
    <section className="py-8 px-2">
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">Horarios de Bibliotecas</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border text-xs mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Ubicación</th>
              <th className="border px-2 py-1">Biblioteca</th>
              {diasSemana.map((dia) => (
                <th key={dia} className="border px-2 py-1">{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horariosPorBiblioteca.map((biblio, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{biblio.location}</td>
                <td className="border px-2 py-1">{biblio.name}</td>
                {diasSemana.map((dia) => (
                  <td key={dia} className="border px-2 py-1 text-center">
                    {biblio.horarios[dia]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[10px] text-gray-600 mt-2 text-center italic">
          *Los domingos todas las bibliotecas permanecen cerradas
        </p>
      </div>
    </section>
  );
};

export default HorariosBiblioteca;
