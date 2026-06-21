import { useMutation } from "@tanstack/react-query";
import { updateStatusReservationAction } from "../actions/update-status-reservation.action";
import type { ReservationStatus } from "@/interfaces/entities/reservation.entity";
import { toast } from "sonner";
import { queryClient } from "@/ArenaHub";

export const useUpdateReservation = () => {
  return useMutation({
    mutationFn: ({ reservationId, status }: { reservationId: string; status: ReservationStatus }) =>
      updateStatusReservationAction(reservationId, status),

    onSuccess: () => {
      toast.success("Se actualizó correctamente");

      queryClient.invalidateQueries({
        queryKey: ["reservations"],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: ["my-reservations"],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: ["facilities"],
        exact: false,
      });
    },

    onError: () => {
      toast.error("No se pudo actualizar");
    },
  });
};
