import { useMutation } from "@tanstack/react-query";
import {
  createFacilityAction,
  type FacilityCreateRequest,
} from "../actions/create-facility.action";
import { toast } from "sonner";
import { queryClient } from "@/ArenaHub";

export const useCreateFacility = () => {
  return useMutation({
    mutationFn: (request: FacilityCreateRequest) => createFacilityAction(request),
    onSuccess: () => {
      toast.success("Espacio creado correctamente");

      queryClient.invalidateQueries({
        queryKey: ["facilities"],
        exact: false,
      });
    },
    onError: () => {
      toast.error("No se puedo crear el espacio");
    },
  });
};
