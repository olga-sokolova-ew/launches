import React from "react";
import { makeStyles } from "@mui/styles";
import {
	Box, Grid, Typography 
} from "@mui/material";
import LaunchCard from "../LaunchCard/LaunchCard";
import Loader from "../Loader/Loader";
import TextButton from "../button/TextButton";



const useStyles = makeStyles({
	launches__wrapper: {
		width: "100%",
	},
	launches__title: {
		textAlign: "center",
	},
	loader__wrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}
});
  

function LaunchesBlock({launches, onShowMore, showenLaunchesQnt}) {
		const classes = useStyles();
  
		return (
        <div className={classes.launches__wrapper}>
            <Typography
	variant="h2"
	mb='30px'
	className={classes.launches__title}
            >
                Spaceflight Launches
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
                <Box className={classes.loader__wrapper}>
                    <Loader/>
                    <TextButton
	btnText={"Load More"}
	onBtnClick={onShowMore}
                    />
                </Box >}
            </Grid>
        </div>
		);
}

export default LaunchesBlock;