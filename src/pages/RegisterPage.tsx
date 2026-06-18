import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export const RegisterPage = () => {
  return (
    <form className="space-y-5 text-white">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Nombre</Label>

          <Input placeholder="Carlos" />
        </div>

        <div className="space-y-2">
          <Label>Apellido</Label>

          <Input placeholder="Mendoza" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Email</Label>

        <Input type="email" placeholder="correo@ejemplo.com" />
      </div>

      <div className="space-y-2">
        <Label>Contraseña</Label>

        <Input type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full" size="lg">
        Crear Cuenta
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          <span className="text-primary cursor-pointer">Inicia sesión</span>
        </Link>
      </p>
    </form>
  );
};
