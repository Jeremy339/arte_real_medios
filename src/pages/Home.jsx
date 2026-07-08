import ClientBrandsFooter from '../components/ClientBrandsFooter';
import Header from '../components/Header';
import '../styles/global.css'; // Estilos globales y Tailwind
import '../styles/Home.css';   // Estilos específicos de esta página
import ServiceCard from '../components/ServiceCards';
import ArteRealLogo from '../assets/arte_real_logo.png'; // Tu logo cargado
import PhotoCarousel from '../components/PhotoCarousel';
import BusPublicitaria from '../assets/BusPublicitaria.jpg';
import PublicidadExterior from '../assets/PublicidadExterior.png';
import RotuloPublicitaria from '../assets/RotuloPublicitaria.jpeg';
import VallaPublicitaria from '../assets/VallaPublicitaria.png';

// 1. Importamos todas las imágenes de las carpetas assets
const imagesBusMap = import.meta.glob('../assets/carrouselBus/*.{png,jpg,jpeg}', { eager: true });
const imagesVallaMap = import.meta.glob('../assets/carrouselValla/*.{png,jpg,jpeg}', { eager: true });

// 2. Convertimos esos objetos en los arrays que tus componentes esperan
const fotosBuses = Object.values(imagesBusMap).map((m) => m.default);
const fotosVallas = Object.values(imagesVallaMap).map((m) => m.default);

const vallasItems = [
  "Vallas tubulares de doble cara",
  "Vallas tubulares con diseño troquelado",
  "Vallas en dos soportes estructurales",
];

