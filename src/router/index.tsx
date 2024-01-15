import { Outlet, createBrowserRouter } from "react-router-dom";

import Auth from "../components/Auth";
import Header from "../components/Header";

import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import PublicRedirect from "./redirectLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRedirect>
        <Outlet />
      </PublicRedirect>
    ),
    children: publicRoutes,
  },
  {
    path: "*",
    element: (
      <Auth>
        <Header />
        <Outlet />
      </Auth>
    ),
    children: privateRoutes,
  },
]);

export default router;
