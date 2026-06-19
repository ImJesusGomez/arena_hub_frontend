import { AuthLayout } from "@/features/auth/layout/AuthLayout";
import { DashboardLayout } from "@/features/dashboard/layout/DashboardLayout";
import { DashboardInstalaciones } from "@/pages/DashboardInstalaciones";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HomePage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        handle: {
          title: "Iniciar Sesión",
          subtitle: "Accede a tu cuenta para gestionar tus reservas.",
        },
      },
      {
        path: "register",
        element: <RegisterPage />,
        handle: {
          title: "Crear Cuenta",
          subtitle: "Comienza a gestionar tus espacios y reservas.",
        },
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard/instalaciones",
        element: <DashboardInstalaciones />,
      },
    ],
  },
]);
