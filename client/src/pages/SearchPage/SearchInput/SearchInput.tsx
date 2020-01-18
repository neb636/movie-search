import * as React from 'react';
import './SearchInput.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import * as queryString from 'query-string';
import classnames from 'classnames';
import { Routes } from '@routes/routes';

type Props = {
  setCurrentSearchedTerm: (currentSearchedTerm: string) => void;
  currentSearchedTerm: string;
};

const useInputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};

const SearchInput = ({ setCurrentSearchedTerm, currentSearchedTerm }: Props) => {
  const [searchTerm, setSearchTerm] = useState(currentSearchedTerm || '');
  const history = useHistory();
  const inputRef = useInputRef();
  const buttonClassList = classnames('SearchInput__button', {
    'SearchInput--button-disabled': !searchTerm
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = queryString.stringify({ searchTerm });

    history.push({
      pathname: Routes.search.getLink(),
      search
    });
    setCurrentSearchedTerm(searchTerm);
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

      <button className={buttonClassList} onClick={() => setCurrentSearchedTerm(searchTerm)} disabled={!searchTerm}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
