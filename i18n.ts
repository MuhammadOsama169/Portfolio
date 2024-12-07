/* eslint-disable no-dupe-keys */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LocalStorageKeys } from "./src/helpers/localStorageService";
import { ar } from "./src/lang/ar/index";
import { en } from "./src/lang/en/index";

const storedLang = localStorage.getItem(LocalStorageKeys.language);
const resources = {
  en: {
    translation: en,

  },
  ar: {
    translation: ar,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: storedLang || "en",
  fallbackLng: "en",
  returnObjects: true,
  // interpolation: {
  //   escapeValue: false,
  // },
});
export default i18n;
