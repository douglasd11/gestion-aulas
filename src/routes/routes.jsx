import { Outlet } from "react-router-dom";
import App from "../App";
import { ROUTES } from "../tools/CONSTANTS";
import LoadComponent from "./LoadComponents";

const router = [
  {
    path: "/",
    element: (<Outlet />),
    children: [
      {
        path: ROUTES.auth.login,
        element: <LoadComponent ruteComponent={"../pages/Login"} />,
      },
      {
        path: ROUTES.auth.register,
        element: <LoadComponent ruteComponent={"../pages/Register"} />,
      },
        // {
      //   path: ROUTES.auth.changePassword + "/:id",
      //   element: <LoadComponent ruteComponent={"@pages/Login"} />,
      // },
      // {
      //   path: ROUTES.auth.verifyEmail + "/:id",
      //   element: <LoadComponent ruteComponent={"@src/pages/"} />,
      // },
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: ROUTES.inicio,
            element: <LoadComponent ruteComponent={"@pages/InicioUsuario"} />,
          },
          {
            path: "*",
            element: <>
              Error 404
            </>,
          },
        ],
        errorElement: <>
          Error 500
        </>,
      },
    ],
  },
];
export default router;