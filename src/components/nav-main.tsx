"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import RouterNavMain from "@/routers/RouterNavMain";
import { NavLink } from "react-router";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {RouterNavMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild>
              <NavLink to={item.path}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
