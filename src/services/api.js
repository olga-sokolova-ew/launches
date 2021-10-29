import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const REQUEST_TIMEOUT = process.env.REACT_APP_REQUEST_TIMEOUT;


const axiosInstance = axios.create({
	method: "get",
	baseURL: BACKEND_URL,
	timeout: REQUEST_TIMEOUT,
	responseType: "json",
	maxContentLength: 2000,
	validateStatus: (status) => status >= 200 && status < 300,
	maxRedirects: 5,
});

const onSuccess = (response) => response;

const onFail = (err) => {
	//const { response } = err;

	throw err;
};

axiosInstance.interceptors.response.use(
	onSuccess,
	onFail
);
export { axiosInstance };
