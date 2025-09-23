import Home from "@/pages/Home";
import { Banknote, type LucideIcon } from "lucide-react";
import type React from "react";

interface RouterDataProps {
  title: string;
  icon?: LucideIcon;
  path: string;
  items: [
    {
      title: string;
      path: string;
      component: React.ComponentType;
    }
  ];
}
const RouterNavMainSecond: RouterDataProps[] = [
  {
    title: "Keuangan",
    icon: Banknote,
    path: "keuangan",
    items: [
      {
        title: "Laporan",
        path: "laporan",
        component: Home,
      },
    ],
  },
];
export default RouterNavMainSecond;
