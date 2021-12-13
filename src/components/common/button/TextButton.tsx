import * as React from "react";
import { Button } from "@mui/material";

type Props = {
	btnText: string;
	onBtnClick: () =>  void;
  }

const TextButton: React.FC<Props> = ({ btnText, onBtnClick }) => {
	return (
		<Button
			variant="text"
			onClick={onBtnClick}
		>
			{btnText}
		</Button>
	);
};

export default TextButton;
