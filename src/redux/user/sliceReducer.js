import { createSlice } from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../utils/const";

const initialState = {
	authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		requireAuthorization(
			state, action
		) {
			state.authorizationStatus =  action.payload;
		},
		logout(state) {
			state.authorizationStatus = AuthorizationStatus.NO_AUTH;
		},  
	},	
});

export const { requireAuthorization, logout } = userSlice.actions;

export default userSlice.reducer;