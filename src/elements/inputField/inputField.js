import React from 'react';
import classes from './inputField.module.css';


const InputField = ({defaultValue, type, name, id, placeholder, onChange}) => {

    return(
        <div className={classes.InputField}>
            <label>What is the weather like in ...</label>
            <input
                defaultValue={defaultValue}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                required
                onChange={onChange}
                />
        </div>
    )
}

export default InputField;