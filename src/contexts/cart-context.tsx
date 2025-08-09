import React, { createContext, useContext, useState } from "react";
import type { IFood } from "../constants/foods";

export interface CartItem extends IFood {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: IFood) => void;
  removeFromCart: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  clearCart: () => void;
  cartPing: boolean;
  triggerCartPing: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartPing, setCartPing] = useState(false);

  const triggerCartPing = () => {
    setCartPing(true);
    setTimeout(() => setCartPing(false), 500);
  };

  const addToCart = (item: IFood) => {
    setCart((prev) => {
      const found = prev.find((i) => i.foodId === item.foodId);
      if (found) {
        triggerCartPing();
        return prev.map((i) =>
          i.foodId === item.foodId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      triggerCartPing();
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (foodId: string) => {
    setCart((prev) => prev.filter((i) => i.foodId !== foodId));
  };

  const updateQuantity = (foodId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.foodId === foodId ? { ...i, quantity: Math.max(1, quantity) } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartPing, triggerCartPing }}>
      {children}
    </CartContext.Provider>
  );
};