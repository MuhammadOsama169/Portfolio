import React from "react";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import { Parallax } from "react-scroll-parallax";
import { SkillCards } from "../components/SkillCards";
import { motion } from "framer-motion";

export const MySkills = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <main className=" flex flex-col font-popins  mt-28 ">
      <section className="grid grid-cols-2">
        <motion.div
          className="font-bold text-[94px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1>USED TOOLS</h1>
          <h1 className="text-[#353334]"> AND SKILLS</h1>
        </motion.div>
        <div className=" grid grid-cols-2 gap-4">
          <SkillCards />
        </div>
      </section>
    </main>
  );
};
