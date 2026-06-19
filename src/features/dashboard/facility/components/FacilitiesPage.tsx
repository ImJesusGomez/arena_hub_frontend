import { useState } from "react";
import { FacilitySearch } from "./FacilitySearch";
import { FacilityContainer } from "./FacilityContainer";
import type { FacilityFilters } from "../actions/get-facilities.action";

export const FacilitiesPage = () => {
  const [filters, setFilters] = useState<FacilityFilters>({
    page: 0,
    size: 10,
    sortBy: "name",
    sortDir: "asc",
  });

  const handleClear = () => {
    setFilters({
      page: 0,
      size: 10,
      sortBy: "name",
      sortDir: "asc",
    });
  };

  return (
    <div className="space-y-8">
      <FacilitySearch filters={filters} onFiltersChange={setFilters} onClear={handleClear} />

      <FacilityContainer filters={filters} />
    </div>
  );
};
