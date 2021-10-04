export const ActionType = {
    LOAD_LAUNCHES: 'data/loadLaunches',
  };
  
  export const ActionCreator = {

    loadLaunches: (launches) => ({
      type: ActionType.LOAD_LAUNCHES,
      payload: launches,
    }),
  
  };