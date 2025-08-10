import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";

// pages
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import CartPage from "@/pages/CartPage";
import OrderPlaced from "@/pages/OrderPlaced";
import UserLayout from "@/layout/userLayout";
import Order from "@/pages/Order";
import NotFoundPage from "@/components/others/Error404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route element={<UserLayout />}>
        <Route path={ROUTE.MENU} element={<Menu />} />
        <Route path={ROUTE.ORDERS} element={<Order />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.ORDER_PLACED} element={<OrderPlaced />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}