import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import '../providers/i18n';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/Home';

export const App = (): JSX.Element => {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    return (
        <div className="app">
            <Router>
                <div className="background"></div>
                <Header setNavbarStatus={setIsNavbarOpen} />
                <Navbar setNavbarStatus={setIsNavbarOpen} isOpen={isNavbarOpen} />
                <div className="content">
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
