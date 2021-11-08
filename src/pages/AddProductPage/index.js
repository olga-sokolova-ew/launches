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
	const [file, setFile] = useState(null);
	const [fileUrl, setFileUrl] = useState(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: "0" };


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
		setFileUrl(await getDownloadURL( fileRef));
		setFile(file);
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

	const validationSchema =
		Yup.object().shape({
			productName: Yup.string().max(255).required("Product name is required"),
			file: Yup.mixed()
				.test(
					"MAX_FILE_SIZE",
					"Uploaded file is too big.",
					(value) => !value || (value && value.size >= MAX_FILE_SIZE)
				)
				.test(
					"is-correct-file",
					"VALIDATION_FIELD_FILE_WRONG_TYPE",
					(value) =>
						!value || (value && SUPPORTED_FORMATS.includes(value.type))
				)
				.required("File is required"),
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

					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default AddProductPage;
