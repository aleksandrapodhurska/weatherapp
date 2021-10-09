import React from "react";
import classes from "./weatherDetailes.module.css";

const Weather = ({ weather }) => {
	return <div className={classes.Weather}>{weather}</div>;
};
export default Weather;
