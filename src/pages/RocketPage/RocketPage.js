
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import MainHero from "../../components/MainHero/MainHero";
import { fetchCurrentRocket } from "../../redux/api-actions";
import { getCurrentRocket, getCurrentRocketStatus } from "../../redux/rocketData/selectors";


const useStyles = makeStyles(theme => ({

}));

const RockedPage = () => {
	const rocketParam = useParams();
	const classes = useStyles();

	const currentRocket = useSelector(getCurrentRocket);
	const isCurrentRocket = useSelector(getCurrentRocketStatus);

	const dispatch = useDispatch();

	const onLoadRocket = (id) => {
		dispatch(fetchCurrentRocket(id));
	};

	useEffect(
		() => {
			onLoadRocket(rocketParam.id);
		},
		[rocketParam.id, onLoadRocket]
	);

	return (
		<div className={classes.page_wrapper}>
			<Header />
			<MainHero />

			<Container maxWidth="lg">

			</Container>
			<Footer />
		</div>
	);
};

export default RockedPage;