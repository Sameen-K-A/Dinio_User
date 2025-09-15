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
    <div className="min-h-[100dvh] container mx-auto">
      <main className="p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};