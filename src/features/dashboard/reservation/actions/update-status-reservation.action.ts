import arenaApi from "@/api/arenahub-api";
import type { Reservation, ReservationStatus } from "@/interfaces/entities/reservation.entity";

export const updateStatusReservationAction = async (
  reservationId: string,
  status: ReservationStatus,
): Promise<Reservation> => {
  const { data } = await arenaApi.patch(`/api/v1/reservations/${reservationId}`, {
    status,
  });

  return data;
};
