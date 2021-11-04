import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";

export const showToast = (error) => {
	const currentId = "errorServer";
	toast.error(
		<FormattedMessage
			id="errorServer"
		/>,
		{ toastId: currentId }
	);
};

export const showWaitMessage = () => {
	const customId = "loading";
	toast.info(
		<FormattedMessage
			id="waitMessage"
		/>,
		{ toastId: customId }
	);
};

export const showServerDetail = (error) => {
	const currentDetailId = "currentDetailId";
	toast.error(
		error,
		{ toastId: currentDetailId }
	);
};