import React from 'react';
import Button from '../../elements/button/button';
import classes from './errorNotice.module.css';

const ErrorNotice = (props) => {
    return(
        <div className={classes.ErrorWrapper}>
            <h1>Error!</h1>
            <div className={classes.ErrorDetailes}>
                <h2>Ooops...</h2>
                <p>We can't find the city you are looking for</p>
                <Button name="tryAgain" type="button" position="onErrorNotice">Try again</Button>
            </div>
        </div>
    )
}

export default ErrorNotice;
