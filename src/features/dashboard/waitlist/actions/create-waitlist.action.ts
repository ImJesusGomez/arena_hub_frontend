import arenaApi from "@/api/arenahub-api";
import type { Waitlist } from "@/interfaces/entities/waitlist.entity";

export interface WaitlistCreateRequest {
  facilityId: string;
  date: Date;
  startTime: string;
  endTime: string;
}
export const createWaitlistAction = async (request: WaitlistCreateRequest): Promise<Waitlist> => {
  const { data } = await arenaApi.post("/api/v1/waitlist", request);

  return data;
};
