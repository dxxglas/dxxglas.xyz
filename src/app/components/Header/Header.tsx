import * as React from "react";
import "./Header.scss";

import logo from "../../../assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={logo} />
      </div>
      <div className="headerNav">
        <p>Coming Soon</p>
      </div>
    </header>
  );
};
