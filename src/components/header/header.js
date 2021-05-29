import React from 'react';
import classes from './header.module.css';
import Logo from '../../elements/logo/logo';

const Header = (props) => {
    return(
        <header className={classes.Header}>
            <Logo colorSheme='light'/>
        </header>
    )
}

export default Header;