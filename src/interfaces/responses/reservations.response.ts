import type { Reservation } from "../entities/reservation.entity";
import type { Page } from "./page.response";

export interface Reservations {
  content: Reservation[];
  page: Page;
}
