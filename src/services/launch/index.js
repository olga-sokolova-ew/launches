import { axiosInstance } from "../api";
import { APIRoute } from "../../utils/const";

export const getLaunchList = () => {
	return axiosInstance.get(APIRoute.LAUNCHES);
};

export const getCurrentLaunch = (id) => {
	return axiosInstance.get(`launch/${id}`);
};
