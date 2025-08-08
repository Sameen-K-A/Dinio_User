import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import { ThemeToggleButton } from "./ui/ThemeToggleButton";
import type { INavItem } from "@/types/user";
import { ShoppingCart } from "lucide-react";
import { ROUTE } from "@/routes/router";

interface INavbarProps {
  navItems: INavItem[]
};

export default function Navbar({ navItems }: INavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const isCartPage = location.pathname === ROUTE.CART;

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-background md:border-b sticky top-0 z-40">
      <div className="flex items-center gap-2">
        <img src="/svgs/logo.svg" alt="Logo" className="h-6 logo-img" />
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex gap-2 items-center">
          {cart.length > 0 && !isCartPage ? (
            <button
              className="flex items-center gap-2 bg-accent-foreground text-accent cursor-pointer font-semibold rounded-lg px-4 py-2 text-base shadow-lg"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart size={18} />
              Continue Cart ({cart.length})
            </button>
          ) : (
            navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex items-center gap-1 p-2 rounded-lg w-30 justify-center text-base font-medium transition-colors ${location.pathname === item.to ? "bg-accent-foreground text-accent" : "hover:bg-muted/50 bg-muted "}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))
          )}
        </div>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}