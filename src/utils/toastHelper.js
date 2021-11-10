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
export const showAddProductSuccessToast = () => {
	const currentId = "productSuccess";
	toast.error(
		<FormattedMessage
			id="addProductSuccess"
		/>,
		{ toastId: currentId }
	);
};
export const showAddProductFailToast = () => {
	const currentId = "productFail";
	toast.error(
		<FormattedMessage
			id="addProductFail"
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

export const outputtingError = (
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

export const outputtingGoogleError = (
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