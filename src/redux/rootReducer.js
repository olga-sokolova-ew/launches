import {combineReducers} from "redux";
import eventSlice from "./eventData";
import launchSlice from "./launchData";
import rocketSlice from "./rocketData";

export default combineReducers({
	event: eventSlice,
	launch: launchSlice,
	rocket: rocketSlice,
});