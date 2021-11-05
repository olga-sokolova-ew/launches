import {
	HOURS, MAX_FILE_SIZE, MINUTE, SECONDS, SUPPORTED_FORMATS
} from "./const";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import { KEY } from "./const";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);


export const isDevelopment = () => process.env.NODE_ENV === "development";

export const getTimeFormate = (endtime) => {
	if (Date.parse(endtime) !== Date.parse(new Date())) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((t / 1000) % SECONDS);
		const minutes = Math.floor((t / 1000 / MINUTE) % MINUTE);
		const hours = Math.floor((t / (1000 * SECONDS * MINUTE)) % HOURS);
		const days = Math.floor(t / (1000 * SECONDS * MINUTE * HOURS));
		return (
			(days <= 9 ? `0` + days : days) +
			` : ` +
			(hours <= 9 ? `0` + hours : hours) +
			` : ` +
			(minutes <= 9 ? `0` + minutes : minutes) +
			` : ` +
			(seconds <= 9 ? `0` + seconds : seconds)
		);
	}

	return 0;
};

// encrypt user info
export const encryptUserInfo = (authData) => {
	const authDataForLocalStorage = AES.encrypt(
		JSON.stringify(authData),
		KEY
	);
	localStorage.setItem(
		"auth",
		authDataForLocalStorage
	);
};

// decrypt user info
export const deryptUserInfo = () => {
	const authData = localStorage.getItem("auth")?.toString();
	if (authData) {
		const decryptedAuthData = AES.decrypt(
			authData,
			KEY
		);
		return JSON.parse(decryptedAuthData?.toString(CryptoJS.enc.Utf8));
	} else {
		return null;
	}
};

// check if user session is expired
export const isAuthExpired = () => {
	const authInfo = deryptUserInfo();
	const refreshToken = localStorage.getItem("refreshToken");
	const expiresAt = authInfo?.access_token ? jwtDecode(authInfo?.access_token) : null;

	if (!parseInt(refreshToken))
		return dayjs().isSameOrAfter(dayjs.unix(expiresAt?.exp));
};

export const checkIfFileIsCorrectType = (file) => {
	let valid = true;
	if (!SUPPORTED_FORMATS.includes(file.type)) {
		valid = false;
	}
	return valid;
};

export const checkIfFileIsTooBig = (file) => {
	let valid = true;
	const size = file.size;
	if (size > MAX_FILE_SIZE) {
		valid = false;
	}

	return valid;
};

