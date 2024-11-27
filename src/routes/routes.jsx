import { Outlet } from "react-router-dom";
import App from "../App";
import { ROUTES } from "../tools/CONSTANTS";
import LoadComponent from "./LoadComponents";

// Mapa estático de rutas a módulos
const componentMap = {
  "Login": () => import("../pages/Login"),
  "Register": () => import("../pages/Register"),
  "Inicio": () => import("../pages/Inicio"),
  "HorarioB": () => import("../pages/HorarioB"),
  "ReservaA": () => import("../pages/ReservaA"),
  "Perfil": () => import("../pages/Perfil"),
};

const router = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: ROUTES.auth.login,
        element: <LoadComponent component="Login" componentsMap={componentMap} loading={<>Cargando...</>}/>,
      },
      {
        path: ROUTES.auth.register,
        element: <LoadComponent component="Register" componentsMap={componentMap} loading={<>Cargando...</>}/>,
      },
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: ROUTES.dashboard.home,
            element: <LoadComponent component="Inicio" componentsMap={componentMap} loading={<>Cargando...</>}/>,
          },
          {
            path: ROUTES.dashboard.rooms,
            element: <LoadComponent component="HorarioB" componentsMap={componentMap} loading={<>Cargando...</>}/>,
          },
          {
            path: ROUTES.dashboard.reservations,
            element: <LoadComponent component="ReservaA" componentsMap={componentMap} loading={<>Cargando...</>}/>,
          },
          {
            path: ROUTES.dashboard.profile,
            element: <LoadComponent component="Perfil" componentsMap={componentMap} loading={<>Cargando...</>}/>,
          },
          {
            path: "*",
            element: <>Error 404</>,
          },
        ],
        errorElement: <>Error 500</>,
      },
    ],
  },
];

export default router;
