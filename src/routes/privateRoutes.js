import { lazy } from "react";
import { AppRoute } from "../utils/const";

const LaunchPage = lazy(() => import("../pages/LaunchPage/LaunchPage"));

export const privateRoutes = [
	{
		component: LaunchPage,
		path: AppRoute.LAUNCH,
		exact: true,
		isAuth: true
	},
	
];
