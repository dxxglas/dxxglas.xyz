import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "../providers/i18n";

import { Navbar } from "./components/Navbar/Navbar";
import { Menu } from "./components/Menu/Menu";

import { Home } from "./pages/Home/Home";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="app">
      <Router>
        <div className="background"></div>
        <Navbar setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
        <Menu setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
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
