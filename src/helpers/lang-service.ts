

import i18next from "i18next";
import { setLang } from "./localStorageService";
export const ChangeLanguage = (lang: string) => {
  i18next.changeLanguage(lang)
  setLang(lang);
};
