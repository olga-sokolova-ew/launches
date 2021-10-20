import { Button } from "@mui/material";
import PropTypes from "prop-types";

const TextButton = ({ btnText, onBtnClick }) => {
	return (
		<Button
			variant="text"
			onClick={onBtnClick}
		>
			{btnText}
		</Button>
	);
};

TextButton.propTypes = {
	btnText: PropTypes.string,
	onBtnClick: PropTypes.func,
};

export default TextButton;
