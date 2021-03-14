import * as React from 'react';
import './Header.scss';

import Logo from '../../../assets/logo.svg';

export const Header = ({ setNavbarStatus }: { setNavbarStatus: any }): JSX.Element => {
    return (
        <nav className="header">
            <div className="headerLogo">
                <img src={Logo} alt="logo" />
            </div>
            <p
                className="navbarTitle"
                onClick={() => {
                    setNavbarStatus(true);
                }}
            >
                menu
            </p>
        </nav>
    );
};
