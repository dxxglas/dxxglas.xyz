import * as React from "react";
import "./Header.scss";

import Logo from "../../../assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="headerNav">
        <p className="headerNavText glitch" data-text="Coming Soon">
          Coming Soon
        </p>
      </div>
    </header>
  );
};
