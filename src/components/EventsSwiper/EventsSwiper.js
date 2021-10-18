import Swiper, { Navigation } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import "swiper/swiper.scss";
import { ReactComponent as RocketSvg } from "assets/common/rocketLogo.svg";
import { ReactComponent as ArrowImage } from "assets/common/swiper_arrow.svg";


const useStyles = makeStyles((theme) => ({
	swiper__emptyimg: {
		width: "380px",
		height: "264px",
		marginBottom: "20px",
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
	swiper__img: {
		width: "100%",
		maxWidth: "100%",
		objectFit: "cover",
		height: "13.75vw",
		marginBottom: "20px",
		overflow: "hidden",
		[theme.breakpoints.down("md")]: {
			height: "40vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "70vw",
		},
	},
	swiper__time_block: {
		padding: "10px 30px",
		marginBottom: "15px",
		display: "inline-flex",
		justifyContent: "center",
		backgroundColor: "#4A00E0",
		borderRadius: "50px",
	},
	swiper__wrapper: {
		width: "100%",

		"& .swiper-container": {
			paddingTop: "100px",
			marginTop: "-100px",
		},

		"& .swiper-button-next": {
			position: "absolute",
			width: "56px",
			height: "56px",
			top: "10px",
			right: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			//backgroundImage: `url("${arrowImage}")`,
			//backgroundRepeat: "no-repeat",
			//backgroundSize: "56px 28px",
			//backgroundPosition: "center",
			cursor: "pointer",
			transition: "0.3s ease",

			"&:hover": {
				opacity: "0.7",
			},

			"&::after": {
				display: "none",
			},
			[theme.breakpoints.down("md")]: {
				display: "none",
				width: 0,
				height: 0,
			},
		},
		"& .swiper-button-prev": {
			position: "absolute",
			width: "56px",
			height: "56px",
			top: "10px",
			right: "102px",
			left: "auto",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			cursor: "pointer",
			//backgroundImage: `url("${arrowImage}")`,
			//backgroundRepeat: "no-repeat",
			//backgroundSize: "56px 28px",
			//backgroundPosition: "center",
			//transform: "rotate(180deg)",
			transform: "rotate(180deg)",
			transition: "0.3s ease",
			"&:hover": {
				opacity: "0.7",
			},

			"&::after": {
				display: "none",
			},
			[theme.breakpoints.down("md")]: {
				display: "none",
				width: 0,
				height: 0,
			},
		},
	}
}));


const EventsSwiper = ({ events }) => {
	const classes = useStyles();
	const params = {
		  Swiper,
		  modules: [Navigation],
		  navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev"
		  },
		  slidesPerView: 3,
		renderPrevButton: () => <div className="swiper-button-prev"><ArrowImage /></div>,
		renderNextButton: () => <div className="swiper-button-next"><ArrowImage /></div>,
		  spaceBetween: 20
	  };

	return (
		<div className={classes.swiper__wrapper}>
			<Typography
				variant="h2"
				mb="30px"
			>
				Recent Events
			</Typography>

			<Box
				component="div"
				className={classes.swiper__wrapper}
			>
				<ReactIdSwiperCustom {...params}>
					{events.map((event) =>
						<div key={event.id}>
							{(event.eventImg) ?
								<img
									src={event.eventImg}
									alt={event.eventName}
									width="380"
									height="264"
									className={classes.swiper__img}
								/>
								:
								<div className={classes.swiper__emptyimg}>
									<RocketSvg />
								</div>}


							<div className={classes.swiper__time_block}>
								<Typography variant="caption">
									<time
										className="review__date"
										dateTime={format(
											new Date(event.eventDate),
											"yyyy-MM-dd"
										)}
									>
										{format(
											new Date(event.eventDate),
											"MMM. d, yyyy, h:mm aaa"
										)}
									</time>
								</Typography>
							</div>
							<Typography
								variant="h3"
								mb="50px"
								style={{ wordWrap: "break-word" }}
							>
								{event.eventName}
							</Typography>
						</div>)}
				</ReactIdSwiperCustom>
			</Box>
		</div>
	);
};

export default EventsSwiper;