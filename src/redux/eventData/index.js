import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	events: [],
	eventError: null,
	currentEvent: {},
	isEventsLoaded: false,
	isCurrentEvent: false,
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

	}
});

export const { loadEvents, loadCurrentEvent, eventError } = eventSlice.actions;
export default eventSlice.reducer;