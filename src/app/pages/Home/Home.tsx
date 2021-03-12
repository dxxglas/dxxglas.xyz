import * as React from "react";
import "./Home.scss";

import { SocialBar } from "../../components/SocialBar/SocialBar";

import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import GitHub from "../../../assets/socialIcons/github.svg";
import Behance from "../../../assets/socialIcons/behance.svg";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="socialBar">
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
    </div>
  );
};
