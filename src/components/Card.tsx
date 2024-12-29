import React from "react";
import ProfileImg from "../assets/muhammad.jpg";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <div className="bg-white rounded-lg shadow-lg w-80 text-center overflow-hidden py-4">
      {/* Image Container */}
      <section className="flex justify-center">
        <div className="relative ">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-[280px] h-[280px]  py-4 px-8 rounded-xl "
          />
          <div className="absolute top-0 right-10 transform translate-x-[-90%] -translate-y-1/2 w-[150px] h-[150px] border-[5px] border-dashed border-orange-500 rounded-full"></div>
        </div>
      </section>

      {/* Card Content */}
      <div className="pb-5">
        <h2 className="text-black text-xl font-bold font-popins pb-2">
          {staticData.my_name}
        </h2>
        <p className="text-gray-600 text-md  font-popins">
          {staticData.card_bio}
        </p>
      </div>
      {/* SOCIAL MEDIAL SECTION */}
      <motion.div
        className="flex  justify-center "
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
  );
};

export default Card;
