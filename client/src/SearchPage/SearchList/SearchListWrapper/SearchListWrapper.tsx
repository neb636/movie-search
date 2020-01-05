import * as React from 'react';
import './SearchListWrapper.css';
import { ReactNode } from 'react';

type Props = {
  title: string;
  hasResults: boolean;
  noResultsMessage: string;
  children: ReactNode | Element[];
};

const SearchListWrapper = (props: Props) => {
  const { title, hasResults, noResultsMessage, children } = props;

  return (
    <div className="SearchListWrapper">
      <div className="SearchListWrapper__title">{title}</div>

      {!hasResults && <span className="SearchListWrapper__no-results">{noResultsMessage}</span>}

      <div className="SearchListWrapper__list-list-wrapper">{children}</div>
    </div>
  );
};

export default SearchListWrapper;
