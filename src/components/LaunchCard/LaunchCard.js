import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
	Grid, Typography, Paper
} from "@mui/material";
import { format } from "date-fns";
import { ReactComponent as RocketSvg } from "assets/common/rocketLogo.svg";


const useStyles = makeStyles((theme) => ({
	launch__emptyimg: {
		boxSizing: "border-box",
		width: "100%",
		maxWidth: "580px",
		height: "16.88vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3F3881",
		[theme.breakpoints.down("md")]: {
			height: "40vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "70vw",
		},

		"& svg": {
			width: "154px",
			height: "154px",
			opacity: 0.2,
		},
	},
	launch__img: {
		width: "100%",
		maxWidth: "100%",
		objectFit: "cover",
		height: "16.88vw",
		overflow: "hidden",
	},
	launch__time_block: {
		padding: "10px 30px",
		marginBottom: "30px",
		marginTop: "calc(-50% - 20px)",
		display: " inline-block",
		justifyContent: "center",
		background: "linear-gradient(94.97deg, #8E2DE2 3.92%, #4A00E0 52.92%);",
		borderRadius: "50px",
	},
	launch__name: {
		textDecoration: "none",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.9",
		},
	}
}));

const Item = styled(Paper)(({ theme }) => ({
	textAlign: "center",
	padding: 0,
	boxShadow: "none",
	backgroundColor: "rgba(255,255,255,0)",
}));


const LaunchCard = ({ launch }) => {
	const classes = useStyles();

	return (
		<Grid
			item
			xs={12}
			md={6}
			className={classes.launch__item}
		>
			<Item >
				<Link to={`/rocket/${launch.rocketId}`} >
					{(launch.eventImg) ?
						<img
							src={launch.launchImg}
							alt={launch.launchName}
							width="580"
							height="324"
							className={classes.launch__img}
						/>
						:
						<div className={classes.launch__emptyimg}>
							<RocketSvg />
						</div>}
				</Link>

				<div className={classes.launch__time_block}>
					<Typography variant="caption">
						<time
							className="launch__date"
							dateTime={format(
								new Date(launch.launchDate),
								"yyyy-MM-dd"
							)}
						>{format(
							new Date(launch.launchDate),
							"MMM. d, yyyy, h:mm aaa"
						)}
						</time>
					</Typography>
				</div>
				<Link
					to={`/launch/${launch.id}`}
					className={classes.launch__name}
				>
					<Typography
						variant="h3"
						mb="50px"
					>
						{launch.launchName}
					</Typography>
				</Link>

			</Item>
		</Grid>
	);
};

export default LaunchCard;