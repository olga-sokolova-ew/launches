import {combineReducers} from "redux";
import eventSlice from "./eventData/sliceReducer";
import launchSlice from "./launchData/sliceReducer";
//import rocketSlice from "./rocketData";

export default combineReducers({
	event: eventSlice,
	launch: launchSlice,
	//rocket: rocketSlice,
});