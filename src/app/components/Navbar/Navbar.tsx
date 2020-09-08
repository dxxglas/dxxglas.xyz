import * as React from "react";
import "./Navbar.scss";

import { useTranslation } from "react-i18next";

export const Navbar = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <nav className="navbar">
      <h1 className="navTitle">menu</h1>
      <div className="navBox"></div>
    </nav>
  );
};
