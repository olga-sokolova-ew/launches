import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
	LOAD_LAUNCH: "data/loadLaunch",
	LOAD_LAUNCHES: "data/loadLaunches",
	LOAD_EVENT: "data/loadEvent",
	LOAD_EVENTS: "data/loadEvents",
	EVENTS_ERROR: "data/eventsError",
	LAUNCH_ERROR: "data/launchesError",
	LOAD_ROCKET: "data/loadRocket",
	REDIRECT_TO_ROUTE: "application/redirectToRoute",
};

export const  loadLaunches = createAction(
	ActionType.LOAD_LAUNCHES,
	(launches) => ({
		payload: launches,
		type: ActionType.LOAD_LAUNCHES,
	})
);  

export const  loadEvents = createAction(
	ActionType.LOAD_EVENTS,
	(events) => ({
		payload: events,
		type: ActionType.LOAD_EVENTS,
        
	})
); 
export const  eventError = createAction(
	ActionType.EVENTS_ERROR,
	(err) => ({
		type: ActionType.EVENTS_ERROR,
		payload: err,        
	})
);  
export const  launchError = createAction(
	ActionType.LAUNCH_ERROR,
	(err) => ({
		type: ActionType.LAUNCH_ERROR,
		payload: err,    
        
	})
);  
export const loadCurrentEvent = createAction(
	ActionType.LOAD_EVENT,
	(event) => ({
		type: ActionType.LOAD_EVENT,
		payload: event,    
        
	})
); 
export const loadCurrentRocket = createAction(
	ActionType.LOAD_ROCKET,
	(rocket) => ({
		type: ActionType.LOAD_ROCKET,
		payload: rocket,    
        
	})
); 
export const loadCurrentLaunch = createAction(
	ActionType.LOAD_LAUNCH,
	(launch) => ({
		type: ActionType.LOAD_ROCKET,
		payload: launch,    
        
	})
); 
export const redirectToRoute = createAction(
	ActionType.REDIRECT_TO_ROUTE,
	(url) => ({
		type: ActionType.REDIRECT_TO_ROUTE,
		payload: url,   
	})
);  