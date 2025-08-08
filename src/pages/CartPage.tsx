
import React from "react";
import { useCart } from "../contexts/cart-context";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="relative pb-10 pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold">Cart</span>
          <span className="ml-2 text-muted-foreground text-base">({cart.length} products)</span>
        </div>
        {cart.length > 0 && (
          <button className="text-destructive cursor-pointer text-sm font-medium hover:underline" onClick={clearCart}>
            × Clear cart
          </button>
        )}
      </div>
      <div className="bg-card rounded-2xl p-0 border min-h-[200px] flex flex-col justify-center">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-4 text-muted-foreground"><path d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7zm0 0v1a2 2 0 002 2h6a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="text-lg font-semibold text-muted-foreground mb-1">Your cart is empty</div>
            <div className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</div>
          </div>
        ) : (
          <>
            <div className="flex items-center px-6 py-3 border-b text-muted-foreground text-sm font-medium">
              <div className="ml-7">Product</div>
            </div>
            <div>
              {cart.map((item) => (
                <div key={item.foodId} className="flex items-center px-2 py-3 border-b last:border-0">
                  <div className="flex flex-1 items-center gap-4">
                    <button
                      className="text-destructive text-xl ml-4"
                      onClick={() => removeFromCart(item.foodId)}
                      title="Remove"
                    >
                      ×
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg bg-muted object-cover border"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder/placeholder.svg";
                      }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-base truncate">{item.name}</span>
                      <span className="text-primary text-xs font-medium">₹{item.amount.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="w-8 h-8 border flex items-center justify-center rounded bg-muted-foreground/10 hover:bg-muted-foreground/50 cursor-pointer transition-colors text-lg font-bold"
                      onClick={() => updateQuantity(item.foodId, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      –
                    </button>
                    <span className="w-fit px-1 text-center font-semibold">{item.quantity}</span>
                    <button
                      className="w-8 h-8 border flex items-center justify-center rounded bg-muted-foreground/10 hover:bg-muted-foreground/50 cursor-pointer transition-colors text-lg font-bold"
                      onClick={() => updateQuantity(item.foodId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {cart.length > 0 && (
        <div className="flex w-full justify-end">
          <button
            className="mt-6 w-full md:w-fit bg-accent-foreground text-accent cursor-pointer hover:bg-accent-foreground/70 transition-colors font-semibold py-3 px-10 rounded-2xl text-lg tracking-wide"
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;