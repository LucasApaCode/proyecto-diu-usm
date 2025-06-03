const datosBiblioteca = [
{
    date: 'Lunes',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 20:00', location: 'Valparaíso' },
      { name: 'Campus San Joaquín', hours: '08:30 - 19:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 19:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 18:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 20:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Martes',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 20:00', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: '09:00 - 18:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 19:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 18:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 20:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Miercoles',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 20:00', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: '09:00 - 18:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 19:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 18:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 20:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Jueves',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 20:00', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: '09:00 - 18:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 19:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 18:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 20:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Viernes',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 17:00', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: '09:00 - 16:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 16:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 16:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 17:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Sábado',
    libraries: [
      { name: 'Casa Central', hours: '08:00 - 14:00', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: '09:00 - 14:00', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: '08:30 - 14:00', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: '08:30 - 14:00', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: '08:30 - 14:00', location: 'Concepción' },
    ],
  },
  {
    date: 'Domingo',
    libraries: [
      { name: 'Casa Central', hours: 'Cerrado', location: 'Valparaíso' },
      { name: 'Campus Vitacura', hours: 'Cerrado', location: 'Santiago' },
      { name: 'Campus Vitacura', hours: 'Cerrado', location: 'Santiago' },
      { name: 'Sede Viña del Mar', hours: 'Cerrado', location: 'Viña del Mar' },
      { name: 'Sede Concepción', hours: 'Cerrado', location: 'Concepción' },
    ],
  },
]

const HorariosBiblioteca = () => {
    return (
        <section className='bg-gray-50 py-12 px-4'> 
            <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>Horarios de Bibliotecas</h2>
            <div className='max-w-4xl mx-auto shadow rounded-lg overflow-hidden'>
                <div className='overflow-y-auto max-h-[400px]'>
                    <table className='min-w-full text-sm text-left border border-gray-200'>   
                        <thead className='bg-gray-100 text-gray-600 uppercase'>
                            <tr>
                                <th className='px-4 py-3'>Ubicación</th>
                                <th className='px-4 py-3'>Biblioteca</th>
                                <th className='px-4 py-3'>Día</th>
                                <th className='px-4 py-3'>Horario</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {datosBiblioteca.map((dia, index)=> 
                                dia.libraries.map((lib, idx) => (
                                    <tr key={`${index}-${idx}`} className='border-t'>
                                        <td className='px-4 py-3'>{lib.location}</td>
                                        <td className='px-4 py-3'>{lib.name}</td>
                                        <td className='px-4 py-3'>{dia.date}</td>
                                        <td className='px-4 py-3'>{lib.hours}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default HorariosBiblioteca;
