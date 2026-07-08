import React from 'react';
import ArteRealFooter from '../assets/ArteRealFooter.png';

const logos = Object.entries(
  import.meta.glob('../assets/clientLogos/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
).map(([path, src]) => ({
  name: path
    .split('/')
    .pop()
    .replace(/\.[^/.]+$/, ''),
  src,
}));

const duplicatedLogos = [...logos, ...logos];

export default function ClientBrandsFooter() {
  return (
    <footer className="w-full">
      <section className="bg-yellow-400 py-6 overflow-hidden relative">
        <div className="container mx-auto mb-6">
          <div className="max-w-[250px] mx-auto text-center bg-[#712783] rounded-full px-4 py-2 shadow-md -rotate-2">
            <p className="text-white text-xs">Marcas de Nuestros</p>
            <h2 className="text-yellow-300 text-2xl md:text-3xl font-black italic tracking-tighter leading-none uppercase">
              CLIENTES
            </h2>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="fila-animada">
            {duplicatedLogos.map(({ name, src }, index) => (
              <div key={`${name}-${index}`} className="px-4 shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm p-0.5">
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-1 flex flex-col items-center">
        <img
          src={ArteRealFooter}
          alt="Arte REAL"
          className="h-20 md:h-26 object-contain"
        />
        <span className="text-[12px] uppercase tracking-widest text-gray-400">
          Crearte en Vallas
        </span>
      </div>
    </footer>
  );
}