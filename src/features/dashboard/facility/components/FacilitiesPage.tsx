import { useState } from "react";
import { FacilitySearch } from "./FacilitySearch";
import { FacilityContainer } from "./FacilityContainer";
import type { FacilityFilters } from "../actions/get-facilities.action";
import { ADMIN_ROLES } from "@/interfaces/entities/role.entity";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/button";
import { FacilityCreate } from "./FacilityCreate";
import { Plus } from "lucide-react";
import type { Facility } from "@/interfaces/entities/facility.entity";
import { FacilityInfo } from "./FacilityInfo";

export const FacilitiesPage = () => {
  const user = useAuthStore((state) => state.user);

  const [filters, setFilters] = useState<FacilityFilters>({
    page: 0,
    size: 10,
    sortBy: "name",
    sortDir: "asc",
  });

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleOpenFacility = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsInfoOpen(true);
  };

  const handleClear = () => {
    setFilters({
      page: 0,
      size: 10,
      sortBy: "name",
      sortDir: "asc",
    });
  };

  const isAdmin: boolean = user!.roles.some((role) => ADMIN_ROLES.includes(role.name));

  return (
    <div className="space-y-8">
      {isAdmin && (
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="size-4" />
          Nuevo Espacio
        </Button>
      )}
      <FacilitySearch filters={filters} onFiltersChange={setFilters} onClear={handleClear} />
      <FacilityContainer filters={filters} onFacilitySelect={handleOpenFacility} />
      <FacilityCreate open={isCreateOpen} onOpenChange={setIsCreateOpen} />
      {selectedFacility && (
        <FacilityInfo open={isInfoOpen} onOpenChange={setIsInfoOpen} facility={selectedFacility} />
      )}{" "}
    </div>
  );
};