export default function Home() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <Header />
      <main className="flex-grow">
        {/* 1. Franja Amarilla Superior con Logo */}
        <section className="bg-[#ffdf05] w-full py-3 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-end gap-4">
            {/* Contenedor del Logo - Mantienes tu tamaño grande aquí */}
            <img
              src={ArteRealLogo}
              alt="Arte REAL"
              className="h-16 md:h-24 object-contain"
            />
            {/* Texto alineado abajo a la derecha */}
            <div className="text-right text-xs md:text-sm font-black italic text-purple-900 uppercase tracking-wider leading-none">
              CREARTE EN VALLAS MEDIOS
            </div>
          </div>
        </section>

        {/* 2. Sección Principal (Hero) */}
        <section className="relative w-full min-h-[400px] h-auto py-16 md:py-0 md:h-[550px] lg:h-[650px] xl:h-[750px] flex items-center overflow-hidden">
          {/* Fondo de Ciudad con Valla */}
          <div className="absolute inset-0 z-0">
            <img
              src={PublicidadExterior}
              alt="Publicidad exterior"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Superposición de Texto */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
            {/* CAJA DE TEXTO CON EFECTO CRISTAL EN MÓVIL */}
            <div className="max-w-2xl bg-white/0 p-5 md:p-0 rounded-2xl md:shadow-none">
              <h3 className="text-[#712783] text-lg md:text-2xl italic font-bold mb-2 leading-tight">
                Publicidad Exterior e Interior de
              </h3>

              {/* Botón/Píldora "ALTA AUDIENCIA" */}
              <div className="inline-block bg-[#712783] rounded-xl px-4 py-1.5 mb-4 shadow-md transform -rotate-1 md:rotate-0">
                <h2 className="text-[#ffdf05] text-xl md:text-4xl font-black italic tracking-tight">
                  ALTA AUDIENCIA
                </h2>
              </div>

              <p className="text-[#712783] text-base md:text-3xl font-serif italic leading-snug md:leading-tight font-medium">
                Expertos en llevar soluciones con rapidez en la Industria de la Venta de Vallas, arriendo de Vallas y afines
              </p>
            </div>
          </div>
        </section>
        
        {/* 3. SEPARADOR BLANCO */}
        <div className="w-full bg-gray-100 h-2 md:h-4"></div>

        {/* 4. SECCIÓN DE TEXTO (NOSOTROS) - FONDO MORADO */}
        <section className="w-full bg-[#712783] py-12 md:py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <p className="text-sm md:text-lg font-light leading-relaxed italic">
              Imagina un equipo que no solo responde a tus pedidos, sino que evoluciona contigo.
              Nosotros nacimos para crear, y en el camino descubrimos que cada cliente trae un reto distinto.
              Por eso hoy somos más que un proveedor: somos un aliado que transforma las ideas en resultados.
            </p>

            <p className="text-sm md:text-lg font-semibold leading-relaxed italic">
              Para el visionario que busca inspiración, ponemos creatividad y experiencia. <br />
              Para el líder que exige resultados, entregamos cumplimiento, calidad y precios justos.
            </p>
          </div>
        </section>

        {/* 5. FRANJA AMARILLA CON PILL "NUESTRA GALERIA" */}
        <section className="w-full bg-[#ffdf05] py-10 md:py-14">
          {/* Contenedor del Título Centrado */}
          <div className="flex justify-center mb-10 md:mb-14"> {/* mb-10 separa el título de los carruseles */}
            <div className="bg-[#712783] rounded-2xl px-12 py-3 shadow-lg transform -rotate-1">
              {/* Eliminamos las comas de las clases aquí */}
              <h2 className="text-[#ffdf05] text-xl md:text-3xl font-black italic tracking-tighter leading-none px-4">
                NUESTRA GALERIA
              </h2>
            </div>
          </div>

          {/* Contenedor de Carruseles: Usamos bg-white para que resalten como en tu diseño original */}
          <div className="w-full bg-gray-100 shadow-inner py-4">
            <PhotoCarousel
              title="Nuestra Publicidad Móvil en Todo el Ecuador"
              images={fotosBuses}
            />

            {/* BARRITA SEPARADORA */}
            <div className="w-full bg-[#ffdf05] h-8 md:h-12 shadow-inner"></div>

            <PhotoCarousel
              title="Vallas de Publicidad en Todo Género"
              images={fotosVallas}
            />
          </div>
        </section>


        {/* ---6. SECCIÓN: ¿POR QUÉ NOS ELIGEN? --- */}
        <section className="bg-[#712783] py-12 px-6 md:px-12 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Encabezado de sección */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
              <div>
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter transform -rotate-2 pb-8">
                  <span className="text-white">¿Por qué </span>
                  <span className="text-[#ffdf05]">NOS ELIJEN?</span>
                </h2>
                <p className="text-[20px] md:text-xs mt-2 uppercase font-light tracking-widest opacity-90">
                  PORQUE UTILIZAMOS Los más altos estándares de calidad en los materiales <br />
                  Cumplimiento en tiempos de entrega
                </p>
              </div>
              <div className="text-[#ffdf05] font-bold italic text-lg md:text-xl">
                GARANTÍAS Y MUCHO MÁS
              </div>
            </div>

            {/* Línea amarilla de acento */}
            <div className="bg-[#ffdf05] h-1.5 w-full mb-10 shadow-lg"></div>

            {/* Grid de Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-2">
                <h4 className="text-[#ffdf05] font-bold text-sm md:text-base border-b border-white/20 pb-1 italic uppercase tracking-wider">Gestión Completa</h4>
                <p className="text-xs md:text-sm font-light italic leading-relaxed">
                  Nos encargamos de todo el proceso de principio a fin. Tiempo invertido en toda la gestión.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[#ffdf05] font-bold text-sm md:text-base border-b border-white/20 pb-1 italic uppercase tracking-wider">Equipos y Tecnología Moderna</h4>
                <p className="text-xs md:text-sm font-light italic leading-relaxed">
                  Infraestructura garantiza con la mejor calidad.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[#ffdf05] font-bold text-sm md:text-base border-b border-white/20 pb-1 italic uppercase tracking-wider">Ubicaciones Estratégicas</h4>
                <p className="text-xs md:text-sm font-light italic leading-relaxed">
                  Invertimos en tiempo para seleccionar los mejores lugares para garantizar la visibilidad y resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. SECCIÓN: NUESTROS SERVICIOS --- */}
        <section className="w-full bg-[#ffdf05] py-12">
          <div className="flex justify-center mb-16">
            <div className="bg-[#712783] rounded-2xl px-12 py-3 shadow-2xl transform -rotate-2">
              <p className="text-white text-[12px] italic leading-none text-center">Nuestros</p>
              <h2 className="text-[#ffdf05] text-2xl md:text-4xl font-black italic tracking-tighter leading-none uppercase">
                Servicios
              </h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1: Vallas */}
            <ServiceCard
              title="Vallas de Publicidad con Proyectos Especiales"
              img={VallaPublicitaria}
              items={[
                "Vallas tubulares de doble cara",
                "Vallas tubulares con diseño troquelado",
                "Vallas en dos soportes estructurales",
                "Mini vallas en 2 soportes",
                "Paletas de carreteras",
                "Vallas murales (adosadas a fachada)",
                "Vallas en terrazas de casas",
                "Vallas digitales LED",
                "MUPIs (Mobiliario Urbano)"
              ]}
            />

            {/* Servicio 2: Móvil */}
            <ServiceCard
              title="Publicidad Móvil y Activaciones Urbanas"
              img={BusPublicitaria}
              items={[
                "Publicidad en buses urbanos y taxis",
                "Publicidad en sistema Ecovía",
                "Publicidad en sistema Metrovía",
                "Paradas troncales de Metrobús",
                "Bicivallas (publicidad en bicicletas)",
                "Arañas móviles - LED portátiles",
                "Pantallas GIGANTES LED móviles",
                "Movi Board LED",
                "Volanteo clásico y personalizado"
              ]}
            />

            {/* Servicio 3: Gráfica */}
            <ServiceCard
              title="Rotulación e Imagen Corporativa"
              img={RotuloPublicitaria}
              items={[
                "Adhesivos industriales",
                "Microperforados para ventanales",
                "Impresión en lonas de gran formato",
                "Letras en bloque",
                "Rótulos con cajas de luz",
                "Gigantografías con iluminación exterior",
                "Rótulos luminosos en acrílico",
                "Letras en simtra (PVC expandido)",
                "Servicio integral en diseño gráfico"
              ]}
            />
          </div>
        </section>
        {/* . Barra Morada Separadora */}
        <div className="w-full bg-[#712783] h-10 md:h-14"></div>
      </main>

      <ClientBrandsFooter />
    </div>
  );
}