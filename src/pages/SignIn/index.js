import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import { useAuth } from "contexts/AuthContext";
import RegisterForm from "components/forms/RegisterForm";


const Register = () => {
	const { signup } = useAuth();

	const initialValuesSignIn = { email: "", password: "", passwordConfirm: "" };

	const onSubmit = (
		values, form
	) => {

		signup(values);
		form.setSubmitting(false);
	};
	const validationSchema =
		Yup.object().shape({
			email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
			password: Yup.string().max(255).required("password is required"),
			passwordConfirm: Yup.string().max(255).required("confirm password is required"),
		});

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			height="100vh"
			justifyContent="center"
		>
			<Container maxWidth="sm">
				<RegisterForm
					initialValues={initialValuesSignIn}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Container>
		</Box>
	);
};

export default Register;
