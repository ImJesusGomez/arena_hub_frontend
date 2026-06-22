import arenaApi from "@/api/arenahub-api";

export const leaveWaitlistAction = async (waitlistId: string) => {
  const { data } = await arenaApi.delete(`/api/v1/waitlist/${waitlistId}`);

  return data;
};
