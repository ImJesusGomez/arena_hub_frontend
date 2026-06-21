import { useQuery } from "@tanstack/react-query";
import { getMyReservationsAction } from "../actions/get-my-reservations.action";

export const useGetMyReservations = () => {
  return useQuery({
    queryKey: ["my-reservations"],
    queryFn: getMyReservationsAction,
    staleTime: 1000 * 60 * 5,
  });
};
