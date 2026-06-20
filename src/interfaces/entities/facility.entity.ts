import type { FacilityImage } from "./facility-image.entity";
import type { FacilitySchedule } from "./facility-schedule.entity";

export interface Facility {
  id: string;
  name: string;
  spaceType: string;
  description: string;
  maxCapacity: number;
  locationDetails: string;
  minReservationTime: number;
  hourlyRate: number;
  available: boolean;
  facilitySchedules: FacilitySchedule[];
  images: FacilityImage[];
}
