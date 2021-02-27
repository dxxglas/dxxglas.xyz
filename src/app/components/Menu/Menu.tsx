import * as React from "react";
import "./Menu.scss";

import { useTranslation } from "react-i18next";

export const Menu = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return <div className="menu"></div>;
};
