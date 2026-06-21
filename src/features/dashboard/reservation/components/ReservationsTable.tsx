import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetReservations } from "../hooks/useGetReservations";
import { ReservationStatusBadge } from "./ReservationStatusBadge";
import { Button } from "@/components/ui/button";
import type { ReservationFilters } from "../actions/get-reservations.action";
import type { Reservation } from "@/interfaces/entities/reservation.entity";
import { useState } from "react";
import { ReservationUpdateStatus } from "./ReservationUpdateStatus";

interface Props {
  filters: ReservationFilters;
}

export const ReservationsTable = ({ filters }: Props) => {
  const { data, isLoading, isError } = useGetReservations(filters);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  if (isLoading) {
    return <p>Cargando reservaciones...</p>;
  }

  if (isError) {
    return <p>Error al cargar reservaciones.</p>;
  }

  if (!data?.content.length) {
    return <p>No se encontraron reservaciones.</p>;
  }

  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Usuario</TableHead>
            <TableHead>Espacio</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Horario</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.content.map((reservation) => (
            <TableRow key={reservation.id} className="hover:bg-gray-200/50">
              <TableCell>
                {reservation.user.firstName} {reservation.user.lastName}
              </TableCell>

              <TableCell>{reservation.facility.name}</TableCell>

              <TableCell>{new Date(reservation.date).toLocaleDateString("es-MX")}</TableCell>

              <TableCell>
                {reservation.startTime} - {reservation.endTime}
              </TableCell>

              <TableCell>
                <ReservationStatusBadge status={reservation.status} />
              </TableCell>

              <TableCell className="text-right">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedReservation(reservation)}
                  className="hover:bg-gray-200 hover:text-primary"
                >
                  Editar Estado
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedReservation && (
        <ReservationUpdateStatus
          reservation={selectedReservation}
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedReservation(null);
            }
          }}
        />
      )}
    </div>
  );
};
