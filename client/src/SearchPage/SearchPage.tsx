import * as React from 'react';
import './SearchPage.css';
import SearchInput from './SearchInput/SearchInput';
import SearchList from './SearchList/SearchList';
import TemporaryLogo from '@common/components/TemporaryLogo/TemporaryLogo';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';
import { useEffect } from 'react';
import { useMusicActions } from '@state/music/actions';
import { Routes } from '@routes/routes';

const useHandleSearchQueryParamOnLoad = () => {
  const { querySearchTerm, setSearchTerm } = useMusicActions();
  const location = useLocation();
  const searchTerm = queryString.parse(location.search)[Routes.search.queryParams.searchTerm] as string | undefined;

  useEffect(() => {
    if (searchTerm) {
      querySearchTerm(searchTerm);
    }

    return () => {
      setSearchTerm('');
    };
  }, []);
};

const SearchPage = () => {
  useHandleSearchQueryParamOnLoad();

  return (
    <div className="SearchPage">
      <div className="SearchPage__name-logo-wrapper">
        <TemporaryLogo className="SearchPage__logo" />
        <div className="SearchPage__movie-monster-text">Movie Monster</div>
      </div>

      <div className="SearchPage__sub-text">Search for movies by your favorite music</div>

      <SearchInput />

      <SearchList />
    </div>
  );
};

export default SearchPage;
