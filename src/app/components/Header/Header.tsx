import * as React from "react";
import "./Header.scss";

import { useTranslation } from "react-i18next";

import Logo from "../../../assets/logo.svg";

export const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="headerLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="headerNav">
        <p className="headerNavText glitch" data-text={t("header.title")}>
          {t("header.title")}
        </p>
      </div>
    </header>
  );
};
