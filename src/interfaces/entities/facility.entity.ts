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
  images: string[];
}

export interface FacilitySchedule {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  available: boolean;
}
