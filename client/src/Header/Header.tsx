import * as React from 'react';
import './Header.css';
import SearchInput from './SearchInput/SearchInput';


function Header() {

    return (
        <div className='Header'>

            <h1 className='Header__logo-name'>Movie Search</h1>

            <SearchInput></SearchInput>
        </div>
    );
}

export default Header;
