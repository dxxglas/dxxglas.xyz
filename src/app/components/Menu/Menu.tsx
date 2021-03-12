import * as React from "react";
import "./Menu.scss";

import { useTranslation } from "react-i18next";

export const Menu = ({ isOpen, setMenuStatus }: any): JSX.Element => {
  const { t, i18n } = useTranslation();

  let language: string = i18n.language;
  let languageSecondary: string = i18n.language === "en" ? "br" : "en";

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const menu = [
    {
      title: t("menu.frist", { returnObjects: true })[0],
      subtitle: t("menu.frist", { returnObjects: true })[1],
    },
    {
      title: t("menu.second", { returnObjects: true })[0],
      subtitle: t("menu.second", { returnObjects: true })[1],
    },
  ];

  return (
    <div className={isOpen ? "menu open" : "menu"}>
      <p
        className="closeTitle"
        onClick={() => {
          setMenuStatus(false);
        }}
      >
        {t("menu.close")}
      </p>
      <div className="menuContainer">
        {menu.map((obj, index) => (
          <div className="menuBox" key={index}>
            <p className="title">{obj.title}</p>
            <p className="subtitle">{obj.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="languageBox">
        <p
          className="secondary"
          onClick={() => {
            changeLanguage(languageSecondary);
          }}
        >
          {languageSecondary === "br" ? "PT-BR" : "EN"}
        </p>
        <p
          className="principal"
          onClick={() => {
            changeLanguage(language);
          }}
        >
          {language === "br" ? "PT-BR" : "EN"}
        </p>
      </div>
    </div>
  );
};
