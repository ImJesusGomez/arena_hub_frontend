import { useMutation } from "@tanstack/react-query";
import {
  createReservationAction,
  type ReservationCreateRequest,
} from "../actions/create-reservation.action";
import { toast } from "sonner";
import { queryClient } from "@/ArenaHub";

export const useCreateReservation = () => {
  return useMutation({
    mutationFn: (request: ReservationCreateRequest) => createReservationAction(request),
    onSuccess: () => {
      toast.success("Se creó la reservación con éxito.");
      queryClient.invalidateQueries({
        queryKey: ["facilities"],
        exact: false,
      });
    },
    onError: () => {
      toast.error("No se pudo crear la reservación.");
    },
  });
};
