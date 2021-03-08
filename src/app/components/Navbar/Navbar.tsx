import * as React from "react";
import "./Navbar.scss";

import Logo from "../../../assets/logo.svg";

export const Navbar = ({ setMenuStatus }: any): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={Logo} alt="logo" />
      </div>
      <p
        className="menuTitle"
        onClick={() => {
          setMenuStatus(true);
        }}
      >
        menu
      </p>
    </nav>
  );
};
