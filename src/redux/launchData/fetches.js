import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunchList, getCurrentLaunch } from "services/launch";
import {launchAdapter, currentLaunchAdapter} from "utils/adapter";
import {
	showToast, showServerDetail, showWaitMessage
} from "utils/toastHelper";


export const fetchLaunchList = createAsyncThunk(
	"launch/fetchLaunchesList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getLaunchList();
			if (!response.statusText) {
				throw new Error("Server Error!");
			}
			showWaitMessage();
			return response.data.results.map((item) => launchAdapter(item));

		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			
			/*toast.error(
				<FormattedMessage
					id="errorServer"
				/>,
				{ toastId: customIdError }
			);*/
			return rejectWithValue(error.response.data.error);
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
			if (!response.statusText) {
				throw new Error("Server Error!");
			}
			showWaitMessage();
			console.log(response);
			const result = currentLaunchAdapter(response.data);

			return result;
		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			return rejectWithValue(error.response.data.error);
		}
	}
);