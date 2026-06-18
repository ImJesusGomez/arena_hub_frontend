import { Link, Outlet, useMatches } from "react-router";

// 1. Tipamos la estructura que esperamos en el objeto handle
interface RouteHandle {
  title: string;
  subtitle: string;
}

export const AuthLayout = () => {
  const matches = useMatches();

  // 2. Buscamos el match que tenga nuestro objeto handle tipado
  const currentMatch = matches.find((match) => match.handle && (match.handle as RouteHandle).title);

  const handle = currentMatch?.handle as RouteHandle | undefined;

  // 3. Valores por defecto por si acaso
  const title = handle?.title || "Bienvenido";
  const subtitle = handle?.subtitle || "Introduce tus datos para continuar.";

  return (
    <div
      className="
        min-h-screen
        w-full
        bg-secondary
        bg-radial-[at_50%_20%]
        from-primary/15
        via-secondary
        to-secondary
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-10
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >
          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center">
            <Link
              to="/"
              className="text-primary uppercase tracking-[0.25em] text-sm font-bold hover:opacity-80 transition-opacity w-fit"
            >
              ArenaHub Platform
            </Link>

            <h1
              className="
                mt-6
                text-6xl
                font-black
                uppercase
                leading-[0.9]
                xl:text-8xl
                text-white
              "
            >
              Reserva.
              <br />
              Trabaja.
              <br />
              Compite.
            </h1>

            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Gestiona canchas deportivas, coworking y espacios corporativos desde una única
              plataforma.
            </p>
          </div>

          {/* Form Side */}
          <div className="flex items-center justify-center">
            <div
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-border/40
                bg-slate-800
                p-8
                backdrop-blur-xl
              "
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black uppercase text-white">{title}</h2>

                <p className="mt-3 text-muted-foreground">{subtitle}</p>
              </div>

              {/* El formulario correspondiente se inyecta aquí */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
