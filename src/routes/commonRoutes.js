import { lazy } from "react";
import { AppRoute } from "../utils/const";

// Common routes with using React code splitting approach

const Main = lazy(() => import("../pages/Main/Main"));
const LaunchPage = lazy(() => import("../pages/LaunchPage/LaunchPage"));
const RocketPage = lazy(() => import("../pages/RocketPage/RocketPage"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const commonRoutes = [
	{
		component: Main,
		path: AppRoute.ROOT,
		exact: true,
	},
	{
		component: LaunchPage,
		path: AppRoute.LAUNCH,
		exact: true,
	},
	{
		component: RocketPage,
		path: AppRoute.ROCKET,
		exact: true,
	},
	{
		component: NotFound,
	},
];
