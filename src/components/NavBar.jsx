import logo from '../assets/logo-biblioteca.png';
import { useState } from 'react';
import { Link } from 'react-router';

import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner4.jpg';

export default function NavBar({onReservarClick}) {
    const images = [banner1, banner2, banner3];

    const [currentImage, setCurrentImage] = useState(0);
    const changeImage = (index) => {
        setCurrentImage(index);
    }

    return (
        <nav 
            className="relative h-150 text-white px-8 py-6"
            style={{
                backgroundImage: `url("${images[currentImage]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="relative z-10 flex justify-between items-start max-w-6xl mx-auto pt-5">
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="Logo Biblioteca"
                        className="h-13 w-auto"
                    />
                </div>
                <ul className="flex gap-6 items-center font-medium">
                    <li className="hover:underline cursor-pointer">Inicio</li>
                    <li>
                        <Link 
                            to="/quienes-somos" 
                            className="hover:underline cursor-pointer"
                        >
                            Quienes Somos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/ayuda" 
                            className="hover:underline cursor-pointer"
                        >
                            Ayuda
                        </Link>
                    </li>
                    <li>
                        <button onClick={onReservarClick} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-md transition cursor-pointer">
                          Reservar Sala
                        </button>
                    </li>
                </ul>
            </div>
            <div className="absolute bottom-4 right-95 bottom-15 z-20 flex gap-2"> 
                {images.map((_,index) =>(
                    <button
                        key={index}
                        onClick={() => changeImage(index)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-colors cursor-pointer duration-200 border-2 ${currentImage === index ? 'bg-white text-black shadow-md':'bg-black/50 text-white'}`}
                    >{index + 1}</button>
                ))}
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/100 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/100 to-transparent" />
            </div>
        </nav>
    )
}