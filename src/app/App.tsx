import * as React from 'react';
import './App.scss';
import '../providers/i18n';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';

export const App = (): JSX.Element => {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <>
            <div className="background"></div>
            <Header setNavbarStatus={setIsNavbarOpen} />
            <Navbar setNavbarStatus={setIsNavbarOpen} isOpen={isNavbarOpen} />
            <main className="content">
                <Home />
                <About />
            </main>
        </>
    );
};
