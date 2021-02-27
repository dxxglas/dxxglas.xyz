import * as React from "react";
import "./SocialBar.scss";

type CardProps = {
  name: string;
  href: string;
  icon: string;
};

export const SocialBar = ({ name, href, icon }: CardProps): JSX.Element => {
  return (
    <a
      className="socialBar"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={name} />
    </a>
  );
};
