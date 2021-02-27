import * as React from "react";
import "./Header.scss";

import { SocialBar } from "../SocialBar/SocialBar";

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
        <SocialBar
          name="linkedin"
          href="https://linkedin.com/in/dxxglas"
          icon={LinkedIn}
        />
        <SocialBar
          name="github"
          href="https://github.com/dxxglas"
          icon={GitHub}
        />
        <SocialBar
          name="behance"
          href="https://behance.net/dxxglas"
          icon={Behance}
        />
      </div>
    </header>
  );
};
