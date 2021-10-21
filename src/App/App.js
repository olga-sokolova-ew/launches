import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

import Routes from "../routes";
import Loader from "../components/common/Loader/Loader";
import {
	persistor, store, api
} from "../redux/store";
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
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
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
