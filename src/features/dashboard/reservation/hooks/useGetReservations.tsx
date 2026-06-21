import { useQuery } from "@tanstack/react-query";
import { getReservationsAction, type ReservationFilters } from "../actions/get-reservations.action";

export const useGetReservations = (filters?: ReservationFilters) => {
  return useQuery({
    queryKey: ["reservations", filters],
    queryFn: () => getReservationsAction(filters),
    staleTime: 1000 * 60 * 5,
  });
};
