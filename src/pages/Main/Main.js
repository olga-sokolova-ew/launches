
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import Loader from "components/common/Loader/Loader";
import MainHero from "components/main/MainHero/MainHero";
import EventsSwiper from "components/main/EventsSwiper/EventsSwiper";
import LaunchesBlock from "components/main/LaunchesBlock/LaunchesBlock";
import { fetchLaunchList } from "redux/launchData/fetches";
import { fetchEventList } from "redux/eventData/fetches";
import { launchQnt } from "utils/const";
import { toastr } from "react-redux-toastr";


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
	}
}));

function Main() {
		const classes = useStyles();

		const dispatch = useDispatch();

		const events = useSelector(state => state.event.events);
		const launches = useSelector(state => state.launch.launches);
		const isEventsLoaded = useSelector(state => state.event.isEventsLoaded);
		const isLaunchesLoaded = useSelector(state => state.launch.isLaunchesLoaded);
		const launchStatus = useSelector(state => state.launch.launchStatus);

		const launchError = useSelector(state => state.launch.launchError);

	//const currentLaunch = useSelector(state => state.launch.currentLaunch);
	//const isCurrentLaunch = useSelector(state => state.launch.isCurrentLaunch);

		const [showenLaunchesQnt, setShowenLaunchesQnt] = useState(launchQnt);

		useEffect(
			() => {
				dispatch(fetchEventList());
				dispatch(fetchLaunchList());
			},
			[]
		);

		const toastrType1 = "info";
		const toastrOptions1 = {
			id: "loadingId",
			icon: toastrType1,
			status: toastrType1
		};

		const toastrType2 = "error";





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
					<>
						<Loader />
						{(launchStatus === "loading") &&
							toastr.info(
								"Loading",
								"Please, wait ...",
								toastrOptions1
							)}
						{(launchStatus !== "loading" && toastr.info) &&
							toastr.remove("loadingId")}	{/*time of removing  = time of message life*/}

						{(launchStatus === "rejected") && toastr.error(
							"Error",
							"Server error"
							//{launchError}
						)}
					</>
				}
			</Container>
			<Footer />
		</div>
		);
}


export default Main;