import { Link as RouterLink } from "react-router-dom";
import { AppRoute } from "utils/const";
import { makeStyles } from "@mui/styles";
import {Box, Link} from "@mui/material";


const useStyles = makeStyles((theme) => ({
	menuWrap: {
		maxWidth: "1180px",
		padding: "20px 0",
		margin: 0,
		display: "flex",
		alignItems: "center",

	},
	menuLink: {
		display: "inline-flex",
		textDecoration: "none",
		transition: "0.3s ease",
		marginRight: "30px !important",
		"&:hover": {
			opacity: "0.9",
		},
	},

}));


const UserMenu = ({ isMain = false }) => {
	const classes = useStyles();

	return (
        <Box
	component="div"
	className={classes.menuWrap}
        >
            <Link
	component={RouterLink}
	underline="hover"
	to={AppRoute.DASHBOARD}
	className={classes.menuLink}
            >

                Dashboard
            </Link>
            <Link
	component={RouterLink}
	underline="hover"
	to={AppRoute.ADDPRODUCT_PAGE}
	className={classes.menuLink}
            >

                Add New Product
            </Link>

        </Box>
	);
};

export default UserMenu;
