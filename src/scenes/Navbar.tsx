import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";
import { ChangeLanguage } from "../helpers/lang-service";
import { LinkTypes } from "../types/Link";
import { NavbarTypes } from "../types/Navbar";
import { langList } from "../assets/data/lang";
import { getLang } from "../helpers/localStorageService";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";

const Link = ({ page, selectedPage, setSelectedPage }: LinkTypes) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "dark:text-[#00FFB9] text-redhot" : ""
      }
        hover:text-[#FF165D] transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => lowerCasePage}
    >
      {page}
    </AnchorLink>
  );
};

// isTopOfPage,selectedPage,setSelectedPage from App.js

export const Navbar = ({
  IsTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarTypes) => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  const [isMenuToggled, setIsMediaToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const NavBarBackground = IsTopOfPage ? "" : "dark:bg-[#222222] bg-[#E5E4E2]";

  const [lang, setLang] = useState(getLang());
  const oppositeLang = lang === "en" ? "ar" : "en";
  const [langTitle, setLangTitle] = useState(
    langList.filter((lang: any) => lang.code === oppositeLang)[0].title
  );

  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem("theme") === "light") {
      return true;
    } else {
      return false;
    }
  });
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  if (isOn) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    const newLangTitle = lang === "en" ? "ar" : "en";
    const updatedLang = langList.filter(
      (lang: any) => lang.code === newLangTitle
    )[0].title;
    setLangTitle(updatedLang);
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    ChangeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <nav
      className={`${NavBarBackground} z-40 w-full fixed top-0  py-6`}
      style={{ direction: getLangDir() }}
    >
      <div className="flex items-center justify-between mx-auto w-5/6  dark:text-black text-white">
        <h4 className="font-playfair text-3xl font-bold dark:text-[#F3EFE0] text-[#30475E]">
          MO.
        </h4>

        {/* Desktop */}

        {isAboveSmallScreens ? (
          <div className="flex  justify-between gap-16 font-playfair font-semibold text-base items-center dark:text-[#F3EFE0] text-[#30475E]">
            {/* TOGGLE SWITCH */}
            <div
              onClick={toggleSwitch}
              className={`flex-start flex h-[35px] w-[55px] rounded-full bg-zinc-100 p-[2px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
                isOn && "place-content-end"
              }`}
            >
              <motion.div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
              >
                <motion.div whileTap={{ rotate: 360 }}>
                  {isOn ? (
                    <RiSunFill className="h-6 w-6 text-yellow" />
                  ) : (
                    <RiMoonClearFill className="h-6 w-6 text-slate-200" />
                  )}
                </motion.div>
              </motion.div>
            </div>
            <div className="flex bg-white rounded-full px-2 cursor-pointer">
              <button
                onClick={toggleLanguage}
                className="flex items-center cursor-pointer "
                style={{
                  color: "#6D6D6D",
                  direction: `${getLang() === "ar" ? "ltr" : "rtl"}`,
                }}
              >
                <p className="p-2 text-primary">{langTitle}</p>
              </button>
            </div>

            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-redhot p-2"
            onClick={() => setIsMediaToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}

        {/* Mobile View */}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className={`fixed ${getLang()==="en" ?"right-0 " : "left-0 "} bottom-0 h-full bg-[#222222] w-[200px] ss:w-[300px] `}>
            {/* Close Icon */}

            <div className="flex justify-end p-12">
              <button onClick={() => setIsMediaToggled(!isMenuToggled)}>
                <img className=" h-[40px]" alt="close icon" src={CloseIcon} />
              </button>
            </div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            >''
              <div className={`flex flex-col gap-10  text-2xl text-white ${getLang()==="en" ?"ml-[25%]" : "mr-[25%]"}`}>
                {/* MENU ITEMS */}
                <Link
                  page={staticData.nav_bar.home}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                   page={staticData.nav_bar.skills}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                   page={staticData.nav_bar.projects}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                   page={staticData.nav_bar.testimonial}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div
                  onClick={toggleSwitch}
                  className={`flex-start flex h-[35px] w-[55px] rounded-full bg-zinc-100 p-[2px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
                    isOn && "place-content-end"
                  }`}
                >
                  <motion.div
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
                    layout
                    transition={spring}
                  >
                    <motion.div whileTap={{ rotate: 360 }}>
                      {isOn ? (
                        <RiSunFill className="h-6 w-6 text-yellow" />
                      ) : (
                        <RiMoonClearFill className="h-6 w-6 text-slate-200" />
                      )}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="flex bg-white rounded-full px-2 justify-center cursor-pointer w-[60%]">
              <button
                onClick={toggleLanguage}
                className="flex items-center cursor-pointer "
                style={{
                  color: "#6D6D6D",
                  direction: `${getLang() === "ar" ? "ltr" : "rtl"}`,
                }}
              >
                <p className="p-2 text-primary">{langTitle}</p>
              </button>
            </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};
