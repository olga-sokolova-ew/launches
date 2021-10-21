import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedLanguage: "ru",
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		selectedLanguageAction(
			state, action
		) {
			localStorage.setItem(
				"locale",
				action.payload
			);
			state.selectedLanguage = action.payload;
		},
	},
});

export const {selectedLanguageAction} = languageSlice.actions;
export default languageSlice.reducer;