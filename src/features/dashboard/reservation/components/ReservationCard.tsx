import { Calendar, Clock, MapPin, CheckCircle, Trophy, XCircle } from "lucide-react";

import type { Reservation } from "@/interfaces/entities/reservation.entity";

interface Props {
  reservation: Reservation;
  onClick: () => void;
}

export const ReservationCard = ({ reservation, onClick }: Props) => {
  const statusConfig = {
    CONFIRMED: {
      label: "Confirmada",
      color: "bg-green-100 text-green-700",
      icon: CheckCircle,
    },
    CANCELLED: {
      label: "Cancelada",
      color: "bg-red-100 text-red-700",
      icon: XCircle,
    },
    COMPLETED: {
      label: "Completada",
      color: "bg-blue-100 text-blue-700",
      icon: Trophy,
    },
    NO_SHOW: {
      label: "No asistió",
      color: "bg-gray-100 text-gray-700",
      icon: XCircle,
    },
  };

  const config = statusConfig[reservation.status];
  const StatusIcon = config.icon;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl border bg-card p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-lg">{reservation.facility.name}</h3>

          <p className="text-sm text-muted-foreground">{reservation.facility.spaceType}</p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ml-2 ${config.color}`}
        >
          <StatusIcon className="size-4" />
          {config.label}
        </div>
      </div>

      <div className="my-4 border-t" />

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-muted-foreground" />

          {new Date(reservation.date).toLocaleDateString("es-MX")}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="size-4 text-muted-foreground" />
          {reservation.startTime} - {reservation.endTime}
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-muted-foreground" />

          {reservation.facility.locationDetails}
        </div>
      </div>
    </div>
  );
};
