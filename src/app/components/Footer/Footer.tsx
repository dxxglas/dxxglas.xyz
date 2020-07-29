import * as React from "react";
import "./Footer.scss";

import { SocialIcon } from "../SocialIcon/SocialIcon";

import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import GitHub from "../../../assets/socialIcons/github.svg";
import Behance from "../../../assets/socialIcons/behance.svg";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footerContact glitchOnHover" data-text="Contact">
        <a href="mailto:me@dxxglas.xyz">Contact</a>
      </div>
      <div className="footerBox">
        <div className="footerLanguage">
          <p>EN</p>
          <p>PT</p>
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
