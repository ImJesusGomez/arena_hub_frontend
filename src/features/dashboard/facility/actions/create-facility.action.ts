import arenaApi from "@/api/arenahub-api";
import type { Facility } from "@/interfaces/entities/facility.entity";

export interface FacilityCreateRequest {
  name: string;
  spaceType: "SPORTS" | "CORPORATE" | "COWORKING";
  description: string;
  maxCapacity: number;
  locationDetails: string;
  minReservationTime: number;
  hourlyRate: number;
  available: boolean;
  facilitySchedules: FacilityScheduleRequest[];
}

export interface FacilityScheduleRequest {
  day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

  startTime: string;
  endTime: string;
}

export const createFacilityAction = async (request: FacilityCreateRequest): Promise<Facility> => {
  const { data } = await arenaApi.post("/api/v1/facilities", request);

  return data;
};
