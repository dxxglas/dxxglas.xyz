import * as React from 'react';
import './App.scss';
import '../i18n/config';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './sections/Home/Home';
import { About } from './sections/About/About';

export const App = (): JSX.Element => {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
            <div className="background"></div>
            <Header setNavbarStatus={setIsNavbarOpen} />
            <Navbar setNavbarStatus={setIsNavbarOpen} isOpen={isNavbarOpen} />
            <main className="main">
                <Home />
                <About />
            </main>
        </>
    );
};
