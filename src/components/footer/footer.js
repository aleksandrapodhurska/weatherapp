import React from 'react';
import Logo from '../../elements/logo/logo';
import classes from './footer.module.css';

const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <Logo colorSheme='dark'/>
            <div className={classes.Footer_Divider}></div>
        </footer>
    )
}

export default Footer;