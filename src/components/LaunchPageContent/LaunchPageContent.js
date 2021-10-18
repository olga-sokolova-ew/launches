import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles({
	launch__content_wrap: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#fff",

		"& h5": {
			color: "#F1EBFF",
		}
	},
});


const LaunchPageContent = ({ launch }) => {
	const classes = useStyles();

	return (
		<div className={classes.launches__wrapper}>
			{/*launch.videoURLs[0] && <video src={launch.videoURLs} className="launch__player"></video>*/}

			<Typography
				variant="h2"
				mb="20px"
			>
				Overview
			</Typography>

			<Box className={classes.launch__content_wrap}>
				<Typography
					variant="h5"
					mb="5px"
					display="inline"
				>
					Destination: inline{" "}
				</Typography>
				<Typography
					variant="body"
					mb="5px"
					display="inline"
				>
					{launch.launchDestination} inline{" "}
				</Typography>
				<Typography
					variant="h5"
					mb="5px"
					display="inline"
				>
					Mission: inline{" "}
				</Typography>
				<Typography
					variant="h5"
					mb="5px"
					display="inline"
				>
					{launch.launchMission} inline{" "}
				</Typography>
			</Box>
		</div>
	);
};

export default LaunchPageContent;