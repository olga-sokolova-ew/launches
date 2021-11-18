import { useState } from "react";
import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import PageLayout from "layouts/PageLayout";
import NewProductForm from "components/forms/NewProductForm";
import { database, storage } from "firebase/firebaseConfig";
import { setInfoToDatabase, uploadFile } from "firebase/actions";

import { useAuth } from "contexts/AuthContext";


const AddProductPage = () => {
	const [fileUrl, setFileUrl] = useState(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: 0 };
	const { currentUserId } = useAuth();

	const onInputChange = async (files) => {
		if (files.length === 0) {
			console.log("no files");
			return;
		}
		const currentFileUrl = await uploadFile(
			files[0],
			storage
		);
		setFileUrl(currentFileUrl);
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
			file: Yup.mixed()
				.nullable()
				.notRequired(),
			productQnt: Yup.number().min(0)
		});

	return (
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent="center"
				flexGrow="1"
			>
				<Container maxWidth="sm" >
					<NewProductForm
						initialValues={initialValuesAddProduct}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
						onInputChange={onInputChange}
					//file={file}
					//validateFile={validateFile}

					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default AddProductPage;
