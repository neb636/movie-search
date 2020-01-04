import * as React from 'react';
import './Header.css';
import TemporaryLogo from '@common/components/TemporaryLogo/TemporaryLogo';


function Header() {

    return (
        <div className="Header">
            <TemporaryLogo className="Header__logo" />
        </div>
    );
}

export default Header;
