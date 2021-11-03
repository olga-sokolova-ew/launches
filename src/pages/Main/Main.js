
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Container, Box } from "@mui/material";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import Loader from "components/common/Loader/Loader";
import MainHero from "components/main/MainHero/MainHero";
import EventsSwiper from "components/main/EventsSwiper/EventsSwiper";
import LaunchesBlock from "components/main/LaunchesBlock/LaunchesBlock";
import { fetchLaunchList } from "redux/launchData/fetches";
import { fetchEventList } from "redux/eventData/fetches";
import {requireAuthorization} from "redux/user/sliceReducer";
import { AuthorizationStatus, launchQnt } from "utils/const";
//import { toast } from "react-toastify";
import { useAuth } from "contexts/AuthContext";
import { useIntl } from "react-intl";


const useStyles = makeStyles((theme) => ({
	pageWrapper: {
		position: "relative",
		padding: "0",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	pageContent: {
		padding: "118px 130px 100px",
		marginTop: "-170px",
		maxWidth: "1440px",
		minHeight: "100px", // delete
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#1C2056",
		[theme.breakpoints.down("lg")]: {
			marginTop: "-50px",
			padding: "50px",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "-20px",
			padding: "20px",
		},
	},
	errorsBlock: {
		fontSize: 0,
		color: "rgba(0,0,0,0)",
		opacity: 0,
		visibility: 0

	}
}));

function Main() {
		const classes = useStyles();
		const { currentUser } = useAuth();
		const intl = useIntl();

		const dispatch = useDispatch();

		const events = useSelector(state => state.event.events);
		const launches = useSelector(state => state.launch.launches);
		const isEventsLoaded = useSelector(state => state.event.isEventsLoaded);
		const isLaunchesLoaded = useSelector(state => state.launch.isLaunchesLoaded);
		//const launchStatus = useSelector(state => state.launch.launchStatus);

	//const launchError = useSelector(state => state.launch.launchError);

	//const currentLaunch = useSelector(state => state.launch.currentLaunch);
	//const isCurrentLaunch = useSelector(state => state.launch.isCurrentLaunch);
		//const customId = "loading";
		//const customIdError = "errorLoading";


		const [showenLaunchesQnt, setShowenLaunchesQnt] = useState(launchQnt);

		useEffect(
			() => {
				dispatch(fetchEventList());
				dispatch(fetchLaunchList(intl));
				if (currentUser) {
					dispatch(requireAuthorization(AuthorizationStatus.AUTH));
				}
			},
			[currentUser]
		);

		const onShowAllClick = () => {
			setShowenLaunchesQnt(isLaunchesLoaded ? launches.lenght : 0);
		};
		const onShowMoreClick = () => {
			setShowenLaunchesQnt(showenLaunchesQnt + launchQnt);
		};

		return (
		<div className={classes.pageWrapper}>
			<Header isMain />
			<MainHero onShowAllClick={onShowAllClick} />

			<Container maxWidth="lg">
				{(isEventsLoaded && isLaunchesLoaded) ?
					<section className={classes.pageContent}>

						<EventsSwiper events={events} />

						{isLaunchesLoaded &&
							<LaunchesBlock
								launches={launches}
								onShowMore={onShowMoreClick}
								showenLaunchesQnt={showenLaunchesQnt}
							/>}
					</section>
					:
					<Box  className={classes.errorsBlock}>
						<Loader />
						{/*
						{(launchStatus === "loading") && toast.info(
							"Please, wait ...",
							{ toastId: customId }
						)}
						{(launchStatus === "rejected") && toast.error(
							"Server error",
							{
								toastId: customIdError
							}
						)}*/}
					</Box>
				}
			</Container>
			<Footer />
		</div>
		);
}


export default Main;