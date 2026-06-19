import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebarRoutes } from "@/hooks/useSidebarRoutes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data } = useSidebarRoutes();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! hover:bg-transparent"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
                className="flex items-center gap-2  font-bold tracking-tight text-primary unique-class-for-spacing active:bg-transparent"
              >
                <img src="/logo.svg" alt="ArenaHub Logo" className="h-8 w-auto object-contain" />
                <span className="truncate text-secondary text-xl">
                  Arena<span className="text-primary">Hub</span>
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
