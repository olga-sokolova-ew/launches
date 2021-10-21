import {combineReducers} from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import eventSlice from "./eventData/sliceReducer";
import launchSlice from "./launchData/sliceReducer";
import rocketSlice from "./rocketData/sliceReducer";
import languageSlice from "./languages/sliceReducer";

export default combineReducers({
	event: eventSlice,
	launch: launchSlice,
	rocket: rocketSlice,
	language: languageSlice,
	toastr: toastrReducer
});