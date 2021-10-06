import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/app/App';
import {createAPI} from './services/api';
import {createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { fetchLaunchesList} from './store/api-actions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  typography: {
    roboto: {
       fontFamily: "Roboto",
    },
    montserrat: {
       fontFamily: "Montserrat",
    },
    color: "#F1EBFF",
		h1: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 76,
			fontWeight: 800,
			lineHeight: "92px",
			letterSpacing: 0,
		},
		h2: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 54,
			fontWeight: 800,
			lineHeight: "64px",
			color: "#F1EBFF",
		},
		h3: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 26,
			fontWeight: 700,
			lineHeight: "28px",
			color: "#F1EBFF",
		},
		h4: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 22,
			fontWeight: 700,
			lineHeight: "28px",
			letterSpacing: "0.0038em",
		},
		h5: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			fontWeight: 400,
			lineHeight: "28px",
		},
		body1: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			fontWeight: 400,
			lineHeight: "28px",
		},
		caption: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 18,
			fontWeight: 500,
			fontStyle: 'italic',
			lineHeight: "18px",
			color: "#F1EBFF",
		},
		/*body2: {
			fontFamily: "Nunito, sans-serif",
			fontSize: 13,
			lineHeight: "28px",
			letterSpacing: "0.02em",
		},
		*/


  },
  palette: {
		primary: {
			main: "#F1EBFF",
		},
		secondary: {
			main: "#FFFFFF",
		},
		background: {
			default: "#181B48",
		},
		common: {
			white: "#fff",
			black: "#111",
		},
	},

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
});

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchLaunchesList(api));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider >  
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
