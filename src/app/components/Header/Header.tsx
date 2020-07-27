import * as React from "react";
import "./Header.scss";

import logo from "../../../assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headerNav">
        <p className="headerNavText" data-text="Coming Soon">
          Coming Soon
        </p>
      </div>
    </header>
  );
};
