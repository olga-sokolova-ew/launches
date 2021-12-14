import * as React from "react";
import { Box } from "@material-ui/system";
import { makeStyles } from "@mui/styles";
import Footer from "components/common/Footer/Footer";
import Header from "components/common/Header/Header";

const useStyles = makeStyles({
	pageWrapper: {
		position: "relative",
		padding: "0",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
});

const PageLayout: React.FC = ({ children }) => {
	const classes = useStyles();
	return (
        <Box className={classes.pageWrapper}>
            <Header />
            {children}
            <Footer />
        </ Box>
	);
};

export default PageLayout;
