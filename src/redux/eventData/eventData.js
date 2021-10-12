import {createReducer} from '@reduxjs/toolkit';
import {loadEvents, loadCurrentEvent, eventError} from '../action';

const initialState = {
    events: [],
    eventError: null,
    currentEvent: {},
    isEventsLoaded: false,
    isCurrentEvent: false,
};

const eventData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadEvents, (state, action) => {
      state.events = action.payload;
      state.isEventsLoaded = true;
    })
    .addCase(eventError, (state, action) => {
      state.eventError = action.payload;
    })
    .addCase(loadCurrentEvent, (state, action) => {
      state.currentEvent = action.payload;
      state.isCurrentEvent = true;
    })
});

export {eventData};