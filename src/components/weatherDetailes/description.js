import React from 'react';
import classes from './weatherDetailes.module.css';

const Description = ({description}) => {
    return(
        <div className={classes.Description}>{description}</div>
    )
}
export default Description;