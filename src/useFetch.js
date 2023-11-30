import React, { useState, useEffect } from "react";
import dotenv from 'dotenv';

dotenv.config();
const useFetch = (city) => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	let lat, lon = 0;
	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	
	useEffect(() => {
		if (city) {
			setIsPending(true);
			// Prep step - call to Geocoding API
			fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
			)
				.then((res) => {
					if (!res.ok) {
						throw Error("Could not get data...");
					}
					return res.json();
				})
				.then((data) => {
					lat = data[0].lat;
					lon = data[0].lon;
				})
				.then(()=> {
					// start actual fetching of weather data
					return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
				})
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
