import React from "react";
import Logo from "../../elements/logo/logo";
import classes from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<Logo />
			<div className={classes.Footer_Divider}></div>
		</footer>
	);
};

export default Footer;
