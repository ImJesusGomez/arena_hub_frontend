import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content:
      "ArenaHub ha transformado la forma en que gestionamos nuestras actividades corporativas. La facilidad para pasar de una reunión de estrategia a una partida de pádel en el mismo recinto es insuperable.",
    author: "Carlos Mendoza",
    role: "CEO, TechFlow Solutions",
    initials: "CM",
    image: "/testimonials/carlos.jpg",
  },
  {
    id: 2,
    content:
      "Increíble concepto. Organizar el teambuilding nunca había sido tan fácil. Las instalaciones son de primer nivel y la energía que se respira motiva a todo el equipo.",
    author: "Laura Gómez",
    role: "Directora de RRHH, InnovaCorp",
    initials: "LG",
    image: "/testimonials/laura.jpg",
  },
  {
    id: 3,
    content:
      "El equilibrio perfecto entre negocios y deporte. Nuestros clientes quedan fascinados cada vez que los invitamos a cerrar un trato seguido de un buen partido.",
    author: "Miguel Torres",
    role: "Socio Fundador, Torres & Asoc.",
    initials: "MT",
    image: "/testimonials/miguel.jpg",
  },
  {
    id: 4,
    content:
      "Una experiencia que cambia las reglas del juego. No solo ahorramos tiempo en traslados, sino que la moral y la creatividad del equipo están por las nubes.",
    author: "Sofía Ruiz",
    role: "Project Manager, Creativa Studio",
    initials: "SR",
    image: "/testimonials/sofia.jpg",
  },
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 1. Envolvemos handleNext en useCallback para que su referencia no cambie en cada render
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // 2. El useEffect ahora solo depende de handleNext, haciendo que el intervalo sea estable
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleSelect = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 py-20 md:py-32"
      id="testimonials"
    >
      {/* Elementos de fondo decorativos (Glow) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-100 w-150 rounded-full bg-primary/10 blur-[120px] filter" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 md:px-10 lg:px-12">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h2 className="bg-linear-to-br from-white to-slate-400 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            Lo que dicen de nosotros
          </h2>
        </div>

        <div className="relative flex min-h-100 w-full flex-col items-center justify-center text-center md:min-h-100">
          <Quote className="mb-8 h-10 w-10 text-primary/60 md:h-12 md:w-12" />

          {/* Testimonio con animación de Fade y Slide */}
          <div className="relative w-full max-w-5xl">
            <blockquote
              key={activeTestimonial.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-4xl lg:leading-[1.15]"
            >
              "{activeTestimonial.content}"
            </blockquote>
          </div>

          {/* Autor */}
          <div
            key={`author-${activeTestimonial.id}`}
            className="mt-12 flex animate-in fade-in slide-in-from-bottom-2 flex-col items-center gap-4 duration-700 sm:flex-row sm:gap-6"
          >
            <Avatar className="h-14 w-14 ring-2 ring-primary/20 ring-offset-2 ring-offset-slate-950 sm:h-16 sm:w-16">
              <AvatarImage src={activeTestimonial.image} alt={activeTestimonial.author} />
              <AvatarFallback className="bg-slate-800 text-slate-200">
                {activeTestimonial.initials}
              </AvatarFallback>
            </Avatar>

            <div className="text-center sm:text-left">
              <h4 className="text-base font-semibold text-white sm:text-lg">
                {activeTestimonial.author}
              </h4>
              <p className="text-sm font-medium text-primary">{activeTestimonial.role}</p>
              <div className="mt-1 flex justify-center gap-1 sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controles del Carrusel (Puntos / Dots) */}
        <div className="mt-16 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Ir al testimonio ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-slate-700 hover:bg-slate-500",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
