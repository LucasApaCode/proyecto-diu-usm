import {noticiasData} from '../data/noticias';

export default function Noticias() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-800">Noticias</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {noticiasData.map((noticia) =>(
                        <div key={noticia.id} className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img 
                                src={noticia.imagen}
                                alt={noticia.titulo}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                                <p className="text-white fonte-semibold mb-2">{noticia.titulo}</p>
                                <span className="text-sm text-white">
                                    {new Date(noticia.fecha).toLocaleDateString("es-CL",{
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>    
                        </div>
                    ))}        
                </div>
            </div>
        </section>
    )
}