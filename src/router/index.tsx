import { Outlet, createBrowserRouter } from "react-router-dom";

import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: publicRoutes,
  },
  {
    path: "/home",
    element: <Outlet />,
    children: privateRoutes,
  },
]);

export default router;
