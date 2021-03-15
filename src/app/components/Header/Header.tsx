import * as React from 'react';
import './Header.scss';

import { animateScroll as scroll } from 'react-scroll';

import Logo from '../../../assets/logo.svg';

export const Header = (
    { setNavbarStatus }: { setNavbarStatus: React.Dispatch<React.SetStateAction<boolean>>}
): JSX.Element => {
    return (
        <header className="header">
            <div
                className="headerLogo"
                onClick={() => {
                    scroll.scrollToTop();
                    setNavbarStatus(false);
                }}
            >
                <img src={Logo} alt="logo-dxxglas" />
            </div>
            <p
                className="navbarTitle"
                onClick={() => {
                    setNavbarStatus(true);
                }}
            >
                menu
            </p>
        </header>
    );
};
