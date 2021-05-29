import React from 'react';
import classes from './inputField.module.css';

const InputField = () => {
    return(
        <div className={classes.InputField}>
            <label>What is the weather like in ...</label>
            <input type="text" placeholder="enter a city" required></input>
        </div>
    )
}

export default InputField;