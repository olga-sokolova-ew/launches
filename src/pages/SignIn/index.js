import {
	Box,
	Container,
} from "@material-ui/core";
import RegisterForm from "components/forms/RegisterForm";


const Register = () => {

	/*const onSubmit = (
		evt, email, password
	) => {
		evt.preventDefault();
		signup(
			email,
			password
		);


	};*/

	return (
        <Box
	display={"flex"}
	flexDirection={"column"}
	height="100vh"
	justifyContent="center"
        >
            <Container maxWidth="sm">
                <RegisterForm
	//onSubmit={onSubmit}
	initialValues={{}}
                />
            </Container>
        </Box>
	);
};

export default Register;
