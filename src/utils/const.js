const AppRoute = {
	LAUNCH: "/launch/:id",
	ROCKET: "/rocket/:id",
	EVENT: "/event/:id",
	ROOT: "/",
	LOGIN: "/login",
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


export {APIRoute, AppRoute, AuthorizationStatus, HOURS, KEY, launchQnt, MINUTE, SECONDS};
