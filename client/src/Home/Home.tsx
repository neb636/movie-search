import * as React from 'react';
import './Home.css';
import SearchInput from './SearchInput/SearchInput';
import SearchList from '../SearchList/SearchList';
import TemporaryLogo from "../common/components/TemporaryLogo/TemporaryLogo";

const Home = () => {

    return (
        <div className='Home'>
            <div className="Home__name-logo-wrapper">
                <TemporaryLogo className="Home__logo" />
                <div className="Home__movie-monster-text">Movie Monster</div>
            </div>

            <div className="Home__sub-text">
                Search for movies by your favorite music
            </div>

            <SearchInput />

            <SearchList />
        </div>
    );
};

export default Home;
