import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppRoute } from "utils/const";
import { makeStyles } from "@mui/styles";
//import { ClassNames } from "@emotion/react";  doesn't work
import {
	Box, Typography, Link
} from "@mui/material";
import { ReactComponent as LogoSvg } from "assets/common/logo.svg";
import { ReactComponent as ArrowLeftSvg } from "assets/common/arrow_left.svg";

const useStyles = makeStyles((theme) => ({
	header: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: 0,
		minHeight: 100,
		padding: "0 30px",
		background: "rgba(0, 0, 0, 0.2)",
		zIndex: 1,
	},

	headerWrapper: {
		position: "relative",
		width: "100%",
		maxWidth: "1180px",
		//padding: "0 130px",
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			//padding: 0,
			maaxWidth: "100%",
		},
	},
	headerBack: {
		display: "flex",
		alignItems: "center",
		fontWeight: "600",
		color: theme.palette.primary.main,
		textDecoration: "none",
		textTransform: "capitalize",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",

			"& svg": {
				transform: "translateX(-5px)",
			},
		},
		"& svg": {
			width: "28px",
			height: "14px",
			marginRight: "10px",
			transition: "0.3s ease",
		},
	},
	headerLink: {
		position: "absolute",
		right: 0,
		top: 0,
		width: "95px",
		height: "107px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.8",
		},
		[theme.breakpoints.down("md")]: {
			right: "0",
		},
	},
	headerWrapperMain: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "end",
		bottom: "-55.6%",
		width: "95px",
		height: "107px",
	},
}));


const Header = ({ isMain = false }) => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.header}
		>
			{isMain ? (
				<Box className={classes.headerWrapperMain}>
					<LogoSvg />
				</Box>
			) : (
				<Box className={classes.headerWrapper}>
					<Link
						component={RouterLink}
						to={AppRoute.ROOT}
						className={classes.headerBack}
					>
						<ArrowLeftSvg />
						<Typography variant="h3">Back To Home</Typography>
					</Link>
					<Link
						component={RouterLink}
						to={AppRoute.ROOT}
						className={classes.headerLink}
					>
						<LogoSvg />
					</Link>
				</Box>
			)}
		</Box>
	);
};

export default Header;
