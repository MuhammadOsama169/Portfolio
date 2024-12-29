import React from "react";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import { SkillCards } from "../components/SkillCards";
import { motion } from "framer-motion";
import ppperspective from "../assets/ppperspective.svg";
import { getLang } from "../helpers/localStorageService";

export const MySkills = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <main
      id="skill"
      className=" flex flex-col font-popins  md:mt-28 mt-10"
      style={{ direction: getLangDir() }}
    >
      <section className="grid md:grid-cols-2 ">
        <div>
          <motion.div
            className="font-bold md:text-[80px] text-[50px] uppercase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1>{staticData.used}</h1>
            <h1 className="text-[#353334] "> {staticData.and_skills}</h1>
          </motion.div>
          <div
            className={`md:flex justify-end hidden ${
              getLang() === "en" ? "" : "rotate-180"
            }`}
          >
            <img src={ppperspective} alt="icon" className="w-[230px] " />
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-4 mt-10 xl:mt-0">
          <SkillCards />
        </div>
      </section>
    </main>
  );
};
