import { MapPin, Users, Wallet, Clock, CheckCircle, XCircle } from "lucide-react";

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

import type { Facility } from "@/interfaces/entities/facility.entity";
import { useForm } from "react-hook-form";
import { useCreateReservation } from "../../reservation/hooks/useCreateReservation";
import { useState } from "react";
import { useCreateWaitlist } from "../../waitlist/hooks/useCreateWaitlist";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  facility: Facility;
}

interface ReservationForm {
  date: string;
  startTime: string;
  endTime: string;
}

export const FacilityInfo = ({ open, onOpenChange, facility }: Props) => {
  const image =
    facility.images.length > 0
      ? facility.images[0].url
      : "https://media.istockphoto.com/id/1980276924/es/vector/sin-elemento-gr%C3%A1fico-en-miniatura-de-la-foto-no-se-ha-encontrado-ninguna-imagen-o-est%C3%A1.jpg?s=612x612&w=0&k=20&c=artWlQoi5R1edWQBv9LfzeLXupOcH_alZnMgvXdYkF4=";

  const DAYS_ES: Record<string, string> = {
    MONDAY: "Lunes",
    TUESDAY: "Martes",
    WEDNESDAY: "Miércoles",
    THURSDAY: "Jueves",
    FRIDAY: "Viernes",
    SATURDAY: "Sábado",
    SUNDAY: "Domingo",
  };

  const formatDay = (day: string) => DAYS_ES[day] ?? day;

  // Crear la reservación
  const [showReservationForm, setShowReservationForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationForm>();

  const { mutateAsync: createReservation } = useCreateReservation();

  const onSubmit = async (data: ReservationForm) => {
    try {
      await createReservation({
        facilityId: facility.id,
        date: new Date(data.date),
        startTime: data.startTime,
        endTime: data.endTime,
      });

      onOpenChange(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response?.status === 409) {
        setWaitlistData(data);
        setShowWaitlistOption(true);
        return;
      }

      console.error(error);
    }
  };

  // Waitlist
  const [showWaitlistOption, setShowWaitlistOption] = useState(false);
  const [waitlistData, setWaitlistData] = useState<ReservationForm | null>(null);

  const { mutateAsync: joinWaitlist } = useCreateWaitlist();

  const handleJoinWaitlist = async () => {
    if (!waitlistData) return;

    try {
      await joinWaitlist({
        facilityId: facility.id,
        date: new Date(waitlistData.date),
        startTime: waitlistData.startTime,
        endTime: waitlistData.endTime,
      });

      setShowWaitlistOption(false);

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-2xl">
        <DrawerHeader>
          <DrawerTitle>{facility.name}</DrawerTitle>
          <DrawerDescription>{facility.spaceType}</DrawerDescription>
        </DrawerHeader>

        <div className="no-scrollbar flex-1 overflow-y-auto">
          {/* Imagen principal */}
          <div className="px-4">
            <div className="overflow-hidden rounded-xl">
              <img src={image} alt={facility.name} className="h-64 w-full object-cover" />
            </div>
          </div>

          {/* Información */}
          <div className="space-y-6 p-4">
            {/* Estado */}
            <div className="flex items-center gap-2">
              {facility.available ? (
                <>
                  <CheckCircle className="size-5 text-green-500" />
                  <span className="font-medium text-green-600">Disponible para reservas</span>
                </>
              ) : (
                <>
                  <XCircle className="size-5 text-red-500" />
                  <span className="font-medium text-red-600">No disponible</span>
                </>
              )}
            </div>

            {/* Datos rápidos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="size-4" />
                  <span className="text-sm">Capacidad</span>
                </div>

                <p className="mt-2 text-lg font-semibold">{facility.maxCapacity} personas</p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Wallet className="size-4" />
                  <span className="text-sm">Precio</span>
                </div>

                <p className="mt-2 text-lg font-semibold">
                  ${facility.hourlyRate.toFixed(2)} / hora
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4" />
                  <span className="text-sm">Reserva mínima</span>
                </div>

                <p className="mt-2 text-lg font-semibold">{facility.minReservationTime} min</p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  <span className="text-sm">Ubicación</span>
                </div>

                <p className="mt-2 text-sm">{facility.locationDetails}</p>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Descripción</h3>

              <p className="text-sm leading-6 text-muted-foreground">{facility.description}</p>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Horarios disponibles</h3>

              <div className="space-y-2">
                {facility.facilitySchedules.length > 0 ? (
                  facility.facilitySchedules.map((schedule) => (
                    <div
                      key={schedule.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <span>{formatDay(schedule.day)}</span>

                      <span className="font-medium">
                        {schedule.startTime} - {schedule.endTime}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No hay horarios registrados.</p>
                )}
              </div>
            </div>

            {/* Formulario de Reservación */}
            <div className="bg-gray-200/50 rounded-sm">
              {showReservationForm && (
                <div className="rounded-xl border p-4 space-y-4">
                  <h3 className="text-lg font-semibold">Crear reservación</h3>

                  <div>
                    <label className="text-sm font-medium">Fecha</label>

                    <input
                      type="date"
                      className="w-full rounded-md border p-2 mt-1"
                      {...register("date", {
                        required: "La fecha es requerida",
                      })}
                    />

                    {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Hora de inicio</label>

                    <input
                      type="time"
                      className="w-full rounded-md border p-2 mt-1"
                      {...register("startTime", {
                        required: "La hora inicial es requerida",
                      })}
                    />

                    {errors.startTime && (
                      <p className="text-sm text-red-500">{errors.startTime.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Hora de finalización</label>

                    <input
                      type="time"
                      className="w-full rounded-md border p-2 mt-1"
                      {...register("endTime", {
                        required: "La hora final es requerida",
                      })}
                    />

                    {errors.endTime && (
                      <p className="text-sm text-red-500">{errors.endTime.message}</p>
                    )}
                  </div>

                  <Button className="w-full" onClick={handleSubmit(onSubmit)}>
                    Confirmar reservación
                  </Button>
                </div>
              )}
              {showWaitlistOption && (
                <div className="rounded-xl border border-amber-300 bg-amber-50 p-4">
                  <h4 className="font-semibold">Horario ocupado</h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Este horario ya fue reservado. Puedes unirte a la lista de espera.
                  </p>

                  <Button className="mt-4 w-full" variant="secondary" onClick={handleJoinWaitlist}>
                    Entrar a lista de espera
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <DrawerFooter>
          <Button
            size="lg"
            onClick={() => setShowReservationForm(true)}
            disabled={showReservationForm}
          >
            Reservar
          </Button>

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
