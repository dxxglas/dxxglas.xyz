import * as React from "react";
import { useState } from "react";
import "./App.scss";
import "../providers/i18n";

import { Navbar } from "./components/Navbar/Navbar";
import { Menu } from "./components/Menu/Menu";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Menu />
      <div className="background"></div>
    </div>
  );
};
