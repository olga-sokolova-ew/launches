
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import {
	Box,
	Button,
	Link,
	TextField,
	Typography
} from "@material-ui/core";
import { useAuth } from "contexts/AuthContext";

const useStyles = makeStyles(theme => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
			"&:hover": {
				borderColor: theme.palette.secondary.main,
			}
		},
		"& .MuiOutlinedInput-root": {
			"& input": {
				color: theme.palette.secondary.main,
				borderColor: theme.palette.secondary.main,
	
				"&::placeholder": {
					color: theme.palette.secondary.main,
				},
			},
			"& fieldset": {
			  borderColor: theme.palette.secondary.main,
			},
			"&:hover fieldset": {
			  borderColor: "#8E2DE2",
			},
			"&.Mui-focused fieldset": {
			  borderColor: "#4A00E0",
			},
			"& input::placeholder": {
				color: "#4A00E0",
			},
		  },
		  "& label.Mui-focused": {
			color: "#4A00E0",
		  },
		  
		
	},
	textField: {
		"&::placeholder": {
			borderColor: theme.palette.secondary.main,
		},
		"&:hover": {
			borderColor: theme.palette.secondary.main,
		}
	},
	

}));


const LoginForm = ({
	initialValues
}) => {
	const classes = useStyles();
	const { login } = useAuth();

	const onSubmit = async(values) => {		
		await login({...values});
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={Yup.object().shape({
				email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
				password: Yup.string().max(255).required("Password is required")
			})}
			onSubmit={onSubmit}
		>
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				touched,
				values
			}) => (
				<form
					onSubmit={handleSubmit}
					className={classes.pageContent}
				>
					<Box mb={3}>
						<Typography
							align="center"
							variant="h2"
						>
							Login
						</Typography>
					</Box>
					<TextField
						error={Boolean(touched.email && errors.email)}
						fullWidth
						helperText={touched.email && errors.email}
						label="Email Address"
						margin="normal"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						type="email"
						value={values.email}
						variant="outlined"
						color="secondary"
						classes={classes.textField}
						
					/>
					<TextField
						error={Boolean(touched.password && errors.password)}
						fullWidth
						helperText={touched.password && errors.password}
						label="Password"
						margin="normal"
						name="password"
						onBlur={handleBlur}
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
						color="secondary"
						classes={classes.textField}
					/>
					<Box mt={4}>
						<Button
							color="secondary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
						>
							Sign in now
						</Button>
					</Box>
					<Box mt={2}>
						<Typography
							color="secondary"
							variant="body1"
						>
							Don&apos;t have an account?
							{" "}
							<Link
								component={RouterLink}
								to="/register"
								variant="body1"
							>
								Sign up
							</Link>
						</Typography>
					</Box>
				</form>
			)}
		</Formik>
	);
};

export default LoginForm;
