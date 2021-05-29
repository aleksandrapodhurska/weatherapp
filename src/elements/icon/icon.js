import React from 'react';
import classes from './icon.module.css';
import sun from '../../assets/svg/001-sun.svg';

const Icon = (props) => {
    return(
        <img 
        src={sun}
        alt="sun"
        className={classes.Icon}/>
    )
}

export default Icon;