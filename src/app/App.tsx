import * as React from "react";
import "./App.scss";
import "../providers/i18n";

import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};
