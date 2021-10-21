import { createSlice } from "@reduxjs/toolkit";
import { fetchEventList } from "./fetches";

const initialState = {
	events: [],
	eventError: null,
	currentEvent: {},
	isEventsLoaded: false,
	isCurrentEvent: false,
	eventStatus: null,
};

const eventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {
		loadEvents(
			state, action
		) {
			state.events = action.payload;
			state.isEventsLoaded = true;
		},
		eventError(
			state, action
		) {
			state.eventError = action.payload;
		},
		loadCurrentEvent(
			state, action
		) {
			state.currentEvent = action.payload;
			state.isCurrentEvent = true;
		},

	},
	
	extraReducers: {
		[fetchEventList.pending]: (state) => {
			state.eventStatus = "loading";
			state.eventError = null;
		},
		[fetchEventList.fulfilled]: (
			state, action
		) => {
			state.eventStatus= "resolved";
			state.events = action.payload;
			state.isEventsLoaded = true;
		},
		[fetchEventList.rejected]: (
			state, action
		) => {
			state.eventStatus = "rejected";
			state.eventError = action.payload;
			state.isEventsLoaded = false;
		},
        
	}
});

export const { loadEvents, loadCurrentEvent, eventError } = eventSlice.actions;
export default eventSlice.reducer;