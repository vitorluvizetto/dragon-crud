import Home from "../pages/Private/Home";
import Create from "../pages/Private/Dragon/create";
import Details from "../pages/Private/Dragon/details";
import InDevelopment from "../pages/Private/InDevelopment";

const adminRoutes: Route[] = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "create",
    element: <Create />,
  },
  {
    path: "details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <InDevelopment />,
  },
];

export default adminRoutes;
