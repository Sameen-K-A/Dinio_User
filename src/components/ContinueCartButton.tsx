import useAppNavigate from "@/hooks/useAppNavigate";
import { useCart } from "../contexts/cart-context";
import { ROUTE } from "@/routes/router";

export default function ContinueCartButton() {
  const { cart } = useCart();
  const appNavigate = useAppNavigate();

  if (cart.length < 1) return null;

  return (
    <button
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-accent-foreground text-accent px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:bg-accent-foreground/90 transition-colors cursor-pointer"
      onClick={() => appNavigate(ROUTE.CART)}
    >
      View Cart ({cart.length})
    </button>
  );
};