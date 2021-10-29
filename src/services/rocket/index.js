import { axiosInstance } from "../api";

export const getCurrentRocket = (id) => {
	return axiosInstance.get(`cofig/launcher/${id}`);
};