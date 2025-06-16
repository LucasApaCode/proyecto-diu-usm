import { Link, useLocation } from "react-router"

import logo from '../assets/logo-biblioteca.png'

export default function Navbar({imagenFondo, posicionImagen, onReservarClick}) {
  const location = useLocation()

  const navLinkStyle = (path) =>
    `text-white font-semibold hover:underline transition ${
      location.pathname === path ? "underline" : ""
    }`

  return (
    <nav className="relative h-110 text-white px-8 py-6"
      style={{
        backgroundImage: `url("${imagenFondo}")`,
        backgroundSize: "cover",
        backgroundPosition: `${posicionImagen}`,
      }}
      >
      <div className="relative z-10 flex justify-between items-start max-w-6xl mx-auto pt-5">
        <div className="flex items-center gap-4">
          <img
              src={logo}
              alt="Logo Biblioteca"
              className="h-13 w-auto"
          />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className={navLinkStyle("/")}>Inicio</Link>
          <Link to="/quienes-somos" className={navLinkStyle("/quienes-somos")}>Quienes Somos</Link>
          <Link to="/ayuda" className={navLinkStyle("/ayuda")}>Ayuda</Link>
          <Link>
            <button onClick={onReservarClick} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-md transition cursor-pointer">
              Reservar Sala
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-50 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-black/90 to-transparent" />
      </div>
    </nav>
  );
}


