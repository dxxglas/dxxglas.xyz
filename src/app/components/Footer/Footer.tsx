import * as React from "react";
import "./Footer.scss";

import { useTranslation } from "react-i18next";
import { SocialIcon } from "../SocialIcon/SocialIcon";

import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import GitHub from "../../../assets/socialIcons/github.svg";
import Behance from "../../../assets/socialIcons/behance.svg";

export const Footer = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <footer className="footer">
      <div
        className="footerContact glitchOnHover"
        data-text={t("footer.contact")}
      >
        <a href="mailto:me@dxxglas.xyz">{t("footer.contact")}</a>
      </div>
      <div className="footerBox">
        <div className="footerLanguage">
          <p
            onClick={() => {
              changeLanguage("en");
            }}
          >
            EN
          </p>
          <span>|</span>
          <p
            onClick={() => {
              changeLanguage("br");
            }}
          >
            BR
          </p>
        </div>
        <div className="footerSocial">
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
      </div>
    </footer>
  );
};
