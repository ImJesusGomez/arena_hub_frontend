import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RegisterRequest } from "@/features/auth/actions/register.action";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();

  const { mutateAsync } = useRegister();

  const onSubmit = async (data: RegisterRequest) => {
    try {
      await mutateAsync({
        ...data,
        roles: ["ROLE_CLIENT"],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-5 text-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Nombre</Label>

          <Input
            placeholder="Carlos"
            {...register("firstName", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 1,
                message: "El nombre es obligatorio",
              },
              maxLength: {
                value: 60,
                message: "El nombre no puede exceder 60 caracteres",
              },
            })}
          />

          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Apellido</Label>

          <Input
            placeholder="Mendoza"
            {...register("lastName", {
              required: "El apellido es obligatorio",
              minLength: {
                value: 1,
                message: "El apellido es obligatorio",
              },
              maxLength: {
                value: 60,
                message: "El apellido no puede exceder 60 caracteres",
              },
            })}
          />

          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          type="email"
          placeholder="correo@ejemplo.com"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Ingresa un correo válido",
            },
          })}
        />

        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Contraseña</Label>

        <Input
          type="password"
          placeholder="••••••••"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          })}
        />

        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full" size="lg">
        Crear Cuenta
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
};
