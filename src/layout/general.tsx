import { Outlet, useLocation } from "react-router-dom";
import ZeroState from "@/components/others/ZeroState";
import { foodsByRestaurant } from "@/constants/foods";

export default function GeneralLayout() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const restaurantId = params.get("r");

  if (!restaurantId || !restaurantId.length || !foodsByRestaurant[restaurantId]) {
    return <ZeroState />;
  };

  return (
    <div className="min-h-[100dvh] bg-background container mx-auto">
      <main className="flex-1 w-full max-w-8xl mx-auto px-4 pb-30 md:pb-20">
        <Outlet />
      </main>
    </div>
  );
};