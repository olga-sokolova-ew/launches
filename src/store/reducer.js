import {ActionType} from './action';

const initialState = {
  launches: [],
  isLaunchesLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_LAUNCHES:
      return {
        ...state,
        launches: action.payload,
        isLaunchesLoaded: true,
      };

    default:
      return state;
  }
};


export {reducer};