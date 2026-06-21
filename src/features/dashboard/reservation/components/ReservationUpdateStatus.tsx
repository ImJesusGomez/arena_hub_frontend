import type { Reservation, ReservationStatus } from "@/interfaces/entities/reservation.entity";

import { useState } from "react";

import { useUpdateReservation } from "../hooks/useUpdateReservation";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  reservation: Reservation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReservationUpdateStatus = ({ reservation, open, onOpenChange }: Props) => {
  const [status, setStatus] = useState<ReservationStatus>(reservation.status);

  const { mutateAsync, isPending } = useUpdateReservation();

  const handleSave = async () => {
    try {
      await mutateAsync({
        reservationId: reservation.id,
        status,
      });

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actualizar estado</DialogTitle>

          <DialogDescription>Cambia el estado de la reservación.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Usuario</p>

            <p className="font-medium">
              {reservation.user.firstName} {reservation.user.lastName}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Espacio</p>

            <p className="font-medium">{reservation.facility.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Estado</p>

            <Select value={status} onValueChange={(value) => setStatus(value as ReservationStatus)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="CONFIRMED">Confirmada</SelectItem>

                <SelectItem value="COMPLETED">Completada</SelectItem>

                <SelectItem value="CANCELLED">Cancelada</SelectItem>

                <SelectItem value="NO_SHOW">No asistió</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="bg-gray-100/50">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="hover:bg-gray-100 hover:text-red-400"
          >
            Cancelar
          </Button>

          <Button onClick={handleSave} disabled={isPending}>
            {isPending ? "Guardando..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
