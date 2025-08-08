import Navbar from "../components/Navbar";
import MobileNavigation from "../components/MobileNavigation";
import { Outlet } from "react-router-dom";
import type { INavItem } from "@/types/user";
import { ROUTE } from "@/routes/router";
import { Handbag, Menu, ShoppingCart } from "lucide-react";

export default function UserLayout() {
  const navItems: INavItem[] = [
    {
      to: ROUTE.MENU,
      icon: <Menu size={18} strokeWidth={1.5} />,
      label: "Menu"
    },
    {
      to: ROUTE.ORDERS,
      icon: <Handbag size={18} strokeWidth={1.5} />,
      label: "Orders"
    },
    {
      to: ROUTE.CART,
      icon: <ShoppingCart size={18} strokeWidth={1.5} />,
      label: "Cart"
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-background">
      <Navbar navItems={navItems} />
      <main className="flex-1 w-full max-w-8xl mx-auto px-4 pb-20">
        <Outlet />
      </main>
      <div className="md:hidden">
        <MobileNavigation navItems={navItems} />
      </div>
    </div>
  );
};