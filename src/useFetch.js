import React, { useState, useEffect } from "react";

const useFetch = (city) => {
	const API_KEY = "";

	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		if (city) {
			setIsPending(true);
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
			)
				.then((res) => {
					if (!res.ok) {
						throw Error("Could not get data...");
					}
					return res.json();
				})
				.then((data) => {
					setData({
						dt: data.dt,
						name: data.name,
						temp: data.main.temp,
						weather: data.weather[0].main,
						description: data.weather[0].description,
						country: data.sys.country,
						sunset: data.sys.sunset,
						sunrise: data.sys.sunrise,
						timezone: data.timezone,
					});
					setError(null);
					setIsPending(false);
				})
				.catch((err) => {
					setIsPending(false);
					setError(err.message);
				});
		}
	}, [city]);
	return { data, error, isPending };
};

export default useFetch;
