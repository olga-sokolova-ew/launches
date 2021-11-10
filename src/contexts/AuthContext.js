import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
	createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import { requireAuthorization } from "../redux/auth/sliceReducer";
import { AppRoute, AuthorizationStatus } from "../utils/const";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import {
	outputtingError,
	outputtingGoogleError
} from "utils/toastHelper";

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const intl = useIntl();
	const [currentUser, setCurrentUser] = useState(null);
	const [currentUserId, setCurrentUserId] = useState(0);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			const unsubsribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user) {
						setCurrentUser(user.email);
						setCurrentUserId(user.uid);
					} else {
						setCurrentUser(null);
						setCurrentUserId(0);
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
			await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			history.push(AppRoute.LOGIN);

		} catch (error) {
			outputtingError(
				error.code,
				intl
			);
		}
	};

	const login = async ({ email, password }) => {
		try {
			const result = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setCurrentUser(result.user.email);
			setCurrentUserId(result.user.uid);
			dispatch(requireAuthorization(AuthorizationStatus.AUTH));
			history.push(AppRoute.DASHBOARD);

		} catch (error) {
			outputtingError(
				error.code,
				intl
			);
		}
	};

	const logout = () => {
		return signOut(auth).then(() => {
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

	const googlePopupSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(
				auth,
				provider
			);  
			setCurrentUser(result.user.email);
			setCurrentUserId(result.user.uid);
			dispatch(requireAuthorization(AuthorizationStatus.AUTH));
			history.push(AppRoute.DASHBOARD);
		} catch (error) {
			outputtingGoogleError(
				error.code,
				intl
			);
		}
	};

	const value = {
		currentUser, // = user.emailVerified
		currentUserId,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		googlePopupSignIn
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};