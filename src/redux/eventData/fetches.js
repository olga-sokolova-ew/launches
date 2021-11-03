import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEventList} from "services/event";
import {eventAdapter} from "utils/adapter";
import {showToast, showServerDetail} from "utils/toastHelper";

export const fetchEventList = createAsyncThunk(
	"event/fetchEventList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getEventList();
			//if (!response.status === 200) {
			if (response.status < 200 && response.status >= 300) {	
				throw new Error("Server Error!");
			}

			const result = response.data.results.map((item) => eventAdapter(item));

			return result;
		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			return rejectWithValue(error.response.data.error);
		}
	}
);