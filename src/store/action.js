export const ActionType = {
    LOAD_LAUNCH: 'data/loadLaunch',
    LOAD_LAUNCHES: 'data/loadLaunches',
    LOAD_EVENTS: 'data/loadEvents',
    EVENTS_ERROR: 'data/eventsError',
    LAUNCH_ERROR: 'data/launchesError',
    LOAD_ROCKET: 'data/loadRocket',
    REDIRECT_TO_ROUTE: 'application/redirectToRoute',
  };
  
export const ActionCreator = {

    loadLaunches: (launches) => ({
        type: ActionType.LOAD_LAUNCHES,
        payload: launches,
    }),
    loadEvents: (events) => ({
        type: ActionType.LOAD_EVENTS,
        payload: events,
    }),
    eventError: (err) => ({
        type: ActionType.EVENTS_ERROR,
        payload: err,
    }),
    launchError: (err) => ({
        type: ActionType.LAUNCH_ERROR,
        payload: err,
    }),
    redirectToRoute: (url) => ({
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: url,
    }),
    loadCurrentRocket: (rocket) => ({
        type: ActionType.LOAD_ROCKET,
        payload: rocket,
    }),
    loadCurrentLaunch:  (launch) => ({
        type: ActionType.LOAD_LAUNCH,
        payload: launch,
    }),

};