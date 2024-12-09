import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ProfileImg from "../assets/cover-image.jpg";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";

export const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:h-full py-10"
      style={{ direction: getLangDir() }}
    >
      <div className="md:order-2 flex basis-1/2 md:mt-[200px] mt-16 z-10 ">
        {isAboveMediumScreens ? (
          <div>
            <div className="absolute">
              <img
                className=" rounded-lg w-[500px] top-0"
                alt="profile"
                src={ProfileImg}
              />
            </div>
          </div>
        ) : (
          <div className="z-10 w-full max-w-[400px] md:max-w-[500px]">
            <img alt="profile" src={ProfileImg} />
          </div>
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-6xl font-playfair z-10 text-center md:text-start flex flex-col  dark:text-[#F3EFE0] text-black">
            {staticData.muhammad}
            <Typewriter
              options={{
                strings: [`< ${staticData.osama}/>`],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="mt-10 pt-5 mb-7 text-lg text-center md:text-start font-opensans dark:text-[#BEE0D6] text-[#30475E]">
            {staticData.bio}
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="mailto:m.osama169@gmail.com"
            className="hover:opacity-[0.98] transition duration-500 hover:scale-[1.1]"
          >
            <button
              className="dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
                 shadow-[10px_20px_20px_rgba(48,30,103,100%)] dark:shadow-[10px_20px_20px_rgba(255,0,0,30%)] "
            >
              {staticData.actions.get_in_touch}
            </button>
          </a>
        </motion.div>

        {/* SOCIAL MEDIAL SECTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
