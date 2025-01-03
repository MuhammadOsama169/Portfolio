import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import Card from "../components/Card";
import resume from "../assets/resume.pdf";

export const Landing = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:h-full py-5"
      style={{ direction: getLangDir() }}
    >
      <div className=" basis-2/5 flex md:justify-end justify-center  md:mt-32 mt-20">
        <Card />
      </div>
      <section className="md:order-2 flex flex-col font-popins basis-1/2 md:mt-36 mt-5 h-full ">
        <h1 className="font-bold md:text-[80px] text-[50px] md:text-start text-center uppercase ">
          {staticData.frontend}
        </h1>
        <h1 className="text-[#353334] font-bold md:text-[80px] text-[50px] md:text-start text-center uppercase">
          {staticData.dev}
        </h1>
        <p className="px-4 md:px-0 dark:text-white text-black">
          {staticData.bio}
        </p>
        <p className="px-4 md:px-0 font-bold dark:text-white text-black">
          {staticData.lets}
        </p>
        {/* CALL TO ACTIONS */}

        <motion.div
          className="flex gap-4 justify-center md:justify-start mt-4 "
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
            href={resume}
            id="pdfLink"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-[0.98] transition duration-500 hover:scale-[1.1]"
          >
            <button
              className="dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
                 shadow-[10px_20px_20px_rgba(48,30,103,100%)] dark:shadow-[10px_20px_20px_rgba(255,0,0,30%)] "
            >
              {staticData.actions.view_resume}
            </button>
          </a>
        </motion.div>
      </section>
    </section>
  );
};
