import * as React from "react";
import "./SocialIcon.scss";

type CardProps = {
  name: string;
  href: string;
  icon: string;
};

export const SocialIcon = ({ name, href, icon }: CardProps): JSX.Element => {
  return (
    <a
      className="socialIcon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={name} />
    </a>
  );
};
