import type { Waitlist } from "../entities/waitlist.entity";
import type { Page } from "./page.response";

export interface Waitlists {
  content: Waitlist[];
  page: Page;
}
