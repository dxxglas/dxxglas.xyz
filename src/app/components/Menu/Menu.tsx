import * as React from "react";
import "./Menu.scss";

import { useTranslation } from "react-i18next";

export const Menu = ({ isOpen, setMenuStatus }: any): JSX.Element => {
  const menu = ["about", "posts", "contact", "random"];

  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className={isOpen ? "menu open" : "menu"}>
      <p
        className="closeTitle"
        onClick={() => {
          setMenuStatus(false);
        }}
      >
        close
      </p>
      <div className="menuContainer">
        {menu.map((title) => (
          <div className="menuBox">
            <p className="title">{title}</p>
            <p className="subtitle">###</p>
          </div>
        ))}
      </div>
      <div className="languageBox">
        <p className="auxiliar">PT</p>
        <p className="principal">EN</p>
      </div>
    </div>
  );
};
