
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Loader from "components/Loader/Loader";
import MainHero from "components/MainHero/MainHero";
import EventsSwiper from "components/EventsSwiper/EventsSwiper";
import LaunchesBlock from "components/LaunchesBlock/LaunchesBlock";
import { fetchEventsList, fetchLaunchesList } from "redux/api-actions";
import { launchQnt } from "utils/const";
import { loadLaunches, loadCurrentLaunch } from "redux/launchData/launchData";
/*import {
	getEventError, getEvents, getEventsLoadedStatus
} from "redux/eventData/selectors";
import {
	getLaunches, getLaunchError, getLaunchesLoadedStatus 
} from "redux/launchData/selectors";*/


const useStyles = makeStyles((theme) => ({
	page_wrapper: {
		position: "relative",
		padding: "0",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	page_content: {
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
	}
}));

function Main() {
		const classes = useStyles();

		const dispatch = useDispatch();

	//const events = useSelector(getEvents);
		const launches = useSelector(state => state.launch.launches);
	//const isEventsLoaded = useSelector(getEventsLoadedStatus);
		const isLaunchesLoaded = useSelector(state => state.launch.isLaunchesLoaded);
	
	//const eventError = useSelector(getEventError);

		//const currentLaunch = useSelector(state => state.launch.currentLaunch);
		//const isCurrentLaunch = useSelector(state => state.launch.isCurrentLaunch);

		const [showenLaunchesQnt, setShowenLaunchesQnt] = useState(launchQnt);

		useEffect(
			() => {
				dispatch(fetchEventsList());
				dispatch(fetchLaunchesList());
			},
			[]
		);


		const onShowAllClick = () => {
			setShowenLaunchesQnt(isLaunchesLoaded ? launches.lenght : 0);
		};
		const onShowMoreClick = () => {
			setShowenLaunchesQnt(showenLaunchesQnt + launchQnt);
		};

		return (
		<div className={classes.page_wrapper}>
			<Header isMain />
			<MainHero onShowAllClick={onShowAllClick} />

			<Container maxWidth="lg">
				{/* {(isEventsLoaded && isLaunchesLoaded) ?*/
					isLaunchesLoaded ?
						<section className={classes.page_content}>

							{/*<EventsSwiper events={events} />*/}

							{isLaunchesLoaded &&
								<LaunchesBlock
									launches={launches}
									onShowMore={onShowMoreClick}
									showenLaunchesQnt={showenLaunchesQnt}
								/>}
						</section>
						:
						<Loader />
				}
			</Container>
			<Footer />
		</div>
		);
}


export default Main;