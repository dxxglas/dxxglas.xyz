import * as React from "react";
import { useState } from "react";
import "./App.scss";
import "../providers/i18n";

import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Menu />
      <div className="background"></div>
    </div>
  );
};
