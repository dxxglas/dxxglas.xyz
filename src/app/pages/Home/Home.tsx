import * as React from "react";
import "./Home.scss";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Home = (): JSX.Element => {
  return (
    <>
      <div className="background"></div>
      <Header />
      <Footer />
    </>
  );
};
