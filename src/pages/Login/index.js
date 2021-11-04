import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import { useAuth } from "contexts/AuthContext";
import LoginForm from "components/forms/LoginForm";

const Login = () => {
	const { login } = useAuth();

	const initialValuesLogin = { email: "", password: "", };

	const onSubmit = (
		values, form
	) => {
		login(values);
		form.setSubmitting(false);

	};

	const validationSchema =
		Yup.object().shape({
			email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
			password: Yup.string().max(255).required("Password is required")
		});

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			height="100vh"
			justifyContent="center"
		>
			<Container maxWidth="sm" >
				<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Container>
		</Box>
	);
};

export default Login;
