import React from "react";
import Button from "../../elements/button/button";
import classes from "./errorNotice.module.css";

const ErrorNotice = ({ tryAgain }) => {
	return (
		<div className={classes.ErrorWrapper}>
			<h1>Error!</h1>
			<div className={classes.ErrorDetailes}>
				<h2>Ooops...</h2>
				<p>We can't find the city you are looking for</p>
				<Button
					name="tryAgain"
					type="button"
					position="onErrorNotice"
					onClick={tryAgain}
					children="try again"
				></Button>
			</div>
		</div>
	);
};

export default ErrorNotice;
