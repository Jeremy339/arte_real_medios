import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Cambiamos grid por flex: en móvil se apila (flex-col), en PC se alinea (md:flex-row) */}
      <div className="w-full px-4 py-4 flex flex-col md:flex-row justify-center items-center gap-4">

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-purple-900 hover:text-[#ffdf05] transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="text-purple-900 hover:text-[#ffdf05] transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} className="text-purple-900 hover:text-[#ffdf05] transition-colors" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} className="text-purple-900 hover:text-[#ffdf05] transition-colors" />
          </a>
        </div>

        {/* Teléfonos - Separador visual PC */}
        <div className="text-sm md:text-xs text-purple-900 font-semibold leading-tight md:border-l md:pl-4 border-gray-200 text-center md:text-left">
          <p className="text-gray-400 font-light hidden md:block">Teléfonos:</p> {/* Ocultamos la palabra "Teléfonos" en móvil para ahorrar espacio */}
          <div className="flex md:flex-col gap-3 md:gap-0 mt-1 md:mt-0">
             <p>099 770 3687</p>
             <p className="hidden md:inline-block">-</p> {/* Separador horizontal en móvil */}
             <p>096 179 0100</p>
          </div>
        </div>

      </div>
    </header>
  );
}