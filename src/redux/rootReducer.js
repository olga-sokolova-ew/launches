import {combineReducers} from "redux";
import {eventData} from "./eventData/eventData";
import {launchData} from "./launchData/launchData";
import {rocketData} from "./rocketData/rocketData";

export const NameSpace = {
	EVENT: "EVENT",
	LAUNCH: "LAUNCH",
	ROCKET: "ROCKET",
};

export default combineReducers({
	[NameSpace.EVENT]: eventData,
	[NameSpace.LAUNCH]: launchData,
	[NameSpace.ROCKET]: rocketData,
});