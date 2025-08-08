import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";
import Menu from "@/pages/Menu";
import CartPage from "@/pages/CartPage";
import UserLayout from "@/layout/userLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTE.MENU} element={<Menu />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
      </Route>
    </Routes>
  );
}