import React from "react";
import Icon from "../../elements/icon/icon";
import Country from "./country";
import Temperature from "./temperature";
import Weather from "./weather";
import Description from "./description";
import { DateTime as Date } from "./date";
import classes from "./weatherDetailes.module.css";

const WeatherDetailes = ({
	weather: {
		dt,
		temp,
		weather,
		description,
		country,
		name,
		sunrise,
		sunset,
		timezone,
	},
}) => {
	return (
		<div className={classes.WeatherDetailesWrapper}>
			<div className={classes.WeatherIconWrapper}>
				<Icon
					weather={weather}
					sunset={sunset}
					sunrise={sunrise}
					timezone={timezone}
				/>
			</div>
			<div className={classes.WeatherDataWrapper}>
				<Country country={country} name={name} />
				<Temperature temp={temp} />
				<Weather weather={weather} />
				<Description description={description} />
				<Date dt={dt} />
			</div>
		</div>
	);
};

export default WeatherDetailes;
