import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "contexts/AuthContext";

import Routes from "../routes";
import AppIntlProvider from "hocs/AppIntlProvider";
import Loader from "../components/common/Loader/Loader";
import {persistor, store} from "../redux/store";
import ReduxToastr from "react-redux-toastr";
import "./App.scss";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={<Loader />}
				persistor={persistor}
			>
				<BrowserRouter>
					<AuthProvider>
						<ThemeProvider theme={theme}>
							<AppIntlProvider>
								<CssBaseline />
								<Routes />
							</AppIntlProvider>
						</ThemeProvider>
					</AuthProvider>
				</BrowserRouter>
			</PersistGate>
			<ReduxToastr
				timeOut={4000}
				newestOnTop={false}
				preventDuplicates
				position="bottom-right"
				getState={(state) => state.toastr} // This is the default
				transitionIn="fadeIn"
				transitionOut="fadeOut"
				progressBar
				closeOnToastrClick
			/>

		</Provider>
	);
};

export default App;
