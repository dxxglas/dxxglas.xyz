import * as React from "react";
import { useState } from "react";
import "./App.scss";
import "../providers/i18n";

import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="background"></div>
    </div>
  );
};
