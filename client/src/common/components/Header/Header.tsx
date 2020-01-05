import * as React from 'react';
import './Header.css';
import TemporaryLogo from '@common/components/TemporaryLogo/TemporaryLogo';
import { Link } from 'react-router-dom';
import { Routes } from '@routes/routes';

function Header() {
  return (
    <div className="Header">
      <Link to={Routes.search.getLink()}>
        <TemporaryLogo className="Header__logo" />
      </Link>
    </div>
  );
}

export default Header;
