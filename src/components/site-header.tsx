import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebarRoutes } from "@/hooks/useSidebarRoutes";
import { useLocation } from "react-router";

export function SiteHeader() {
  const { data: menuItems } = useSidebarRoutes();

  const location = useLocation(); // Obtienes la ruta actual (ej: "/dashboard/instalaciones")

  // Buscamos el ítem que coincida exactamente con la URL actual
  const rutaActual = menuItems.navMain.find((item) => item.url === location.pathname);

  // Usamos un fallback por si estás exactamente en "/dashboard" o una ruta que no esté en la lista
  const tituloFormateado = rutaActual ? rutaActual.title : "Dashboard";

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">{tituloFormateado}</h1>
      </div>
    </header>
  );
}
