import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ReactComponent as LoaderSvg } from "assets/common/loader.svg";

const useStyles = makeStyles({
	loader: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		flexGrow: 1,

		"& svg": {
			width: "56px",
			height: "56px",
			animation: `$lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite`,

		}
	},
	"@keyframes lds-roller": {
		"0%": {
			transform: "rotate(0deg)",
		},
		"100%": {
			transform: "rotate(360deg)",
		}
	},
});


const Loader = () => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.loader}
		>
			<LoaderSvg />
		</Box>
	);
};

export default Loader;