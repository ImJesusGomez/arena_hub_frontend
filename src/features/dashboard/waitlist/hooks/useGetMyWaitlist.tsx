import { useQuery } from "@tanstack/react-query";
import { getMyWaitlistAction } from "../actions/get-my-waitlist.action";

export const useGetMyWaitlist = () => {
  return useQuery({
    queryKey: ["my-waitlist"],
    queryFn: getMyWaitlistAction,
    staleTime: 1000 * 60 * 5,
  });
};
