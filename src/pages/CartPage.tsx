
import React from "react";
import { useCart } from "../contexts/cart-context";
import CartTable from "@/components/CartTable";
import { ChevronLeft } from "lucide-react";
import { ROUTE } from "@/routes/router";
import useAppNavigate from "@/hooks/useAppNavigate";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const appNavigate = useAppNavigate();

  return (
    <div className="relative pb-10 pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <button
            className="p-2 mr-2 cursor-pointer rounded-md border bg-background hover:bg-muted transition-colors"
            onClick={() => appNavigate(ROUTE.MENU)}
            aria-label="Back"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-2xl font-bold">Cart</span>
          <span className="ml-2 text-muted-foreground text-base">({cart.length} products)</span>
        </div>
        {cart.length > 0 && (
          <button className="text-destructive cursor-pointer text-sm font-medium hover:underline" onClick={clearCart}>
            × Clear cart
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <div className="bg-card rounded-2xl p-0 border min-h-[200px] flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center py-16">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-4 text-muted-foreground"><path d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7zm0 0v1a2 2 0 002 2h6a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="text-lg font-semibold text-muted-foreground mb-1">Your cart is empty</div>
            <div className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</div>
          </div>
        </div>
      ) : (
        <CartTable
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      {
        cart.length > 0 && (
          <div className="flex w-full justify-end">
            <button
              className="mt-6 w-full md:w-fit bg-accent-foreground text-accent cursor-pointer hover:bg-accent-foreground/70 transition-colors font-semibold py-3 px-10 rounded-2xl text-lg tracking-wide"
              disabled={cart.length === 0}
              onClick={() => {
                appNavigate(ROUTE.ORDER_PLACED);
                clearCart();
              }}
            >
              Place Order
            </button>
          </div>
        )
      }
    </div >
  );
};

export default CartPage;