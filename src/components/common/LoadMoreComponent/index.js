import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import TextButton from "../../common/button/TextButton";
import Loader from "../Loader/Loader";


const useStyles = makeStyles({
	loaderWrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}
});


const LoadMoreComponent = (onBtnClick) => {
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