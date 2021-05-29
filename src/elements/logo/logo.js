import React from 'react';
import classes from './logo.module.css';

const Logo = (props) => {
    let logoWithColorSheme = [
        classes.Logo,
        (props.colorSheme === 'light' ? classes.Light : classes.Dark)
    ];
    return(
        <h1 className={logoWithColorSheme.join(' ')}>My Weather</h1>
    );
}

export default Logo;