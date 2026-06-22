import { Calendar, Clock, Users, Timer } from "lucide-react";

import type { Waitlist } from "@/interfaces/entities/waitlist.entity";
import { Progress } from "@/components/ui/progress";
import { useLeaveWaitlist } from "../hooks/useLeaveWaitlist";
import { Button } from "@/components/ui/button";

interface Props {
  waitlist: Waitlist;
}

export const WaitlistCard = ({ waitlist }: Props) => {
  const { mutateAsync, isPending } = useLeaveWaitlist();

  const handleLeave = async () => {
    try {
      await mutateAsync(waitlist.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Lista de Espera</h3>

        <div className="mt-4">
          <div className="mb-2 flex justify-between text-sm">
            <span>Posición</span>
            <span>#{waitlist.position}</span>
          </div>

          <Progress value={Math.max(5, 100 - waitlist.position * 10)} />
        </div>
      </div>

      <div className="my-4 border-t" />

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-muted-foreground" />

          {new Date(waitlist.date).toLocaleDateString("es-MX")}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="size-4 text-muted-foreground" />
          {waitlist.startTime} - {waitlist.endTime}
        </div>

        <div className="flex items-center gap-2">
          <Users className="size-4 text-muted-foreground" />
          Posición {waitlist.position}
        </div>

        <div className="flex items-center gap-2">
          <Timer className="size-4 text-muted-foreground" />
          Registrado el {new Date(waitlist.registeredAt).toLocaleDateString("es-MX")}
        </div>

        <div className="mt-5">
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLeave}
            disabled={isPending}
          >
            Salir de la lista de espera
          </Button>
        </div>
      </div>
    </div>
  );
};
