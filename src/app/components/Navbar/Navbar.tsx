import * as React from "react";
import "./Navbar.scss";

import Logo from "../../../assets/logo.svg";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={Logo} alt="logo" />
      </div>
    </nav>
  );
};
