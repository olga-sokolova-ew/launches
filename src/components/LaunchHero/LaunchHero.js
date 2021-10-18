import {
	useRef, useState, useEffect
} from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core/styles";
import { getTimeFormate } from "utils/helper";


const useStyles = makeStyles((theme) => ({
	hero__about: {
		maxWidth: "595px",
		marginBottom: "50px",
		color: theme.palette.info.main,
		fontFamily: "Roboto",
		fontWeight: "400",
		fontSize: "17px",
		lineHeight: "165%",
	},
	hero__wrapper: {
		position: "relative",
		fontFamily: "Montserrat",
		width: "100%",
		//height: "58.94vw",
		marginTop: "-100px",
		display: "flex",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		backgroundPosition: "top center",
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
		"&::after": {
			position: "absolute",
			content: "",
			width: "100%",
			height: "100%",
			background: "linear-gradient(1.22deg, #181B48 3.9%, rgba(24, 27, 72, 0) 98.66%)",
		},
	},
	hero__text: {
		fontFamily: "Montserrat",
		marginBottom: "30px",
		fontWeight: "800",
		fontSize: "76px",
		lineHeight: "121%",
		color: theme.palette.primary.main,
	},
	hero__text_wrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		fontFamily: "Montserrat",
		//maxWidth: "900px",
		paddingTop: "28%", //"23.6%",
		//paddingLeft: "108px",
		paddingBottom: "24.4vw",
		[theme.breakpoints.down("lg")]: {
			paddingTop: "260px",
		},
		[theme.breakpoints.down("md")]: {
			paddingTop: "200px",
		},
		[theme.breakpoints.down("sm")]: {
			paddingLeft: 0,
		},

	},
	timer__wrapper: {
		backgroundColor: "#4A00E0",
		padding: "50px 70px",
		minHeight: "190px",
		minWidth: "780px",

		"& h1": {
			textAlign: "start",
			paddingLeft: "40px"
		}

	},
	timer: {
		color: theme.palette.primary.main,
	},
}));


const LaunchHero = ({ launch }) => {
	const classes = useStyles();
	const [timerStr, setTimerStr] = useState(getTimeFormate(launch.launchDate));
	const [done, setDone] = useState(false);
	const timerRef = useRef(null);

	useEffect(
		() => {
			function tick() {
					setTimerStr(getTimeFormate(launch.launchDate));
			}
			timerRef.current = setInterval(
				() => tick(),
				1000
			);
		},
		[launch.launchDate]
	);

	useEffect(
		() => {
			if (timerStr === 0) {
				clearInterval(timerRef.current);
				setDone(true);
			}
		},
		[timerStr]
	);

	return (

		<Box
			component="div"
			className={classes.hero__wrapper}
			style={{ backgroundImage: `url(${launch.launchImg})` }}
		>
			<Container maxWidth="lg">
				<Box
					component="div"
					className={classes.hero__text_wrapper}
				>
					<Typography
						variant="h1"
						mb="30px"
						color="primary"
						textAlign="center"
					>
						{launch.launchName}
					</Typography>

					<Typography
						variant="h3"
						mb="40px"
						className={classes.hero__about}
						textAlign="center"
					>
						Go for Launch
					</Typography>

					<Box className={classes.timer__wrapper}>
						<Typography
							variant="h1"
							className={classes.timer}
							ref={timerRef}
						>
							{!done ? timerStr : "DONE"}
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default LaunchHero;