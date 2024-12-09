/* eslint-disable no-dupe-keys */

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HTTPApi from "i18next-http-backend"
import { LocalStorageKeys } from "./helpers/localStorageService";
const storedLang = localStorage.getItem(LocalStorageKeys.language);


i18next.use(initReactI18next)
.use(HTTPApi)
.init({
  lng: storedLang || "en",
  fallbackLng: "en",
  returnObjects: true,
  // interpolation: {
  //   escapeValue: false,
  // },
});
export default i18next;
