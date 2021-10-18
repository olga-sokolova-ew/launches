import {createReducer} from "@reduxjs/toolkit";
import {loadCurrentRocket} from "../action";

const initialState = {
	currentRocket: {},
	isCurrentRocket: false,
};

const rocketData = createReducer(
	initialState,
	(builder) => {
		builder
			.addCase(
				loadCurrentRocket,
				(
					state, action
				) => {
					state.currentRocket = action.payload;
					state.isCurrentRocket = true;
				}
			);
	}
);

export {rocketData};