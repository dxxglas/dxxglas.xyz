import * as React from "react";
import "./App.scss";
import "../providers/i18n";

import { Navbar } from "./components/Navbar/Navbar";
import { Menu } from "./components/Menu/Menu";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="app">
      <Navbar setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
      <Menu setMenuStatus={setIsMenuOpen} isOpen={isMenuOpen} />
      <div className="background"></div>
    </div>
  );
};
