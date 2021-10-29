import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//import { auth, signup } from "../firebase/auth_signup_password";
import { auth } from "../firebase/firebaseConfig";
import {
	createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut
} from "firebase/auth";
//import { app } from "firebase-admin";
import { requireAuthorization } from "../redux/user/sliceReducer";
import { AuthorizationStatus } from "../utils/const";
import { useHistory } from "react-router-dom";


const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	console.log(currentUser);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			const unsubsribe = auth.onAuthStateChanged(user => {
				setCurrentUser(user);
			});

			return unsubsribe;
		},
		[]
	);

	/*const signup = (
		email, password
	) => {
		return auth.createUserWithEmailAndPassword(
			email,
			password
		);
	  };*/

	const signup = async ({
		email, password
	}) => {
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			console.log(res);

			history.push("/");

		} catch (error) {
			console.error(error);
			//const errorCode = error.code;
			//const errorMessage = error.message;
		}
	};

	/*const login = (
		email, password
	) => {
		return auth.signInWithEmailAndPassword(
			email,
			password
		);
	};*/

	const login = async ({ email, password }) => {
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			console.log(
				"res",
				res
			);

			dispatch(requireAuthorization(AuthorizationStatus.AUTH));

			history.push("/");

		} catch (error) {
			console.error(error);
			//const errorCode = error.code;
			//const errorMessage = error.message;
		}
	};

	const logout = () => {
		return signOut(auth).then(() => {
			localStorage.setItem(
				"token",
				""
			);
			localStorage.setItem(
				"login",
				""
			);
			dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
		});
	};

	const resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email);
	};

	const updateEmail = (email) => {
		return currentUser.updateEmail(email);
	};

	const updatePassword = (password) => {
		return currentUser.updatePassword(password);
	};

	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};



