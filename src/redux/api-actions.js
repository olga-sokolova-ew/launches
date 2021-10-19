import {
	eventError, loadEvents, loadCurrentRocket, redirectToRoute
} from "./action";
import {
	loadLaunches, loadCurrentLaunch, launchError 
} from "redux/launchData/launchData";
import {APIRoute, AppRoute} from "../utils/const";
import {
	eventAdapter, launchAdapter, rocketAdapter, currentLaunchAdapter
} from "../utils/adapter";

export const fetchLaunchesList = () => (
	dispatch, _getState, api
) => (
	api.get(APIRoute.LAUNCHES)
		.then(({data}) => dispatch(loadLaunches(data.results.map((item) => launchAdapter(item)))))
		.catch((err) => dispatch(launchError(err.message)))
    //.catch((err) => console.log("load error"))
);

export const fetchEventsList = () => (
	dispatch, _getState, api
) => (
	api.get(APIRoute.EVENTS)
		.then(({data}) => dispatch(loadEvents(data.results.map((item) => eventAdapter(item)))))
		.catch((err) => dispatch(eventError(err.message)))
      //.catch((err) => console.log("loading error"))
);

export const fetchCurrentRocket = (id) => (
	dispatch, _getState, api
) => (
	api.get(`cofig/launcher/${id}`)
		.then(({data}) => dispatch(loadCurrentRocket(data => rocketAdapter(data))))
		.catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchCurrentLaunch = (id) => (
	dispatch, _getState, api
) => (
	api.get(`launch/${id}`)
    //.then(console.log(`launch/${id}`))
		.then(({data}) => dispatch(loadCurrentLaunch((currentLaunchAdapter(data)))))
		.catch(() => dispatch(redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

