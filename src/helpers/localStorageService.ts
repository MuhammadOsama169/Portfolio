export enum LocalStorageKeys {
  language = "lang",
}


export const setLang = (lang: string): void => {
  localStorage.setItem(LocalStorageKeys.language, lang);
};
export const getLang = (): string => {
  if (typeof localStorage === "undefined") {
    return "en";

  }
  return localStorage.getItem(LocalStorageKeys.language) ?? "en";
};

