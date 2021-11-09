import { useState } from "react";
import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import PageLayout from "layouts/PageLayout";
import NewProductForm from "components/forms/NewProductForm";
import { MAX_FILE_SIZE, SUPPORTED_FORMATS } from "utils/const";
import { database, storage } from "firebase/firebaseConfig";
import { ref, set } from "firebase/database";
import {
	ref as storeRef, uploadBytesResumable, getDownloadURL
} from "firebase/storage";


const AddProductPage = () => {
	const [file, setFile] = useState("");
	const [fileUrl, setFileUrl] = useState(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: 0 };
	console.log(file);


	const handleFileChange = async (evt) => {
		const file = evt.target.files[0];
		const fileRef = storeRef(
			storage,
			"images/" + file.name
		);
		await uploadBytesResumable(
			fileRef,
			file
		);
		setFileUrl(await getDownloadURL(fileRef));
		setFile(file);
		console.log("2");
		console.log(file);
		//validateFile(file);
	};

	const onSubmit = (
		values, form
	) => {
		set(
			ref(
				database,
				`products/` + values.productName
			),
			{
				id: Date.now(),
				title: values.productName,
				quantity: values.productQnt,
				product_picture: fileUrl
			}
		);

		form.setSubmitting(false);
		form.resetForm();
	};

	const validateFile = (value) => {
		console.log("111");
		let error;
		if (value.size >= MAX_FILE_SIZE) {
			error = "Uploaded file is too big.";
		}
		let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
		if (SUPPORTED_FORMATS.includes(type)) {
			error = "File formate is wrong2.";
		}
		console.log(error);
		return error;
	};

	const validationSchema =
		Yup.object().shape({
			productName: Yup.string().min(2).max(255).required("Product name is required"),
			/*file: Yup.mixed()
				//.nullable()
				.notRequired()
				/*.test(
					"is-correct-file",
					"File formate is wrong1.",
					(value) =>
						value && SUPPORTED_FORMATS.includes(value.type)
				)
				.test(
					"fileSize",
					"Uploaded file is too big.",
					(value) => value && value.size <= MAX_FILE_SIZE
				)
				/*.test(
					"requireed",
					"File is required",
					(value) => {
						if (value) {
						 return true;
						}
					}
				)*/

			//.required("File is required"),

			productQnt: Yup.number().min(0)
		});

	return (
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				height="100vh"
				justifyContent="center"
			>
				<Container maxWidth="sm" >
					<NewProductForm
						initialValues={initialValuesAddProduct}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
						onInputChange={handleFileChange}
						file={file}
						validateFile={validateFile}

					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default AddProductPage;
