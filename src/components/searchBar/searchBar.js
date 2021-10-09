import React from "react";
import InputField from "../../elements/inputField/inputField";
import Button from "../../elements/button/button";

import classes from "./searchBar.module.css";

const SearchBar = ({ value, setInput, onClick }) => {
	return (
		<div className={classes.SearchBar}>
			<InputField
				value={value}
				placeholder="enter a city"
				required
				setInput={setInput}
			/>
			<Button
				name="searchSubmit"
				type="submit"
				position="onForm"
				onClick={onClick}
				children="set"
			></Button>
		</div>
	);
};

export default SearchBar;
