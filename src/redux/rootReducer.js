import {combineReducers} from "redux";
import eventSlice from "./eventData/sliceReducer";
import launchSlice from "./launchData/sliceReducer";
import rocketSlice from "./rocketData/sliceReducer";
//import languageSlice from "./languages/sliceReducer";
import userSlice from "./user/sliceReducer";

export default combineReducers({
	event: eventSlice,
	launch: launchSlice,
	rocket: rocketSlice,
	//language: languageSlice,
	user: userSlice,
});