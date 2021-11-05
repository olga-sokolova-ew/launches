const AppRoute = {
	ADDPRODUCT_PAGE: "/add_product",
	DASHBOARD: "/dashboard",
	EVENT: "/event/:id",
	LAUNCH: "/launch/:id",
	LOGIN: "/login",
	ROCKET: "/rocket/:id",
	ROOT: "/",
	SIGNIN: "/signin",
	PAGE_NOT_FOUND: "/404",
};

const APIRoute = {
	LAUNCHES: "launch/upcoming?mode=detailed",
	EVENTS: "event/upcoming/",
};

const AuthorizationStatus = {
	AUTH: "AUTH",
	NO_AUTH: "NO_AUTH",
	UNKNOWN: "UNKNOWN",
};

// Sol key for encrypt user info token
const KEY = "skeletonEcnryptKey";

const launchQnt = 6;
const MINUTE = 60;
const HOURS = 24;
const SECONDS = 60;

const MAX_FILE_SIZE = 1000000; //1mb
const SUPPORTED_FORMATS = [
	"image/jpg",
	"image/jpeg",
	"image/png"
];


export { APIRoute, AppRoute, AuthorizationStatus, MAX_FILE_SIZE, HOURS, KEY, launchQnt, MINUTE, SECONDS, SUPPORTED_FORMATS };
