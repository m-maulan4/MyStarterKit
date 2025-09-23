import Home from "@/pages/Home";
import { HomeIcon, type LucideIcon } from "lucide-react";
import type React from "react";

interface RouterDataProps {
  title: string;
  icon?: LucideIcon;
  path: string;
  component: React.ComponentType;
}
const RouterNavMain: RouterDataProps[] = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/",
    component: Home,
  },
];
export default RouterNavMain;
