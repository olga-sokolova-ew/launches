import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

import Routes from "../routes";
import Loader from "../components/Loader/Loader";
import {
	persistor, store, api 
} from "../redux/store";
import { fetchLaunchesList } from "../redux/api-actions";
import "./App.scss";

store.dispatch(fetchLaunchesList(api));

function App() {
		return (
    <Provider store={store}>
      <PersistGate
	loading={<Loader />}
	persistor={persistor}
      >
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
		);
}

export default App;
