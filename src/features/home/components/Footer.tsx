import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-secondary border-t border-slate-900 py-12 md:py-20">
      {/* Elemento de fondo decorativo (Glow sutil) */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10">
        <div className="h-72 w-72 rounded-full bg-primary/5 blur-[100px] filter" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        {/* Estructura Principal */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Columna 1: Branding / Descripción */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-white flex items-center gap-2"
            >
              Arena<span className="text-primary">Hub</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              El equilibrio perfecto entre negocios, comunidad y deporte de alto rendimiento en un
              solo lugar.
            </p>
          </div>

          {/* Columna 2: Enlaces - Instalaciones */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Instalaciones
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Canchas de Pádel", "Salas de Reuniones", "Área de Coworking", "Zona Lounge"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Columna 3: Enlaces - Empresa */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Empresa
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Sobre Nosotros", "Eventos Corporativos", "Membresías", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Boletín / Newsletter */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Newsletter
            </h5>
            <p className="mt-4 text-sm text-slate-400">
              Recibe actualizaciones sobre eventos exclusivos y torneos corporativos.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex max-w-md items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-primary/50 focus:outline-hidden focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-slate-950 transition-transform hover:scale-105 active:scale-95"
                aria-label="Suscribirse"
              >
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </form>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-12 border-t border-slate-900 pt-8 md:mt-16" />

        {/* Barra Inferior (Copyright y Redes) */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} ArenaHub. Todos los derechos reservados.
          </p>

          {/* Redes Sociales (SVGs integrados para evitar fallas de lucide-react) */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter X"
              className="text-slate-400 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-slate-400 hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
