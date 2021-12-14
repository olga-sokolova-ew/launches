
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {Container, Typography} from "@mui/material";
import { Theme } from "@material-ui/core";
import PageLayout from "layouts/PageLayout";
import Loader from "components/common/Loader/Loader";
import LaunchHero from "components/launch/LaunchHero/LaunchHero";
import LaunchPageContent from "components/launch/LaunchPageContent/LaunchPageContent";
import { fetchCurrentLaunch } from "redux/launchData/fetches";

const useStyles = makeStyles((theme:Theme) => ({
	pageContent: {
		position: "relative",
		padding: "100px 130px 100px",
		marginTop: "-170px",
		maxWidth: "1440px",
		minHeight: "100px", // delete
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#1C2056",
		zIndex: 2,
		[theme.breakpoints.down("lg")]: {
			marginTop: "-50px",
			padding: "50px",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "-20px",
			padding: "20px",
		},
	}
}));

const LaunchPage = () => {
	const launchParam = useParams();
	const classes = useStyles();

	const currentLaunch = useSelector(state => state.launch.currentLaunch);
	const isCurrentLaunch = useSelector(state => state.launch.isCurrentLaunch);
	const lunchCurrentStatus = useSelector(state => state.launch.launchCurrentStatus);
	const lunchCurrentError = useSelector(state => state.launch.launchCurrentError);

	const dispatch = useDispatch();

	const onLoadLaunch = (id) => {
		dispatch(fetchCurrentLaunch(id));
	};


	useEffect(
		() => {
			onLoadLaunch(launchParam?.id);
		},
		[launchParam?.id]
	);

	return (
		<PageLayout>
			{(!isCurrentLaunch) ?
				<>
					<Loader />
					{(lunchCurrentStatus === "rejected") &&
						<Typography
							variant="h3"
							textAlign="center"
						>
							{lunchCurrentError}
						</Typography>
					}
				</>
				:
				<>
					<LaunchHero launch={currentLaunch} />

					<Container maxWidth="lg">
						<section className={classes.pageContent} >

							<LaunchPageContent launch={currentLaunch} />
						</section>
					</Container>
				</>
			}
		</PageLayout>
	);
};

export default LaunchPage;