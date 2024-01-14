import Home from "../pages/Private/Home";
import Create from "../pages/Private/dragon/create";

const adminRoutes: Route[] = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "create",
    element: <Create />,
  },
];

export default adminRoutes;
