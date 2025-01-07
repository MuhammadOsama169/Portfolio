import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "./i18n";
import TagManager from "react-gtm-module";
import Clarity from "@microsoft/clarity";

// <--GTM--->
const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_KEY,
};
// <----->
TagManager.initialize(tagManagerArgs);

// <---Clalrity -->
const projectId = `${process.env.REACT_APP_CLARITY_KEY}`;

Clarity.init(projectId);
// <----->
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
