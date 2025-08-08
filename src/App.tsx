import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/cart-context";

export default function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}