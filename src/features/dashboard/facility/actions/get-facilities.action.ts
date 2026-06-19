import arenaApi from "@/api/arenahub-api";
import type { Facilities } from "@/interfaces/responses/facilities.response";

export interface FacilityFilters {
  name?: string;
  minCapacity?: number;
  maxCapacity?: number;
  minHourlyRate?: number;
  maxHourlyRate?: number;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}

export const getFacilitiesAction = async (filters?: FacilityFilters): Promise<Facilities> => {
  const { data } = await arenaApi.get("/api/v1/facilities", { params: filters });

  return data;
};
