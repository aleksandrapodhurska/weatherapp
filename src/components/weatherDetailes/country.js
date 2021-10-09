import React from "react";
import classes from "./weatherDetailes.module.css";

const Country = ({ country, name }) => {
	return <div className={classes.country}>{`${country}, ${name}`}</div>;
};
export default Country;
