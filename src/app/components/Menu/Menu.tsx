import * as React from "react";
import "./Menu.scss";

import { useTranslation } from "react-i18next";

export const Menu = ({ isOpen, setMenuStatus }: any): JSX.Element => {
  const menu = [
    {
      title: "about",
      subtitle: "###",
    },
    {
      title: "portfolio",
      subtitle: "###",
    },
  ];

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
        {menu.map((obj) => (
          <div className="menuBox">
            <p className="title">{obj.title}</p>
            <p className="subtitle">{obj.subtitle}</p>
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
