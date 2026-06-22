import arenaApi from "@/api/arenahub-api";
import type { Waitlists } from "@/interfaces/responses/waitlists.response";

export const getMyWaitlistAction = async (): Promise<Waitlists> => {
  const { data } = await arenaApi.get("/api/v1/waitlist/me");

  return data;
};
