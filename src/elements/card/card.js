import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
    return(
        <div className={classes.Card}>
            {props.children}
        </div>
    )

}

export default Card;