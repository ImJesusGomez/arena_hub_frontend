export interface Reservation {
  id: string;
  date: string;
  status: ReservationStatus;
  createdAt: Date;
  startTime: string;
  endTime: string;
  observations: string;
  user: UserSummary;
  facility: FacilitySummary;
}

export type ReservationStatus = "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";

export interface FacilitySummary {
  id: string;
  name: string;
  spaceType: string;
  maxCapacity: number;
  locationDetails: string;
  minReservationTime: number;
  hourlyRate: number;
}

export interface UserSummary {
  id: string;
  firstName: string;
  lastName: string;
}
