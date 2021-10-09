import React from "react";
import classes from "./weatherDetailes.module.css";

export const DateTime = ({ dt }) => {
	let date = new Date();
	return <div className={classes.Date}>{date.toDateString(dt)}</div>;
};
