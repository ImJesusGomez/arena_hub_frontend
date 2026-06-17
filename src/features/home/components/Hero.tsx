import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-secondary bg-radial-[at_center] from-primary/20 from-0% via-secondary via-30% to-secondary to-100% flex items-center justify-center p-6 sm:p-10 lg:p-16"
      id="home"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Archivo Black', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
        {/* LEFT COLUMN */}
        <div className="font-body">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/6 px-4 py-2 mb-9">
            <Zap className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />
            <span className="text-[11px] font-semibold tracking-[0.12em] text-emerald-300/90">
              NUEVO ESTÁNDAR EN GESTIÓN DE ESPACIOS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display uppercase text-white leading-[0.92] tracking-tight text-[2.75rem] sm:text-6xl lg:text-[4.2rem] mb-7">
            <span className="block">Domina tu</span>
            <span className="block">espacio,</span>
            <span
              className="block text-emerald-400"
              style={{
                textShadow: "0 0 18px rgba(52,211,153,0.55), 0 0 46px rgba(52,211,153,0.3)",
              }}
            >
              potencia tu
            </span>
            <span
              className="block text-emerald-400"
              style={{
                textShadow: "0 0 18px rgba(52,211,153,0.55), 0 0 46px rgba(52,211,153,0.3)",
              }}
            >
              juego
            </span>
          </h1>

          {/* Body copy */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mb-10">
            La plataforma definitiva para reservar canchas de pádel, tenis, fútbol y espacios de
            trabajo corporativo con precisión tecnológica y facilidad absoluta.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm tracking-wide px-8 h-12 rounded-md shadow-[0_0_25px_rgba(52,211,153,0.35)] uppercase">
              Crear Cuenta
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white font-bold text-sm tracking-wide px-8 h-12 rounded-md uppercase"
            >
              Ver espacios
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN — illustrated court visual */}
        <div className="relative w-3/4 rounded-2xl overflow-hidden aspect-4/5 sm:aspect-16/10 md:aspect-4/5 lg:aspect-3/4 shadow-2xl">
          <img
            src="/heroimage.jpg"
            alt="Cancha de pádel iluminada de noche"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />

          {/* info card overlay */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[80%] rounded-lg border border-emerald-400/20 bg-black/70 backdrop-blur-sm px-3.5 py-2.5 sm:px-4 sm:py-3">
            <p className="font-body text-[9px] sm:text-[10px] font-bold tracking-[0.12em] text-emerald-400 mb-1 whitespace-nowrap">
              SIGUIENTE CLASE
            </p>
            <p className="font-body text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
              Pádel Pro Elite · 18:00h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
