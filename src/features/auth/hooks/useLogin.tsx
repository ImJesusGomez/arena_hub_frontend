import { useMutation } from "@tanstack/react-query";
import { loginAction, type LoginRequest } from "../actions/login.action";
import { toast } from "sonner";
import { useAuthStore } from "../../../store/auth.store";
import type { LoginResponse } from "@/interfaces/responses/login.response";

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (request: LoginRequest) => loginAction(request),
    onSuccess: (data: LoginResponse) => {
      toast.success("Inicio de Sesión Exitoso");
      login(data.accessToken, data.tokenType, data.user);
    },
    onError: () => {
      toast.error("Inicio de Sesión Inválido");
    },
  });
};
