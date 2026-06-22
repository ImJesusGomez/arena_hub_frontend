import { WaitlistList } from "@/features/dashboard/waitlist/components/WaitlistList";

export const WaitlistPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Lista de Espera</h1>

        <p className="text-muted-foreground">
          Consulta los espacios para los que estás esperando disponibilidad.
        </p>
      </div>

      <WaitlistList />
    </div>
  );
};
