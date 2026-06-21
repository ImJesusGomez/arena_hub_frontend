import { ReservationsList } from "@/features/dashboard/reservation/components/ReservationsList";

export const MyReservationsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mis Reservaciones</h1>

        <p className="text-muted-foreground">Consulta y administra tus reservas activas.</p>
      </div>

      <ReservationsList />
    </div>
  );
};
