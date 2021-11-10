import { ref, set } from "firebase/database";
import {
	ref as storeRef, uploadBytesResumable, getDownloadURL
} from "firebase/storage";

export const setInfoToDatabase = (
	values, currentUserId, database, fileUrl
) => {
	if (currentUserId === 0) {
		return;
	}
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
	);
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