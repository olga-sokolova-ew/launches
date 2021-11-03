import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentRocket } from "services/rocket";
import {rocketAdapter} from "utils/adapter";



export const fetchCurrentRocket = createAsyncThunk(
	"rocket/fetchCurrentRocket",
	async (
		id, { rejectWithValue }
	) => {
		try {
			const response = await getCurrentRocket(id);
			if (!response.statusText) {
				throw new Error("Server Error!");
			}

			return rocketAdapter(response.data);

		} catch (error) {
			return rejectWithValue(error.response.data.error);
		}
	}
);