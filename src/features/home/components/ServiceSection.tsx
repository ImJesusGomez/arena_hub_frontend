import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <div className="min-h-screen w-full bg-secondary" id="service">
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <span className="text-primary text-lg font-medium uppercase tracking-[0.2em]">
            Servicios Integrales
          </span>

          <h2
            className="
          mt-6
            text-5xl
            font-black
            uppercase
            leading-none
            sm:text-4xl
            md:text-5xl
            lg:text-7xl
            text-white
          "
          >
            Espacios para cada necesidad
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            title="Coworking Hub"
            description="Fusiona deporte y productividad en nuestros espacios de trabajo dinámicos."
            image="/coworking.jpg"
          />

          <ServiceCard
            title="Canchas Premium"
            description="Reserva espacios deportivos profesionales con disponibilidad en tiempo real."
            image="/cancha.jpg"
          />

          <ServiceCard
            title="Salas Privadas"
            description="Espacios equipados para reuniones, entrevistas y eventos."
            image="/salaprivada.jpg"
          />
        </div>
      </section>
    </div>
  );
};
