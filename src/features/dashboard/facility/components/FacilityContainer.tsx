import type { Facility } from "@/interfaces/entities/facility.entity";
import type { FacilityFilters } from "../actions/get-facilities.action";
import { useGetFacilities } from "../hooks/useGetFacilities";
import { FacilityCard } from "./FacilityCard";

interface Props {
  filters: FacilityFilters;
  onFacilitySelect: (facility: Facility) => void;
}

export const FacilityContainer = ({ filters, onFacilitySelect }: Props) => {
  const { data: facilities, isLoading, isError } = useGetFacilities(filters);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Error al cargar instalaciones</p>;
  }

  if (!facilities?.content.length) {
    return <p>No se encontraron instalaciones.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {facilities.content.map((facility) => (
        <FacilityCard
          key={facility.id}
          facility={facility}
          onViewDetails={() => onFacilitySelect(facility)}
        />
      ))}
    </div>
  );
};
