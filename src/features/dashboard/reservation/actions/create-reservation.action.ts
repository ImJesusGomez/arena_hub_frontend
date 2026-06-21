import arenaApi from "@/api/arenahub-api";
import type { Reservation } from "@/interfaces/entities/reservation.entity";

export interface ReservationCreateRequest {
  date: Date;
  startTime: string;
  endTime: string;
  facilityId: string;
}

export const createReservationAction = async (
  request: ReservationCreateRequest,
): Promise<Reservation> => {
  const { data } = await arenaApi.post("/api/v1/reservations", request);

  return data;
};
