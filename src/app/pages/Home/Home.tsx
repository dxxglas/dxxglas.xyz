import * as React from "react";
import "./Home.scss";

import { useTranslation } from "react-i18next";

import { SocialIcon } from "../../components/SocialIcon/SocialIcon";

import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import GitHub from "../../../assets/socialIcons/github.svg";
import Behance from "../../../assets/socialIcons/behance.svg";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="socialBar">
        <SocialIcon
          name="linkedin"
          href="https://linkedin.com/in/dxxglas"
          icon={LinkedIn}
        />
        <SocialIcon
          name="github"
          href="https://github.com/dxxglas"
          icon={GitHub}
        />
        <SocialIcon
          name="behance"
          href="https://behance.net/dxxglas"
          icon={Behance}
        />
      </div>
      <div className="titleBox">
        <h1>{t("home.title")}</h1>
      </div>
    </div>
  );
};
