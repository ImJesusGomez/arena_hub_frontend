import { useMutation } from "@tanstack/react-query";
import { registerAction, type RegisterRequest } from "../actions/register.action";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: (request: RegisterRequest) => registerAction(request),
    onSuccess: () => {
      toast.success("Cuenta creada correctamente");
      navigation("/login");
    },
    onError: () => {
      toast.error("No se puedo crear la cuenta");
    },
  });
};
