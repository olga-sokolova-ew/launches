import { Link } from "react-router-dom";
import { AppRoute } from "utils/const";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import {  Typography } from "@mui/material";
import { ButtonUnstyled } from "@mui/core";
import { ReactComponent as LogoSvg } from "assets/common/logo.svg";
import { useAuth } from "contexts/AuthContext";


const useStyles = makeStyles((theme) => ({
	footer: {
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		border: 0,
		minHeight: 100,
		padding: "0 80px",
		background: "#181B48",
		[theme.breakpoints.down("sm")]: {
			padding: "15px",
		},
	},

	footerWrapper: {
		width: "100%",
		maxWidth: "1180px",
		margin: "0 auto",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column"
		},
	},
	loginWrap: {
		display: "flex",
		alignItems: "center",
	},
	footerLink: {
		width: "49px",
		height: "55px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.9",
		},

		"& svg": {
			width: "49px",
			height: "55px",
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: "30px",
		},
	},
	footerLoginLink: {
		color: theme.palette.primary.text,
		fontSize: "18px",
		textTransform: "none",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},
		
	},
	footerCopyright: {
		color: "#C0C0C0",

	},
	logoutBtn: {
		padding: "3px 7px",
		background: "rgba(0,0,0,0)",
		border: "none",
		color: theme.palette.primary.text,
		fontSize: "18px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},
	}
}));


const Footer = () => {
	const classes = useStyles();
	const date = new Date();
	const { currentUser,
		logout,} = useAuth();

	const onLogoutClick = () => logout();
	console.log(currentUser);

	return (
		<Box
			component="div"
			className={classes.footer}
		>
			<Box
				component="div"
				className={classes.footerWrapper}
			>
				<Link
					to={AppRoute.ROOT}
					className={classes.footerLink}
				>

					<LogoSvg />
				</Link>
				<Box className={classes.loginWrap}>
					{currentUser && 
					<>
						<Typography
							variant="body1"
							component="div"
							className={classes.footerCopyright}
						>
							Login as {"  " + currentUser}
						</Typography>
						<ButtonUnstyled
							color="primary"
							size="small"
							className={classes.logoutBtn}
							onClick = {onLogoutClick}
						>Logout
						</ButtonUnstyled>
					</>}

					{(!currentUser) && <Link
						to={AppRoute.LOGIN}
						className={classes.footerLoginLink}
					>
						Login
                        </Link>}

				</Box>


				<Typography
					variant="body1"
					component="div"
					className={classes.footerCopyright}
				>
					© {date.getFullYear()} Copyright
				</Typography>
			</Box>
		</Box>

	);
};

export default Footer;