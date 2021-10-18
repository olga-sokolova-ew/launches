import {createReducer} from "@reduxjs/toolkit";
import {
	loadLaunches, launchError, loadCurrentLaunch
} from "../action";

const initialState = {
	currentLaunch: {},
	isLaunchesLoaded: false,
	isCurrentLaunch: false,
	launches: [],
	launchError: null,
};

const launchData = createReducer(
	initialState,
	(builder) => {
		builder
			.addCase(
				loadLaunches,
				(
					state, action
				) => {
					state.launches = action.payload;
					state.isLaunchesLoaded = true;
				}
			)
			.addCase(
				launchError,
				(
					state, action
				) => {
					state.launchError = action.payload;
				}
			)
			.addCase(
				loadCurrentLaunch,
				(
					state, action
				) => {
					state.currentLaunch = action.payload;
					state.isCurrentLaunch = true;
				}
			);
	}
);

export {launchData};

