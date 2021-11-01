import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//import { auth, signup } from "../firebase/auth_signup_password";
import { auth } from "../firebase/firebaseConfig";
import {
	createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "firebase/auth";
//import { app } from "firebase-admin";
import { requireAuthorization } from "../redux/user/sliceReducer";
import { AppRoute, AuthorizationStatus } from "../utils/const";
import { useHistory } from "react-router-dom";
import { toast} from "react-toastify";


const AuthContext = React.createContext();

const outputtingError = (error) => {
	switch (error) {
	case "auth/user-not-found":
		toast.error("User not found");
		break;
	case "auth/email-already-exists":
		toast.error("Email already exist");
		break;	
	case "auth/wrong-password":
		toast.error("Invalid password");
		break;
	case "auth/too-many-requests":
		toast.error("Too many request");
		break;
	default:
		toast.error("Error in login");
		  }
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			const unsubsribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user) {
						setCurrentUser(user.email);
					} else {
						console.log("user is signed out");
						setCurrentUser(null);
					}
				}
			);
			return unsubsribe;
		},
		[]
	);

	const signup = async ({
		email, password
	}) => {
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log("signup");
			console.log(res);

			history.push(AppRoute.LOGIN);

		} catch (error) {
			outputtingError(error.code);
		}
	};

	const login = async ({ email, password }) => {
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			console.log("login");
			console.log(
				"res",
				res
			);

			//dispatch(requireAuthorization(AuthorizationStatus.AUTH));

			history.push("/");

		} catch (error) {
			outputtingError(error.code);
	
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
		currentUser, // = user.emailVerified
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



