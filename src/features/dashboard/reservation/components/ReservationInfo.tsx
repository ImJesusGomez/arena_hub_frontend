import { Calendar, Clock, MapPin, Users, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import type { Reservation } from "@/interfaces/entities/reservation.entity";

import { ReservationStatusBadge } from "./ReservationStatusBadge";
import { useUpdateReservation } from "../hooks/useUpdateReservation";

interface Props {
  reservation: Reservation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReservationInfo = ({ reservation, open, onOpenChange }: Props) => {
  const { mutateAsync, isPending } = useUpdateReservation();

  const handleCancel = async () => {
    try {
      await mutateAsync({
        reservationId: reservation.id,
        status: "CANCELLED",
      });

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-xl">
        <DrawerHeader>
          <DrawerTitle>{reservation.facility.name}</DrawerTitle>

          <DrawerDescription>Detalles de la reservación</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 space-y-6 overflow-y-auto px-4">
          <div>
            <ReservationStatusBadge status={reservation.status} />
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="size-4" />
                Fecha
              </div>

              <p className="mt-2 font-medium">
                {new Date(reservation.date).toLocaleDateString("es-MX")}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4" />
                Horario
              </div>

              <p className="mt-2 font-medium">
                {reservation.startTime} - {reservation.endTime}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" />
                Ubicación
              </div>

              <p className="mt-2 font-medium">{reservation.facility.locationDetails}</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="size-4" />
                Capacidad
              </div>

              <p className="mt-2 font-medium">{reservation.facility.maxCapacity} personas</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Wallet className="size-4" />
                Precio
              </div>

              <p className="mt-2 font-medium">${reservation.facility.hourlyRate}/hora</p>
            </div>
          </div>
        </div>

        <DrawerFooter>
          {reservation.status === "CONFIRMED" && (
            <Button
              variant="destructive"
              onClick={handleCancel}
              disabled={isPending}
              className="hover:bg-gray-200/50 hover:bg-text-primary"
            >
              Cancelar reservación
            </Button>
          )}

          <DrawerClose asChild>
            <Button variant="outline" className="hover:bg-gray-200/50 hover:text-primary">
              Cerrar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
