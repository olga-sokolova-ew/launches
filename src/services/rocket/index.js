import { axiosInstance } from "../api";
import { APIRoute } from "../../utils/const";

export const getCurrentRocket = (id) => {
	return axiosInstance.get(`cofig/launcher/${id}`);
};