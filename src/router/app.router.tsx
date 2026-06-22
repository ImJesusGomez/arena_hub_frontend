import { createBrowserRouter } from "react-router";

import { AuthLayout } from "@/features/auth/layout/AuthLayout";
import { DashboardLayout } from "@/features/dashboard/layout/DashboardLayout";

import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

import { DashboardFacility } from "@/pages/DashboardFacility";
import { ReservationsPage } from "@/pages/ReservationsPage";
import { MyReservationsPage } from "@/pages/MyReservationsPage";
import { WaitlistPage } from "@/pages/WaitlistPage";

import { ADMIN_ROLES } from "@/interfaces/entities/role.entity";
import { ProtectedRoute } from "./ProtectedRoute";
import { RoleProtectedRoute } from "./RoleProtectedRoute";

export const router = createBrowserRouter([
  // Públicas
  {
    path: "/",
    element: <HomePage />,
  },

  // Auth
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

  // Rutas autenticadas
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "dashboard/mis-reservaciones",
            element: <MyReservationsPage />,
          },
          {
            path: "dashboard/lista-de-espera",
            element: <WaitlistPage />,
          },
        ],
      },
    ],
  },

  // Rutas administrativas
  {
    element: <RoleProtectedRoute allowedRoles={ADMIN_ROLES} />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "dashboard/instalaciones",
            element: <DashboardFacility />,
          },
          {
            path: "dashboard/reservaciones",
            element: <ReservationsPage />,
          },
        ],
      },
    ],
  },
]);
