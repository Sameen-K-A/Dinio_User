import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/routes/router";
import { Suspense, lazy } from "react";
import LoadingPage from "@/components/others/LoadingPage";

import Home from "@/pages/Home";
import GeneralLayout from "@/layout/general";
const Menu = lazy(() => import("@/pages/Menu"));
const NotFoundPage = lazy(() => import("@/components/others/Error404"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />

      <Route
        element={
          <Suspense fallback={<LoadingPage />}>
            <GeneralLayout />
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

        <Route path={ROUTE.NOT_FOUND}
          element={
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  );
}