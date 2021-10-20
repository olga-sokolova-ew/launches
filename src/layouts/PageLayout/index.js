import { Box } from "@material-ui/system";
import { makeStyles } from "@mui/styles";
import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";

const useStyles = makeStyles({
	page_wrapper: {
		position: "relative",
		padding: "0",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
});

const PageLayout = ({ children }) => {
	const classes = useStyles();
	return (
        <Box className={classes.page_wrapper}>
            <Header />
            {children}
            <Footer />
        </ Box>
	);
};

export default PageLayout;
