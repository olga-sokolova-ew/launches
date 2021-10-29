import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunchList, getCurrentLaunch } from "services/launch";
import {launchAdapter, currentLaunchAdapter} from "utils/adapter";

export const fetchLaunchList = createAsyncThunk(
	"launch/fetchLaunchesList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getLaunchList();
			if (!response.status === 200) {
				throw new Error("Server Error!");
			}

			return response.data.results.map((item) => launchAdapter(item));

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchCurrentLaunch = createAsyncThunk(
	"launch/fetchCurrentLaunch",
	async (
		id, { rejectWithValue }
	) => {
		try {
			const response = await getCurrentLaunch(id);
			if (!response.status === 200) {
				throw new Error("Server Error!");
			}

			console.log(response);
			const result = currentLaunchAdapter(response.data);

			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);