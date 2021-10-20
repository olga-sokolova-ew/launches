import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentRocket: {},
	isCurrentRocket: false,
};

const rocketSlice = createSlice({
	name: "rocket",
	initialState,
	reducers: {
		loadCurrentRocket(
			state, action
		) {
			state.currentRocket = action.payload;
			state.isCurrentRocket = true;
		},

	}
});

export default rocketSlice.reducer;
export const { loadCurrentRocket } = rocketSlice.actions;