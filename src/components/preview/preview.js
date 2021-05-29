import React from 'react';
import classes from './preview.module.css';
import planet from '../../assets/svg/planet.gif'

const Preview = () => {
    return(
        <div className={classes.PreviewWrapper}>
            <img src={planet} alt="planet"/>
            <div>No city picked yet...</div>
        </div>
    )
}

export default Preview;