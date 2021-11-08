
import { Formik, Form } from "formik";
import { makeStyles } from "@mui/styles";
import {
	Box, Button, TextField, Typography
} from "@material-ui/core";
import { useIntl } from "react-intl";


const useStyles = makeStyles((theme) => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
			"&:hover": {
				borderColor: theme.palette.secondary.main,
			},
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
		},
		"label": {
			color: theme.palette.secondary.main,
		}
	},
}));

const NewProductForm = ({ initialValues, validationSchema, onSubmit,  onInputChange}) => {
	const intl = useIntl();
	const classes = useStyles();
	

	return (
        <Formik
	initialValues={initialValues}
	validationSchema={validationSchema}
	onSubmit={onSubmit}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
                touched,
                values,
            }) => (
                <Form className={classes.pageContent}>
                    <Box mb={3}>
                        <Typography
	align="center"
	variant="h2"
                        >
                            {intl.formatMessage({ id: "newProduct" })}
                        </Typography>
                    </Box>
                    <TextField
	error={Boolean(touched.productName && errors.productName)}
	fullWidth
	helperText={touched.productName && errors.productName}
	label={intl.formatMessage({ id: "productName" })}
	margin="normal"
	name="productName"
	onBlur={handleBlur}
	onChange={handleChange}
	type="text"
	value={values.productName}
	variant="outlined"
	color="secondary"
	className={classes.textField}
                    />
                    <input
	error={Boolean(touched.picture && errors.picture)}
	label={intl.formatMessage({ id: "picture" })}
	margin="normal"
	name="picture"
	onBlur={handleBlur}
	onChange={onInputChange}
	type="file"
	value={values.picture}
	variant="outlined"
	color="secondary"
                    />
                    <TextField
	error={Boolean(touched.productQnt && errors.productQnt)}
	fullWidth
	helperText={touched.productQnt && errors.productQnt}
	label={intl.formatMessage({ id: "productQuantity" })}
	margin="normal"
	name="productQnt"
	onBlur={handleBlur}
	onChange={handleChange}
	type="number"
	value={values.productQnt}
	variant="outlined"
	color="secondary"
                    />
                    <Box mt={4}>
                        <Button
	color="secondary"
	disabled={isSubmitting}
	fullWidth
	type="submit"
	variant="contained"
                        >
                            {intl.formatMessage({ id: "addNewProduct" })}
                        </Button>
                    </Box>


                </Form>
            )}
        </Formik>
	);
};

export default NewProductForm;
