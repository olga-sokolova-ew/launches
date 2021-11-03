import { toast } from "react-toastify";
import {FormattedMessage} from "react-intl";

export const showToast = (error) => {
	const currentId="errorServer";
	toast.error(
	<FormattedMessage
		id="errorServer"
	/>,
	{ toastId: currentId }
	);
};

export const showServerDetail = (error) => {
	const currentDetailId = "currentDetailId";
	console.log("22222");
	console.log(error);
	console.log(typeof error);
	toast.error(
		error,
		{ toastId: currentDetailId }
	);
};