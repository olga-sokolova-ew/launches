import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { AppRoute } from "utils/const";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PageLayout from "layouts/PageLayout";

const useStyles = makeStyles((theme) => ({
	pageWrapper: {
		fontFamily: "Montserrat",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent:"center",
		flexGrow: 1,
		margin: "0 auto",
	},
}));

const NotFound = () => {
	const classes = useStyles();
	return (
    <PageLayout style={{ height: "100vh" }}>
      <Box
	component="div"
	className={classes.pageWrapper}
      >
			<Container maxWidth="lg">
        <h1 >Page not found</h1>
        <Link
	component={RouterLink}
	to={AppRoute.ROOT}
        >
          Link to Main Page
        </Link>
   </Container>
      </Box>

    </PageLayout>
	);
};

export default NotFound;