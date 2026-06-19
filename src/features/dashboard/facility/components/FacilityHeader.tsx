import { Button } from "@/components/ui/button";
import { ADMIN_ROLES } from "@/interfaces/entities/role.entity";
import type { User } from "@/interfaces/entities/user.entity";
import { useAuthStore } from "@/store/auth.store";
import { FacilitySearch } from "./FacilitySearch";
import { useState } from "react";
import type { FacilityFilters } from "../actions/get-facilities.action";

export const FacilityHeader = () => {
  const user: User | null = useAuthStore((state) => state.user);

  const [filters, setFilters] = useState<FacilityFilters>({
    page: 0,
    size: 10,
    sortBy: "name",
    sortDir: "asc",
  });

  if (!user) return <p>Cargando...</p>;

  const isAdmin: boolean = user.roles.some((role) => ADMIN_ROLES.includes(role.name));

  return (
    <>
      <div className="flex gap-10">
        <FacilitySearch
          filters={filters}
          onFiltersChange={setFilters}
          onClear={() =>
            setFilters({
              page: 0,
              size: 10,
              sortBy: "name",
              sortDir: "asc",
            })
          }
        />
        {isAdmin && <Button>Nuevo Espacio</Button>}
      </div>
    </>
  );
};
