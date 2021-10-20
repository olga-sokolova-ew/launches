import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { getLaunchList } from "services/launch";
import {launchAdapter} from "../../utils/adapter";

import { APIRoute } from "utils/const";
import { axiosInstance } from "../../services/api";

export const getLaunchList = () => {
	return axiosInstance.get(APIRoute.LAUNCHES);
};

const initialState = {
	currentLaunch: {},
	isLaunchesLoaded: false,
	isCurrentLaunch: false,
	launches: [],
	launchError: null,
	launchStatus: null,
};

export const fetchLaunchList = createAsyncThunk(
	"launch/fetchLaunchesList",
	async function (
		_, { rejectWithValue }
	) {
		try {
			const response = await getLaunchList();
			console.log(response);
			if (!response.status === 200) {
				throw new Error("Server Error!");
			}

			const result = response.data.results.map((item) => launchAdapter(item));
			console.log("result" + result);

			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

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
	},
	extraReducers: {
		[fetchLaunchList.pending]: (state) => {
			state.launchStatus = "loading";
			state.launchError = null;
		},
		[fetchLaunchList.fulfilled]: (
			state, action
		) => {
			state.launchStatus = "resolved";
			state.launches = action.payload;
			state.isLaunchesLoaded = true;
		},
		[fetchLaunchList.rejected]: (
			state, action
		) => {
			state.launchStatus = "rejected";
			state.launchError = action.payload;
			state.isLaunchesLoaded = false;
		},
        
	}
});

export default launchSlice.reducer;
export const { loadLaunches, loadCurrentLaunch, launchError } = launchSlice.actions;


