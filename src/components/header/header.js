import React from "react";
import classes from "./header.module.css";
import Logo from "../../elements/logo/logo";

const Header = () => {
	return (
		<header className={classes.Header}>
			<Logo />
		</header>
	);
};

export default Header;
