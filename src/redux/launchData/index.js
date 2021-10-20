import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentLaunch: {},
	isLaunchesLoaded: false,
	isCurrentLaunch: false,
	launches: [],
	launchError: null,
};

const launchSlice = createSlice({
	name: "launch",
	initialState,
	reducers: {
		loadLaunches(
			state, action
		) {
			state.launches = action.payload;
			state.isLaunchesLoaded = true;
		},
		launchError(
			state, action
		) {
			state.launchError = action.payload;
		},
		loadCurrentLaunch(
			state, action
		) {
			state.currentLaunch = action.payload;
			state.isCurrentLaunch = true;
		},
	}
});

export default launchSlice.reducer;
export const { loadLaunches, loadCurrentLaunch, launchError } = launchSlice.actions;


