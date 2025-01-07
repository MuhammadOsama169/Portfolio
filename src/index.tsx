import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "./i18n";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_KEY,
};
TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
