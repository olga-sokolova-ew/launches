import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles({
	launchContentWrap: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#fff",

		"& h5": {
			color: "#F1EBFF",
		}
	},
	launchLineWrap: {
		display: "block",
	},
	launchVideoWrap: {
		widthh: "100%",
		height: "inherit",
	}
});


const LaunchPageContent = ({ launch }) => {
	const classes = useStyles();

	return (
		<div className={classes.launchesWrapper}>
			{/*launch.videoURLs && <video
				src={launch.videoURLs}
				className="launch__player"
			>
			</video>*/}
			<iframe
				className={classes.launchVideoWrap}
				src={launch.videoURLs}
				frameBorder="0"
				allowFullScreen
				title="Embedded youtube"
			/>

			<Typography
				variant="h2"
				mb="20px"
			>
				Overview
			</Typography>

			<Box className={classes.launchContentWrap}>
				{launch.launchDestination &&
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							Destination:
						</Typography>
						<Typography
							variant="body"
							component="span"
							mb="5px"
							display="inline"
						>
							{" " + launch.launchDestination}
						</Typography>
					</Box>}
				{launch.launchMission &&	
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							Mission:
						</Typography>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							{" " + launch.launchMission}
						</Typography>
					</Box>}

			</Box>
		</div>
	);
};

export default LaunchPageContent;