import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//import { auth, signup } from "../firebase/auth_signup_password";
import { auth } from "../firebase/firebaseConfig";
import {
	createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
//import { app } from "firebase-admin";
import { requireAuthorization } from "../redux/user/sliceReducer";
import { AppRoute, AuthorizationStatus } from "../utils/const";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";

const AuthContext = React.createContext();
const provider = new GoogleAuthProvider();


const outputtingError = (
	error, intl
) => {

	switch (error) {
	case "auth/user-not-found":
		toast.error(intl.formatMessage({ id: "userNotFound" }));
		break;
	case "auth/email-already-exists":
		toast.error(intl.formatMessage({ id: "emailAlreadyExist" }));
		break;
	case "auth/email-already-in-use":
		toast.error(intl.formatMessage({ id: "emailAlreadyInUse" }));
		break;
	case "auth/wrong-password":
		toast.error(intl.formatMessage({ id: "invalidPassword" }));
		break;
	case "auth/too-many-requests":
		toast.error(intl.formatMessage({ id: "tooManyRequest" }));
		break;
	case "400":
		toast.error(intl.formatMessage({ id: "emailAlreadyExist" }));
		break;
	default:
		toast.error(intl.formatMessage({ id: "errorInLogin" }));
	}
};

const outputtingGoogleError = (
	error, intl
) => {

	switch (error) {
	case "auth/user-not-found":
		toast.error(intl.formatMessage({ id: "userNotFound" }));
		break;
	default:
		toast.error(intl.formatMessage({ id: "errorInGoogleLogin" }));
	}
};

console.log(auth);
export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const intl = useIntl();
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
			console.log(res);

			history.push(AppRoute.LOGIN);

		} catch (error) {
			console.log(error);
			outputtingError(
				error.code,
				intl
			);
		}
	};

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
		try {
			const result = await signInWithPopup(
				auth,
				provider
			);
			setCurrentUser(result.user.email);
			history.push(AppRoute.ROOT);
		} catch (error) {
			outputtingGoogleError(
				error.code,
				intl
			);
		}
	};




	const value = {
		currentUser, // = user.emailVerified
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



