import React from 'react';
import InputField from '../../elements/inputField/inputField';
import Button from '../../elements/button/button';

import classes from './searchBar.module.css';

const SearchBar = (props) => {
    return(
        <div className={classes.SearchBar}>
            <InputField/>
            <Button name="searchSubmit" type="submit" position="onForm">set</Button>
        </div>
        
    )
}

export default SearchBar;