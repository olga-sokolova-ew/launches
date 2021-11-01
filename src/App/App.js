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
import { persistor, store } from "../redux/store";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {

	return (
		<Provider store={store}>
			<PersistGate
				loading={<Loader />}
				persistor={persistor}
			>
				<BrowserRouter>
					<AppIntlProvider>
						<AuthProvider>
							<ThemeProvider theme={theme}>
										
								<CssBaseline />
								<Routes />
								
							</ThemeProvider>
						</AuthProvider>
					</AppIntlProvider>
				</BrowserRouter>
			</PersistGate>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

		</Provider>
	);
};

export default App;
