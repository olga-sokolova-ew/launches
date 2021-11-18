import { lazy } from "react";
import { AppRoute } from "../utils/const";

// Common routes with using React code splitting approach

const Main = lazy(() => import("../pages/Main/Main"));
const RocketPage = lazy(() => import("../pages/RocketPage/RocketPage"));
const LoginPage = lazy(() => import("pages/Login"));
const RegisterPage = lazy(() => import("pages/SignIn"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const commonRoutes = [
	{
		component: Main,
		path: AppRoute.ROOT,
		exact: true,
		isAuth: false
	},
	{
		component: RocketPage,
		path: AppRoute.ROCKET,
		exact: true,
		isAuth: false
	},
	{
		component: LoginPage,
		path: "/login",
		exact: true,
		isAuth: false
        //denyShowLoginPage: true,
	},
	{
		component: RegisterPage,
		path: "/register",
		exact: true,
		isAuth: false
        //denyShowLoginPage: true,
	},
	{
		component: NotFound,
	},
];
