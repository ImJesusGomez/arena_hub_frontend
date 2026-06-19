import type { User } from "@/interfaces/entities/user.entity";
import { useAuthStore } from "@/store/auth.store";
import { UsersIcon, Building2, Calendar, CalendarRange, Hourglass } from "lucide-react";

export const useSidebarRoutes = () => {
  const user: User | null = useAuthStore((state) => state.user);

  if (!user) <p>Cargando...</p>;

  const data = {
    user: {
      name: user!.firstName + " " + user!.lastName,
      email: user!.email,
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Instalaciones",
        url: "/dashboard/instalaciones",
        icon: <Building2 />,
      },
      {
        title: "Reservaciones",
        url: "/dashboard/reservaciones",
        icon: <Calendar />,
      },
      {
        title: "Mis Reservaciones",
        url: "/dashboard/mis-reservaciones",
        icon: <CalendarRange />,
      },
      {
        title: "Lista de Espera",
        url: "/dashboard/lista-de-espera",
        icon: <Hourglass />,
      },
      {
        title: "Usuarios",
        url: "/dashboard/usuarios",
        icon: <UsersIcon />,
      },
    ],
  };

  return {
    user,
    data,
  };
};
