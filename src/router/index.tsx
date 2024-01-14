import { Outlet, createBrowserRouter } from "react-router-dom";

import Auth from "../components/Auth";

import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: publicRoutes,
  },
  {
    path: "*",
    element: (
      <Auth>
        <Outlet />
      </Auth>
    ),
    children: privateRoutes,
  },
]);

export default router;
