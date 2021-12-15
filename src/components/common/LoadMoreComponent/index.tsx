import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import TextButton from "../button/TextButton";
import Loader from "../Loader/Loader";


type Props = {
	onBtnClick: () =>  void;
};

const useStyles = makeStyles({
	loaderWrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}
});


const LoadMoreComponent: React.FC<Props> = ({onBtnClick}) => {
	const classes = useStyles();
	const intl = useIntl();


	return (
        <Box className={classes.loaderWrapper}>
            <Loader />
            <TextButton
	btnText={intl.formatMessage({ id: "loadMoreBtn" })}
	onBtnClick={onBtnClick}
            />
        </Box >

	);
};

export default LoadMoreComponent;