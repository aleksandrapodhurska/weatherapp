import React from 'react';
import classes from './weatherDetailes.module.css';

const Temperature = ({temp}) => {
    return(
        <div className={classes.Temperature}>{Math.round(temp)}&#176;</div>
    )
}
export default Temperature;