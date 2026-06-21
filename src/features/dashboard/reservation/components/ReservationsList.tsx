import { useState } from "react";

import type { Reservation } from "@/interfaces/entities/reservation.entity";

import { useGetMyReservations } from "../hooks/useGetMyReservations";

import { ReservationCard } from "./ReservationCard";
import { ReservationInfo } from "./ReservationInfo";

export const ReservationsList = () => {
  const { data: reservations, isLoading, isError } = useGetMyReservations();

  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  if (isLoading) {
    return <p>Cargando reservaciones...</p>;
  }

  if (isError) {
    return <p>Error al cargar reservaciones.</p>;
  }

  if (!reservations?.length) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center">
        <h3 className="text-lg font-semibold">No tienes reservaciones</h3>

        <p className="mt-2 text-muted-foreground">
          Cuando realices una reservación aparecerá aquí.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            onClick={() => setSelectedReservation(reservation)}
          />
        ))}
      </div>

      {selectedReservation && (
        <ReservationInfo
          reservation={selectedReservation}
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedReservation(null);
            }
          }}
        />
      )}
    </>
  );
};
