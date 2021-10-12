import { lazy } from "react";

// Common routes with using React code splitting approach
const Main = lazy(() => import("../pages/Main/Main"));
const NotFound = lazy(() => import("pages/common/NotFound"));

export const commonRoutes = [
  {
    component: Main,
    path: "/",
    exact: true,
  },
  {
    component: NotFound,
  },
];

/*const AppRoute = {
    LAUNCH: '/launch/:id',
    ROCKET: '/rocket/:id',
    EVENT: '/event/:id',
    ROOT: '/',
    PAGE_NOT_FOUND: '/404',
  };*/
