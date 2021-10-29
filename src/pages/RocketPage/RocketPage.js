
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import PageLayout from "layouts/PageLayout";
import MainHero from "components/main/MainHero/MainHero";
import { fetchCurrentRocket } from "redux/rocketData/fetches";


/*const useStyles = makeStyles(theme => ({

}));*/

const RockedPage = () => {
	const rocketParam = useParams();
	//const classes = useStyles();

	//const currentRocket = useSelector(state => state.rocket.currentRocket);
	//const isCurrentRocket = useSelector(state => state.rocket.isCurrentRocket);
	//const rocketCurrentStatus = useSelector(state => state.rocket.rocketCurrentStatus);
	//const rocketCurrentError = useSelector(state => state.rocket.rocketCurrentError);

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
		<PageLayout>
			<MainHero />

			<Container maxWidth="lg">

			</Container>
		</PageLayout>
	);
};

export default RockedPage;