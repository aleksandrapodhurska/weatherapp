import React from 'react';
import InputField from '../../elements/inputField/inputField';
import Button from '../../elements/button/button';

import classes from './searchBar.module.css';

const SearchBar = (props) => {

    
    return(
        <div className={classes.SearchBar}>
            <InputField
                defaultValue=""
                type="text"
                name="city"
                id="city"
                placeholder="enter a city"
                required
                onChange={props.listenChange}
            />
            <Button
                name="searchSubmit"
                type="submit"
                position="onForm"
                onClick={props.onClick} 
                >
                    set
            </Button>
        </div>
        
    )
}

export default SearchBar;