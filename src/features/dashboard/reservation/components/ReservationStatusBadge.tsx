import type { ReservationStatus } from "@/interfaces/entities/reservation.entity";

interface Props {
  status: ReservationStatus;
}

export const ReservationStatusBadge = ({ status }: Props) => {
  const variants = {
    CONFIRMED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
    COMPLETED: "bg-blue-100 text-blue-700",
    NO_SHOW: "bg-gray-100 text-gray-700",
  };

  const labels = {
    CONFIRMED: "Confirmada",
    CANCELLED: "Cancelada",
    COMPLETED: "Completada",
    NO_SHOW: "No asistió",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${variants[status]}`}>
      {labels[status]}
    </span>
  );
};
