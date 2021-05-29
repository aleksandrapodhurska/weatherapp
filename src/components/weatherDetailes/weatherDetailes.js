import React from 'react';
import Icon from '../../elements/icon/icon';
import Temperature from './temperature';
import Weather from './weather';
import Description from './description';
import Date from './date';
import classes from './weatherDetailes.module.css';

const WeatherDetailes = (props) => {
    return(
        <div className={classes.WeatherDetailesWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon/>
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature/>
                <Weather/>
                <Description/>
                <Date/>
            </div>
        </div>
    )
}

export default WeatherDetailes;