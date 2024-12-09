import i18n from "../i18n";

export const getLangDir = (reverse = false) => {
  if (reverse) return "ltr";
  return i18n.language === "ar" ? "rtl" : "ltr";
};
