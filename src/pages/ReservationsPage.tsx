import type { ReservationFilters } from "@/features/dashboard/reservation/actions/get-reservations.action";
import { ReservationsFilters } from "@/features/dashboard/reservation/components/ReservationsFilters";
import { ReservationsTable } from "@/features/dashboard/reservation/components/ReservationsTable";
import { useState } from "react";

export const ReservationsPage = () => {
  const [filters, setFilters] = useState<ReservationFilters>({
    page: 0,
    size: 10,
    sortBy: "date",
    sortDir: "desc",
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reservaciones</h1>

        <p className="text-muted-foreground">Gestiona las reservaciones del sistema.</p>
      </div>

      <ReservationsFilters filters={filters} onFiltersChange={setFilters} />

      <ReservationsTable filters={filters} />
    </div>
  );
};
