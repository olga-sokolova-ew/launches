import { ref, set } from "firebase/database";
import {
	ref as storeRef, uploadBytesResumable, getDownloadURL
} from "firebase/storage";
import { showAddProductSuccessToast, showAddProductFailToast } from "utils/toastHelper";

export const setInfoToDatabase = (
	values, currentUserId, database, fileUrl
) => {
	if (currentUserId === 0) {
		return;
	}
	console.log(currentUserId);
	set(
		ref(
			database,
			`users/${currentUserId}/products/` + values.productName
		),
		{
			id: Date.now(),
			title: values.productName,
			quantity: values.productQnt,
			product_picture: fileUrl
		}
	)
		.then(() => {
			showAddProductSuccessToast();
		})
		.catch((error) => {
			showAddProductFailToast();
		});
};

export const uploadFile = async (
	file, storage
) => {
	const fileRef = storeRef(
		storage,
		"images/" + file.name
	);
	await uploadBytesResumable(
		fileRef,
		file
	);
	const fileUrl = await getDownloadURL(fileRef);
	return fileUrl;
};