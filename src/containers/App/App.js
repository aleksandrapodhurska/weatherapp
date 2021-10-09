import React, { useState } from "react";
import Header from "../../components/header/header";
import SearchBar from "../../components/searchBar/searchBar";
import Card from "../../elements/card/card";
import Preview from "../../components/preview/preview";
import WeatherDetailes from "../../components/weatherDetailes/weatherDetailes";
import ErrorNotice from "../../components/errorNotice/errorNotice";
import Footer from "../../components/footer/footer";
import classes from "./app.module.css";
import useFetch from "../../useFetch";

function App() {
	const [city, setCity] = useState("");
	const [input, setInput] = useState("");
	const { data, error, isPending } = useFetch(city);

	const onClick = (e) => {
		e.preventDefault();
		setCity(input);
	};

	const tryAgain = () => {
		setInput("");
		setCity("");
	};

	return (
		<div className="App">
			<div classes={classes.AppWrapper}>
				<Header />
				<main className={classes.AppMain}>
					<SearchBar
						onClick={onClick}
						value={input}
						setInput={setInput}
					/>
					<Card
						children={
							isPending ? (
								<Preview loading={isPending} />
							) : error ? (
								<ErrorNotice tryAgain={tryAgain} />
							) : data || city ? (
								<WeatherDetailes weather={data} />
							) : (
								<Preview />
							)
						}
					/>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
