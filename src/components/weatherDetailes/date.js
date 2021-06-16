import React from 'react';
import classes from './weatherDetailes.module.css';

const WeekDayDate = ({dt}) => {
    
    const date = new Date();

    return(
        <div className={classes.Date}>{date.toDateString(dt)}</div>
    )
}
export default WeekDayDate;