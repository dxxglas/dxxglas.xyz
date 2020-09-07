import * as React from "react";
import "./Home.scss";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = (): JSX.Element => {
  return (
    <>
      <div className="background"></div>
      <Header />
      <Navbar />
    </>
  );
};
