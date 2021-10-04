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
//import reportWebVitals from './reportWebVitals';

const api = createAPI();

//const store = createStore(reducer, applyMiddleware(thunk))

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
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
