
  
import {NameSpace} from '../rootReducer';

export const getLaunches = (state) => state[NameSpace.LAUNCH].launches;
export const getCurrentLaunch = (state) => state[NameSpace.LAUNCH].currentLaunch;
export const getLaunchesLoadedStatus= (state) => state[NameSpace.LAUNCH].isLaunchesLoaded;
export const getCurrentLaunchStatus = (state) => state[NameSpace.LAUNCH].isCurrentLaunch;
export const getLaunchError = (state) => state[NameSpace.LAUNCH].launchError;