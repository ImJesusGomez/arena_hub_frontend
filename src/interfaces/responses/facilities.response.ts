import type { Facility } from "../entities/facility.entity";

export interface Facilities {
  content: Facility[];
  page: Page;
}

export interface Page {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}
