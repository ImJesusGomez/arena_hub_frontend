import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/auth.store";

interface Props {
  allowedRoles: string[];
}

export const RoleProtectedRoute = ({ allowedRoles }: Props) => {
  const user = useAuthStore((state) => state.user);

  const hasPermission = user?.roles.some((role) => allowedRoles.includes(role.name)) ?? false;

  return hasPermission ? <Outlet /> : <Navigate to="/" replace />;
};
