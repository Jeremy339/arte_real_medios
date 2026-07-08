import React from 'react';

export default function WhatsAppButton() {
    const phoneNumber = "593997703687";
    const message = "¡Hola! Vengo de su página web y me gustaría cotizar una valla publicitaria.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Modificar botón móvil (w-12 h-12) y normal en PC (md:w-14 md:h-14)
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#ffdf05] ring-2 ring-[#cfb20e] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#712783] transition-all duration-300 group"
            aria-label="Contactar por WhatsApp"
        >

            {/* --- INICIO DEL MENSAJE FLOTANTE --- */}
            <span className="absolute right-full mr-3 md:mr-4 bg-[#ffdf05] text-[#712783] text-[15px] md:text-sm font-italic py-1.5 px-3 md:py-2 md:px-4 rounded-xl ring-2 ring-[#cfb20e] shadow-lg pointer-events-none whitespace-nowrap">        Contáctanos

                {/* Triángulo que apunta hacia el botón (también se hace más chiquito en móvil) */}
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#ffdf05] ring-2 ring-[#cfb20e] rotate-45 rounded-sm"></span>
            </span>

            <img
                src="/WhatsApp.svg"
                alt="WhatsApp"
                // El ícono también es un poco más pequeño en móvil (w-7 h-7)
                className="w-7 h-7 md:w-8 md:h-8 animate-[heartbeat_1.2s_ease-in-out_infinite]"
            />
        </a>
    );
}