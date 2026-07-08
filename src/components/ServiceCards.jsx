/**
 * Componente para mostrar las tarjetas de servicios de Arte REAL.
 * @param {string} title - Título del servicio.
 * @param {string} img - URL de la imagen representativa.
 * @param {string[]} items - Lista de servicios específicos.
 */
export default function ServiceCard({ title, img, items }) {
  return (
    <div className="bg-[#f3e8ff] p-6 rounded-3xl shadow-lg flex flex-col items-center border border-purple-200/30 transition-all hover:shadow-2xl hover:-translate-y-1">
      {/* Título con estilo publicitario */}
      <h4 className="text-[#581c87] font-extrabold italic text-sm md:text-base mb-4 underline decoration-[#581c87]/20 underline-offset-8 text-center min-h-[48px] flex items-center justify-center uppercase tracking-tight">
        {title}
      </h4>

      {/* Contenedor de Imagen con recorte profesional */}
      <div className="w-full h-40 md:h-48 overflow-hidden rounded-2xl mb-6 shadow-md bg-gray-300">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Lista de servicios con viñetas personalizadas */}
      <ul className="w-full text-[11px] md:text-[13px] text-[#581c87] space-y-2.5 font-bold italic">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 leading-tight">
            <span className="text-[#581c87] mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}