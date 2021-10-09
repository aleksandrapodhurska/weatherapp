import React from "react";
import classes from "./inputField.module.css";

const InputField = ({ value, placeholder, setInput }) => {
	return (
		<div className={classes.InputField}>
			<label>What is the weather like in ...</label>
			<input
				value={value}
				placeholder={placeholder}
				required
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
};

export default InputField;
