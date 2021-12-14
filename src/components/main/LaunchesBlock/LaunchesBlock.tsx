import { makeStyles } from "@mui/styles";
import {
	Box, Grid, Typography
} from "@mui/material";
import { useIntl } from "react-intl";
import LaunchCard from "../LaunchCard/LaunchCard";
import Loader from "../../common/Loader/Loader";
import TextButton from "../../common/button/TextButton";



const useStyles = makeStyles({
	launchesWrapper: {
		width: "100%",
	},
	launchesTitle: {
		textAlign: "center",
	},
	loaderWrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}
});


const LaunchesBlock = ({ launches, onShowMore, showenLaunchesQnt }) => {
	const classes = useStyles();
	const intl = useIntl();

	const buttonText = intl.formatMessage({id: "loadMoreBtn"});

	return (
		<div className={classes.launchesWrapper}>
			<Typography
				variant="h2"
				mb='30px'
				className={classes.launchesTitle}
			>
				{intl.formatMessage({id: "spaceflightLaunches"})}
			</Typography>

			<Grid
				container
				spacing={2}
			>
				{launches.slice(
					0,
					showenLaunchesQnt
				).map(launch =>
					<LaunchCard
						launch={launch}
						key={launch.id}
					/>)}
				{(showenLaunchesQnt < launches.length) &&
					<Box className={classes.loaderWrapper}>
						<Loader />
						<TextButton
							btnText={buttonText}
							onBtnClick={onShowMore}
						/>
					</Box >}
			</Grid>
		</div>
	);
};

export default LaunchesBlock;