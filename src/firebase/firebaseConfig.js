import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDTeGh_7Educo3lD3u-bd2G5fnMMYCba8w",
	authDomain: "launches-1939c.firebaseapp.com",
	databaseURL: "https://launches-1939c-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "launches-1939c",
	storageBucket: "launches-1939c.appspot.com",
	messagingSenderId: "804199359871",
	appId: "1:804199359871:web:201d55c105d6ecf0f3e64a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { app, auth};