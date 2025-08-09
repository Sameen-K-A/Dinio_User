import { useLocation } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import type { INavItem } from "@/types/user";
import { ShoppingCart } from "lucide-react";
import useAppNavigate from "@/hooks/useAppNavigate";
import { ROUTE } from "@/routes/router";

interface IMobileNavigationProps {
  navItems: INavItem[];
}

export default function MobileNavigation({ navItems }: IMobileNavigationProps) {
  const location = useLocation();
  const { cart } = useCart();
  const appNavigate = useAppNavigate();

  const isCartPage = location.pathname === ROUTE.CART;

  return (
    <nav className="fixed z-50 bottom-0 w-full bg-muted flex justify-around items-center gap-2 p-2 px-4 border-t">
      {cart.length > 0 && !isCartPage ? (
        <button
          className="w-full flex items-center justify-center gap-2 bg-accent-foreground text-accent hover:bg-accent-foreground/70 transition-colors font-semibold rounded-2xl py-2.5 px-4 text-base shadow-lg"
          onClick={() => appNavigate(ROUTE.CART)}
        >
          <ShoppingCart size={18} />
          Continue Cart ({cart.length})
        </button>
      ) : (
        navItems.map((item) => (
          <span
            key={item.to}
            onClick={() => appNavigate(item.to)}
            className={`flex flex-col items-center flex-1 text-xs font-medium transition-colors rounded-2xl py-1.5 ${location.pathname === item.to ? "bg-accent-foreground text-accent" : "bg-muted hover:bg-background/50 text-muted-foreground"}`}
          >
            {item.icon}
            {item.label}
          </span>
        ))
      )}
    </nav>
  );
}