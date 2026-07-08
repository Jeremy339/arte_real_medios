import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-[#712783]/10 via-white to-[#ffdf05]/10 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <h3
              className=" 
                text-[#712783]
                font-bold italic
                text-xl
                md:text-2xl
                uppercase
                tracking-[0.2em]
              "
            >
              {title}
            </h3>

            <span
              className="
                absolute
                left-0
                -bottom-2
                w-16
                h-1
                bg-[#ffdf05]
                rounded-full
              "
            />
          </div>

          <span className="hidden md:block text-sm font-semibold text-[#712783]/70">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Carrusel */}
        <div
          className="
            relative
            group
            overflow-hidden
            rounded-3xl
            bg-white
            border
            border-[#712783]/15
            shadow-[0_20px_50px_rgba(113,39,131,0.25)]
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Imágenes */}
          <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden bg-[#712783]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - imagen ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`
                  absolute inset-0
                  w-full h-full
                  object-contain
                  transition-opacity
                  duration-1000
                  ease-in-out
                  ${index === currentIndex
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0'
                  }
                `}
              />
            ))}

            {/* Overlay decorativo */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
                pointer-events-none
                z-10
              "
            />
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              z-20

              bg-white/20
              backdrop-blur-md
              border
              border-white/30

              p-3
              rounded-full

              text-white

              opacity-100
              md:opacity-0
              md:group-hover:opacity-100

              hover:bg-[#ffdf05]
              hover:text-[#712783]

              transition-all
              duration-300

              shadow-lg
            "
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              z-20

              bg-white/20
              backdrop-blur-md
              border
              border-white/30

              p-3
              rounded-full

              text-white

              opacity-100
              md:opacity-0
              md:group-hover:opacity-100

              hover:bg-[#ffdf05]
              hover:text-[#712783]

              transition-all
              duration-300

              shadow-lg
            "
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>

          {/* Indicadores */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              flex
              gap-2
              z-20
            "
          >
          </div>
        </div>
      </div>
    </section>
  );
}