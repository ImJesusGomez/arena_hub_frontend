import { useMutation } from "@tanstack/react-query";
import {
  createWaitlistAction,
  type WaitlistCreateRequest,
} from "../actions/create-waitlist.action";
import { toast } from "sonner";

export const useCreateWaitlist = () => {
  return useMutation({
    mutationFn: (request: WaitlistCreateRequest) => createWaitlistAction(request),
    onSuccess: () => {
      toast.success("Ahora estás en la lista de espera.");
    },
    onError: () => {
      toast.error("Hubo un error.");
    },
  });
};
