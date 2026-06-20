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
import type { FacilityCreateRequest } from "../actions/create-facility.action";
import { useCreateFacility } from "../hooks/useCreateFacility";

import { Plus, Trash2 } from "lucide-react";

import { Controller, useFieldArray, useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: () => void;
}

export const FacilityCreate = ({ open, onOpenChange, onCreated }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FacilityCreateRequest>({
    defaultValues: {
      available: true,
      facilitySchedules: [
        {
          day: "MONDAY",
          startTime: "08:00",
          endTime: "18:00",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilitySchedules",
  });

  const { mutateAsync } = useCreateFacility();

  const onSubmit = async (data: FacilityCreateRequest) => {
    try {
      await mutateAsync(data);
      onOpenChange(false);
      onCreated?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-2xl">
        <DrawerHeader>
          <DrawerTitle>Nuevo espacio</DrawerTitle>
          <DrawerDescription>Completa los datos de la instalación.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto px-4">
          <form id="facility-form" className="space-y-6 pb-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Nombre */}

            <div className="space-y-2">
              <Label>Nombre</Label>

              <Input
                {...register("name", {
                  required: "El nombre es obligatorio",
                  maxLength: {
                    value: 150,
                    message: "Máximo 150 caracteres",
                  },
                })}
              />

              <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>

            {/* Tipo */}

            <div className="space-y-2">
              <Label>Tipo de espacio</Label>

              <Controller
                control={control}
                name="spaceType"
                rules={{
                  required: "Selecciona un tipo",
                }}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona..." />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="SPORTS">Deportivo</SelectItem>

                      <SelectItem value="CORPORATE">Corporativo</SelectItem>

                      <SelectItem value="COWORKING">Coworking</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <p className="text-sm text-red-500">{errors.spaceType?.message}</p>
            </div>

            {/* Descripción */}

            <div className="space-y-2">
              <Label>Descripción</Label>

              <Textarea
                rows={4}
                {...register("description", {
                  required: "La descripción es obligatoria",
                })}
              />
            </div>

            {/* Capacidad */}

            <div className="space-y-2">
              <Label>Capacidad máxima</Label>

              <Input
                type="number"
                {...register("maxCapacity", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                })}
              />
            </div>

            {/* Ubicación */}

            <div className="space-y-2">
              <Label>Ubicación</Label>

              <Input
                {...register("locationDetails", {
                  required: true,
                })}
              />
            </div>

            {/* Tiempo mínimo */}

            <div className="space-y-2">
              <Label>Tiempo mínimo de reserva (min)</Label>

              <Input
                type="number"
                {...register("minReservationTime", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                })}
              />
            </div>

            {/* Precio */}

            <div className="space-y-2">
              <Label>Precio por hora</Label>

              <Input
                type="number"
                step="0.01"
                {...register("hourlyRate", {
                  required: true,
                  valueAsNumber: true,
                  min: 0,
                })}
              />
            </div>

            {/* Disponible */}

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label>Disponible</Label>
                <p className="text-sm text-muted-foreground">Permitir reservas.</p>
              </div>

              <Controller
                control={control}
                name="available"
                render={({ field }) => (
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                )}
              />
            </div>

            {/* Horarios */}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Horarios</Label>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    append({
                      day: "MONDAY",
                      startTime: "08:00",
                      endTime: "18:00",
                    })
                  }
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Agregar
                </Button>
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="space-y-3 rounded-lg border p-4">
                  <Controller
                    control={control}
                    name={`facilitySchedules.${index}.day`}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="MONDAY">Lunes</SelectItem>

                          <SelectItem value="TUESDAY">Martes</SelectItem>

                          <SelectItem value="WEDNESDAY">Miércoles</SelectItem>

                          <SelectItem value="THURSDAY">Jueves</SelectItem>

                          <SelectItem value="FRIDAY">Viernes</SelectItem>

                          <SelectItem value="SATURDAY">Sábado</SelectItem>

                          <SelectItem value="SUNDAY">Domingo</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Input type="time" {...register(`facilitySchedules.${index}.startTime`)} />

                    <Input type="time" {...register(`facilitySchedules.${index}.endTime`)} />
                  </div>

                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button form="facility-form" type="submit">
            Guardar
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
