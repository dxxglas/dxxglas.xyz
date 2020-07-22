import * as React from "react";
import "./Footer.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footerContact">
        <a href="mailto:me@dxxglas.xyz">Contact</a>
      </div>
      <div className="footerSocial">
        <a href="https://linkedin.com/in/dxxglas" target="_blank">
          <p>linkedin.com/in/dxxglas</p>
        </a>
        <a href="https://github.com/dxxglas" target="_blank">
          <p>github.com/dxxglas</p>
        </a>
        <a href="https://behance.net/dxxglas" target="_blank">
          <p>behance.net/dxxglas</p>
        </a>
      </div>
    </footer>
  );
};
