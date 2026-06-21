import arenaApi from "@/api/arenahub-api";
import type { ReservationStatus } from "@/interfaces/entities/reservation.entity";
import type { Reservations } from "@/interfaces/responses/reservations.response";

export interface ReservationFilters {
  startDate?: string;
  endDate?: string;
  status?: ReservationStatus;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}

export const getReservationsAction = async (
  filters?: ReservationFilters,
): Promise<Reservations> => {
  const { data } = await arenaApi.get("/api/v1/reservations", { params: filters });

  return data;
};
