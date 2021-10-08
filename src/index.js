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
//import { breakpoints } from './const';

const breakpoints = {
	values: {
	  xs: 0,
	  sm: 600, // Phone
	  md: 900, // Tablet/Laptop
	  lg: 1200, // Desktop
	  xl: 1536
	}
  };

const theme = createTheme({
	
	breakpoints: {
		values: {
		xs: 0,
		sm: 600, 
		md: 900, 
		lg: 1200, 
		xl: 1536
		},
	},
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
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 60,
				lineHeight: "56px",
				},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 48,
				lineHeight: "52px",
				},
		},
		h2: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 54,
			fontWeight: 800,
			lineHeight: "64px",
			color: "#F1EBFF",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 48,
				lineHeight: "50px",
				},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 38,
				lineHeight: "42px",
				},
		},
		h3: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 26,
			fontWeight: 700,
			lineHeight: "28px",
			color: "#F1EBFF",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 22,
				lineHeight: "24px",
				},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 18,
				lineHeight: "22px",
				},
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
			text: "#C0C0C0",
		},
		secondary: {
			main: "#FFFFFF",
		},
		info: {
			main: "#C0C0C0",
		},
		background: {
			default: "#181B48",
		},
		common: {
			white: "#fff",
			black: "#111",
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
