import useAppNavigate from "@/hooks/useAppNavigate";
import { ROUTE } from "@/routes/router";
import { ChevronLeft } from "lucide-react";

export default function Order() {
  const appNavigate = useAppNavigate();

  return (
    <div className="py-4">
      <div className="mt-2">
        <button
          className="p-2 mr-2 cursor-pointer rounded-md border bg-background hover:bg-muted transition-colors"
          onClick={() => appNavigate(ROUTE.MENU)}
          aria-label="Back"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-2xl font-bold">Orders</span>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70dvh]">
        <h2 className="text-2xl font-semibold mb-2">Your Order is Empty</h2>
        <p className="text-muted-foreground text-center mb-4">
          Start adding items to your cart to place an order.
        </p>
      </div>
    </div>
  );
};