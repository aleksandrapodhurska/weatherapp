import React from "react";
import classes from "./icon.module.css";
import sunIcon from "../../assets/svg/001-sun.svg";
import cloudsDay from "../../assets/svg/012-day.svg";
import cloudsNight from "../../assets/svg/011-night.svg";
import clearDay from "../../assets/svg/038-thermometer.svg";
import clearNight from "../../assets/svg/010-night.svg";
import snowDay from "../../assets/svg/016-snow.svg";
import snowNight from "../../assets/svg/015-snow.svg";
import rainDay from "../../assets/svg/014-rain.svg";
import rainNight from "../../assets/svg/013-rain.svg";
import haze from "../../assets/svg/036-fog.svg";
import def from "../../assets/svg/049-thermometer.svg";

const Icon = ({ weather, sunrise, sunset }) => {
	const icon = () => {
		let time = new Date().getHours();
		let daytime;
		if (time > sunrise && time < sunset) {
			daytime = true;
		} else {
			daytime = false;
		}

		switch (weather) {
			case "Sun":
				return sunIcon;
			case "Haze":
				return haze;
			case "Mist":
				return haze;
			case "Smoke":
				return haze;
			case "Clear":
				if (daytime) {
					return clearDay;
				} else return clearNight;
			case "Clouds":
				if (daytime) {
					return cloudsDay;
				} else return cloudsNight;
			case "Snow": {
				if (daytime) {
					return snowDay;
				} else return snowNight;
			}
			case "Rain": {
				if (daytime) {
					return rainDay;
				} else return rainNight;
			}
			default:
				return def;
		}
	};

	return <img src={icon()} alt="sun" className={classes.Icon} />;
};

export default Icon;
