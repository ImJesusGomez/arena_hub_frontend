import type { Facility } from "../entities/facility.entity";
import type { Page } from "./page.response";

export interface Facilities {
  content: Facility[];
  page: Page;
}
