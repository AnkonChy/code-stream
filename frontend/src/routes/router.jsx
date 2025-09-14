import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Dashboard from "../pages/Dashboard/Dashboard";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/signUp",
        Component: Register,
      },
      // {
      //   path: "/dashboard",
      //   Component: Dashboard,
      // }
    ],
  },
]);

export default router;
