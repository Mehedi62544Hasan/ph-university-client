import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminPaths } from "./admin.routes";
import { routerGenerator } from "../utils/routsGenerator";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: routerGenerator(AdminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenerator(AdminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenerator(AdminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
