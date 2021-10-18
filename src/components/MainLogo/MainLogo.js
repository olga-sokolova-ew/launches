import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ReactComponent as LogoSvg } from "../../img/rocketLogo.svg";

const useStyles = makeStyles({
	main_logo__wrapper: {
		display: "flex",
		position: "relative",
		width: "100%",
		height: "100%",

	},
	main_logo__img: {
		position: "relative",
		margin: "0 auto",
		alignSelf: "start",
		justifyContent: "center",
		color: "#FFFFFF",
		width: "80px",
		height: "80px",
		zIndex: 1,

	},
	main_logo__circle: {
		position: "absolute",
		bottom: "0",
		width: "95px",
		height: "95px",
		background: "linear-gradient(149.66deg, #4A00E0 -15.18%, #1C2056 81.54%)",
		borderRadius: "50%",
	}
});


const MainLogo = () => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.main_logo__wrapper}
		>
			<Box
				component="div"
				className={classes.main_logo__circle}
			>
			</Box>
			<Box
				component="div"
				className={classes.main_logo__img}
			>
				<LogoSvg />
			</Box>

		</Box>
	);
};

export default MainLogo;