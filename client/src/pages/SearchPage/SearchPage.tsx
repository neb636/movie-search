import * as React from 'react';
import './SearchPage.css';
import SearchInput from './SearchInput/SearchInput';
import SearchList from './SearchList/SearchList';
import TemporaryLogo from '@common/components/TemporaryLogo/TemporaryLogo';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';
import { useState } from 'react';
import { Routes } from '@routes/routes';
import { useSearchQuery } from 'graphql/querys/search-query';

const SearchPage = () => {
  const location = useLocation();
  const initialSearchTerm = queryString.parse(location.search)[Routes.search.queryParams.searchTerm] as string | undefined;
  const [currentSearchedTerm, setCurrentSearchedTerm] = useState(initialSearchTerm || '');
  const { results: searchResults, loading, error } = useSearchQuery(currentSearchedTerm);

  return (
    <div className="SearchPage">
      <div className="SearchPage__name-logo-wrapper">
        <TemporaryLogo className="SearchPage__logo" />
        <div className="SearchPage__movie-monster-text">Movie Monster</div>
      </div>

      <div className="SearchPage__sub-text">Search for movies by your favorite music</div>

      <SearchInput setCurrentSearchedTerm={setCurrentSearchedTerm} currentSearchedTerm={currentSearchedTerm} />

      <SearchList loading={loading} searchResults={searchResults} currentSearchedTerm={currentSearchedTerm} />
    </div>
  );
};

export default SearchPage;
