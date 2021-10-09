import React from "react";
import classes from "./preview.module.css";
import planet from "../../assets/svg/planet.gif";

const Preview = ({ loading }) => {
	return (
		<div className={classes.PreviewWrapper}>
			<img src={planet} alt="planet" />
			<div>{loading ? "Loading" : "No city picked yet..."}</div>
		</div>
	);
};

export default Preview;
