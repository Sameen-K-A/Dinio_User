import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";
import { Suspense, lazy } from "react";
import LoadingPage from "@/components/others/LoadingPage";

import Home from "@/pages/Home";
const Menu = lazy(() => import("@/pages/Menu"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const OrderPlaced = lazy(() => import("@/pages/OrderPlaced"));
const UserLayout = lazy(() => import("@/layout/userLayout"));
const Order = lazy(() => import("@/pages/Order"));
const NotFoundPage = lazy(() => import("@/components/others/Error404"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />

      <Route
        element={
          <Suspense fallback={<LoadingPage />}>
            <UserLayout />
          </Suspense>
        }
      >
        <Route path={ROUTE.MENU}
          element={
            <Suspense fallback={<LoadingPage />}>
              <Menu />
            </Suspense>
          }
        />
        <Route path={ROUTE.ORDERS}
          element={
            <Suspense fallback={<LoadingPage />}>
              <Order />
            </Suspense>
          }
        />
        <Route path={ROUTE.CART}
          element={
            <Suspense fallback={<LoadingPage />}>
              <CartPage />
            </Suspense>
          }
        />
        <Route path={ROUTE.ORDER_PLACED}
          element={
            <Suspense fallback={<LoadingPage />}>
              <OrderPlaced />
            </Suspense>
          }
        />
      </Route>

      <Route path={ROUTE.NOT_FOUND}
        element={
          <Suspense fallback={<LoadingPage />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}