import * as React from 'react';
import './SearchInput.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormEvent } from 'react';
import { useMusicActions } from '@state/music/actions';
import { useLocation, useHistory } from 'react-router-dom';
import * as queryString from 'query-string';
import { Routes } from '@routes/routes';

const useInputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};

const useSearchTerm = () => {
  const location = useLocation();
  const initialSearchTerm = queryString.parse(location.search)[Routes.search.queryParams.searchTerm] as string | undefined;
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');

  return { searchTerm, setSearchTerm };
};

const SearchInput = () => {
  const history = useHistory();
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const { querySearchTerm } = useMusicActions();
  const inputRef = useInputRef();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = queryString.stringify({ searchTerm });

    history.push({
      pathname: Routes.search.getLink(),
      search
    });
    querySearchTerm(searchTerm);
  };

  return (
    <form className="SearchInput" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="search"
        className="SearchInput__input"
        value={searchTerm}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
      />

      <button className="SearchInput__button" onClick={() => querySearchTerm(searchTerm)}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
