export const ActionType = {
    LOAD_LAUNCHES: 'data/loadLaunches',
    LOAD_EVENTS: 'data/loadEvents',
    EVENTS_ERROR: 'data/eventsError',
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

};