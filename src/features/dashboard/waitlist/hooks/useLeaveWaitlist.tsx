import { useMutation } from "@tanstack/react-query";
import { leaveWaitlistAction } from "../actions/leave-waitlist.action";
import { toast } from "sonner";
import { queryClient } from "@/ArenaHub";

export const useLeaveWaitlist = () => {
  return useMutation({
    mutationFn: (waitlistId: string) => leaveWaitlistAction(waitlistId),
    onSuccess: () => {
      toast.success("Haz salido de la lista de espera");

      queryClient.invalidateQueries({
        queryKey: ["my-waitlist"],
      });
    },
    onError: () => {
      toast.error("Hubo un error");
    },
  });
};
