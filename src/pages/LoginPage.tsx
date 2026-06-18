import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { LoginRequest } from "@/features/auth/actions/login.action";
import { useLogin } from "@/features/auth/hooks/useLogin";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const { mutateAsync } = useLogin();

  const onSubmit = async (data: LoginRequest) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-6 text-white" onSubmit={handleSubmit(onSubmit)}>
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
        Ingresar
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-4">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-primary font-semibold hover:underline">
          Regístrate
        </Link>
      </p>
    </form>
  );
};
