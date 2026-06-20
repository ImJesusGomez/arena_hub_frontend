import { MapPin, Users, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Facility } from "@/interfaces/entities/facility.entity";

interface FacilityCardProps {
  facility: Facility;
  onViewDetails: () => void;
}

export const FacilityCard = ({ facility, onViewDetails }: FacilityCardProps) => {
  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden py-0 gap-0 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={
              facility.images.length === 0
                ? "https://media.istockphoto.com/id/1980276924/es/vector/sin-elemento-gr%C3%A1fico-en-miniatura-de-la-foto-no-se-ha-encontrado-ninguna-imagen-o-est%C3%A1.jpg?s=612x612&w=0&k=20&c=artWlQoi5R1edWQBv9LfzeLXupOcH_alZnMgvXdYkF4="
                : facility.images[0].url
            }
            alt={facility.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* spaceType Badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
              {facility.spaceType}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex flex-1 flex-col p-5">
          <div>
            <h3 className="text-xl font-bold leading-tight line-clamp-2 min-h-14">
              {facility.name}
            </h3>

            <div className="mt-2 flex items-start gap-2 text-muted-foreground min-h-6">
              <MapPin className="h-4 w-4 shrink-0 translate-y-0.5 text-xs" />
              <span className="line-clamp-1">{facility.locationDetails}</span>
            </div>
          </div>

          <div className="flex-1" />

          <div className="my-4 border-t" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-xs">{facility.maxCapacity} Personas</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <Wallet className="h-5 w-5 text-muted-foreground" />

              <span className="text-xs font-bold text-primary">
                ${facility.hourlyRate.toFixed(2)}
              </span>

              <span className="text-muted-foreground">/hr</span>
            </div>
          </div>

          <div className="my-4 border-t" />

          <Button className="w-full" size="lg" onClick={onViewDetails}>
            Ver Disponibilidad
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
