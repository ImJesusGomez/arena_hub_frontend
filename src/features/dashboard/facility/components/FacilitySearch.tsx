import { Search, SlidersHorizontal } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import type { FacilityFilters } from "../actions/get-facilities.action";

interface Props {
  filters: FacilityFilters;
  onFiltersChange: (filters: FacilityFilters) => void;
  onClear: () => void;
}

export const FacilitySearch = ({ filters, onFiltersChange, onClear }: Props) => {
  const [name, setName] = useState(filters.name ?? "");
  const [debouncedName] = useDebounce(name, 500);

  // Usamos una referencia para tener los filtros actualizados sin disparar el efecto
  const filtersRef = useRef(filters);

  // Mantener la referencia al día en cada render
  useEffect(() => {
    filtersRef.current = filters;
  });

  useEffect(() => {
    onFiltersChange({
      ...filtersRef.current,
      name: debouncedName,
      page: 0,
    });
  }, [debouncedName, onFiltersChange]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search
            className="
              absolute
              left-3
              top-1/2
              size-4
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);

              onFiltersChange({
                ...filters,
                name: e.target.value,
                page: 0,
              });
            }}
            placeholder="Buscar instalaciones..."
            className="pl-10"
          />
        </div>

        <MobileFilters filters={filters} onFiltersChange={onFiltersChange} onClear={onClear} />
      </div>

      {/* Desktop Filters */}

      <Card className="hidden md:block">
        <CardContent className="grid gap-4 p-6 lg:grid-cols-6">
          <div>
            <Label className="mb-2">Capacidad mínima</Label>

            <Input
              type="number"
              value={filters.minCapacity ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  minCapacity: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label className="mb-2">Capacidad máxima</Label>

            <Input
              type="number"
              value={filters.maxCapacity ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  maxCapacity: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label className="mb-2">Precio mínimo</Label>

            <Input
              type="number"
              value={filters.minHourlyRate ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  minHourlyRate: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label className="mb-2">Precio máximo</Label>

            <Input
              type="number"
              value={filters.maxHourlyRate ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  maxHourlyRate: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label className="mb-2">Ordenar por</Label>

            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortBy: value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="name">Nombre</SelectItem>

                <SelectItem value="capacity">Capacidad</SelectItem>

                <SelectItem value="hourlyRate">Precio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2">Dirección</Label>

            <Select
              value={filters.sortDir}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortDir: value as "asc" | "desc",
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="asc">Ascendente</SelectItem>

                <SelectItem value="desc">Descendente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={onClear}
          className="hover:bg-gray-100/50 hover:text-primary"
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
};

function MobileFilters({ filters, onFiltersChange, onClear }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <SlidersHorizontal className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="overflow-y-auto">
        <div className="space-y-6 py-6">
          <div>
            <h2 className="text-lg font-semibold">Filtros</h2>

            <p className="text-sm text-muted-foreground">Refina la búsqueda de instalaciones.</p>
          </div>

          <div className="space-y-2">
            <Label>Capacidad mínima</Label>

            <Input
              type="number"
              value={filters.minCapacity ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  minCapacity: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Capacidad máxima</Label>

            <Input
              type="number"
              value={filters.maxCapacity ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  maxCapacity: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Precio mínimo por hora</Label>

            <Input
              type="number"
              value={filters.minHourlyRate ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  minHourlyRate: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Precio máximo por hora</Label>

            <Input
              type="number"
              value={filters.maxHourlyRate ?? ""}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  maxHourlyRate: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Ordenar por</Label>

            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortBy: value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="name">Nombre</SelectItem>

                <SelectItem value="capacity">Capacidad</SelectItem>

                <SelectItem value="hourlyRate">Precio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Dirección</Label>

            <Select
              value={filters.sortDir}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortDir: value as "asc" | "desc",
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="asc">Ascendente</SelectItem>

                <SelectItem value="desc">Descendente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button variant="outline" onClick={onClear}>
              Limpiar filtros
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
