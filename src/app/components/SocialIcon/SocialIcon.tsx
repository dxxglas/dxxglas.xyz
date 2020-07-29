import * as React from "react";
import "./SocialIcon.scss";

type CardProps = {
  name: string;
  href: string;
  src: string;
};

export const SocialIcon = ({ name, href, src }: CardProps): JSX.Element => {
  return (
    <a className="socialIcon" href={href}>
      <img src={src} alt={name} />
    </a>
  );
};
