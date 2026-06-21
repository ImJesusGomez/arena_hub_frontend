import arenaApi from "@/api/arenahub-api";
import type { Reservation } from "@/interfaces/entities/reservation.entity";

export const getMyReservationsAction = async (): Promise<Reservation[]> => {
  const { data } = await arenaApi.get("/api/v1/reservations/my-reservations");

  return data;
};
