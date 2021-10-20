import { axiosInstance } from "../api";
import { APIRoute } from "../../utils/const";

export const getEventList = () => {
	return axiosInstance.get(APIRoute.EVENTS);
};