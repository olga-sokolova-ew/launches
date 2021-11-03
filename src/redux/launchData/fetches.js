import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunchList, getCurrentLaunch } from "services/launch";
import {launchAdapter, currentLaunchAdapter} from "utils/adapter";
import { toast } from "react-toastify";
import {FormattedMessage} from "react-intl";
import {showToast, showServerDetail} from "utils/toastHelper";


//const customIdError = "errorLoading";

export const fetchLaunchList = createAsyncThunk(
	"launch/fetchLaunchesList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getLaunchList();
			const customId = "loading";
			if (!response.statusText) {
				throw new Error("Server Error!");
			}
			toast.info(
				<FormattedMessage
					id="waitMessage"
				/>,
				{ toastId: customId }
			);
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