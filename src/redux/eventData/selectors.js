
  
import {NameSpace} from "../rootReducer";

export const getEvents = (state) => state[NameSpace.EVENT].events;
export const getEventError = (state) => state[NameSpace.EVENT].eventError;
export const getCurrentEvent = (state) => state[NameSpace.EVENT].currentEvent;
export const getEventsLoadedStatus = (state) => state[NameSpace.EVENT].isEventsLoaded;
export const getCurrentEventLoadedStatus = (state) => state[NameSpace.EVENT].isCurrentEvent;