import * as React from 'react';
import './Home.css';
import SearchInput from './SearchInput/SearchInput';
import SearchList from '../SearchList/SearchList';
import {useSearchHandlers} from "../common/hooks/use-search-handlers";
import TemporaryLogo from "../common/components/TemporaryLogo/TemporaryLogo";

function Home() {
    const { searchResult, querySearchTerm, isSearching, currentSearchedTerm } = useSearchHandlers();

    return (
        <div className='Home'>
            <div className="Home__name-logo-wrapper">
                <TemporaryLogo className="Home__logo" />
                <div className="Home__movie-monster-text">Movie Monster</div>
            </div>

            <div className="Home__sub-text">
                Search for movies by your favorite music
            </div>

            <SearchInput querySearchTerm={querySearchTerm} />

            <SearchList
                isSearching={isSearching}
                searchResult={searchResult}
                currentSearchedTerm={currentSearchedTerm}
            />
        </div>
    );
}

export default Home;
