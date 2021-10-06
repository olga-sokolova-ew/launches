import {ActionType} from './action';

const initialState = {
    events: [],
    launches: [],
    isLaunchesLoaded: false,
    isEventsLoaded: false,
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

    default:
      return state;
  }
};


export {reducer};