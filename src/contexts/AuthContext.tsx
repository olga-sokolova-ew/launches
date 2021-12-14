
import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import "firebase/auth";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth";
import { requireAuthorization } from "../redux/auth/sliceReducer";
import { AppRoute, AuthorizationStatus } from "../utils/const";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import {
	outputtingError,
	outputtingGoogleError
} from "../utils/toastHelper";


type Props = {
	children?: React.ReactNode;
};

type SProps = {
	email: string,
	password: string,
}; 
type FirebaseError = {
	code: string,
	message: string,
	name: string,
}; 

const AuthContext = React.createContext<null>(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
	const intl = useIntl();
	const [currentUser, setCurrentUser] = useState<string | null>(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [currentUserId, setCurrentUserId] = useState<string | 0>(0);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			setIsLoading(true);
			const unsubsribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user) {
						setCurrentUser(user.email);
						setCurrentUserId(user.uid);
						console.log("onAuthStateChanged 111");
						dispatch(requireAuthorization(AuthorizationStatus.AUTH));
						setIsLoading(false);
					} else {
						setCurrentUser(null);
						setCurrentUserId(0);
						dispatch(requireAuthorization(AuthorizationStatus.UNKNOWN));
					}
				}
			);
			return unsubsribe;
		},
		[]
	);

	const signup = async ({
		email, password
	}: SProps) => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			history.push(AppRoute.LOGIN);

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const login = async ({ email, password }:SProps) => {
		try {
			const result = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log("login 111");
			setCurrentUser(result.user.email);
			setCurrentUserId(result.user.uid);
			dispatch(requireAuthorization(AuthorizationStatus.AUTH));
			history.push(AppRoute.DASHBOARD);

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const logout = () => {
		return signOut(auth).then(() => {
			dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
		});
	};

	const resetPassword = (email:string) => {
		return auth.sendPasswordResetEmail(email);
	};

	const updateEmail = (email:string) => {
		return currentUser.updateEmail(email);
	};

	const updatePassword = (password:string) => {
		return currentUser.updatePassword(password);
	};

	const googlePopupSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(
				auth,
				provider
			); 
			console.log("googlePopupSignIn 111"); 
			setCurrentUser(result.user.email);
			setCurrentUserId(result.user.uid);
			dispatch(requireAuthorization(AuthorizationStatus.AUTH));
			history.push(AppRoute.DASHBOARD);
		} catch (error:Error) {
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

	console.log("isLoading AuthContext  " + isLoading);
	console.log("isLoading AuthContext currentUser " + currentUser);

	return (
		<AuthContext.Provider value={value}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
};