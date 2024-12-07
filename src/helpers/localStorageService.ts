export enum LocalStorageKeys {
  language = "lang",
}


export const setLang = (lang: string): void => {
  localStorage.setItem(LocalStorageKeys.language, lang);
};
export const getLang = (): string => {
  return null ?? (localStorage.getItem(LocalStorageKeys.language) ?? "en");
};
