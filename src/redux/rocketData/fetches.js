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
			if (!response.status === 200) {
				throw new Error("Server Error!");
			}

			console.log(response);
			const result = rocketAdapter(response.data);

			return result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);