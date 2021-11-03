import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEventList} from "services/event";
import {eventAdapter} from "utils/adapter";

export const fetchEventList = createAsyncThunk(
	"event/fetchEventList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getEventList();
			//if (!response.status === 200) {
			if (!response.statusText) {
				throw new Error("Server Error!");
			}

			const result = response.data.results.map((item) => eventAdapter(item));

			return result;
		} catch (error) {
			return rejectWithValue(error.response.data.error);
		}
	}
);