import React from 'react';
import Icon from '../../elements/icon/icon';
import Temperature from './temperature';
import Weather from './weather';
import Description from './description';
import WeekDayDate from './date';
import classes from './weatherDetailes.module.css';

const WeatherDetailes = ({weather: {dt, temp, weather, description}}) => {  

    return(
        <div className={classes.WeatherDetailesWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon/>
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature
                   temp={temp} 
                />
                <Weather
                    weather={weather}/>
                <Description
                    description={description}/>
                <WeekDayDate
                    dt={dt}/>
            </div>
        </div>
    )
}

export default WeatherDetailes;