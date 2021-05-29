import React from 'react';
import classes from './button.module.css';

const Button = (props) => {
    let buttonClasses = [
        classes.Button,
        (props.position === 'onForm') ? classes.ButtonForm : null
    ];

    return(
        <div className={buttonClasses.join(' ')}>
            <button type={props.type} name={props.name}>{props.children}</button>
        </div>
        
    )
}

export default Button;