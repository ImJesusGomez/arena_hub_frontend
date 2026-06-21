import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReservationFilters } from "../actions/get-reservations.action";
import type { ReservationStatus } from "@/interfaces/entities/reservation.entity";
import { Button } from "@/components/ui/button";

interface Props {
  filters: ReservationFilters;
  onFiltersChange: (filters: ReservationFilters) => void;
}

export const ReservationsFilters = ({ filters, onFiltersChange }: Props) => {
  return (
    <>
      <Card>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <Input
            type="date"
            value={filters.startDate ?? ""}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                startDate: e.target.value,
              })
            }
          />

          <Input
            type="date"
            value={filters.endDate ?? ""}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                endDate: e.target.value,
              })
            }
          />

          <Select
            value={filters.status}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                status: value as ReservationStatus,
                page: 0,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="CONFIRMED">Confirmada</SelectItem>

              <SelectItem value="CANCELLED">Cancelada</SelectItem>

              <SelectItem value="COMPLETED">Completada</SelectItem>

              <SelectItem value="NO_SHOW">No asistió</SelectItem>
            </SelectContent>

            <Button
              variant="outline"
              className="hover:bg-gray-200/50 hover:text-primary"
              onClick={() =>
                onFiltersChange({
                  page: 0,
                  size: 10,
                  sortBy: "date",
                  sortDir: "desc",
                })
              }
            >
              Limpiar Filtros
            </Button>
          </Select>
        </CardContent>
      </Card>
    </>
  );
};
