import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../constants/RouteConstants";
import { Layout } from "../../components/layout/Layout";

export const BASE_HREF = process.env.REACT_APP_BASE_HREF;

const router = createBrowserRouter(
  Object.values(ROUTE_CONSTANTS).map((route) => ({
    path: route.path,
    element: <Layout {...route} />,
  })),
  {
    basename: `/${BASE_HREF}`,
  }
);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
