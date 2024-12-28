import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";
import marinPhoto from "../assets/marina-photo.png";
import juxhinaPhoto from "../assets/juxhina-photo.png";
import bernardPhoto from "../assets/bernard-photo.jfif";
import MattPhoto from "../assets/Matt.jpeg";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import { getLang } from "../helpers/localStorageService";

export const Testimonials = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="testimonial"
      className="pt-20 pb-16"
      style={{ direction: getLangDir() }}
    >
      {/* HEADING */}
      <motion.div
        className={`md:w-1/3 text-center ${
          getLang() === "en" ? "md:text-left" : "md:text-right"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 dark:text-[#00FFB9] text-redhot ">
          {staticData.testimonials}
        </p>
        <LineGradient />
        <p className="mt-10 mb-14 text-l text-xl dark:text-[#BEE0D6] text-black">
          {staticData.testimonials_desc}
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-2  py-3 ">
        {/* IMAGE CONTAINER */}
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
          <div className="flex flex-col border-solid rounded-3xl dark:bg-[#F3EFE0] bg-[#CDF0EA] pb-10 text-black ">
            <img
              className="max-w-sm h-auto rounded-b-lg "
              alt=""
              src={bernardPhoto}
            />
            <div className="flex flex-row">
              <p className="font-playfair text-6xl">“</p>
              <p className="text-center text-xl mt-5 ">{staticData.bernard}</p>
            </div>
            <p className="text-center text-l italic mt-5 ">
              {staticData.bernard_comp}
            </p>
          </div>
        </motion.a>
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
          <div className="flex flex-col border-solid rounded-3xl dark:bg-[#BEE0D6] bg-[#C490E4]  pb-10 text-black ">
            <img
              className="max-w-sm h-auto rounded-b-lg "
              alt=""
              src={MattPhoto}
            />
            <div className="flex flex-row">
              <p className="font-playfair text-6xl">“</p>
              <p className="text-center text-xl mt-5 ">{staticData.max}</p>
            </div>
            <p className="text-center text-l italic mt-10 ">
              {staticData.max_comp}
            </p>
          </div>
        </motion.a>

        <motion.a
          className="flex mx-auto flex-col justify-between max-w-xs mb-8"
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
          <div className="flex flex-col border-solid rounded-3xl dark:bg-[#F3EFE0] bg-[#CDF0EA] text-black  pb-10  ">
            <img
              className="max-w-sm h-auto rounded-b-lg "
              alt=""
              src={juxhinaPhoto}
            />
            <div className="flex flex-row">
              <p className="font-playfair text-6xl pl-2">“</p>

              <p className="text-center text-xl mt-5 ">{staticData.juxhina}</p>
            </div>
            <p className="text-center text-l italic mt-5">
              {staticData.juxhina_comp}
            </p>
          </div>
        </motion.a>

        <motion.a
          className="flex mx-auto flex-col justify-between max-w-xs mb-8"
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
          <div className="flex flex-col border-solid rounded-3xl dark:bg-[#BEE0D6] bg-[#C490E4] text-black pb-5 ">
            <img
              className="max-w-sm h-auto rounded-b-lg "
              alt=""
              src={marinPhoto}
            />
            <div className="flex flex-row">
              <p className="font-playfair text-6xl pl-2">“</p>

              <p className="text-center text-xl mt-5 ">{staticData.marina}</p>
            </div>
            <p className="text-center text-l italic mt-5">
              {staticData.marina_comp}
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
