import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
export const LoginPage = () => {
  return (
    <form className="space-y-6 text-white">
      <div className="space-y-2 ">
        <Label>Email</Label>

        <Input type="email" placeholder="correo@ejemplo.com" />
      </div>

      <div className="space-y-2">
        <Label>Contraseña</Label>

        <Input type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full" size="lg">
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
