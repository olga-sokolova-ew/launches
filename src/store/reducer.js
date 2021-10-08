import {ActionType} from './action';

const initialState = {
    events: [],
    launches: [],
    currentLaunch: {},
    currentRocket: {},
    isLaunchesLoaded: false,
    isEventsLoaded: false,
    isCurrentLaunch: false,
    isCurrentRocket: false,
    eventError: null,
    launchError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_LAUNCHES:
      return {
        ...state,
        launches: action.payload,
        isLaunchesLoaded: true,
    };
    case ActionType.LOAD_EVENTS:
    return {
        ...state,
        events: action.payload,
        isEventsLoaded: true,
    }; 
    case ActionType.LOAD_LAUNCH:
      return {
        ...state,
        currentLaunch: action.payload,
        isCurrentLaunch: true,
    };
    case ActionType.LOAD_ROCKET:
      return {
        ...state,
        currentRocket: action.payload,
        isCurrentRocket: true,
    };


    default:
      return state;
  }
};


export {reducer};