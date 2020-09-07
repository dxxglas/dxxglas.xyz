import * as React from "react";
import "./Header.scss";

import { SocialIcon } from "../SocialIcon/SocialIcon";

import Logo from "../../../assets/logo.svg";

import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import GitHub from "../../../assets/socialIcons/github.svg";
import Behance from "../../../assets/socialIcons/behance.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="headerSocial">
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
    </header>
  );
};
