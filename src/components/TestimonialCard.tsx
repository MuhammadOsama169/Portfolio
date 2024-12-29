import React from "react";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { testimonialTypes } from "@/types/TestimonialType";

interface TestimonialCardProps {
  data: testimonialTypes;
}
export const TestimonialCard = ({ data }: TestimonialCardProps) => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <motion.a
      className="flex mx-auto flex-col justify-between max-w-xs mb-8 "
      whileHover={{ scale: 1.05 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="flex flex-col border-solid  rounded-3xl dark:bg-[#F3EFE0] bg-[#CDF0EA] pb-10 text-black ">
        <img
          className="max-w-sm h-[250px] rounded-b-xl "
          alt=""
          src={data.imgSrc}
        />
        <div className="flex flex-row">
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-lg mt-5 ">{staticData[data.bio]}</p>
        </div>
        <p className="text-center text-sm italic mt-5 ">
          {staticData[data.companyInfo]}
        </p>
      </div>
    </motion.a>
  );
};
