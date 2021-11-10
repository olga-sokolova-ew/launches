import { useState } from "react";
import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import PageLayout from "layouts/PageLayout";
import NewProductForm from "components/forms/NewProductForm";
//import { MAX_FILE_SIZE, SUPPORTED_FORMATS } from "utils/const";
import { database, storage } from "firebase/firebaseConfig";
import {setInfoToDatabase, uploadFile} from "firebase/actions";

import { useAuth } from "contexts/AuthContext";


const AddProductPage = () => {
	const [file, setFile] = useState("");
	const [fileUrl, setFileUrl] = useState(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: 0 };
	const { currentUserId } = useAuth();

	const handleFileChange = async (evt) => {
		const file = evt.target.files[0];
		
		setFileUrl(uploadFile(
			file,
			storage
		));
		setFile(file);
		console.log("2");
		console.log(file);
		//validateFile(file);
	};

	const onSubmit = (
		values, form
	) => {
		setInfoToDatabase(
			values,
			currentUserId,
			database,
			fileUrl
		);

		form.setSubmitting(false);
		form.resetForm();
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
						//validateFile={validateFile}

					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default AddProductPage;
