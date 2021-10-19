import {combineReducers} from "redux";
//import {eventData} from "./eventData/eventData";
import launchSlice from "./launchData/launchData";
//import {rocketData} from "./rocketData/rocketData";

export default combineReducers({
	//eventData,
	launch: launchSlice,
	//rocketData,
});