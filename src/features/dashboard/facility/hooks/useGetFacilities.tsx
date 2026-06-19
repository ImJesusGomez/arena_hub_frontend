import { useQuery } from "@tanstack/react-query";
import { getFacilitiesAction, type FacilityFilters } from "../actions/get-facilities.action";

export const useGetFacilities = (filters?: FacilityFilters) => {
  return useQuery({
    queryKey: ["facilities", { filters }],
    queryFn: () => getFacilitiesAction(filters),
    staleTime: 1000 * 60 * 5,
  });
};
