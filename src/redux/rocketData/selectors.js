
  
import {NameSpace} from "../rootReducer";

export const getCurrentRocket = (state) => state[NameSpace.ROCKET].currentRocket;
export const getCurrentRocketStatus = (state) => state[NameSpace.ROCKET].isCurrentRocket;