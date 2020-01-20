import * as React from 'react';
import './SearchListWrapper.css';
import { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  title: string;
  hasResults: boolean;
  noResultsMessage: string;
  children: ReactNode | Element[];
  className?: string;
};

const SearchListWrapper = (props: Props) => {
  const { title, hasResults, noResultsMessage, children, className } = props;
  const classList = classnames('SearchListWrapper', className);

  return (
    <div className={classList}>
      <div className="SearchListWrapper__title">{title}</div>

      {!hasResults && <span className="SearchListWrapper__no-results">{noResultsMessage}</span>}

      <div className="SearchListWrapper__list-list-wrapper">{children}</div>
    </div>
  );
};

export default SearchListWrapper;
