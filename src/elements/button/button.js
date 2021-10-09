import React from "react";
import classes from "./button.module.css";

const Button = ({ position, type, name, onClick, children }) => {
	let buttonClasses = [
		classes.Button,
		position === "onForm" ? classes.ButtonForm : null,
	];

	return (
		<div className={buttonClasses.join(" ")}>
			<button type={type} name={name} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default Button;
