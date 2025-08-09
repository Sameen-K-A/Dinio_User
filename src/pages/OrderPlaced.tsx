import Lottie from "lottie-react";
import preparingFood from "@/assets/lotties/PreparingFood.json";
import { ROUTE } from "@/routes/router";
import useAppNavigate from "@/hooks/useAppNavigate";

export default function OrderPlaced() {
  const appNavigate = useAppNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70dvh] md:min-h-[90dvh] max-w-xl mx-auto text-center">
      <div className="w-44 h-44 mb-4">
        <Lottie animationData={preparingFood} />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-accent-foreground tracking-tight">
        Order Confirmed!
      </h2>

      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        Your order has been successfully placed and sent to our kitchen.
        Our chefs are now preparing your meal with the freshest ingredients.
        <br />
        <br />
        If you need assistance, you can call a waiter anytime using <strong>Call Waiter</strong> button.
      </p>
      <br />

      <button
        className="px-10 py-3 cursor-pointer rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
        onClick={() => appNavigate(ROUTE.MENU)}
      >
        Browse More Items
      </button>
    </div>
  );
}