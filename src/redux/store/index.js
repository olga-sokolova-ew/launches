import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "../rootReducer";
import { isDevelopment } from "../../utils/helper";


const persistConfig = {
	key: "primary",
	storage: storage,
	whitelist: ["auth", "user"],
};
const persistedReducer = persistReducer(
	persistConfig,
	rootReducer 
);


const getPersistMiddleware = ( getDefaultMiddleware ) => getDefaultMiddleware( {
	serializableCheck: {
		//ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		ignoredActions: [ ],
	}
} );

const getStoreMiddleware = ( getDefaultMiddleware ) => (
	isDevelopment()
		? [...getPersistMiddleware( getDefaultMiddleware ), logger]
		: getPersistMiddleware( getDefaultMiddleware )
);

const getStoreDevTools = () => isDevelopment();

// Store with redux-persist (save stores in browser local storage )

const store = configureStore( {
	reducer: persistedReducer,
	middleware: ( getDefaultMiddleware ) => getStoreMiddleware( getDefaultMiddleware ),
	devTools: getStoreDevTools(),
} );

const persistor = persistStore( store );

export { persistor, store };    
